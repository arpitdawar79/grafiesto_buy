"use client"

import {
    BlurIn,
    FadeIn,
    GradientText,
    NumberTicker,
    PulsatingButton,
    ShineBorder,
    SpotlightCard,
    WordRotate
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Droplets, Flame, Heart, Leaf, Sparkles } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    desc: "Rare botanicals ethically harvested from heritage farms across India and beyond",
    color: "hsl(var(--primary))",
  },
  {
    icon: Droplets,
    title: "Small-Batch Atelier",
    desc: "Each fragrance handcrafted in limited quantities in our Mumbai perfumery studio",
    color: "hsl(var(--accent))",
  },
  {
    icon: Flame,
    title: "12+ Hour Longevity",
    desc: "Concentrated formulas that evolve on your skin throughout the day",
    color: "hsl(var(--brand))",
  },
  {
    icon: Heart,
    title: "Vegan & Cruelty-Free",
    desc: "Certified cruelty-free — luxury that respects all living beings",
    color: "hsl(var(--primary))",
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
      {/* Ambient accents with animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <motion.div
          className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[8%] w-[250px] h-[250px] rounded-full bg-accent/[0.03] blur-[80px]"
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header with WordRotate effect */}
        <div className="text-center mb-20">
          <FadeIn>
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/[0.08] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Our Philosophy
              </span>
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95] mt-2 max-w-3xl mx-auto">
              Crafted with{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
              >
                <WordRotate
                  words={["Intention", "Passion", "Purpose", "Vision"]}
                  duration={3000}
                  className="min-w-[140px] md:min-w-[180px]"
                />
              </GradientText>
              <br className="hidden sm:block" />
              <span className="text-muted-foreground">, Worn with Confidence</span>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 text-base max-w-md mx-auto leading-relaxed">
              Every fragrance tells a story of heritage, craftsmanship, and uncompromising quality.
            </p>
          </FadeIn>
        </div>

        {/* Values grid with enhanced SpotlightCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {values.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <SpotlightCard
                spotlightColor={`${item.color}14`}
                className="h-full rounded-2xl border-foreground/[0.04] p-7 bg-gradient-to-b from-card to-muted/30 group hover:border-primary/10 transition-colors duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border"
                  style={{
                    backgroundColor: `${item.color}10`,
                    borderColor: `${item.color}20`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </motion.div>
                <h3 className="font-semibold text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        {/* Stats bar with enhanced ShineBorder */}
        <FadeIn delay={0.3}>
          <ShineBorder
            borderRadius={24}
            borderWidth={1}
            duration={10}
            color={["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--brand))"]}
            className="mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-8 lg:px-12">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <span className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
                    <NumberTicker value={s.value} delay={0.3 + i * 0.15} />
                    <span className="text-primary">{s.suffix}</span>
                  </span>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-3 font-medium">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </ShineBorder>
        </FadeIn>

        {/* CTA with PulsatingButton */}
        <FadeIn delay={0.5} className="text-center mt-14">
          <Link href="/about">
            <PulsatingButton
              pulseColor="hsl(var(--primary) / 0.5)"
              duration={2.5}
              className="h-14 px-10 rounded-full bg-gradient-to-r from-primary to-accent"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Our Story
            </PulsatingButton>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
