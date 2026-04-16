"use client"

import { FadeIn, getFeaturedCollections, SAMPLE_PRODUCTS, StaggerReveal } from "@grafiesto/ui"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CollectionsSection() {
  const collections = getFeaturedCollections()

  return (
    <section className="py-28 md:py-40 bg-[#FAF4E6]">
      <div className="container">
        <FadeIn className="mb-16">
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#A52A1A]/30 mb-3">
            Sacred Collections
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#1A0F08]">
            Ritual <span className="italic text-[#A52A1A]">Worlds</span>
          </h2>
        </FadeIn>

        <StaggerReveal
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[280px] md:auto-rows-[360px]"
        >
          {collections.slice(0, 4).map((col, i) => {
            const span =
              i === 0 ? "md:col-span-7 md:row-span-2" : i === 3 ? "md:col-span-12" : "md:col-span-5"

            return (
              <Link
                key={col.id}
                href={`/shop?collection=${col.handle}`}
                className={`relative group overflow-hidden ${span}`}
              >
                <img
                  src={col.image || SAMPLE_PRODUCTS[i]?.images[0]?.url}
                  alt={col.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F08]/70 via-[#1A0F08]/10 to-transparent" />
                <div className="absolute inset-0 border border-[#D4A84B]/8" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <p className="text-[8px] tracking-[0.4em] uppercase text-[#D4A84B]/50 mb-1">
                    {col.subtitle}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-normal tracking-tight text-[#FAF4E6]">
                    {col.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] tracking-[0.3em] uppercase text-[#FAF4E6]/30 group-hover:text-[#D4A84B]/60 transition-colors">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            )
          })}
        </StaggerReveal>
      </div>
    </section>
  )
}
