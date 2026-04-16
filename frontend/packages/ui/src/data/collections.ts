export type Collection = {
  id: string
  handle: string
  title: string
  subtitle?: string
  description: string
  image: string
  productCount: number
  featured?: boolean
}

export const SAMPLE_COLLECTIONS: Collection[] = [
  {
    id: "col_fragrances",
    handle: "fragrances",
    title: "Fragrances",
    subtitle: "Eau de Parfum · Attars · Body Mists",
    description: "From heritage attars to contemporary eaux de parfum — scents for every ritual and occasion.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    productCount: 24,
    featured: true,
  },
  {
    id: "col_candles",
    handle: "candles",
    title: "Candles",
    subtitle: "Soy · Beeswax · Coconut",
    description: "Hand-poured candles in curated scents. Each vessel is designed to live beautifully long after the wax is gone.",
    image: "https://images.unsplash.com/photo-1603905179139-db12ab535ca9?w=800&q=80",
    productCount: 16,
    featured: true,
  },
  {
    id: "col_body",
    handle: "body",
    title: "Body & Bath",
    subtitle: "Soaps · Oils · Scrubs",
    description: "Natural body care crafted with botanical oils, butters, and essential fragrances.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&q=80",
    productCount: 12,
    featured: true,
  },
  {
    id: "col_home",
    handle: "home",
    title: "Home Fragrance",
    subtitle: "Diffusers · Room Sprays · Potpourri",
    description: "Scent your space with reed diffusers, room sprays, and curated potpourri blends.",
    image: "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=800&q=80",
    productCount: 18,
    featured: true,
  },
  {
    id: "col_rituals",
    handle: "rituals",
    title: "Rituals & Devotion",
    subtitle: "Dhoop · Agarbatti · Hawan",
    description: "Handcrafted incense and ritual fragrances rooted in Indian spiritual tradition.",
    image: "https://images.unsplash.com/photo-1609607847923-a0ef1ab0d3c1?w=800&q=80",
    productCount: 22,
  },
  {
    id: "col_gifts",
    handle: "gifts",
    title: "Gift Sets",
    subtitle: "Curated · Gift-wrapped · Personalised",
    description: "Thoughtfully curated sets in beautiful packaging — perfect for any occasion.",
    image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80",
    productCount: 8,
  },
  {
    id: "col_chemicals",
    handle: "raw-materials",
    title: "Raw Materials",
    subtitle: "Aroma chemicals · Solvents · Bases",
    description: "Fragrance-grade aroma chemicals, essential oils, solvents and bases for manufacturers.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    productCount: 150,
  },
]

export function getCollectionByHandle(handle: string): Collection | undefined {
  return SAMPLE_COLLECTIONS.find((c) => c.handle === handle)
}

export function getFeaturedCollections(): Collection[] {
  return SAMPLE_COLLECTIONS.filter((c) => c.featured)
}
