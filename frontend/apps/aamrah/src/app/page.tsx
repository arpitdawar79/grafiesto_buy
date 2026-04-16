"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, Flame, Star, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import {
  Badge,
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
  ShimmerButton,
  SpotlightCard,
  GradientText,
  TextShimmer,
  ParticleField,
  Marquee,
  MarqueeItem,
  AnimatedBorder,
  Meteors,
  OrbitCircle,
  GlowCard,
  NumberTicker,
  WordRotate,
  AnimatedList,
  ShineBorder,
  PulsatingButton,
  getFeaturedProducts,
  getBestSellers,
  getNewArrivals,
  getFeaturedCollections,
  SAMPLE_REVIEWS,
  SAMPLE_PRODUCTS,
} from "@grafiesto/ui"

/* ─── AAMRAH — Sacred Indian Ritual ─────────────────────────── */
export default function HomePage() {
  const featured = getFeaturedProducts()
  const bestSellers = getBestSellers()
  const newArrivals = getNewArrivals()
  const collections = getFeaturedCollections()
  const reviews = SAMPLE_REVIEWS.filter(r => r.rating >= 5).slice(0, 4)

  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-primary" />
      <CursorGlow />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  1 · HERO — Sacred, Devotional, Cinematic                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#1A0F05] via-[#2A1A0A] to-[#1A0F05]">
        {/* Sacred geometry — faint rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <OrbitCircle radius={200} duration={50} delay={0} pathOpacity={0.6}>
            <Flame className="w-8 h-8 text-amber-400" />
          </OrbitCircle>
          <OrbitCircle radius={350} duration={75} delay={12} reverse pathOpacity={0.3}>
            <Sparkles className="w-10 h-10 text-orange-300" />
          </OrbitCircle>
        </div>

        <Meteors count={8} className="opacity-20" />
        <ParticleField count={15} color="#D4A574" speed="slow" className="opacity-[0.08]" />

        {/* Radial warm glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,#D4A574_0%,transparent_60%)] opacity-[0.08] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center text-center px-6">
          {/* Diya icon */}
          <FadeIn delay={0.2}>
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-yellow-400 flex items-center justify-center shadow-[0_0_60px_rgba(212,165,116,0.3)] mb-10"
              animate={{ boxShadow: ["0 0 30px rgba(212,165,116,0.2)", "0 0 60px rgba(212,165,116,0.4)", "0 0 30px rgba(212,165,116,0.2)"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Flame className="w-9 h-9 text-white" />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-amber-300/50 text-sm tracking-[0.8em] uppercase font-serif mb-8">
              शुद्धि · सुगंध · संस्कृति
            </p>
          </FadeIn>

          <TextReveal
            as="h1"
            effect="blur-in"
            stagger={0.06}
            className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tight text-[#F5E6D3]"
          >
            Rituals Rooted
          </TextReveal>
          <FadeIn delay={0.9}>
            <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tight">
              <span className="text-amber-400/90 italic">
                in <WordRotate words={["Tradition", "Devotion", "Faith"]} duration={3000} />
              </span>
            </h1>
          </FadeIn>

          <BlurIn delay={1.4}>
            <p className="max-w-md text-amber-200/40 font-serif text-base leading-relaxed mt-8">
              Hand-rolled dhoop, sacred agarbatti, and pure attars — formulated exactly as the ancient texts prescribe.
            </p>
          </BlurIn>

          <FadeIn delay={1.7} className="mt-12">
            <Magnetic strength={0.1}>
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 border border-amber-400/30 px-10 py-5 text-[10px] tracking-[0.4em] uppercase font-medium text-amber-300/70 hover:bg-amber-400/10 hover:border-amber-400/50 transition-all duration-500 group"
              >
                Begin Your Ritual <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  2 · ORNATE MARQUEE — Bilingual, rich                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 text-amber-100 py-5 border-y-4 border-amber-600/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
        <Marquee speed={22} className="relative z-10">
          {[
            "100% Charcoal Free · चारकोल मुक्त",
            "Hand-rolled by Artisans · हस्तनिर्मित",
            "Temple Grade Oils · मंदिर स्तरीय तेल",
            "Pure Botanicals · शुद्ध वनस्पतियाँ",
          ].map((t, i) => (
            <MarqueeItem key={i} className="mx-8">
              <span className="font-serif text-base tracking-wide">{t}</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  3 · SACRED NUMBERS — Warm dark section                       */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#2A1A0A] text-[#F5E6D3] py-28">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {[
            { v: 108, l: "Sacred Ingredients" },
            { v: 45, s: " min", l: "Burn Duration" },
            { v: 100, s: "%", l: "Pure & Natural" },
            { v: 5000, s: "+", l: "Temple Partners" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.1}>
              <p className="font-display text-5xl md:text-7xl tracking-tighter text-amber-400/90">
                <NumberTicker value={s.v} />{s.s && <span className="text-amber-400/30">{s.s}</span>}
              </p>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#F5E6D3]/30 mt-4 font-serif">{s.l}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  4 · SACRED COLLECTIONS — Full-screen cards                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FDF8EE] py-32 md:py-48">
        <div className="container text-center mb-20">
          <FadeIn>
            <TextShimmer className="text-xs font-serif tracking-[0.4em] uppercase mb-4" as="p">Sacred Offerings</TextShimmer>
            <h2 className="font-display text-4xl md:text-6xl text-[#3D2B1F]">Pooja Essentials</h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mt-6" />
          </FadeIn>
        </div>

        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.slice(0, 4).map((col, i) => (
            <FadeIn key={col.id} delay={i * 0.1}>
              <AnimatedBorder duration={10}>
                <Link href={`/shop?collection=${col.handle}`} className="group block bg-white overflow-hidden">
                  <div className="overflow-hidden">
                    <AspectRatio ratio={4/5}>
                      <img
                        src={col.image || SAMPLE_PRODUCTS[i]?.images[0]?.url}
                        alt=""
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 sepia-[0.15]"
                      />
                    </AspectRatio>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-xl text-[#3D2B1F]">{col.title}</h3>
                    <p className="text-amber-700/60 text-xs uppercase tracking-widest mt-2 group-hover:text-amber-700 transition-colors flex items-center justify-center gap-1">
                      Explore <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>
                </Link>
              </AnimatedBorder>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  5 · PARALLAX IMAGERY                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1609607847923-a0ef1ab0d3c1?w=2000&q=80"
        alt="Sacred ritual"
        speed={0.3}
        overlay
        overlayOpacity={0.25}
        className="h-[50vh]"
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  6 · BESTSELLERS — Horizontal editorial scroll                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FDF8EE] py-32 md:py-40">
        <div className="container flex justify-between items-end mb-16">
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase text-amber-700/40 font-serif mb-3">The Icons</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F]">Beloved by Devotees</h2>
          </div>
          <Link href="/shop?sort=popular" className="text-xs tracking-widest uppercase text-amber-700 border-b border-amber-700 pb-1 hidden md:inline-block">View All</Link>
        </div>

        <div className="flex gap-8 px-4 md:px-8 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbars">
          {bestSellers.slice(0, 6).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08} className="min-w-[280px] md:min-w-[320px] snap-start">
              <Link href={`/product/${p.handle}`} className="group block">
                <ShineBorder borderRadius={8} duration={12} color={["#D4A574", "#8B6914"]}>
                  <div className="p-4 bg-white rounded-md">
                    <AspectRatio ratio={4/5} className="overflow-hidden rounded-sm bg-[#FDF8EE] mb-4">
                      <img src={p.images[0]?.url} alt="" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                    </AspectRatio>
                    <div className="text-center">
                      <h3 className="font-display text-lg text-[#3D2B1F]">{p.title}</h3>
                      <p className="text-xs text-amber-700/50 font-serif italic mt-1">{p.subtitle}</p>
                      <div className="flex justify-center my-2 text-amber-500">{[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}</div>
                      <p className="font-semibold text-lg text-[#3D2B1F]">₹{p.variants[0].price / 100}</p>
                    </div>
                  </div>
                </ShineBorder>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  7 · SPLIT: DEVOTEE VOICES + LIVE ACTIVITY                    */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2">
        {/* Left — Dark devotional voices */}
        <div className="bg-[#2A1A0A] text-[#F5E6D3] p-10 md:p-20 flex flex-col justify-center min-h-[60vh]">
          <FadeIn>
            <p className="text-[9px] font-serif tracking-[0.5em] uppercase text-amber-400/30 mb-12">Devotee Voices</p>
          </FadeIn>
          <div className="space-y-12">
            {reviews.slice(0, 3).map((r, i) => (
              <FadeIn key={r.id} delay={i * 0.12}>
                <div className="border-l-2 border-amber-600/30 pl-6">
                  <p className="font-serif text-sm leading-relaxed italic text-[#F5E6D3]/70">&ldquo;{r.body}&rdquo;</p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-amber-400/30">{r.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right - Live devotee orders */}
        <div className="bg-[#FDF8EE] p-10 md:p-20 flex flex-col justify-center min-h-[60vh]">
          <FadeIn>
            <p className="text-[9px] font-serif tracking-[0.5em] uppercase text-amber-700/40 mb-8">Live from Our Community</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative h-[320px] overflow-hidden">
              <AnimatedList delay={2200}>
                {[
                  { who: "Pandit Sharma, Varanasi", what: "ordered 100 Chandan Dhoop 🙏", icon: "🕉️" },
                  { who: "Priya, Jaipur", what: "purchased Diwali Gift Set 🪔", icon: "🎁" },
                  { who: "ISKCON Temple, Delhi", what: "reordered Rose Attar", icon: "🌹" },
                  { who: "Ayesha, Mumbai", what: "reviewed Mogra Agarbatti ★★★★★", icon: "⭐" },
                  { who: "Ashram, Rishikesh", what: "ordered Sandalwood collection", icon: "🧘" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-b border-amber-200">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-[#3D2B1F]">{item.who}</p>
                      <p className="text-xs text-amber-700/50">{item.what}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FDF8EE] to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  8 · NEW ARRIVALS — Table-style editorial list                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FDF8EE] py-32 container">
        <FadeIn>
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-[#3D2B1F]">New Sacred Offerings</h2>
            <Link href="/shop?sort=newest" className="text-xs font-serif text-amber-700 italic border-b border-amber-700 pb-1">See All</Link>
          </div>
        </FadeIn>
        <div className="divide-y divide-amber-200/60">
          {newArrivals.slice(0, 5).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.08}>
              <Link href={`/product/${p.handle}`} className="group py-7 flex items-center gap-8">
                <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-amber-100/50 rounded-sm">
                  <img src={p.images[0]?.url} alt="" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-xl text-[#3D2B1F] group-hover:text-amber-700 transition-colors">{p.title}</h3>
                  <p className="text-xs text-amber-700/40 font-serif italic mt-1">{p.subtitle}</p>
                </div>
                <p className="font-semibold text-[#3D2B1F] hidden md:block">₹{p.variants[0].price / 100}</p>
                <ArrowRight className="w-5 h-5 text-amber-700/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  9 · NEWSLETTER — Dark sacred                                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1A0F05] text-[#F5E6D3] min-h-[55vh] flex items-center py-24 relative overflow-hidden">
        <ParticleField count={10} color="#D4A574" speed="slow" className="opacity-[0.05]" />
        <div className="container max-w-lg text-center relative z-10">
          <FadeIn>
            <Flame className="w-10 h-10 text-amber-500/50 mx-auto mb-8" />
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight">
              Deepen Your <WordRotate words={["Ritual", "Connection", "Devotion"]} className="italic text-amber-400" />
            </h2>
            <p className="font-serif text-sm text-amber-200/30 mt-6 leading-relaxed">
              Weekly insights on ancient practices, new attar drops, and exclusive festival offerings.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form className="mt-12 flex border-b border-amber-400/15 focus-within:border-amber-400/40 transition-colors pb-1 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-amber-200/15 font-serif" />
              <button className="px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-amber-400/60 hover:text-amber-400 transition-colors">Subscribe</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
