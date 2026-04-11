import { ExecArgs } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
import { createApiKeysWorkflow, createSalesChannelsWorkflow } from "@medusajs/medusa/core-flows"
import { BRAND_MODULE } from "../modules/brand"

type TenantSeed = {
  slug: string
  name: string
  tagline: string
  storefront_url: string
}

const TENANTS: TenantSeed[] = [
  { slug: "miramme",        name: "Miramme",        tagline: "Luxury fragrances, candles, soaps",                  storefront_url: "https://miramme.com" },
  { slug: "rebraciel",      name: "Rebraciel",      tagline: "Modern everyday luxury",                              storefront_url: "https://rebraciel.com" },
  { slug: "scrabeo",        name: "Scrabeo",        tagline: "House fragrances for considered interiors",          storefront_url: "https://scrabeo.com" },
  { slug: "aamrah",         name: "Aamrah",         tagline: "Indian rituals — dhoop, agarbatti, attars",          storefront_url: "https://aamrah.com" },
  { slug: "rebo-chemicals", name: "Rebo Chemicals", tagline: "Wholesale fragrance raw materials",                   storefront_url: "https://rebochemicals.com" },
]

export default async function seedTenants({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const brandService = container.resolve(BRAND_MODULE) as any

  for (const tenant of TENANTS) {
    logger.info(`→ Provisioning tenant: ${tenant.slug}`)

    const { result: salesChannels } = await createSalesChannelsWorkflow(container).run({
      input: {
        salesChannelsData: [{ name: tenant.name, description: tenant.tagline }],
      },
    })
    const salesChannel = salesChannels[0]

    const { result: apiKeys } = await createApiKeysWorkflow(container).run({
      input: {
        api_keys: [
          {
            title: `${tenant.name} Storefront`,
            type: "publishable",
            created_by: "seed",
          },
        ],
      },
    })
    const apiKey = apiKeys[0]

    const link = container.resolve(ContainerRegistrationKeys.LINK)
    await link.create({
      [Modules.API_KEY]: { publishable_key_id: apiKey.id },
      [Modules.SALES_CHANNEL]: { sales_channel_id: salesChannel.id },
    })

    await brandService.createBrands({
      slug: tenant.slug,
      name: tenant.name,
      tagline: tenant.tagline,
      sales_channel_id: salesChannel.id,
      storefront_url: tenant.storefront_url,
    })

    logger.info(`   ✓ ${tenant.name}  sales_channel=${salesChannel.id}  pk=${apiKey.token}`)
  }

  logger.info("Done. Copy the publishable keys above into each storefront's .env as NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY.")
}
