import { model } from "@medusajs/framework/utils"

/**
 * Brand model — represents a tenant in the multi-tenant Grafiesto Buy platform.
 * Each brand maps 1:1 to a Medusa Sales Channel and a Publishable API Key.
 */
const Brand = model.define("brand", {
  id: model.id().primaryKey(),
  slug: model.text().unique(),
  name: model.text(),
  tagline: model.text().nullable(),
  sales_channel_id: model.text().unique(),
  default_region_id: model.text().nullable(),
  storefront_url: model.text().nullable(),
  metadata: model.json().nullable(),
})

export default Brand
