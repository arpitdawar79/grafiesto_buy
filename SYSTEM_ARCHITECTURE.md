# System Architecture

Component-level view of Grafiesto Buy. For high-level decisions and rationale see [`Architecture.md`](./Architecture.md).

## 1. System diagram

```
                                ┌─────────────────────────────────────────────┐
                                │                  END USERS                  │
                                │  DTC shoppers · B2B buyers · Ops · Admins   │
                                └──┬──────────┬──────────┬──────────┬─────────┘
                                   │          │          │          │
              ┌────────────────────┴───┐  ┌───┴────┐ ┌───┴────┐ ┌───┴────┐
              │   Brand Storefronts    │  │  ...   │ │  ...   │ │ Admin  │
              │  (Next.js + shadcn)    │  │        │ │        │ │  UI    │
              │  miramme.com           │  │        │ │        │ │        │
              │  rebraciel.com         │  │        │ │        │ │        │
              │  scrabeo.com           │  │        │ │        │ │        │
              │  aamrah.com            │  │        │ │        │ │        │
              │  rebochemicals.com     │  │        │ │        │ │        │
              └───────────┬────────────┘  └────────┘ └────────┘ └───┬────┘
                          │ HTTPS (Store API + publishable key)        │ Admin API
                          │                                            │
                          ▼                                            ▼
              ┌────────────────────────────────────────────────────────────┐
              │                    MEDUSA v2 BACKEND                       │
              │  ┌────────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐  │
              │  │ Store API  │ │Admin API │ │ Workers  │ │  Modules   │  │
              │  └────────────┘ └──────────┘ └──────────┘ └────────────┘  │
              │   Sales Channels:                                          │
              │   ▸ miramme   ▸ rebraciel  ▸ scrabeo                       │
              │   ▸ aamrah    ▸ rebo-chemicals                             │
              └───┬────────────┬─────────────┬───────────┬──────────┬─────┘
                  │            │             │           │          │
                  ▼            ▼             ▼           ▼          ▼
            ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌────────┐ ┌─────────┐
            │ Postgres │ │  Redis   │ │ S3 / R2   │ │Razorpay│ │Shiprocket│
            │ (primary)│ │ (cache + │ │  (media)  │ │ Stripe │ │  / etc  │
            │          │ │  queues) │ │           │ │ (PSPs) │ │         │
            └──────────┘ └──────────┘ └───────────┘ └────────┘ └─────────┘
```

## 2. Component inventory

### 2.1 Medusa backend (`apps/medusa`)
- **Runtime:** Node 20, TypeScript, Medusa v2
- **HTTP surface:**
  - `Store API` — used by storefronts, scoped by publishable API key → sales channel
  - `Admin API` — used by Medusa Admin UI
- **Background workers:** order events, email, webhook fan-out, inventory sync
- **Modules enabled:**
  - `@medusajs/product`, `@medusajs/pricing`, `@medusajs/inventory`, `@medusajs/stock-location`
  - `@medusajs/cart`, `@medusajs/order`, `@medusajs/payment`, `@medusajs/fulfillment`
  - `@medusajs/customer`, `@medusajs/sales-channel`, `@medusajs/api-key`, `@medusajs/notification`
  - Custom: `brand` module (extends product with brand metadata, denormalizes for fast filtering)
- **Custom workflows:**
  - `create-tenant-brand` — provisions sales channel + publishable key + stock location + region defaults
  - `b2b-quote-request` — Rebo Chemicals quote workflow
  - `gst-invoice` — generates GST-compliant invoices for INR orders

### 2.2 Storefronts (`frontend/apps/<brand>`)
Each storefront is a Next.js 14 App Router app:
- **Routes (DTC):** `/`, `/store`, `/products/[handle]`, `/categories/[...slug]`, `/collections/[handle]`, `/cart`, `/checkout`, `/account/*`, `/orders/[id]`
- **Routes (Rebo Chemicals B2B adds):** `/quote`, `/account/quotes`, `/account/invoices`, `/products/[handle]/specs`
- **Data fetching:** Server Components → `@grafiesto/medusa-client` → Medusa Store API
- **Auth:** httpOnly session cookie issued after Medusa customer login
- **State:** Zustand for cart UI state, server state from Medusa via React Server Components + revalidation tags
- **Theming:** Tailwind CSS variables, set from `@grafiesto/brand-config` per brand at the root layout

### 2.3 Shared packages (`frontend/packages/*`)
| Package | Purpose |
|---|---|
| `@grafiesto/ui` | shadcn/ui primitives + composed Grafiesto patterns (ProductCard, PriceTag, AddToCartButton, etc.) |
| `@grafiesto/medusa-client` | Typed wrapper around `@medusajs/js-sdk` with hooks (`useCart`, `useProduct`, `useCheckout`) and server helpers (`getProduct`, `listProducts`) |
| `@grafiesto/brand-config` | Per-brand metadata: name, slug, logo, colors, fonts, locale, currency, payment providers, feature flags |
| `@grafiesto/tailwind-config` | Shared Tailwind preset that consumes brand tokens |
| `@grafiesto/tsconfig` | `base.json`, `nextjs.json`, `react-library.json` |
| `@grafiesto/eslint-config` | Shared ESLint flat config |

## 3. Multi-tenant request flow

