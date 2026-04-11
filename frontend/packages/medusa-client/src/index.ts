import Medusa from "@medusajs/js-sdk"

export type CreateClientOptions = {
  baseUrl: string
  publishableKey: string
  debug?: boolean
}

/**
 * Browser-safe Medusa client.
 * Use one instance per app, configured with the brand's publishable key.
 */
export function createMedusaClient({ baseUrl, publishableKey, debug }: CreateClientOptions) {
  return new Medusa({
    baseUrl,
    publishableKey,
    debug: !!debug,
  })
}

export type GrafiestoMedusaClient = ReturnType<typeof createMedusaClient>
export { Medusa }
