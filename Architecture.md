# Architecture

High-level architectural decisions for Grafiesto Buy. For diagrams and component-level detail see [`SYSTEM_ARCHITECTURE.md`](./SYSTEM_ARCHITECTURE.md).

## 1. Multi-tenancy model

**Decision:** Single Medusa v2 instance, single database, **Sales Channel per brand**.

We rejected:
- **Database-per-brand** — multiplies migrations, ops, and connection pools by 5; blocks cross-brand reporting
- **Schema-per-brand** — same operational pain, no real isolation gain over sales channels
- **One Medusa instance per brand** — five backends to deploy, secure, upgrade, and observe

Sales channels in Medusa v2 give us:
- **Catalog isolation** — products linked to a sales channel are only visible to storefronts using that channel's publishable API key
- **Stock location scoping** — each brand can use its own warehouse(s)
- **Order attribution** — every order carries its sales channel; finance/reporting trivially split by brand
- **Single admin** — ops can manage all brands from one Medusa Admin

A "tenant" in this codebase = a Sales Channel + Publishable API Key + (optionally) dedicated Stock Locations + a brand config in `packages/brand-config`.

## 2. Storefront topology

**Decision:** Five independent Next.js 14 (App Router) apps in a Turborepo, each with its own deployment.

- Each storefront is a Next.js app under `frontend/apps/<brand>`
- Shared code lives in `frontend/packages/*` (UI, Medusa client, brand config, tooling)
- Each app reads its `BRAND_SLUG` env var, picks up its theme from `@grafiesto/brand-config`, and authenticates to Medusa with its own `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`
- Independent Vercel projects → independent domains, independent rollouts, independent failure domains

Rejected: a single Next app with subpath/subdomain branching. Reason: brand teams need to ship without coordinating, design diverges fast, and a bug in one brand's checkout would block the others.

## 3. UI system

**Decision:** shadcn/ui copied into `packages/ui`, theming via Tailwind CSS variables driven by `brand-config`.

- shadcn primitives are owned by us, not a dependency — easy to fork per brand when needed
- Tailwind preset in `packages/tailwind-config` defines design tokens as CSS variables
- Each brand overrides tokens (colors, fonts, radii, spacing scale) in `brand-config`
- A storefront that needs a unique component (e.g., Rebo Chemicals' MSDS download block) defines it locally — shared package stays small

## 4. Backend choice

**Decision:** Medusa v2.

- Open source, self-host, no per-order fees
- Modular architecture (modules for products, inventory, pricing, orders, payments)
- Native multi-warehouse, multi-currency, multi-region, sales channels
- TypeScript end-to-end — same language as storefronts
- Strong India/global payment + shipping plugin ecosystem (Razorpay, Stripe, Shiprocket adapters available)

## 5. Data ownership boundary

```
Medusa is the system of record for:
  products, variants, prices, inventory, customers, orders,
  carts, returns, refunds, fulfillments, gift cards, discounts.

Storefronts own:
  CMS-like marketing content (collections pages, editorial, lookbooks),
  brand-specific UI state, SEO metadata.
```

CMS content lives either in Next.js MDX files (v1) or a headless CMS (Sanity/Payload, post-MVP).

## 6. Auth & sessions

- **Customer auth:** Medusa v2 customer auth (JWT), per sales channel
- **Admin auth:** Medusa Admin (single login for ops across all brands, role-based)
- **B2B (Rebo Chemicals):** Customer groups + manual approval workflow + tiered pricing rules

## 7. Payments

- **DTC brands (Miramme, Rebraciel, Scrabeo, Aamrah):** Razorpay (primary), Stripe (international)
- **Rebo Chemicals (B2B):** Razorpay + offline bank transfer + invoice-based net terms (post-MVP)
- Each sales channel can have its own enabled payment providers via Medusa region/payment provider config

## 8. Search

- **v1:** Medusa default Postgres-backed product listing + filters
- **v2:** MeiliSearch or Typesense via Medusa search module, per-brand index

## 9. Media & CDN

- Object storage: S3-compatible (Cloudflare R2 or AWS S3)
- Image transforms: Next.js `<Image>` with a custom loader pointed at the storage CDN
- All media is brand-scoped at the path level: `r2://grafiesto-media/<brand-slug>/...`

## 10. Deployment

- **Medusa:** containerized, deployed to Railway / Render / Fly.io / AWS ECS (TBD). One backend, one Postgres, one Redis.
- **Storefronts:** Vercel, one project per brand
- **Infra-as-code:** Terraform (post-MVP)
- **CI/CD:** GitHub Actions — Turborepo remote cache, affected-only builds

## 11. Observability

- **Logs:** structured JSON, shipped to Better Stack / Axiom / Datadog
- **Errors:** Sentry, one project per app (medusa + 5 storefronts)
- **Metrics:** Medusa custom metrics + Vercel Analytics for storefronts
- **Uptime:** Better Stack synthetic checks per brand domain

## 12. Key trade-offs accepted

| Trade-off | Why we accepted it |
|---|---|
| Single backend = single blast radius | Mitigated by HA Postgres, read replicas, Medusa horizontal scaling. The ops simplicity is worth it. |
| Five Next.js apps = five build pipelines | Turborepo remote cache + affected-only builds keep CI fast. Brand independence is the goal. |
| Shared shadcn package = some divergence pain | Components are copied, not depended on — brands can fork freely without breaking siblings. |
| Sales-channel multi-tenancy is "logical", not physical | True isolation isn't required; finance/legal entities are unified under Grafiesto. |

## 13. Out of scope (v1)
- Native mobile apps
- Marketplace / third-party sellers
- Subscription commerce (post-MVP for Aamrah ritual kits)
- Cross-brand unified cart / SSO across storefronts
