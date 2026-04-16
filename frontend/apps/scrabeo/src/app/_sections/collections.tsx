"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  FadeIn,
  StaggerReveal,
  AspectRatio,
  SpotlightCard,
  getFeaturedCollections,
} from "@grafiesto/ui"

export function CollectionsSection() {
  const collections = getFeaturedCollections()

  return (
    <section className="py-28 md:py-40 bg-[#F4EBE0]">
      <div className="container">
        <FadeIn className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#8B6D4A]/30 mb-3">
              Worlds
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#2A2118]">
              Collections
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-[9px] tracking-[0.3em] uppercase text-[#2A2118]/50 hover:text-[#8B6D4A] transition-colors hidden md:flex items-center gap-2"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </FadeIn>

        <StaggerReveal stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {collections.slice(0, 3).map((col) => (
            <Link key={col.id} href={`/shop?collection=${col.handle}`} className="group">
              <SpotlightCard className="overflow-hidden bg-[#EDE3D5] border-[#D4C4AF] rounded-lg h-full">
                <AspectRatio ratio={4 / 5}>
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2118]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-display text-xl text-[#F4EBE0] tracking-tight">
                      {col.title}
                    </h3>
                    <p className="text-[#F4EBE0]/50 text-xs mt-1 line-clamp-2">
                      {col.description}
                    </p>
                    <span className="text-[8px] tracking-[0.3em] uppercase text-[#C4A882]/60 mt-3 flex items-center gap-2 group-hover:text-[#C4A882] transition-colors">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </AspectRatio>
              </SpotlightCard>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
