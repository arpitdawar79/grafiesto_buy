export type ProductVariant = {
  id: string
  title: string
  sku: string
  /** Price in minor units (paise) */
  price: number
  compareAtPrice?: number
  /** Option values e.g. { size: "50ml", color: "Gold" } */
  options: Record<string, string>
  inventory: number
  image?: string
}

export type ProductImage = {
  id: string
  url: string
  alt: string
  width: number
  height: number
}

export type Product = {
  id: string
  handle: string
  title: string
  subtitle?: string
  description: string
  descriptionHtml?: string
  collectionId: string
  tags: string[]
  images: ProductImage[]
  variants: ProductVariant[]
  rating: number
  reviewCount: number
  badge?: string
  featured?: boolean
  new?: boolean
  bestseller?: boolean
  createdAt: string
}

/* -------------------------------------------------------------------------- */
/*  Sample data — diverse enough to look realistic across all 5 brands        */
/* -------------------------------------------------------------------------- */

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "prod_01",
    handle: "signature-eau-de-parfum",
    title: "Signature Eau de Parfum",
    subtitle: "Oud · Amber · Sandalwood",
    description:
      "A deep, resinous trail that opens with bergamot and pink pepper, settles into a heart of Turkish rose and oud, and dries down to smoky amber and sandalwood. Handcrafted in small batches.",
    descriptionHtml:
      "<p>A deep, resinous trail that opens with <strong>bergamot</strong> and <strong>pink pepper</strong>, settles into a heart of Turkish rose and oud, and dries down to smoky amber and sandalwood.</p><p>Handcrafted in small batches.</p>",
    collectionId: "col_fragrances",
    tags: ["fragrance", "unisex", "oud", "bestseller"],
    images: [
      { id: "img_01a", url: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80", alt: "Signature Eau de Parfum bottle", width: 800, height: 1000 },
      { id: "img_01b", url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800&q=80", alt: "Close-up of bottle cap", width: 800, height: 1000 },
      { id: "img_01c", url: "https://images.unsplash.com/photo-1594035910387-fbd1ca19e tried?w=800&q=80", alt: "Fragrance in setting", width: 800, height: 600 },
    ],
    variants: [
      { id: "var_01a", title: "30ml", sku: "SIG-EDP-30", price: 495000, compareAtPrice: 595000, options: { size: "30ml" }, inventory: 24 },
      { id: "var_01b", title: "50ml", sku: "SIG-EDP-50", price: 895000, compareAtPrice: 995000, options: { size: "50ml" }, inventory: 18 },
      { id: "var_01c", title: "100ml", sku: "SIG-EDP-100", price: 1495000, options: { size: "100ml" }, inventory: 7 },
    ],
    rating: 4.8,
    reviewCount: 142,
    badge: "Bestseller",
    featured: true,
    bestseller: true,
    createdAt: "2024-01-15",
  },
  {
    id: "prod_02",
    handle: "midnight-noir-candle",
    title: "Midnight Noir Candle",
    subtitle: "Black fig · Vetiver · Cedarwood",
    description:
      "A luxurious hand-poured soy candle with notes of black fig, vetiver, and cedarwood. Burns for up to 60 hours with a clean, even pool. Housed in a matte-black ceramic vessel.",
    collectionId: "col_candles",
    tags: ["candle", "soy", "luxury", "new"],
    images: [
      { id: "img_02a", url: "https://images.unsplash.com/photo-1603905179139-db12ab535ca9?w=800&q=80", alt: "Midnight Noir Candle", width: 800, height: 800 },
      { id: "img_02b", url: "https://images.unsplash.com/photo-1603905179124-e8f7ef4bdbf3?w=800&q=80", alt: "Candle burning", width: 800, height: 1000 },
    ],
    variants: [
      { id: "var_02a", title: "180g", sku: "MNC-180", price: 245000, options: { size: "180g" }, inventory: 42 },
      { id: "var_02b", title: "360g", sku: "MNC-360", price: 395000, options: { size: "360g" }, inventory: 15 },
    ],
    rating: 4.9,
    reviewCount: 87,
    badge: "New",
    featured: true,
    new: true,
    createdAt: "2024-06-01",
  },
  {
    id: "prod_03",
    handle: "artisan-soap-neroli",
    title: "Artisan Soap — Neroli",
    subtitle: "Cold-process · Shea butter · Olive oil",
    description:
      "Triple-milled cold-process soap infused with neroli essential oil. Made with organic shea butter and extra-virgin olive oil for a rich, conditioning lather. Each bar is individually wrapped in handmade paper.",
    collectionId: "col_body",
    tags: ["soap", "natural", "neroli", "body"],
    images: [
      { id: "img_03a", url: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800&q=80", alt: "Neroli soap bar", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_03a", title: "110g", sku: "AS-NER-110", price: 85000, options: { size: "110g" }, inventory: 80 },
      { id: "var_03b", title: "Set of 3", sku: "AS-NER-3PK", price: 225000, compareAtPrice: 255000, options: { size: "Set of 3" }, inventory: 30 },
    ],
    rating: 4.7,
    reviewCount: 33,
    featured: true,
    createdAt: "2024-03-10",
  },
  {
    id: "prod_04",
    handle: "reed-diffuser-sandalwood",
    title: "Reed Diffuser — Sandalwood",
    subtitle: "200ml · 8 natural reeds",
    description:
      "A slow-release reed diffuser that fills the room with creamy Indian sandalwood. Lasts approximately 3–4 months. Elegant ribbed glass bottle with natural rattan reeds.",
    collectionId: "col_home",
    tags: ["home", "diffuser", "sandalwood"],
    images: [
      { id: "img_04a", url: "https://images.unsplash.com/photo-1588514912908-8f5891714f8d?w=800&q=80", alt: "Reed diffuser", width: 800, height: 1000 },
    ],
    variants: [
      { id: "var_04a", title: "200ml", sku: "RD-SAN-200", price: 345000, options: { size: "200ml" }, inventory: 25 },
      { id: "var_04b", title: "Refill 200ml", sku: "RD-SAN-REF", price: 195000, options: { size: "Refill" }, inventory: 50 },
    ],
    rating: 4.6,
    reviewCount: 56,
    createdAt: "2024-02-20",
  },
  {
    id: "prod_05",
    handle: "rose-attar",
    title: "Pure Rose Attar",
    subtitle: "Kannauj · Steam-distilled",
    description:
      "Authentic Kannauj rose attar, steam-distilled using the traditional deg-bhapka method. Aged in sandalwood oil base. A single drop is enough for all-day wear.",
    collectionId: "col_fragrances",
    tags: ["attar", "rose", "traditional", "indian"],
    images: [
      { id: "img_05a", url: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80", alt: "Rose attar bottle", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_05a", title: "3ml", sku: "RA-3", price: 195000, options: { size: "3ml" }, inventory: 12 },
      { id: "var_05b", title: "6ml", sku: "RA-6", price: 345000, options: { size: "6ml" }, inventory: 8 },
      { id: "var_05c", title: "12ml", sku: "RA-12", price: 595000, options: { size: "12ml" }, inventory: 4 },
    ],
    rating: 4.9,
    reviewCount: 210,
    badge: "Heritage",
    featured: true,
    bestseller: true,
    createdAt: "2023-11-01",
  },
  {
    id: "prod_06",
    handle: "dhoop-sticks-chandan",
    title: "Dhoop Sticks — Chandan",
    subtitle: "Hand-rolled · 20 sticks",
    description:
      "Premium hand-rolled dhoop sticks made with pure sandalwood paste, charcoal-free. Each stick burns for approximately 45 minutes with a clean, calming fragrance ideal for meditation and pooja.",
    collectionId: "col_rituals",
    tags: ["dhoop", "chandan", "ritual", "pooja"],
    images: [
      { id: "img_06a", url: "https://images.unsplash.com/photo-1609607847923-a0ef1ab0d3c1?w=800&q=80", alt: "Chandan dhoop sticks", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_06a", title: "20 Sticks", sku: "DS-CH-20", price: 35000, options: { pack: "20 Sticks" }, inventory: 200 },
      { id: "var_06b", title: "50 Sticks", sku: "DS-CH-50", price: 75000, compareAtPrice: 87500, options: { pack: "50 Sticks" }, inventory: 100 },
      { id: "var_06c", title: "100 Sticks", sku: "DS-CH-100", price: 125000, compareAtPrice: 175000, options: { pack: "100 Sticks" }, inventory: 60 },
    ],
    rating: 4.5,
    reviewCount: 320,
    bestseller: true,
    createdAt: "2023-09-15",
  },
  {
    id: "prod_07",
    handle: "room-spray-lavender",
    title: "Room Spray — French Lavender",
    subtitle: "100ml · Fine mist nozzle",
    description:
      "A sophisticated room spray featuring French lavender from Provence, blended with white tea and a whisper of musk. Transforms any space instantly.",
    collectionId: "col_home",
    tags: ["home", "spray", "lavender"],
    images: [
      { id: "img_07a", url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80", alt: "Room spray bottle", width: 800, height: 1000 },
    ],
    variants: [
      { id: "var_07a", title: "100ml", sku: "RS-LAV-100", price: 165000, options: { size: "100ml" }, inventory: 60 },
    ],
    rating: 4.4,
    reviewCount: 45,
    createdAt: "2024-04-05",
  },
  {
    id: "prod_08",
    handle: "luxury-gift-set",
    title: "Luxury Gift Set — Noir Collection",
    subtitle: "Parfum · Candle · Soap",
    description:
      "The ultimate indulgence. Featuring the Signature EDP (30ml), Midnight Noir Candle (180g), and Artisan Neroli Soap — beautifully presented in a handcrafted wooden box with magnetic closure.",
    collectionId: "col_gifts",
    tags: ["gift", "set", "luxury", "noir"],
    images: [
      { id: "img_08a", url: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80", alt: "Luxury gift set box", width: 800, height: 600 },
      { id: "img_08b", url: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80", alt: "Gift set contents", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_08a", title: "Standard", sku: "GS-NOIR", price: 695000, compareAtPrice: 825000, options: { type: "Standard" }, inventory: 12 },
    ],
    rating: 5.0,
    reviewCount: 18,
    badge: "Limited",
    featured: true,
    new: true,
    createdAt: "2024-07-01",
  },
  {
    id: "prod_09",
    handle: "body-oil-jasmine",
    title: "Body Oil — Jasmine Sambac",
    subtitle: "100ml · Cold-pressed base",
    description:
      "A nourishing body oil infused with jasmine sambac absolute. Cold-pressed jojoba, argan, and sweet almond oils leave skin luminous without greasiness. Doubles as a subtle fragrance.",
    collectionId: "col_body",
    tags: ["body", "oil", "jasmine", "skincare"],
    images: [
      { id: "img_09a", url: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80", alt: "Jasmine body oil", width: 800, height: 1000 },
    ],
    variants: [
      { id: "var_09a", title: "50ml", sku: "BO-JAS-50", price: 275000, options: { size: "50ml" }, inventory: 35 },
      { id: "var_09b", title: "100ml", sku: "BO-JAS-100", price: 475000, options: { size: "100ml" }, inventory: 20 },
    ],
    rating: 4.7,
    reviewCount: 63,
    createdAt: "2024-05-12",
  },
  {
    id: "prod_10",
    handle: "agarbatti-mogra-premium",
    title: "Agarbatti — Mogra Premium",
    subtitle: "Hand-dipped · 40 sticks",
    description:
      "Premium hand-dipped incense sticks with real mogra (jasmine) flower extracts. Charcoal-free bamboo core with a burn time of approximately 30 minutes per stick. Perfect for daily pooja or meditation.",
    collectionId: "col_rituals",
    tags: ["agarbatti", "incense", "mogra", "ritual"],
    images: [
      { id: "img_10a", url: "https://images.unsplash.com/photo-1603905179124-e8f7ef4bdbf3?w=800&q=80", alt: "Mogra agarbatti", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_10a", title: "40 Sticks", sku: "AG-MOG-40", price: 25000, options: { pack: "40 Sticks" }, inventory: 500 },
      { id: "var_10b", title: "Pack of 6", sku: "AG-MOG-6PK", price: 135000, compareAtPrice: 150000, options: { pack: "Pack of 6" }, inventory: 100 },
    ],
    rating: 4.3,
    reviewCount: 480,
    bestseller: true,
    createdAt: "2023-06-20",
  },
  {
    id: "prod_11",
    handle: "linalool-synthetic",
    title: "Linalool (Synthetic)",
    subtitle: "CAS 78-70-6 · 99% Pure",
    description:
      "High-purity synthetic linalool, widely used as a top-note modifier and fixative in fine fragrance, soap, and candle manufacturing. Supplied in amber glass or HDPE depending on quantity.",
    collectionId: "col_chemicals",
    tags: ["chemical", "aroma", "linalool", "b2b"],
    images: [
      { id: "img_11a", url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80", alt: "Linalool chemical bottle", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_11a", title: "500ml", sku: "LIN-500", price: 120000, options: { size: "500ml" }, inventory: 150 },
      { id: "var_11b", title: "1 Litre", sku: "LIN-1L", price: 210000, options: { size: "1L" }, inventory: 80 },
      { id: "var_11c", title: "5 Litres", sku: "LIN-5L", price: 900000, options: { size: "5L" }, inventory: 30 },
      { id: "var_11d", title: "25 Litres", sku: "LIN-25L", price: 3800000, options: { size: "25L" }, inventory: 10 },
    ],
    rating: 4.6,
    reviewCount: 28,
    createdAt: "2023-01-10",
  },
  {
    id: "prod_12",
    handle: "dipropylene-glycol",
    title: "Dipropylene Glycol (DPG)",
    subtitle: "CAS 25265-71-8 · Fragrance grade",
    description:
      "Fragrance-grade DPG used as a solvent and diluent in perfumery. Low odour, excellent solubility characteristics. Meets IFRA specifications. Available in 1L to 200L quantities.",
    collectionId: "col_chemicals",
    tags: ["chemical", "solvent", "dpg", "b2b"],
    images: [
      { id: "img_12a", url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80", alt: "DPG container", width: 800, height: 800 },
    ],
    variants: [
      { id: "var_12a", title: "1 Litre", sku: "DPG-1L", price: 45000, options: { size: "1L" }, inventory: 200 },
      { id: "var_12b", title: "5 Litres", sku: "DPG-5L", price: 185000, options: { size: "5L" }, inventory: 100 },
      { id: "var_12c", title: "25 Litres", sku: "DPG-25L", price: 750000, options: { size: "25L" }, inventory: 40 },
      { id: "var_12d", title: "200 Litres", sku: "DPG-200L", price: 4500000, options: { size: "200L" }, inventory: 8 },
    ],
    rating: 4.8,
    reviewCount: 15,
    createdAt: "2023-03-01",
  },
]

export function getProductByHandle(handle: string): Product | undefined {
  return SAMPLE_PRODUCTS.find((p) => p.handle === handle)
}

export function getProductById(id: string): Product | undefined {
  return SAMPLE_PRODUCTS.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return SAMPLE_PRODUCTS.filter((p) => p.featured)
}

export function getProductsByCollection(collectionId: string): Product[] {
  return SAMPLE_PRODUCTS.filter((p) => p.collectionId === collectionId)
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase()
  return SAMPLE_PRODUCTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.subtitle?.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  )
}

export function getBestSellers(): Product[] {
  return SAMPLE_PRODUCTS.filter((p) => p.bestseller)
}

export function getNewArrivals(): Product[] {
  return [...SAMPLE_PRODUCTS].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 6)
}
