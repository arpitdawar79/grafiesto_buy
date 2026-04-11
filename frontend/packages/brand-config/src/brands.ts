import type { BrandConfig, BrandSlug } from "./types"
import { THEMES } from "./themes"

export const BRANDS: Record<BrandSlug, BrandConfig> = {
  miramme: {
    slug: "miramme",
    name: "Miramme",
    tagline: "Luxury fragrances, candles & soaps",
    description:
      "An editorial fragrance house — eaux de parfum, hand-poured candles, and artisan soaps crafted for the senses.",
    domain: "miramme.com",
    defaultLocale: "en-IN",
    defaultCurrency: "inr",
    port: 3000,
    theme: THEMES.miramme,
    features: {
      b2bQuotes: false,
      subscriptions: false,
      bilingual: false,
      gstInvoicing: true,
      wishlist: true,
      giftWrap: true,
    },
    pwa: {
      name: "Miramme — Luxury Fragrance",
      shortName: "Miramme",
      description: "An editorial fragrance house.",
      themeColor: "#14110d",
      backgroundColor: "#f7f2ea",
      appId: "com.grafiesto.miramme",
    },
  },

  rebraciel: {
    slug: "rebraciel",
    name: "Rebraciel",
    tagline: "Modern everyday luxury",
    description:
      "Accessible everyday luxury fragrances, candles and soaps — designed for daily ritual.",
    domain: "rebraciel.com",
    defaultLocale: "en-IN",
    defaultCurrency: "inr",
    port: 3001,
    theme: THEMES.rebraciel,
    features: {
      b2bQuotes: false,
      subscriptions: true,
      bilingual: false,
      gstInvoicing: true,
      wishlist: true,
      giftWrap: true,
    },
    pwa: {
      name: "Rebraciel — Everyday Luxury",
      shortName: "Rebraciel",
      description: "Modern everyday luxury fragrance.",
      themeColor: "#2563eb",
      backgroundColor: "#ffffff",
      appId: "com.grafiesto.rebraciel",
    },
  },

  scrabeo: {
    slug: "scrabeo",
    name: "Scrabeo",
    tagline: "House fragrances for considered interiors",
    description:
      "Reed diffusers, room sprays and refills for homes that take scent seriously.",
    domain: "scrabeo.com",
    defaultLocale: "en-IN",
    defaultCurrency: "inr",
    port: 3002,
    theme: THEMES.scrabeo,
    features: {
      b2bQuotes: false,
      subscriptions: false,
      bilingual: false,
      gstInvoicing: true,
      wishlist: true,
      giftWrap: false,
    },
    pwa: {
      name: "Scrabeo — House Fragrance",
      shortName: "Scrabeo",
      description: "House fragrances for considered interiors.",
      themeColor: "#7a3a18",
      backgroundColor: "#f4ebe0",
      appId: "com.grafiesto.scrabeo",
    },
  },

  aamrah: {
    slug: "aamrah",
    name: "Aamrah",
    tagline: "Indian rituals — dhoop, agarbatti, attars",
    description:
      "Devotional and ritual fragrances rooted in Indian tradition — dhoop, agarbatti, attars, hawan samagri.",
    domain: "aamrah.com",
    defaultLocale: "en-IN",
    defaultCurrency: "inr",
    port: 3003,
    theme: THEMES.aamrah,
    features: {
      b2bQuotes: false,
      subscriptions: true,
      bilingual: true,
      gstInvoicing: true,
      wishlist: true,
      giftWrap: true,
    },
    pwa: {
      name: "Aamrah — Indian Ritual Fragrance",
      shortName: "Aamrah",
      description: "Devotional fragrances rooted in Indian tradition.",
      themeColor: "#a52a1a",
      backgroundColor: "#faf4e6",
      appId: "com.grafiesto.aamrah",
    },
  },

  "rebo-chemicals": {
    slug: "rebo-chemicals",
    name: "Rebo Chemicals",
    tagline: "Wholesale fragrance raw materials",
    description:
      "Aroma chemicals, essential oils, fixatives and bases for fragrance, soap and candle manufacturers.",
    domain: "rebochemicals.com",
    defaultLocale: "en-IN",
    defaultCurrency: "inr",
    port: 3004,
    theme: THEMES["rebo-chemicals"],
    features: {
      b2bQuotes: true,
      subscriptions: false,
      bilingual: false,
      gstInvoicing: true,
      wishlist: false,
      giftWrap: false,
    },
    pwa: {
      name: "Rebo Chemicals — B2B Raw Materials",
      shortName: "Rebo",
      description: "Wholesale fragrance raw materials.",
      themeColor: "#1e293b",
      backgroundColor: "#f8fafc",
      appId: "com.grafiesto.rebochemicals",
    },
  },
}

export function getBrand(slug: BrandSlug): BrandConfig {
  const brand = BRANDS[slug]
  if (!brand) throw new Error(`Unknown brand slug: ${slug}`)
  return brand
}

export const ALL_BRAND_SLUGS: BrandSlug[] = Object.keys(BRANDS) as BrandSlug[]
