import { ExecArgs } from "@medusajs/framework/types"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import seedTenants from "./seed-tenants"

/**
 * Top-level seed entrypoint. Add product / region / shipping seed steps here
 * as Phase 1 progresses.
 */
export default async function seed(args: ExecArgs) {
  const logger = args.container.resolve(ContainerRegistrationKeys.LOGGER)
  logger.info("Seeding Grafiesto Buy backend...")
  await seedTenants(args)
  logger.info("Seed complete.")
}
