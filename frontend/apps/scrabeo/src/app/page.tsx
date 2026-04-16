"use client"
import * as React from "react"
import Link from "next/link"
import { MoveRight, Plus, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import {
  Button,
  AspectRatio,
  FadeIn,
  BlurIn,
  Magnetic,
  Parallax,
  ParallaxImage,
  ScrollProgress,
  CursorGlow,
  SmoothScroll,
  SpotlightCard,
  ImageComparison,
  TextShimmer,
  Marquee,
  MarqueeItem,
  NumberTicker,
  WordRotate,
  AnimatedList,
  getFeaturedProducts,
  getFeaturedCollections,
  SAMPLE_REVIEWS,
  SAMPLE_PRODUCTS,
} from "@grafiesto/ui"

/* ─── SCRABEO — Warm Architecture of Scent ──────────────────── */
export default function HomePage() {
  const featured = getFeaturedProducts()
  const collections = getFeaturedCollections()
  const reviews = SAMPLE_REVIEWS.filter(r => r.rating >= 5).slice(0, 4)

  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-[#8B7E6A]" />
      <CursorGlow />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  1 · HERO — Full-bleed immersive with overlaid type           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="relative h-[100svh] overflow-hidden">
        <Parallax speed={0.2} className="absolute inset-0 h-full">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=80"
            alt=""
            className="w-full h-[120%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F3] via-[#F9F7F3]/40 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8B7E6A]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#8B7E6A] font-mono">Architecture of Scent</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <h1 className="font-serif text-[14vw] md:text-[9vw] lg:text-[7vw] font-normal leading-[0.85] tracking-tight text-[#2A2A2A] max-w-4xl">
              Scent is{" "}
              <WordRotate words={["invisible", "essential", "timeless"]} duration={3200} className="italic text-[#8B7E6A]" />{" "}
              architecture.
            </h1>
          </FadeIn>
          <BlurIn delay={1}>
            <p className="mt-8 max-w-md text-[#6B655C] font-light text-base leading-relaxed">
              We don't clear the air — we build atmosphere. Meticulously crafted home fragrances for spaces that deserve a signature.
            </p>
          </BlurIn>
          <FadeIn delay={1.3}>
            <Magnetic strength={0.08}>
              <Link href="/shop" className="inline-flex items-center gap-4 mt-10 text-[10px] tracking-[0.3em] uppercase font-medium text-[#2A2A2A] border-b border-[#2A2A2A] pb-2 hover:text-[#8B7E6A] hover:border-[#8B7E6A] transition-colors group">
                Explore Objects <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  2 · PHILOSOPHY — ONE line, full viewport                     */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-[70vh] flex items-center bg-[#F9F7F3] py-32">
        <div className="container">
          <Marquee speed={18} pauseOnHover>
            {["Pure botanical formulas", "Scandinavian vessel design", "Non-toxic & cruelty-free", "800hr diffusion", "Sustainably sourced resins"].map((t, i) => (
              <MarqueeItem key={i} className="mx-6">
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#B5AFA6]">{t} ●</span>
              </MarqueeItem>
            ))}
          </Marquee>
          <FadeIn className="mt-16 md:mt-24 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.15] text-[#2A2A2A]">
              A room is never complete until it has{" "}
              <span className="italic text-[#8B7E6A]">a signature.</span>
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  3 · METRICS — Oversized numbers, earth-tone                  */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#4A453E] text-[#F9F7F3] py-28">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {[
            { v: 800, s: "hr", l: "Avg Diffusion" },
            { v: 42, l: "Scent Notes" },
            { v: 98, s: "%", l: "Organic" },
            { v: 12, l: "Design Awards" },
          ].map((s, i) => (
            <FadeIn key={s.l} delay={i * 0.1}>
              <p className="font-serif text-5xl md:text-7xl tracking-tighter">
                <NumberTicker value={s.v} />{s.s && <span className="text-[#F9F7F3]/30">{s.s}</span>}
              </p>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#F9F7F3]/30 mt-4 font-mono">{s.l}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  4 · IMAGE COMPARISON — Full width, immersive                 */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EAE5DF]">
        <div className="grid lg:grid-cols-2">
          <FadeIn className="relative h-[60vh] lg:h-auto">
            <ImageComparison
              before="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600"
              after="https://images.unsplash.com/photo-1595514535497-217b1aa258c3?q=80&w=1600"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="flex flex-col justify-center p-10 md:p-20">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#B5AFA6] mb-6">Before & After</p>
            <h2 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-[#2A2A2A]">
              Visual aesthetics construct boundaries. <em className="text-[#8B7E6A]">Scent defines the soul.</em>
            </h2>
            <p className="text-[#6B655C] font-light mt-6 leading-relaxed max-w-md">
              Our objects merge seamlessly with high-end architecture — designed by studio-trained vessel architects.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-10 pt-8 border-t border-[#DED9D2]">
              <div>
                <p className="font-serif text-3xl text-[#2A2A2A]">A+</p>
                <p className="text-[9px] uppercase tracking-widest text-[#B5AFA6] mt-2 font-mono">Air Quality</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#2A2A2A]"><NumberTicker value={800} />hr</p>
                <p className="text-[9px] uppercase tracking-widest text-[#B5AFA6] mt-2 font-mono">Diffusion Time</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  5 · SCENT OBJECTS — Full-bleed editorial grid                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F9F7F3] py-32 md:py-48">
        <div className="container">
          <div className="flex justify-between items-end mb-20 border-b border-[#DED9D2] pb-8">
            <div>
              <TextShimmer className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2" as="p">Catalogue</TextShimmer>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2A2A2A]">Scent Objects</h2>
            </div>
            <Link href="/shop" className="text-[10px] tracking-[0.3em] uppercase font-medium text-[#6B655C] hover:text-[#2A2A2A] transition-colors flex items-center gap-2">
              Full Index <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Masonry-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featured.slice(0, 6).map((p, i) => {
              const tall = i === 0 || i === 3
              return (
                <FadeIn key={p.id} delay={i * 0.08}>
                  <Link href={`/product/${p.handle}`} className="group block">
                    <div className={`overflow-hidden bg-[#EAE5DF] ${tall ? "aspect-[3/4]" : "aspect-square"}`}>
                      <img src={p.images[0]?.url} alt={p.title} className="w-full h-full object-cover mix-blend-multiply transition-all duration-700 group-hover:scale-105 group-hover:mix-blend-normal" />
                    </div>
                    <div className="mt-5 flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg text-[#2A2A2A] group-hover:text-[#8B7E6A] transition-colors">{p.title}</h3>
                        <p className="text-[10px] text-[#B5AFA6] mt-1 font-mono uppercase tracking-wider">{p.subtitle}</p>
                      </div>
                      <span className="font-mono text-sm text-[#6B655C]">₹{p.variants[0].price / 100}</span>
                    </div>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  6 · PARALLAX BREAKER                                         */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1595514535497-217b1aa258c3?q=80&w=2000"
        alt="Space transformed"
        speed={0.35}
        overlay
        overlayOpacity={0.15}
        className="h-[60vh]"
      />

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  7 · SPLIT: TESTIMONIALS + LIVE ACTIVITY                      */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 bg-[#F9F7F3]">
        {/* Left — Testimonials */}
        <div className="p-10 md:p-20 flex flex-col justify-center border-r border-[#DED9D2]">
          <FadeIn>
            <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-[#B5AFA6] mb-12">Endorsed by Spaces</p>
          </FadeIn>
          <div className="space-y-12">
            {reviews.slice(0, 3).map((r, i) => (
              <FadeIn key={r.id} delay={i * 0.12}>
                <div className="border-l-2 border-[#8B7E6A]/30 pl-6">
                  <p className="font-serif text-lg leading-relaxed italic text-[#4A453E]">&ldquo;{r.body}&rdquo;</p>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.3em] font-mono text-[#B5AFA6]">{r.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right — Live from homes */}
        <div className="p-10 md:p-20 flex flex-col justify-center bg-[#EAE5DF]">
          <FadeIn>
            <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-[#B5AFA6] mb-8">Recently in Our Homes</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative h-[320px] overflow-hidden">
              <AnimatedList delay={2500}>
                {[
                  { who: "A studio in Bandra", what: "installed Sandalwood Diffuser", icon: "🏠" },
                  { who: "Boutique hotel, Jaipur", what: "ordered 12× Lavender Mist", icon: "🏨" },
                  { who: "Architect in Goa", what: "specified Cedarwood for villa", icon: "✏️" },
                  { who: "Yoga studio, Pune", what: "restocked Palo Santo set", icon: "🧘" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-5 border-b border-[#DED9D2]">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="font-serif text-sm text-[#2A2A2A]">{item.who}</p>
                      <p className="text-[11px] text-[#6B655C] font-mono">{item.what}</p>
                    </div>
                  </div>
                ))}
              </AnimatedList>
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#EAE5DF] to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/*  8 · NEWSLETTER — Dark earth tone with personality            */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#4A453E] text-[#F9F7F3] min-h-[50vh] flex items-center py-24">
        <div className="container max-w-lg text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">Cultivate your space.</h2>
            <p className="font-light text-[#F9F7F3]/40 mt-5 text-sm leading-relaxed">
              Olfactory architecture insights, interior styling tips, and early access to limited vessels.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <form className="mt-12 flex border-b border-[#F9F7F3]/15 focus-within:border-[#F9F7F3]/40 transition-colors pb-1 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#F9F7F3]/20 font-light" />
              <button className="px-4 py-3 text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">Subscribe</button>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
