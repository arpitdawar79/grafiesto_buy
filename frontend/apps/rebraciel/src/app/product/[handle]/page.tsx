"use client"
import * as React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Check,
  ZoomIn,
} from "lucide-react"
import {
  Button,
  Badge,
  Separator,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AspectRatio,
  Avatar,
  AvatarFallback,
  ProductCard,
  PriceTag,
  RatingStars,
  VariantSelector,
  QuantityStepper,
  AddToCartButton,
  getProductByHandle,
  SAMPLE_PRODUCTS,
  getReviewsByProduct,
  type VariantOption,
  // motion
  FadeIn,
  BlurIn,
  StaggerReveal,
  Magnetic,
  Parallax,
  CountUp,
  TextReveal,
  // visuals
  SpotlightCard,
  GlowCard,
  TextShimmer,
  Marquee,
  MarqueeItem,
  // 3D
  ProductScene,
} from "@grafiesto/ui"
import { brand } from "@/lib/brand"

export default function ProductPage() {
  const params = useParams()
  const handle = params.handle as string
  const product = getProductByHandle(handle)

  const [selectedVariantIdx, setSelectedVariantIdx] = React.useState(0)
  const [quantity, setQuantity] = React.useState(1)
  const [activeImage, setActiveImage] = React.useState(0)
  const [wishlisted, setWishlisted] = React.useState(false)
  const [show3D, setShow3D] = React.useState(false)

  if (!product) {
    return (
      <div className="container flex min-h-[60vh] items-center justify-center pt-36">
        <BlurIn>
          <div className="text-center">
            <h1 className="font-display text-3xl">Product not found</h1>
            <p className="mt-2 text-muted-foreground">This product may have been removed.</p>
            <Button className="mt-6" asChild><Link href="/shop">Back to shop</Link></Button>
          </div>
        </BlurIn>
      </div>
    )
  }

  const variant = product.variants[selectedVariantIdx]
  const reviews = getReviewsByProduct(product.id)
  const recommended = SAMPLE_PRODUCTS.filter((p) => p.id !== product.id && p.collectionId === product.collectionId).slice(0, 4)
  const alsoLiked = SAMPLE_PRODUCTS.filter((p) => p.id !== product.id && p.featured).slice(0, 4)

  const optionKeys = Object.keys(product.variants[0]?.options ?? {})
  const variantOptions: VariantOption[] = product.variants.map((v, i) => ({
    value: String(i),
    label: Object.values(v.options).join(" / "),
    outOfStock: v.inventory === 0,
  }))

  const ratingBreakdown = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: reviews.filter((r) => r.rating === stars).length,
    pct: reviews.length > 0 ? (reviews.filter((r) => r.rating === stars).length / reviews.length) * 100 : 0,
  }))

  return (
    <div className="pt-28 md:pt-36">
      {/* Breadcrumb */}
      <FadeIn className="container mb-6">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <span className="line-clamp-1 text-foreground">{product.title}</span>
        </nav>
      </FadeIn>

      {/* ─── Main PDP ─────────────────────────────────────── */}
      <div className="container grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left — Gallery */}
        <div className="space-y-3">
          <FadeIn direction="left">
            <div className="group relative overflow-hidden rounded-xl bg-muted">
              {show3D ? (
                <div className="aspect-[3/4]">
                  <ProductScene imageUrl={product.images[activeImage]?.url ?? ""} height="100%" />
                </div>
              ) : (
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={product.images[activeImage]?.url}
                    alt={product.images[activeImage]?.alt ?? product.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </AspectRatio>
              )}
              {product.images.length > 1 && !show3D && (
                <>
                  <button
                    onClick={() => setActiveImage((p) => (p === 0 ? product.images.length - 1 : p - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 active:scale-90"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setActiveImage((p) => (p === product.images.length - 1 ? 0 : p + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 active:scale-90"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
              {/* Badge + 3D toggle */}
              <div className="absolute left-4 top-4 flex gap-2">
                {product.badge && <Badge variant="brand">{product.badge}</Badge>}
              </div>
              <button
                onClick={() => setShow3D(!show3D)}
                className="absolute right-4 top-4 flex h-9 items-center gap-1.5 rounded-full bg-background/80 px-3 text-xs font-medium backdrop-blur-sm transition-colors hover:bg-background"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                {show3D ? "Photos" : "3D View"}
              </button>
            </div>
          </FadeIn>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <FadeIn delay={0.2}>
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => { setActiveImage(i); setShow3D(false) }}
                    className={`flex-none overflow-hidden rounded-lg border-2 transition-all ${
                      activeImage === i && !show3D ? "border-ring ring-2 ring-ring/20" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    style={{ width: 72, height: 72 }}
                  >
                    <img src={img.url} alt={img.alt} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </FadeIn>
          )}
        </div>

        {/* Right — Product info */}
        <div className="flex flex-col gap-6 md:sticky md:top-36 md:self-start">
          <FadeIn direction="right" delay={0.1}>
            {product.subtitle && (
              <TextShimmer className="text-xs font-semibold uppercase tracking-[0.2em]" as="p">
                {product.subtitle}
              </TextShimmer>
            )}
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <h1 className="font-display text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
              {product.title}
            </h1>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div className="flex items-center gap-3">
              <RatingStars value={product.rating} showCount count={product.reviewCount} />
              <a href="#reviews" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
                {product.reviewCount} reviews
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.35}>
            <PriceTag amount={variant.price} compareAt={variant.compareAtPrice} size="xl" />
          </FadeIn>

          <Separator />

          {/* Variants */}
          {product.variants.length > 1 && (
            <FadeIn direction="right" delay={0.4}>
              <VariantSelector
                label={optionKeys[0] ? optionKeys[0].charAt(0).toUpperCase() + optionKeys[0].slice(1) : "Option"}
                options={variantOptions}
                value={String(selectedVariantIdx)}
                onChange={(v) => setSelectedVariantIdx(Number(v))}
                type="pill"
              />
            </FadeIn>
          )}

          {/* Quantity */}
          <FadeIn direction="right" delay={0.45}>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <QuantityStepper value={quantity} onChange={setQuantity} max={variant.inventory} />
              {variant.inventory <= 5 && variant.inventory > 0 && (
                <span className="text-xs font-medium text-warning">Only {variant.inventory} left</span>
              )}
            </div>
          </FadeIn>

          {/* Actions */}
          <FadeIn direction="right" delay={0.5}>
            <div className="flex gap-3">
              <Magnetic strength={0.1} className="flex-1">
                <AddToCartButton
                  className="w-full"
                  onAdd={async () => { await new Promise((r) => setTimeout(r, 800)) }}
                  disabled={variant.inventory === 0}
                  label={variant.inventory === 0 ? "Sold out" : "Add to bag"}
                />
              </Magnetic>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setWishlisted(!wishlisted)}
                className="w-12 flex-none p-0"
              >
                <Heart className={`h-5 w-5 transition-all ${wishlisted ? "fill-destructive text-destructive scale-110" : ""}`} />
              </Button>
              <Button variant="outline" size="lg" className="w-12 flex-none p-0">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </FadeIn>

          {/* Trust */}
          <FadeIn direction="right" delay={0.55}>
            <SpotlightCard className="!p-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Truck, label: "Free delivery", sub: "Orders over ₹999" },
                  { icon: RotateCcw, label: "Easy returns", sub: "30-day policy" },
                  { icon: Shield, label: "Secure pay", sub: "UPI, cards, COD" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-1 text-center">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <span className="text-xs font-medium">{label}</span>
                    <span className="text-[10px] text-muted-foreground">{sub}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </FadeIn>

          <Separator />

          {/* Accordion */}
          <FadeIn direction="right" delay={0.6}>
            <Accordion type="multiple" defaultValue={["description"]}>
              <AccordionItem value="description">
                <AccordionTrigger className="text-sm font-semibold">Description</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="details">
                <AccordionTrigger className="text-sm font-semibold">Product Details</AccordionTrigger>
                <AccordionContent>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <dt className="text-muted-foreground">SKU</dt><dd>{variant.sku}</dd>
                    <dt className="text-muted-foreground">Category</dt><dd className="capitalize">{product.collectionId.replace("col_", "")}</dd>
                    <dt className="text-muted-foreground">Tags</dt><dd>{product.tags.join(", ")}</dd>
                  </dl>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-semibold">Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />Free shipping on orders above ₹999</li>
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />Dispatched within 1–2 business days</li>
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />30-day hassle-free returns</li>
                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-success" />COD available on orders under ₹5,000</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </div>

      {/* ─── Reviews ─────────────────────────────────────── */}
      <section id="reviews" className="container py-24">
        <FadeIn>
          <h2 className="font-display text-3xl font-light tracking-tight">Customer Reviews</h2>
        </FadeIn>
        <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr]">
          <FadeIn direction="left">
            <GlowCard>
              <div className="text-center">
                <span className="font-display text-5xl font-light">{product.rating.toFixed(1)}</span>
                <RatingStars value={product.rating} size="md" className="mt-2 justify-center" />
                <p className="mt-1 text-sm text-muted-foreground">Based on <CountUp to={reviews.length} /> reviews</p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                {ratingBreakdown.map(({ stars, count, pct }) => (
                  <div key={stars} className="flex items-center gap-2 text-sm">
                    <span className="w-3 text-right">{stars}</span>
                    <Star className="h-3 w-3 fill-warning text-warning" />
                    <div className="flex-1 overflow-hidden rounded-full bg-muted h-2">
                      <div className="h-full rounded-full bg-warning transition-all duration-1000" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="w-6 text-right text-muted-foreground">{count}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </FadeIn>

          <StaggerReveal className="space-y-4" stagger={0.1}>
            {reviews.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted-foreground">No reviews yet.</p>
            ) : (
              reviews.map((r) => (
                <SpotlightCard key={r.id} className="!p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">
                          {r.author.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{r.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(r.createdAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <RatingStars value={r.rating} size="xs" />
                      {r.verified && (
                        <Badge variant="outline" className="text-[10px] gap-0.5">
                          <Check className="h-2.5 w-2.5" /> Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                  <h4 className="mt-3 font-medium">{r.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </SpotlightCard>
              ))
            )}
          </StaggerReveal>
        </div>
      </section>

      {/* ─── Recommendations ────────────────────────────── */}
      {recommended.length > 0 && (
        <section className="bg-card/50">
          <div className="container py-20">
            <FadeIn>
              <h2 className="font-display text-3xl font-light tracking-tight">You might also like</h2>
            </FadeIn>
            <StaggerReveal className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6" stagger={0.1}>
              {recommended.map((p) => (
                <ProductCard
                  key={p.id}
                  title={p.title}
                  subtitle={p.subtitle}
                  image={p.images[0]?.url ?? ""}
                  hoverImage={p.images[1]?.url}
                  price={p.variants[0].price}
                  compareAt={p.variants[0].compareAtPrice}
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  badge={p.badge}
                  href={`/product/${p.handle}`}
                />
              ))}
            </StaggerReveal>
          </div>
        </section>
      )}
    </div>
  )
}
