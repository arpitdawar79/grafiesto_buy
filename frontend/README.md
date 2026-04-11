# Grafiesto Frontend (Turborepo)

Turborepo containing all five brand storefronts plus shared packages.

```
frontend/
├── apps/
│   ├── miramme/         # port 3000
│   ├── rebraciel/       # port 3001
│   ├── scrabeo/         # port 3002
│   ├── aamrah/          # port 3003
│   └── rebo-chemicals/  # port 3004
└── packages/
    ├── ui/                  # @grafiesto/ui — shadcn primitives + composed components
    ├── medusa-client/       # @grafiesto/medusa-client — typed client + server helpers
    ├── brand-config/        # @grafiesto/brand-config — per-brand themes & metadata
    ├── tailwind-config/     # @grafiesto/tailwind-config — shared Tailwind preset
    ├── tsconfig/            # @grafiesto/tsconfig — shared tsconfig presets
    └── eslint-config/       # @grafiesto/eslint-config — shared flat ESLint config
```

## Commands

```bash
pnpm install
pnpm dev                          # all 5 storefronts in parallel
pnpm dev --filter=miramme         # one storefront
pnpm build --filter=...[origin/main]  # only affected
pnpm lint
pnpm typecheck
```

## Adding a new brand

1. `cp -r apps/miramme apps/<new-brand>` and rename `package.json#name`
2. Add brand entry in `packages/brand-config/src/brands.ts`
3. In `apps/medusa`, add the brand to `src/scripts/seed-tenants.ts` and re-seed
4. Set `NEXT_PUBLIC_BRAND_SLUG` and `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` in the new app's `.env.local`
