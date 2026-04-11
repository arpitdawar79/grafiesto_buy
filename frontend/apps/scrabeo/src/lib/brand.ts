import { getBrand, type BrandSlug } from "@grafiesto/brand-config"

const slug = (process.env.NEXT_PUBLIC_BRAND_SLUG ?? "scrabeo") as BrandSlug
export const brand = getBrand(slug)
