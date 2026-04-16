"use client"

import {
    AuroraBackground,
    BlurIn,
    FadeIn,
    GradientText,
    InteractiveHoverButton,
    Magnetic,
    MorphingText,
    NumberTicker,
    Ripple,
    ShimmerButton,
    TextShimmer,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Aurora ambient background */}
      <AuroraBackground className="absolute inset-0" />

      {/* Ripple rings behind content */}
      <Ripple color="hsl(var(--primary) / 0.06)" count={6} className="z-0" />

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.07] to-accent/[0.04] blur-[120px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[15%] left-[3%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/[0.05] to-brand/[0.03] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-brand/[0.04] blur-[80px] animate-[float_18s_ease-in-out_infinite_2s]" />
      </div>

      <div className="relative z-10 container min-h-[100svh] flex flex-col justify-center py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Luxury pill badge */}
          <BlurIn delay={0.1}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-foreground/[0.04] backdrop-blur-sm border border-foreground/[0.06] px-5 py-2.5 mb-12">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <TextShimmer className="text-[11px] font-medium tracking-[0.15em] uppercase">
                The Art of Fragrance
              </TextShimmer>
            </div>
          </BlurIn>

          {/* Grand headline */}
          <BlurIn delay={0.3}>
            <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.88] tracking-tight text-foreground">
              Where Scent
              <br />
              <span className="text-muted-foreground/30">Becomes</span>{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 40%, hsl(var(--brand)) 70%, hsl(var(--primary)) 100%)"
              >
                <MorphingText
                  words={["Ritual", "Memory", "Art", "You"]}
                  interval={3000}
                  className="min-w-[180px] md:min-w-[280px]"
                />
              </GradientText>
            </h1>
          </BlurIn>

          {/* Subheadline */}
          <FadeIn delay={0.7}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mt-10 font-light leading-relaxed mx-auto tracking-wide">
              Handcrafted fragrances born from centuries of Indian perfumery.
              <span className="text-foreground font-normal"> Rare. Intimate. Unforgettable.</span>
            </p>
          </FadeIn>

          {/* CTA row */}
          <FadeIn delay={0.9} className="flex flex-wrap justify-center gap-5 mt-12">
            <Magnetic strength={0.08}>
              <ShimmerButton
                shimmerColor="hsl(var(--primary-foreground))"
                background="hsl(var(--primary))"
                className="rounded-full h-14 px-10 text-sm font-semibold tracking-wide shadow-xl shadow-primary/20"
              >
                <Link href="/shop" className="flex items-center gap-2.5">
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </Link>
              </ShimmerButton>
            </Magnetic>
            <InteractiveHoverButton
              hoverText="Discover →"
              className="h-14 px-10 border-foreground/10 hover:shadow-lg"
            >
              <Link href="/quiz" className="flex items-center gap-2">
                Find Your Scent
              </Link>
            </InteractiveHoverButton>
          </FadeIn>

          {/* Trust bar */}
          <FadeIn delay={1.1}>
            <div className="flex items-center justify-center gap-8 mt-16 pt-8 border-t border-foreground/[0.06]">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-medium text-muted-foreground tracking-wide">
                  4.9/5
                </span>
              </div>
              <div className="h-4 w-px bg-foreground/10" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                <NumberTicker value={25000} />+ Happy Customers
              </span>
              <div className="h-4 w-px bg-foreground/10 hidden sm:block" />
              <span className="text-xs font-medium text-muted-foreground hidden sm:inline tracking-wide">
                Complimentary Shipping
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-foreground/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
