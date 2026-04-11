import { getBrand, type BrandSlug } from "@grafiesto/brand-config"

const slug = (process.env.NEXT_PUBLIC_BRAND_SLUG ?? "miramme") as BrandSlug
export const brand = getBrand(slug)
