"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Star, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import {
  AspectRatio,
  FadeIn,
  TextReveal,
  BlurIn,
  Magnetic,
  Parallax,
  ParallaxImage,
  ScrollProgress,
  CursorGlow,
  SmoothScroll,
  GradientText,
  TextShimmer,
  ParticleField,
  Marquee,
  MarqueeItem,
  SpotlightCard,
  GlowCard,
  NumberTicker,
  WordRotate,
  AnimatedList,
  ShineBorder,
  getFeaturedProducts,
  getBestSellers,
  getNewArrivals,
  getFeaturedCollections,
  SAMPLE_REVIEWS,
  SAMPLE_PRODUCTS,
} from "@grafiesto/ui"

/* ─── MIRAMME — Dark Editorial Luxury ────────────────────────── */
export default function HomePage() {
  const featured = getFeaturedProducts()
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  const collections = getFeaturedCollections()
  const reviews = SAMPLE_REVIEWS.slice(0, 6)
  const hero = SAMPLE_PRODUCTS[0]

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <CursorGlow />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  1 · OVERTURE — Nothing but the name, enormous                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-foreground text-background">
        <ParticleField count={25} color="hsl(var(--background))" speed="slow" className="opacity-[0.07]" />

        {/* orbiting product images, ghostly */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[15%] left-[8%] w-28 h-36 rounded-sm overflow-hidden opacity-[0.08] blur-[1px]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={SAMPLE_PRODUCTS[1]?.images[0]?.url} alt="" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-24 h-32 rounded-sm overflow-hidden opacity-[0.06] blur-[0.5px]"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={SAMPLE_PRODUCTS[2]?.images[0]?.url} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4">
          <FadeIn delay={0.3}>
            <p className="text-[10px] tracking-[1em] uppercase text-background/30 mb-8">La Collection Privée — Spring 2026</p>
          </FadeIn>
          <TextReveal
            as="h1"
            effect="clip"
            stagger={0.12}
            className="font-display text-[15vw] md:text-[12vw] font-extralight leading-[0.85] tracking-[-0.06em]"
          >
            MIRAMME
          </TextReveal>
          <BlurIn delay={1.4}>
            <div className="mt-8 flex items-center gap-5 justify-center text-background/25">
              <div className="h-px w-16 bg-current" />
              <WordRotate words={["Paris", "Mumbai", "Milan", "Tokyo"]} duration={3500} className="text-[10px] tracking-[0.6em] uppercase" />
              <div className="h-px w-16 bg-current" />
            </div>
          </BlurIn>
          <FadeIn delay={2}>
            <motion.div
              className="mt-20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-background/20 mx-auto" />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  2 · MANIFESTO — Full-viewport editorial statement            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[80vh] flex items-center py-32 md:py-48">
        <div className="container max-w-5xl">
          <FadeIn>
            <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-extralight leading-[1.3] tracking-tight">
              &ldquo;A collision of raw materials &amp;{" "}
              <GradientText className="italic font-normal" animate>
                avant-garde
              </GradientText>{" "}
              design — scent as{" "}
              <span className="italic">invisible architecture</span>.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-12 text-[10px] tracking-[0.5em] uppercase text-muted-foreground">— The House Manifesto, established 2018</p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  3 · PARALLAX IMAGE BREAKER — Cinematic full-bleed            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=2000&q=80"
        alt="Fragrance atelier"
        speed={0.4}
        overlay
        overlayOpacity={0.2}
        className="h-[70vh]"
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  4 · HERITAGE NUMBERS — On dark, stark, oversized             */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-foreground text-background py-28 md:py-40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {[
            { n: 1847, label: "Ingredients sourced" },
            { n: 42, label: "Countries served" },
            { n: 98, label: "Organic formulas", suffix: "%" },
            { n: 5, label: "Artisan generations", suffix: "th Gen" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div>
                <span className="font-display text-5xl md:text-7xl font-extralight tracking-tighter block">
                  <NumberTicker value={s.n} delay={0.5} />
                  {s.suffix && <span className="text-background/30 text-4xl md:text-5xl">{s.suffix}</span>}
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-background/30 mt-4 block">{s.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  5 · THE CHAPTERS — Asymmetric split-screen collections       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48">
        <div className="container mb-20">
          <FadeIn>
            <TextShimmer as="p" className="text-[10px] tracking-[0.5em] uppercase font-semibold">The Chapters</TextShimmer>
          </FadeIn>
        </div>

        {/* Chapter 1 — Large left */}
        <div className="grid lg:grid-cols-12 gap-0">
          <FadeIn className="lg:col-span-7">
            <Link href={`/shop?collection=${collections[0]?.handle}`} className="group block relative overflow-hidden h-[75vh]">
              <Parallax speed={0.2} className="h-full">
                <img
                  src={collections[0]?.image || hero?.images[0]?.url}
                  alt=""
                  className="w-full h-[120%] object-cover transition-all duration-1000 group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-white/40 text-[9px] uppercase tracking-[0.5em]">Chapter I</p>
                <h3 className="text-white font-display text-4xl md:text-6xl font-extralight tracking-tighter mt-2">{collections[0]?.title}</h3>
                <div className="flex items-center gap-2 mt-4 text-white/40 text-xs tracking-widest uppercase group-hover:text-white/60 transition-colors">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </FadeIn>

          <div className="lg:col-span-5 flex flex-col">
            {/* Chapter 2 — Smaller right top */}
            <FadeIn delay={0.15} className="flex-1">
              <Link href={`/shop?collection=${collections[1]?.handle}`} className="group block relative overflow-hidden h-full min-h-[300px]">
                <img src={collections[1]?.image || SAMPLE_PRODUCTS[1]?.images[0]?.url} alt="" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03] grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white/40 text-[9px] uppercase tracking-[0.5em]">Chapter II</p>
                  <h3 className="text-white font-display text-2xl md:text-4xl font-extralight tracking-tighter mt-1">{collections[1]?.title}</h3>
                </div>
              </Link>
            </FadeIn>

            {/* Chapter 3 — Smaller right bottom (dark card) */}
            <FadeIn delay={0.25}>
              <Link href={`/shop?collection=${collections[2]?.handle}`} className="group block bg-foreground text-background p-10 md:p-14 min-h-[250px] flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-6 right-6 font-display text-[120px] md:text-[180px] font-extralight leading-none text-background/[0.03] select-none">III</div>
                <p className="text-background/30 text-[9px] uppercase tracking-[0.5em]">Chapter III</p>
                <h3 className="font-display text-3xl md:text-4xl font-extralight tracking-tighter mt-2">{collections[2]?.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-background/30 mt-3 group-hover:text-background/50 transition-colors flex items-center gap-2">Discover <ArrowRight className="w-3 h-3" /></span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  6 · ICON PRODUCT — Full editorial split-screen               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 min-h-[100vh]">
        {/* Left — Product image, edge-to-edge */}
        <FadeIn className="relative bg-muted/20 overflow-hidden">
          <Parallax speed={0.15} className="h-full min-h-[60vh] lg:min-h-0">
            <img src={hero?.images[0]?.url} alt="" className="w-full h-[120%] object-cover" />
          </Parallax>
          <ShineBorder borderRadius={0} borderWidth={1} duration={12} color={["hsl(var(--foreground) / 0.2)", "hsl(var(--foreground) / 0.05)"]}>
            <div className="absolute inset-0" />
          </ShineBorder>
        </FadeIn>

        {/* Right — Product info, editorial */}
        <FadeIn delay={0.2} className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 bg-background">
          <TextShimmer as="p" className="text-[10px] font-bold uppercase tracking-[0.5em] mb-8 text-muted-foreground">
            Editor's Icon
          </TextShimmer>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tighter leading-[0.9]">{hero?.title}</h2>
          <p className="text-muted-foreground font-light text-base leading-relaxed mt-6 max-w-md">{hero?.subtitle}</p>
          <p className="text-muted-foreground/60 text-sm leading-relaxed mt-4 max-w-md">{hero?.description?.slice(0, 180)}…</p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex text-foreground/30">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
            <span className="text-xs text-muted-foreground">{hero?.reviewCount} reviews</span>
          </div>

          <p className="font-display text-3xl tracking-tighter mt-6">₹{(hero?.variants[0]?.price || 0) / 100}</p>

          <div className="mt-10">
            <Magnetic strength={0.08}>
              <Link
                href={`/product/${hero?.handle}`}
                className="inline-flex items-center gap-4 border border-foreground px-10 py-5 text-[10px] tracking-[0.4em] uppercase font-medium hover:bg-foreground hover:text-background transition-all duration-500 group"
              >
                Shop Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  7 · TICKER MARQUEE — Massive brand name on repeat            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden py-16 md:py-24 border-y border-border/10">
        <Marquee speed={50} pauseOnHover>
          {Array.from({ length: 6 }).map((_, i) => (
            <MarqueeItem key={i} className="mx-6 md:mx-12">
              <span className="font-display text-7xl md:text-9xl font-extralight tracking-tighter text-foreground/[0.04] select-none uppercase">Miramme</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  8 · BESTSELLERS — Horizontal scroll, editorial               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48">
        <div className="container flex justify-between items-end mb-16">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-muted-foreground mb-3">The Icons</p>
            <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tighter">Most Coveted</h2>
          </div>
          <Link href="/shop?sort=popular" className="text-[10px] tracking-[0.3em] uppercase border-b border-foreground pb-1 hover:text-muted-foreground transition-colors hidden md:inline-block">View All</Link>
        </div>

        <div className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-12 hide-scrollbars snap-x snap-mandatory">
          {bestSellers.slice(0, 6).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1} className="min-w-[320px] md:min-w-[380px] snap-start">
              <Link href={`/product/${p.handle}`} className="group block">
                <div className="relative overflow-hidden bg-muted/20 mb-6">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src={p.images[0]?.url}
                      alt={p.title}
                      className="w-full h-full object-cover p-10 mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                    />
                  </AspectRatio>
                  {p.badge && (
                    <span className="absolute top-5 left-5 text-[8px] uppercase tracking-[0.3em] border border-foreground/10 bg-background/70 backdrop-blur-sm px-3 py-1.5">{p.badge}</span>
                  )}
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-display text-xl tracking-tight group-hover:text-muted-foreground transition-colors">{p.title}</h3>
                    <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">{p.subtitle}</p>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground whitespace-nowrap">₹{p.variants[0].price / 100}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  9 · PARALLAX IMAGE BAND 2                                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=2000&q=80"
        alt="Craftsmanship"
        speed={0.3}
        overlay
        overlayOpacity={0.35}
        className="h-[50vh]"
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  10 · SOCIAL PROOF + ATELIER — Split dark/light               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2">
        {/* Left — Voices */}
        <div className="bg-foreground text-background p-10 md:p-20 flex flex-col justify-center min-h-[60vh]">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase text-background/30 mb-12">Voices</p>
          </FadeIn>
          <div className="space-y-12">
            {reviews.slice(0, 3).map((r, i) => (
              <FadeIn key={r.id} delay={i * 0.15}>
                <div className="border-l border-background/10 pl-6">
                  <p className="text-sm leading-relaxed font-light italic text-background/70">&ldquo;{r.body}&rdquo;</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-background/30">{r.author} {r.verified && "— Verified"}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right — Live from atelier */}
        <div className="bg-muted/10 p-10 md:p-20 flex flex-col justify-center min-h-[60vh]">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground mb-8">Live from the Atelier</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-[360px] overflow-hidden">
              <AnimatedList delay={3000}>
                {[
                  { who: "Priya, Mumbai", what: "acquired Signature EDP", icon: "✦" },
                  { who: "James, London", what: "added Noir Candle to cart", icon: "◆" },
                  { who: "Ananya, Delhi", what: "purchased Gift Set", icon: "●" },
                  { who: "Marco, Milan", what: "reviewed Rose Attar ★★★★★", icon: "◇" },
                  { who: "Sarah, NYC", what: "acquired Body Oil", icon: "○" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-border/10">
                    <span className="text-muted-foreground/40 text-lg">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium">{item.who}</p>
                      <p className="text-xs text-muted-foreground">{item.what}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-muted/10 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  11 · NEW OBJECTS — Minimal editorial list                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 container">
        <FadeIn>
          <div className="flex items-end justify-between mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tighter">New Arrivals</h2>
            <Link href="/shop?sort=newest" className="text-[10px] tracking-[0.3em] uppercase border-b border-foreground pb-1 hover:text-muted-foreground transition-colors">All</Link>
          </div>
        </FadeIn>
        <div className="divide-y divide-border/30">
          {newArrivals.slice(0, 5).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <Link href={`/product/${p.handle}`} className="group py-8 flex items-center gap-8 md:gap-16">
                <div className="w-20 h-24 md:w-28 md:h-36 flex-shrink-0 overflow-hidden bg-muted/20">
                  <img src={p.images[0]?.url} alt="" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl md:text-2xl tracking-tight group-hover:text-muted-foreground transition-colors">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.subtitle}</p>
                </div>
                <p className="font-mono text-sm text-muted-foreground hidden md:block">₹{p.variants[0].price / 100}</p>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  12 · THE INNER CIRCLE — Stark newsletter                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-foreground text-background min-h-[60vh] flex items-center py-28">
        <div className="container max-w-xl text-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.5em] uppercase text-background/30 mb-6">The Inner Circle</p>
            <h2 className="font-display text-4xl md:text-5xl font-extralight tracking-tighter">
              Private collections &amp; atelier stories.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form className="mt-12 flex border-b border-background/15 focus-within:border-background/40 transition-colors pb-1 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-background/20 font-light" />
              <button className="px-4 py-3 text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-opacity">Subscribe</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
