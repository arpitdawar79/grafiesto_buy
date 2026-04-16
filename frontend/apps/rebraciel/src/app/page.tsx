"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Star, Play, ShoppingBag, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import {
  Button,
  Badge,
  AspectRatio,
  FadeIn,
  BlurIn,
  Magnetic,
  Parallax,
  ParallaxImage,
  ScrollProgress,
  SmoothScroll,
  AuroraBackground,
  SpotlightCard,
  GradientText,
  TextShimmer,
  Marquee,
  MarqueeItem,
  GlowCard,
  Ripple,
  NumberTicker,
  WordRotate,
  AnimatedList,
  ShineBorder,
  PulsatingButton,
  getFeaturedProducts,
  getNewArrivals,
  getBestSellers,
  getFeaturedCollections,
  SAMPLE_REVIEWS,
  SAMPLE_PRODUCTS,
} from "@grafiesto/ui"

/* ─── REBRACIEL — Bold DTC Lifestyle ────────────────────────── */
export default function HomePage() {
  const featured = getFeaturedProducts()
  const newArrivals = getNewArrivals()
  const bestSellers = getBestSellers()
  const collections = getFeaturedCollections()
  const reviews = SAMPLE_REVIEWS.filter(r => r.rating >= 4).slice(0, 6)

  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-primary" />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  1 · HERO — Energetic, asymmetric, playful                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <AuroraBackground className="absolute inset-0 opacity-40" showRadialGradient />

        <div className="relative z-10 container min-h-[100svh] grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center py-24">
          {/* Left text */}
          <div className="space-y-6 order-2 lg:order-1 pb-12 lg:pb-0">
            <FadeIn delay={0.1}>
              <Badge variant="outline" className="border-primary/30 bg-primary/5 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
                ✦ New Season Drop
              </Badge>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="font-display text-[13vw] md:text-[8vw] lg:text-[5.5vw] font-black leading-[0.95] tracking-tight">
                Scent
                <br />
                Your
                <br />
                <WordRotate words={["Mood.", "Space.", "Story.", "Vibe."]} duration={2200} className="text-primary" />
              </h1>
            </FadeIn>
            <BlurIn delay={0.5}>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-sm">
                Everyday luxury that speaks your language. Vibrant, clean, and unmistakably you.
              </p>
            </BlurIn>
            <FadeIn delay={0.6} className="flex gap-3 pt-2">
              <Magnetic strength={0.15}>
                <PulsatingButton className="rounded-full px-8 h-14 text-sm font-bold shadow-xl shadow-primary/20">
                  <Link href="/shop" className="flex items-center gap-2">Shop Collection <ArrowRight className="w-4 h-4" /></Link>
                </PulsatingButton>
              </Magnetic>
            </FadeIn>

            {/* Social proof inline */}
            <FadeIn delay={0.8}>
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2">
                  {[11,12,13,14,15].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt="" className="w-8 h-8 rounded-full border-2 border-background object-cover" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="font-bold text-foreground"><NumberTicker value={5000} />+</span> happy customers
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — stacked images */}
          <div className="order-1 lg:order-2 relative h-[55vh] lg:h-[75vh]">
            <FadeIn className="absolute inset-y-0 right-0 w-[85%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <img src={SAMPLE_PRODUCTS[0]?.images[0]?.url} alt="" className="w-full h-full object-cover" />
              <Badge className="absolute top-5 right-5 bg-white/90 text-black font-bold border-0 rounded-full shadow-lg px-4 py-1.5">Bestseller ✨</Badge>
            </FadeIn>
            <FadeIn delay={0.15} className="absolute top-[15%] left-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-xl z-20 -rotate-6">
              <img src={SAMPLE_PRODUCTS[1]?.images[0]?.url} alt="" className="w-full h-full object-cover" />
            </FadeIn>
            <motion.div
              className="absolute bottom-[10%] left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-sm shadow-xl z-30"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              NEW
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  2 · ROTATED MARQUEE — Bold, angled                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-primary text-primary-foreground py-4 -rotate-[1.5deg] scale-105 shadow-xl relative z-20 my-[-2px]">
        <Marquee speed={25}>
          {["100% Vegan 🐰", "Free Shipping ₹999+ ✈️", "12+ Hour Lasting 🕐", "Made in India 🇮🇳", "Eco Packaging ♻️", "As Seen on Vogue 💅"].map((t, i) => (
            <MarqueeItem key={i} className="mx-4">
              <span className="font-display font-black text-lg md:text-xl tracking-tight">{t}</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </div>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  3 · COLLECTIONS — Full-bleed overlapping cards               */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40">
        <div className="container text-center mb-16">
          <FadeIn>
            <h2 className="font-display text-5xl md:text-7xl font-black tracking-tight">Shop Your Vibe.</h2>
          </FadeIn>
        </div>

        <div className="container grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[280px]">
          {collections.slice(0, 4).map((col, i) => {
            const spans = ["col-span-6 md:col-span-7 row-span-2", "col-span-6 md:col-span-5 row-span-1", "col-span-3 md:col-span-5 row-span-1", "col-span-3 md:col-span-7 row-span-1"]
            return (
              <FadeIn key={col.id} delay={i * 0.1} className={spans[i]}>
                <Link href={`/shop?collection=${col.handle}`} className="group relative block h-full overflow-hidden rounded-3xl shadow-lg">
                  <img src={col.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <h3 className="font-display font-black text-white text-2xl md:text-3xl">{col.title}</h3>
                    <p className="text-white/60 text-sm font-medium mt-1 flex items-center gap-1">Shop Now <ArrowRight className="w-3.5 h-3.5" /></p>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  4 · STATS BAND — Vibrant gradient                            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-primary via-brand to-accent text-white py-20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { v: 25000, s: "+", l: "Happy Customers" },
            { v: 4.8, l: "Rating", d: 1 },
            { v: 100, s: "%", l: "Genuine" },
            { v: 30, l: "Day Returns" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.1}>
              <p className="text-5xl md:text-6xl font-black tracking-tighter">
                <NumberTicker value={s.v} decimalPlaces={s.d || 0} />{s.s && <span className="opacity-60">{s.s}</span>}
              </p>
              <p className="text-xs uppercase tracking-widest mt-3 opacity-60">{s.l}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  5 · BESTSELLERS — Horizontal scroll gallery                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40">
        <div className="container flex justify-between items-end mb-14">
          <div>
            <TextShimmer as="p" className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Fresh Drops</TextShimmer>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">Just Landed.</h2>
          </div>
          <Button variant="ghost" className="font-bold hidden md:inline-flex" asChild>
            <Link href="/shop?sort=newest">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="flex gap-6 px-4 md:px-8 overflow-x-auto pb-10 snap-x snap-mandatory hide-scrollbars">
          {newArrivals.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08} className="min-w-[280px] md:min-w-[320px] snap-start">
              <Link href={`/product/${p.handle}`} className="group block">
                <SpotlightCard className="p-5 bg-card border-border/30 rounded-3xl">
                  <AspectRatio ratio={4/5} className="overflow-hidden rounded-2xl bg-muted/15 mb-4 relative">
                    <img src={p.images[0]?.url} alt="" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                    {p.new && <Badge className="absolute top-3 left-3 bg-primary border-0 font-bold text-[10px] rounded-full">NEW</Badge>}
                  </AspectRatio>
                  <h3 className="font-bold text-sm">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.subtitle}</p>
                  <p className="font-display font-black text-xl text-primary mt-2">₹{p.variants[0].price / 100}</p>
                </SpotlightCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  6 · LIVE SOCIAL PROOF — Full-width strip                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-card border-y border-border/30 py-14">
        <div className="container grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <FadeIn>
            <h3 className="font-display text-3xl font-black tracking-tight">People are loving this 💕</h3>
            <p className="text-muted-foreground mt-2 text-sm">Real-time activity from our community</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative h-[260px] overflow-hidden rounded-2xl border border-border/30 bg-background p-4">
              <AnimatedList delay={2000}>
                {[
                  { name: "Priya M.", action: "just purchased Signature EDP 🛍️", c: "#FF6B6B" },
                  { name: "Arjun K.", action: "wrote a 5-star review ⭐", c: "#4ECDC4" },
                  { name: "Meera S.", action: "added 3 items to cart 🛒", c: "#FFE66D" },
                  { name: "Rohan D.", action: "subscribed to refill plan 🔄", c: "#A8E6CF" },
                  { name: "Sneha P.", action: "redeemed loyalty points 🎁", c: "#DDA0DD" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-border/20">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: item.c }}>{item.name[0]}</div>
                    <p className="text-sm"><span className="font-bold">{item.name}</span> {item.action}</p>
                  </div>
                ))}
              </AnimatedList>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  7 · REVIEWS — Horizontal carousel with large quotes          */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40">
        <div className="container mb-14">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight text-center">The Rebraciel Family ✨</h2>
          </FadeIn>
        </div>
        <div className="flex gap-6 px-4 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbars">
          {reviews.slice(0, 6).map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.08} className="min-w-[300px] md:min-w-[360px] snap-start">
              <GlowCard className="p-8 rounded-3xl bg-card border-border/30 h-full flex flex-col">
                <div className="flex text-primary mb-4">{[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-sm leading-relaxed text-foreground/80 flex-1 italic">&ldquo;{r.body}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/20">
                  <img src={`https://i.pravatar.cc/80?img=${i + 30}`} className="w-10 h-10 rounded-full object-cover" alt="" />
                  <div>
                    <p className="font-bold text-sm">{r.author}</p>
                    <p className="text-[10px] text-primary font-bold">Verified ✓</p>
                  </div>
                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  8 · NEWSLETTER — Rounded aurora card                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <AuroraBackground className="py-24 md:py-32" showRadialGradient>
            <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto px-6">
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight">
                Get <GradientText className="font-black">15% off</GradientText>
              </h2>
              <p className="text-muted-foreground mt-4 mb-10">Join the club &amp; get early drops, secret sales + a sweet welcome discount.</p>
              <form className="flex flex-col sm:flex-row w-full gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Drop your email" className="flex-1 rounded-full border-2 border-border bg-background/80 backdrop-blur-md px-6 py-4 text-sm outline-none focus:border-primary transition-colors" />
                <Magnetic>
                  <PulsatingButton className="rounded-full py-4 px-8 font-bold">Join 🎈</PulsatingButton>
                </Magnetic>
              </form>
            </div>
          </AuroraBackground>
          <Ripple count={4} className="z-0 opacity-20" />
        </div>
      </section>
    </>
  )
}
