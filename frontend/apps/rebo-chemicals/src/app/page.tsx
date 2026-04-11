import { Sparkles } from "lucide-react"
import {
  Badge,
  Button,
  ProductCard,
} from "@grafiesto/ui"
import { brand } from "@/lib/brand"

const DEMO_PRODUCTS = [
  {
    id: "1",
    title: "Signature Eau de Parfum — 50ml",
    subtitle: "Oud · Amber",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    price: 895000,
    compareAt: 995000,
    rating: 4.8,
    reviewCount: 142,
    badge: "New",
  },
  {
    id: "2",
    title: "Hand-poured Candle — Vetiver",
    subtitle: "Coconut wax · 240g",
    image: "https://images.unsplash.com/photo-1602874801006-5dec0c9c44c0?w=800",
    price: 245000,
    rating: 4.6,
    reviewCount: 87,
  },
  {
    id: "3",
    title: "Artisan Soap Bar — Neroli",
    subtitle: "Cold-process · 110g",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=800",
    price: 85000,
    rating: 4.9,
    reviewCount: 33,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="container flex flex-col items-center gap-6 py-16 text-center md:py-28">
        <Badge variant="brand" className="uppercase tracking-widest">
          <Sparkles className="mr-1 h-3 w-3" />
          {brand.pwa.shortName} · {brand.theme.personality.vibe}
        </Badge>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{brand.tagline}</p>
        <h1 className="font-display text-5xl font-light leading-tight md:text-7xl">{brand.name}</h1>
        <p className="max-w-xl text-base text-muted-foreground md:text-lg">{brand.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Shop the collection</Button>
          <Button size="lg" variant="outline">
            Our story
          </Button>
        </div>
      </section>

      <section className="container">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-display text-3xl font-light tracking-tight">Featured</h2>
          <a href="/shop" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            Browse all
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {DEMO_PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} href={`/product/${p.id}`} />
          ))}
        </div>
      </section>
    </div>
  )
}
