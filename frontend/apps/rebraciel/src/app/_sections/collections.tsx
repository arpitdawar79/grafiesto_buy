"use client"

import {
    BlurIn,
    FadeIn,
    GradientText,
    InteractiveHoverButton,
    StaggerReveal,
    getFeaturedCollections
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Layers } from "lucide-react"
import Link from "next/link"

export function CollectionsSection() {
  const collections = getFeaturedCollections()

  return (
    <section className="relative py-28 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* Ambient gradient accents on dark bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[150px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 mb-6">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Curated Worlds
              </span>
            </div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Collections We{" "}
              <GradientText as="span" className="font-serif italic">
                Adore
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-background/50 mt-6 text-base leading-relaxed max-w-md mx-auto">
              Each collection is a world unto itself — a curated journey through scent.
            </p>
          </FadeIn>
        </div>

        {/* Bento collection grid */}
        <StaggerReveal
          stagger={0.1}
          className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[220px] lg:auto-rows-[280px]"
        >
          {collections.slice(0, 4).map((col, i) => {
            const span =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-5"
                    : "col-span-2 lg:col-span-12 lg:!h-[200px]"

            return (
              <Link
                key={col.id}
                href={`/shop?collection=${col.handle}`}
                className={`relative group overflow-hidden rounded-2xl lg:rounded-3xl ${span}`}
              >
                {/* Parallax-like zoom on hover */}
                <motion.img
                  src={col.image}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />

                {/* Luxury gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 transition-all duration-500 group-hover:from-black/80" />

                {/* Shine border effect on first card */}
                {i === 0 && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-primary/20" />
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium mb-2 block">
                    {col.productCount} Products
                  </span>
                  <h3 className="font-serif text-xl lg:text-3xl font-normal text-white tracking-tight">
                    {col.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-1.5 hidden lg:block max-w-xs leading-relaxed">
                    {col.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[11px] font-medium text-white/60 group-hover:text-primary transition-colors duration-300">
                    Explore Collection{" "}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </StaggerReveal>

        {/* Bottom CTA */}
        <FadeIn delay={0.3} className="text-center mt-14">
          <InteractiveHoverButton
            hoverText="Discover All →"
            className="h-13 px-10 border-background/20 text-background"
          >
            <Link href="/collections" className="flex items-center gap-2">
              View All Collections <ArrowRight className="w-4 h-4" />
            </Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
