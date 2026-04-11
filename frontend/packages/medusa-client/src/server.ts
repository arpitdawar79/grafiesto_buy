import "server-only"
import Medusa from "@medusajs/js-sdk"

/**
 * Server-side Medusa client. Reads config from env at module init.
 * Each storefront sets:
 *   NEXT_PUBLIC_MEDUSA_BACKEND_URL
 *   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
 */
function readEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

export const medusaServer = new Medusa({
  baseUrl: readEnv("NEXT_PUBLIC_MEDUSA_BACKEND_URL"),
  publishableKey: readEnv("NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY"),
})

export async function listProducts(query: Record<string, unknown> = {}) {
  return medusaServer.store.product.list(query)
}

export async function getProduct(handle: string) {
  const { products } = await medusaServer.store.product.list({ handle, limit: 1 })
  return products[0] ?? null
}

export async function listCollections() {
  return medusaServer.store.collection.list()
}
