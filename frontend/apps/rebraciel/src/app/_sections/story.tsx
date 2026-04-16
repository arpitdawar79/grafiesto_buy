"use client"

import {
    BlurIn,
    FadeIn,
    GradientText,
    NumberTicker,
    ShineBorder,
    SpotlightCard,
} from "@grafiesto/ui"
import { Droplets, Flame, Heart, Leaf } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Rare botanicals ethically harvested from heritage farms across India and beyond",
  },
  {
    icon: Droplets,
    title: "Small-Batch Atelier",
    desc: "Each fragrance handcrafted in limited quantities in our Mumbai perfumery studio",
  },
  {
    icon: Flame,
    title: "12+ Hour Longevity",
    desc: "Concentrated formulas that evolve on your skin throughout the day",
  },
  {
    icon: Heart,
    title: "Vegan & Cruelty-Free",
    desc: "Certified cruelty-free — luxury that respects all living beings",
  },
]

const stats = [
  { value: 25000, suffix: "+", label: "Connoisseurs" },
  { value: 4.9, suffix: "/5", label: "Average Rating" },
  { value: 100, suffix: "%", label: "Natural Ingredients" },
  { value: 150, suffix: "+", label: "Rare Ingredients" },
]

export function StorySection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
              Our Philosophy
            </span>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95] mt-5 max-w-2xl mx-auto">
              Crafted with{" "}
              <GradientText as="span" className="font-serif italic">
                Intention
              </GradientText>
              , Worn with Confidence
            </h2>
          </BlurIn>
        </div>

        {/* Values grid with SpotlightCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {values.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <SpotlightCard
                spotlightColor="hsl(var(--primary) / 0.08)"
                className="h-full rounded-2xl border-foreground/[0.04] p-7 bg-gradient-to-b from-card to-muted/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/[0.06] border border-primary/[0.08] flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm tracking-wide">{item.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar with ShineBorder */}
        <FadeIn delay={0.3}>
          <ShineBorder
            borderRadius={24}
            borderWidth={1}
            duration={12}
            color={["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--brand))"]}
            className="mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-8 lg:px-12">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center">
                  <span className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
                    <NumberTicker value={s.value} delay={0.3 + i * 0.15} />
                    <span className="text-primary">{s.suffix}</span>
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-3 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ShineBorder>
        </FadeIn>
      </div>
    </section>
  )
}
