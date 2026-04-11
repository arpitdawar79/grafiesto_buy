# Grafiesto Medusa Backend

Single Medusa v2 instance powering all five Grafiesto brands via Sales Channels.

## Local setup

```bash
# 1. Infra
docker compose up -d

# 2. Install
pnpm install

# 3. Env
cp .env.example .env

# 4. Migrate + seed tenants (creates 5 sales channels + publishable keys)
pnpm db:migrate
pnpm seed

# 5. Run
pnpm dev
# Admin: http://localhost:9000/app
# Store API: http://localhost:9000/store
```

The seed output prints one publishable key per brand. Paste each into the matching storefront's `.env` as `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY`.

## Tenant model

| Tenant | Sales Channel | Publishable Key | Storefront |
|---|---|---|---|
| Miramme | `Miramme` | `pk_...` | `frontend/apps/miramme` |
| Rebraciel | `Rebraciel` | `pk_...` | `frontend/apps/rebraciel` |
| Scrabeo | `Scrabeo` | `pk_...` | `frontend/apps/scrabeo` |
| Aamrah | `Aamrah` | `pk_...` | `frontend/apps/aamrah` |
| Rebo Chemicals | `Rebo Chemicals` | `pk_...` | `frontend/apps/rebo-chemicals` |

The `brand` custom module (`src/modules/brand`) stores additional brand metadata and links each brand to its sales channel.
