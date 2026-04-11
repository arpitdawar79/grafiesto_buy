import type { MetadataRoute } from "next"
import { buildManifest } from "@grafiesto/pwa"
import { brand } from "@/lib/brand"

export default function manifest(): MetadataRoute.Manifest {
  return buildManifest({
    name: brand.pwa.name,
    shortName: brand.pwa.shortName,
    description: brand.pwa.description,
    themeColor: brand.pwa.themeColor,
    backgroundColor: brand.pwa.backgroundColor,
    lang: brand.defaultLocale,
    categories: brand.features.b2bQuotes ? ["business", "shopping"] : ["shopping", "lifestyle"],
  }) as unknown as MetadataRoute.Manifest
}
