# Grafiesto Buy

Multi-tenant ecommerce platform powering five brands on a single Medusa.js v2 backend with five independent Next.js + shadcn/ui storefronts, organized as a Turborepo monorepo.

## Brands

| Brand | Slug | Domain (planned) | Category |
|---|---|---|---|
| Miramme | `miramme` | miramme.com | Luxury fragrances, candles, soaps |
| Rebraciel | `rebraciel` | rebraciel.com | Mid-tier fragrances, candles, soaps |
| Scrabeo | `scrabeo` | scrabeo.com | Home / house fragrances |
| Aamrah | `aamrah` | aamrah.com | Indian ritual fragrances, dhoop, agarbatti |
| Rebo Chemicals | `rebo-chemicals` | rebochemicals.com | Raw material B2B sales |

## Repo Layout

```
grafiesto-buy/
├── apps/
│   └── medusa/                    # Single Medusa v2 backend (multi-tenant)
├── frontend/                      # Turborepo for all storefronts
│   ├── apps/
│   │   ├── miramme/               # Next.js + shadcn storefront
│   │   ├── rebraciel/
│   │   ├── scrabeo/
│   │   ├── aamrah/
│   │   └── rebo-chemicals/        # B2B-flavored storefront
│   └── packages/
│       ├── ui/                    # Shared shadcn primitives
│       ├── medusa-client/         # Typed Medusa JS client + hooks
│       ├── brand-config/          # Per-brand theme + metadata
│       ├── tailwind-config/       # Shared Tailwind preset
│       ├── tsconfig/              # Shared tsconfig presets
│       └── eslint-config/         # Shared ESLint preset
├── Architecture.md
├── FEATURES_ROADMAP.md
├── PROJECT_CONTEXT.md
├── SYSTEM_ARCHITECTURE.md
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+
- Postgres 15+
- Redis 7+
- Docker (optional, for local infra)

### 1. Install
```bash
# Backend
cd apps/medusa && pnpm install

# Frontend monorepo
cd ../../frontend && pnpm install
```

### 2. Backend
```bash
cd apps/medusa
cp .env.example .env
pnpm medusa db:migrate
pnpm seed                  # creates 5 sales channels + publishable keys
pnpm dev                   # http://localhost:9000
```

### 3. Storefronts
```bash
cd frontend
cp .env.example .env
pnpm dev                   # runs all 5 storefronts in parallel via Turbo
# Or one at a time:
pnpm dev --filter=miramme
```

| Storefront | Port |
|---|---|
| miramme | 3000 |
| rebraciel | 3001 |
| scrabeo | 3002 |
| aamrah | 3003 |
| rebo-chemicals | 3004 |

## Documentation
- [`PROJECT_CONTEXT.md`](./PROJECT_CONTEXT.md) — Why this exists, business goals, stakeholders
- [`Architecture.md`](./Architecture.md) — High-level architecture & decisions
- [`SYSTEM_ARCHITECTURE.md`](./SYSTEM_ARCHITECTURE.md) — Detailed component diagrams, data flow, infra
- [`FEATURES_ROADMAP.md`](./FEATURES_ROADMAP.md) — Phased feature delivery plan

## License
Proprietary © Grafiesto.
