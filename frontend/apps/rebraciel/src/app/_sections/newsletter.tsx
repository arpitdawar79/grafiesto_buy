"use client"

import {
    BlurIn,
    FadeIn,
    GradientText,
    MorphingText,
    ParticleField,
    Ripple,
    ShimmerButton
} from "@grafiesto/ui"
import { ArrowRight, Sparkles } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="relative bg-foreground text-background min-h-[60vh] flex items-center py-28 overflow-hidden">
      {/* Background layers */}
      <ParticleField
        count={20}
        color="hsl(var(--primary))"
        speed="slow"
        className="opacity-[0.06]"
      />
      <Ripple color="hsl(var(--primary) / 0.04)" count={4} />

      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="container max-w-xl text-center relative z-10">
        <FadeIn>
          <Sparkles className="w-5 h-5 text-primary mx-auto mb-6 opacity-60" />
        </FadeIn>

        <BlurIn delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight">
            Be the First to{" "}
            <GradientText as="span" className="font-serif italic">
              <MorphingText
                words={["Experience", "Discover", "Indulge"]}
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

        <FadeIn delay={0.4}>
          <form className="mt-10 flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-background/[0.06] border border-background/[0.1] rounded-full px-6 py-3.5 text-sm outline-none placeholder:text-background/30 focus:border-primary/50 focus:bg-background/[0.08] transition-all backdrop-blur-sm"
            />
            <ShimmerButton
              shimmerColor="hsl(var(--primary-foreground))"
              background="hsl(var(--primary))"
              className="rounded-full h-[50px] px-7 text-sm font-semibold shadow-xl shadow-primary/20"
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
