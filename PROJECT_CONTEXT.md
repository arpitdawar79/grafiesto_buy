# Project Context

## What is Grafiesto Buy?
Grafiesto Buy is the unified commerce platform for Grafiesto's portfolio of five consumer and B2B brands. It consolidates inventory, orders, customers, and operations behind a single Medusa.js v2 backend while presenting each brand to the world through its own independently themed Next.js storefront.

## Why a single backend, multiple storefronts?
Operating five separate ecommerce stacks would multiply cost, fragment data, and slow execution. A single backend gives us:
- One source of truth for products, stock, customers, orders, finance
- One ops team, one set of integrations (payments, shipping, ERP, accounting)
- Cross-brand insights (LTV, repeat behavior, channel performance)
- Faster brand launches — a new brand is a new sales channel + a new storefront, not a new platform

Independent storefronts give us:
- Distinct brand identity, design language, narrative
- Independent SEO domains and content strategies
- Freedom to ship brand-specific UX (e.g., B2B quoting for Rebo Chemicals, ritual storytelling for Aamrah)

## The Brands

### Miramme — Luxury
- **Positioning:** Premium fragrance house. Eaux de parfum, luxury candles, artisan soaps.
- **Audience:** Affluent gifting, self-purchase luxury buyers.
- **Storefront tone:** Editorial, slow, photographic, dark/cream palette.

### Rebraciel — Mid-tier
- **Positioning:** Accessible everyday luxury fragrances, candles, soaps.
- **Audience:** Aspirational mass — daily-use buyers who want premium feel without luxury price.
- **Storefront tone:** Bright, modern, lifestyle-led.

### Scrabeo — Home
- **Positioning:** House fragrances — reed diffusers, room sprays, sachets, refills.
- **Audience:** Home decor enthusiasts, hospitality bulk buyers.
- **Storefront tone:** Warm, interior-magazine, scent-experience focused.

### Aamrah — Indian Rituals
- **Positioning:** Indian ritual & devotional fragrances — dhoop, agarbatti, attars, hawan samagri.
- **Audience:** Indian households, temples, wellness/yoga studios, diaspora.
- **Storefront tone:** Rooted, traditional with modern restraint, multilingual (EN/HI).

### Rebo Chemicals — B2B Raw Materials
- **Positioning:** Wholesale fragrance raw materials — aroma chemicals, essential oils, fixatives, bases.
- **Audience:** Other fragrance manufacturers, indie perfumers, soap/candle makers.
- **Storefront tone:** Industrial, technical, spec-sheet driven. B2B flows: quotes, tiered pricing, GST invoices, MSDS downloads.

## Stakeholders
- **Founders / Brand owners** — Final call on brand identity, pricing, catalog
- **Operations** — Inventory, fulfillment, returns, customer support
- **Marketing** — Per-brand campaigns, content, SEO
- **Engineering** — This repo
- **Finance** — Per-brand P&L, GST/tax compliance, settlements

## Non-goals
- Building a generic SaaS multi-tenant ecommerce platform for third parties
- Migrating away from Medusa
- Native mobile apps in v1 (PWA storefronts only)

## Constraints
- India-first market (INR primary, GST compliant invoicing, COD support, Indian PSPs)
- Must support B2B (Rebo) and DTC flows on the same backend
- Must be cost-efficient to operate at low initial volume but scale to 10x without rewrites
- Each brand must be independently deployable — a Miramme outage cannot take down Aamrah

## Success Metrics
- Time to launch a new brand storefront: < 1 week
- Backend uptime: 99.9%
- Storefront LCP: < 2.0s on 4G
- Single ops team manages all 5 brands without per-brand tooling
