"use client"

import {
  BlurIn,
  FadeIn,
  GradientText,
  MorphingText,
  ParticleField,
  RetroGrid,
  Ripple,
  ShimmerButton,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Gift, Mail, Sparkles } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="relative bg-foreground text-background min-h-[60vh] flex items-center py-28 overflow-hidden">
      {/* RetroGrid background */}
      <RetroGrid
        className="opacity-[0.03]"
        angle={60}
        cellSize={80}
        color="hsl(var(--primary) / 0.3)"
      />

      {/* ParticleField overlay */}
      <ParticleField
        count={15}
        color="hsl(var(--primary))"
        speed="slow"
        className="opacity-[0.04]"
      />

      {/* Ripple rings */}
      <Ripple color="hsl(var(--primary) / 0.03)" count={3} />

      {/* Ambient gradient blobs with animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent/[0.05] blur-[100px]"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container max-w-xl text-center relative z-10">
        <FadeIn>
          <motion.div
            className="w-16 h-16 rounded-full bg-primary/[0.12] flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="w-7 h-7 text-primary" />
          </motion.div>
        </FadeIn>

        <BlurIn delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            Be the First to{" "}
            <GradientText
              as="span"
              className="font-serif italic"
              gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
            >
              <MorphingText
                words={["Experience", "Discover", "Indulge", "Explore"]}
                interval={3000}
                className="min-w-[160px] md:min-w-[220px]"
              />
            </GradientText>
          </h2>
        </BlurIn>

        <FadeIn delay={0.25}>
          <p className="text-background/50 mt-5 text-sm leading-relaxed max-w-sm mx-auto">
            Join our inner circle for early access to new launches, exclusive offers, and curated
            fragrance stories.
          </p>
        </FadeIn>

        {/* Benefits pills */}
        <FadeIn delay={0.3} className="mt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: Sparkles, label: "Early Access" },
              { icon: Gift, label: "Exclusive Offers" },
            ].map((benefit, i) => (
              <motion.div
                key={benefit.label}
                className="inline-flex items-center gap-2 bg-background/[0.06] border border-background/[0.1] rounded-full px-3 py-1.5 text-[11px] text-background/70"
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <benefit.icon className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <form className="mt-10 flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-background/30" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-background/[0.06] border border-background/[0.1] rounded-full pl-11 pr-4 py-3.5 text-sm outline-none placeholder:text-background/30 focus:border-primary/50 focus:bg-background/[0.08] transition-all backdrop-blur-sm"
              />
            </div>
            <ShimmerButton
              shimmerColor="hsl(var(--primary-foreground))"
              background="hsl(var(--primary))"
              className="rounded-full h-[50px] px-7 text-sm font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-shadow duration-300"
            >
              <ArrowRight className="w-4 h-4" />
            </ShimmerButton>
          </form>
          <p className="text-[10px] text-background/30 mt-4 tracking-wide">
            No spam, ever. Unsubscribe anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