```
1. User visits miramme.com
2. Next.js renders RSC; calls Medusa Store API:
     GET /store/products
     headers:
       x-publishable-api-key: pk_miramme_xxx
3. Medusa resolves the publishable key → sales channel `miramme`
4. Product query is filtered to products linked to sales channel `miramme`
5. Inventory is resolved against stock locations linked to that sales channel
6. Response returned; RSC streams HTML to browser
```

The publishable key is the tenant boundary. A storefront cannot read another brand's catalog because its key is scoped server-side in Medusa.

## 4. Data model extensions

### Brand (custom module, extends Product)
```ts
// apps/medusa/src/modules/brand/models/brand.ts
Brand {
  id: string
  slug: 'miramme' | 'rebraciel' | 'scrabeo' | 'aamrah' | 'rebo-chemicals'
  name: string
  sales_channel_id: string
  default_region_id: string
  metadata: Record<string, unknown>
}
```
Each Product is linked to exactly one Brand. The link is denormalized onto the product for query speed.

### Sales channel ↔ brand mapping
1:1. Created by the `create-tenant-brand` workflow during setup/seed.

### B2B extensions (Rebo Chemicals)
- `customer.metadata.company_gst`
- `customer.metadata.tier` (`bronze` | `silver` | `gold`)
- Price lists scoped to customer groups
- Custom `quote` table (separate from `cart`) for the quote-then-order flow

## 5. Storefront → Backend contract

| Concern | Mechanism |
|---|---|
| Tenant identification | `x-publishable-api-key` header |
| Region/currency | `region_id` query param or cart-bound region |
| Customer session | httpOnly cookie holding Medusa customer JWT |
| Cart persistence | `cart_id` httpOnly cookie |
| Cache invalidation | Next.js `revalidateTag('products')` triggered by Medusa webhooks |

## 6. Webhooks (Medusa → Storefronts)

```
Medusa subscriber  →  POST https://<brand-domain>/api/revalidate
                      body: { tags: ['products', 'product:<handle>'] }
                      header: x-grafiesto-signature: <hmac>
```
Each storefront verifies the HMAC and calls `revalidateTag()`. Brand routing is determined by which sales channel the event belongs to.

## 7. Infrastructure

### 7.1 Environments
- `local` — docker-compose: Postgres, Redis, Medusa, MinIO (S3 stand-in)
- `staging` — mirrors prod, seeded with synthetic data
- `production`

### 7.2 Production topology (initial)
- **Medusa:** 2× containers behind a load balancer, autoscale on CPU
- **Workers:** 1–2× container(s) consuming Redis-backed queues
- **Postgres:** managed (Neon / Supabase / RDS), point-in-time recovery, daily backups
- **Redis:** managed (Upstash / ElastiCache)
- **Object storage:** Cloudflare R2 (no egress fees)
- **Storefronts:** Vercel, one project per brand, ISR + on-demand revalidation
- **DNS / CDN:** Cloudflare in front of everything

### 7.3 Secrets
- 1Password / Doppler / AWS Secrets Manager (TBD)
- Per-environment, never committed
- Storefronts get only public publishable keys + public Sentry DSNs at build time

## 8. Security

- All HTTP is HTTPS, HSTS preloaded
- Medusa Admin protected by IP allowlist + 2FA
- Publishable keys are public by design but scoped to read-only Store API
- Rate limiting at Cloudflare (per IP) + Medusa (per key)
- PII (customer addresses, phone) encrypted at rest at the DB level
- PCI: payment data never touches our servers — handled by Razorpay/Stripe iframes/redirects
- Webhook endpoints HMAC-signed
- Dependabot + Snyk on the repo

## 9. Observability stack

| Layer | Tool |
|---|---|
| Errors | Sentry (1 project per app) |
| Logs | Axiom / Better Stack (structured JSON) |
| Metrics | Prometheus exporter on Medusa, Vercel Analytics on storefronts |
| Tracing | OpenTelemetry → Honeycomb (post-MVP) |
| Uptime | Better Stack synthetic checks per brand domain + checkout flow |
| Alerts | PagerDuty / Better Stack On-call |

## 10. CI/CD

```
push → GitHub Actions
  ├─ lint + typecheck (turbo run lint typecheck --filter=...[origin/main])
  ├─ unit tests
  ├─ build affected (turbo run build --filter=...[origin/main])
  ├─ medusa: build container, push to registry
  └─ storefronts: vercel deploy (per affected app)
```
Turborepo remote cache (Vercel) ensures unchanged packages are not rebuilt.

## 11. Local dev experience

```bash
# Root
pnpm -w dev               # boots medusa + all storefronts via turbo
pnpm -w dev --filter=miramme   # just one
```
Docker compose under `apps/medusa/docker/` brings up Postgres, Redis, MinIO.

## 12. Scaling path

| Bottleneck | Mitigation |
|---|---|
| Postgres CPU | Read replicas; Medusa already supports `DATABASE_REPLICA_URL` |
| Medusa request latency | Horizontal scale, Redis cache layer |
| Storefront cold start | Vercel ISR + edge caching |
| Search slow / weak | Add MeiliSearch / Typesense module |
| Cross-brand reporting heavy | Replicate to a warehouse (BigQuery / Snowflake) via Fivetran |
| One brand outgrowing the rest | Split its sales channel into a dedicated Medusa instance — minimal storefront changes |
