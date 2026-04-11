# Features Roadmap

Phased delivery plan for Grafiesto Buy. Phases are scope-based, not date-based.

## Phase 0 — Foundations (this scaffold)
- [x] Monorepo structure: `apps/medusa` + `frontend/` Turborepo
- [x] Five storefront app shells (Next.js + shadcn) under `frontend/apps`
- [x] Shared packages: `ui`, `medusa-client`, `brand-config`, `tailwind-config`, `tsconfig`, `eslint-config`
- [x] Documentation: PROJECT_CONTEXT, Architecture, SYSTEM_ARCHITECTURE, FEATURES_ROADMAP, README
- [ ] Local docker-compose (Postgres + Redis + MinIO)
- [ ] CI: lint, typecheck, build on PR

## Phase 1 — MVP catalog & checkout (DTC)
**Goal: any one brand can sell a product end-to-end.**

### Backend
- [ ] Medusa v2 install + base modules
- [ ] Custom `brand` module + migration
- [ ] Seed script: 5 sales channels, 5 publishable keys, 5 brand records, 1 region (IN, INR), default stock location
- [ ] Razorpay payment provider configured
- [ ] Manual fulfillment provider
- [ ] Email notifications via Resend (order confirmation, shipping)

### Storefronts (all 5)
- [ ] Home page (hero, featured collections, brand story block)
- [ ] PLP: `/store`, category pages, filters (price, scent family, size)
- [ ] PDP: gallery, variants, add-to-cart, recommendations
- [ ] Cart drawer + cart page
- [ ] Checkout: address → shipping → payment → confirmation
- [ ] Customer auth: signup, login, magic link
- [ ] Account: orders, addresses, profile
- [ ] SEO: per-page metadata, sitemap, robots, OG images
- [ ] Brand theming wired through `brand-config`

### Shared
- [ ] `@grafiesto/ui` shadcn primitives copied in
- [ ] `@grafiesto/medusa-client` typed client + server helpers
- [ ] Webhook → revalidate route handler in each storefront

## Phase 2 — Brand differentiation
**Goal: each brand stops looking like a clone of the others.**

- [ ] Final design tokens per brand (Miramme dark editorial, Rebraciel bright lifestyle, Scrabeo warm interiors, Aamrah rooted/devotional, Rebo industrial)
- [ ] Per-brand fonts loaded via `next/font`
- [ ] Brand-specific landing pages, lookbooks, editorials (MDX)
- [ ] Aamrah: bilingual EN/HI, Devanagari font support
- [ ] Scrabeo: room-by-room scent guide
- [ ] Miramme: gift wrapping option, personalized notes
- [ ] Rebraciel: bundles & subscription teasers

## Phase 3 — Operations & growth
- [ ] Medusa Admin role-based access (per-brand ops users)
- [ ] Discounts, gift cards, promo codes per brand
- [ ] Abandoned cart recovery (Resend / Klaviyo)
- [ ] Reviews & ratings (Trustpilot / native)
- [ ] Wishlist
- [ ] Search: MeiliSearch integration, per-brand index
- [ ] Returns / RMA flow
- [ ] GST-compliant invoice PDFs
- [ ] Shiprocket integration for shipping
- [ ] Analytics: GA4 + Meta + per-brand pixels

## Phase 4 — Rebo Chemicals B2B
- [ ] Customer groups & tiered price lists
- [ ] B2B account application + manual approval workflow
- [ ] Quote request flow (cart → quote → admin approval → order)
- [ ] MSDS / spec sheet uploads on PDP
- [ ] Bulk-order pricing breakpoints
- [ ] Net-terms invoicing (post-paid)
- [ ] Credit limit tracking
- [ ] CSV bulk-order upload

## Phase 5 — Aamrah subscriptions & rituals
- [ ] Subscription module (monthly ritual kits)
- [ ] Festival calendar collections (Diwali, Navratri, etc.)
- [ ] Bundle builder (pick-your-own kit)
- [ ] Loyalty points

## Phase 6 — Scale & resilience
- [ ] Postgres read replicas
- [ ] Redis cache layer in front of Store API
- [ ] OpenTelemetry tracing → Honeycomb
- [ ] Synthetic checkout monitoring per brand
- [ ] Disaster recovery runbook + tested restore
- [ ] Terraform for all infra
- [ ] Per-brand performance budgets enforced in CI (Lighthouse CI)
- [ ] Data warehouse pipeline (Postgres → BigQuery via Fivetran/Airbyte)

## Phase 7 — Long-term bets
- [ ] Headless CMS (Sanity / Payload) for marketing content
- [ ] Native mobile app (React Native, single app with brand selector)
- [ ] Marketplace mode for Rebo (third-party raw material sellers)
- [ ] AI-powered scent quiz / recommendations (Claude API)
- [ ] In-store / POS integration

## Backlog (unprioritized)
- Multi-currency per region (USD, AED, GBP)
- International shipping
- Affiliate program
- Influencer / creator portal
- Wholesale portal for boutique retailers (Miramme, Scrabeo)
- Refill / circular economy program (Scrabeo, Rebraciel)
