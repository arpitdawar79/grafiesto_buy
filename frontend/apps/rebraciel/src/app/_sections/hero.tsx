"use client"

import {
  AuroraBackground,
  Backlight,
  BlurIn,
  FadeIn,
  GradientText,
  InteractiveHoverButton,
  Magnetic,
  Meteors,
  MorphingText,
  NumberTicker,
  ParticleField,
  RainbowButton,
  Ripple,
  CircularText,
  ClipReveal,
  ConvergeReveal,
  SpotlightCard,
  TextScramble,
  TextShimmer,
  TiltCard,
} from "@grafiesto/ui"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Globe, Play, Sparkles, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] overflow-hidden">
      {/* Layer 1: Backlight cursor-following glow */}
      <Backlight color="hsl(var(--primary))" size={700} blur={180} className="opacity-[0.05]" />

      {/* Layer 2: Aurora ambient background */}
      <AuroraBackground className="absolute inset-0 opacity-60" />

      {/* Layer 3: Particle field for magical atmosphere */}
      <ParticleField
        count={40}
        color="hsl(var(--primary))"
        minSize={1.5}
        maxSize={5}
        speed="slow"
        className="opacity-50 z-[1]"
      />

      {/* Layer 4: Ripple rings behind content */}
      <Ripple color="hsl(var(--primary) / 0.03)" count={5} className="z-0" />

      {/* Layer 5: Meteor shower effect */}
      <Meteors count={10} className="z-[2] opacity-30" />

      {/* Layer 6: Decorative gradient orbs with complex animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[5%] right-[0%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rose-400/[0.08] via-primary/[0.06] to-accent/[0.04] blur-[140px]"
          animate={{
            x: [0, 50, 0, -30, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 1.15, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/[0.08] via-brand/[0.05] to-rose-300/[0.04] blur-[120px]"
          animate={{
            x: [0, -40, 0, 30, 0],
            y: [0, 50, -30, 40, 0],
            scale: [1, 0.95, 1.1, 0.9, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <motion.div
          className="absolute top-[40%] left-[25%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/[0.05] via-rose-300/[0.03] to-transparent blur-[100px]"
          animate={{
            x: [0, 70, 0, -50, 0],
            y: [0, -50, 70, -30, 0],
            scale: [1, 1.2, 0.9, 1.15, 1],
            opacity: [0.4, 0.7, 0.3, 0.6, 0.4],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Rotating Circular Text — left side */}
      <motion.div
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 opacity-[0.08] hidden xl:block"
        style={{ y, opacity }}
      >
        <CircularText
          text="PREMIUM BEAUTY • LUXURY COSMETICS • CLEAN FORMULAS • "
          radius={90}
          className="text-[9px] tracking-[0.3em] font-medium"
          textClassName="text-foreground"
          duration={30}
        />
      </motion.div>

      {/* Rotating Circular Text — right side */}
      <motion.div
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 opacity-[0.08] hidden xl:block"
        style={{ y, opacity }}
      >
        <CircularText
          text="REBRACIEL • SINCE 2024 • INDIA • WORLDWIDE • "
          radius={80}
          className="text-[9px] tracking-[0.3em] font-medium"
          textClassName="text-foreground"
          duration={25}
          reverse
        />
      </motion.div>

      {/* Main Content Container */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10">
        <div className="container min-h-[100svh] flex flex-col lg:flex-row items-center justify-center py-20 lg:py-0 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left order-2 lg:order-1 flex flex-col">
            {/* Global Badge — converges from left */}
            <ConvergeReveal origin="left" delay={0.2} duration={0.8}>
              <motion.div
                className="inline-flex items-center gap-2.5 rounded-full bg-foreground/[0.03] backdrop-blur-sm border border-foreground/[0.08] px-5 py-2.5 mb-8"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <TextShimmer className="text-[11px] font-medium tracking-[0.15em] uppercase">
                  Worldwide Shipping Available
                </TextShimmer>
              </motion.div>
            </ConvergeReveal>

            {/* Luxury pill badge with shimmer */}
            <ConvergeReveal origin="left" delay={0.4} duration={0.8}>
              <motion.div
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary/[0.1] to-accent/[0.08] backdrop-blur-sm border border-primary/20 px-5 py-2.5 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <TextShimmer className="text-[11px] font-medium tracking-[0.15em] uppercase">
                  Premium Cosmetics & Skincare
                </TextShimmer>
              </motion.div>
            </ConvergeReveal>

            {/* Grand headline with enhanced gradient and kinetic feel */}
            <BlurIn delay={0.5}>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.9] tracking-tight text-foreground">
                Beauty That
                <br />
                <span className="text-muted-foreground/40">Transcends</span>{" "}
                <GradientText
                  as="span"
                  className="font-serif italic"
                  gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 30%, hsl(var(--brand)) 60%, hsl(var(--primary)) 100%)"
                >
                  <MorphingText
                    words={["Borders", "Time", "Expectations", "You"]}
                    interval={3000}
                    className="min-w-[180px] md:min-w-[280px]"
                  />
                </GradientText>
              </h1>
            </BlurIn>

            {/* Subheadline with text scramble effect */}
            <FadeIn delay={0.8}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mt-8 font-light leading-relaxed tracking-wide">
                Discover our curated collection of luxury cosmetics, skincare essentials, and beauty
                rituals from around the world.
                <span className="text-foreground font-normal"> Clean. Conscious. Couture.</span>
              </p>
            </FadeIn>

            {/* Text scramble decorative line */}
            <FadeIn delay={1.0}>
              <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
                <div className="h-px w-12 bg-gradient-to-r from-primary/40 to-transparent" />
                <TextScramble
                  text="MAKE EVERY DAY LUXURY"
                  className="text-[10px] tracking-[0.35em] text-primary/60 font-medium uppercase"
                  trigger="mount"
                  delay={1200}
                />
                <div className="h-px w-12 bg-gradient-to-l from-primary/40 to-transparent hidden sm:block" />
              </div>
            </FadeIn>

            {/* CTA row with Rainbow Button and Interactive Hover */}
            <FadeIn
              delay={1.1}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10"
            >
              <Magnetic strength={0.08}>
                <RainbowButton className="h-14 px-10 text-sm font-semibold tracking-wide shadow-2xl shadow-primary/20">
                  <Link href="/shop" className="flex items-center gap-2.5 text-white">
                    Shop Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                </RainbowButton>
              </Magnetic>
              <InteractiveHoverButton
                hoverText="Watch Film →"
                className="h-14 px-10 border-foreground/10 hover:shadow-lg backdrop-blur-sm"
              >
                <Link href="#story" className="flex items-center gap-2">
                  <Play className="w-4 h-4" /> Our Story
                </Link>
              </InteractiveHoverButton>
            </FadeIn>

            {/* Trust bar with animated stats */}
            <FadeIn delay={1.3}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 pt-8 border-t border-foreground/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground tracking-wide">
                    4.9/5
                  </span>
                </div>
                <div className="h-4 w-px bg-foreground/10 hidden sm:block" />
                <span className="text-xs font-medium text-muted-foreground tracking-wide flex items-center gap-1.5">
                  <NumberTicker value={50000} />+{" "}
                  <span className="hidden sm:inline">Global Customers</span>
                </span>
                <div className="h-4 w-px bg-foreground/10 hidden md:block" />
                <span className="text-xs font-medium text-muted-foreground hidden md:flex tracking-wide items-center gap-1.5">
                  <Truck className="w-3 h-3" /> Free Worldwide Shipping
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Content — Converging Product Cards with Tilt */}
          <ConvergeReveal origin="right" delay={0.3} duration={1.2} className="flex-1 max-w-lg order-1 lg:order-2">
            <div className="relative perspective-container">
              {/* Main Product Image with Clip Reveal */}
              <TiltCard
                tiltAmount={8}
                glareOpacity={0.12}
                glareColor="hsl(var(--primary))"
                borderRadius={28}
              >
                <motion.div
                  className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl shadow-primary/10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                >
                  <ClipReveal
                    direction="circle"
                    duration={1.6}
                    delay={0.5}
                    className="absolute inset-0"
                  >
                    <Image
                      src="https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Premium Cosmetics Collection"
                      fill
                      className="object-cover"
                    />
                  </ClipReveal>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-foreground/5 to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <span className="text-xs font-semibold text-foreground">New Arrival</span>
                  </motion.div>
                </motion.div>
              </TiltCard>

              {/* Secondary floating card — converges from bottom-left */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-52 z-10"
                initial={{ opacity: 0, x: -60, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard
                  spotlightColor="hsl(var(--primary) / 0.1)"
                  className="rounded-2xl bg-white/90 backdrop-blur-xl border border-foreground/[0.06] p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg font-bold">
                      #1
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">Best Seller</p>
                      <p className="text-[10px] text-muted-foreground">Hydrating Serum</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>

              {/* Tertiary floating card — converges from top-right */}
              <motion.div
                className="absolute -top-4 -right-4 w-48 z-10"
                initial={{ opacity: 0, x: 50, y: -40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-foreground/[0.06] p-3 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-muted to-muted/80 border-2 border-white flex items-center justify-center text-[8px] font-bold"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground">+2k today</span>
                  </div>
                  <p className="text-xs font-medium text-foreground">Join the beauty movement</p>
                </div>
              </motion.div>

              {/* Orbital dot decoration */}
              <motion.div
                className="absolute top-1/2 -left-12 w-3 h-3 rounded-full bg-primary/30"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 -right-10 w-2 h-2 rounded-full bg-accent/40"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </ConvergeReveal>
        </div>
      </motion.div>

      {/* Elegant scroll indicator with glow */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
