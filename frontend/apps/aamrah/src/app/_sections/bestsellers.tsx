"use client"

import { AspectRatio, FadeIn, getBestSellers, StaggerReveal } from "@grafiesto/ui"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BestsellersSection() {
  const bestSellers = getBestSellers()

  return (
    <section className="py-28 md:py-40 bg-[#EDE1CC]">
      <div className="container">
        <FadeIn className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#A52A1A]/30 mb-3">
              Most Revered
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#1A0F08]">
              Bestsellers
            </h2>
          </div>
          <Link
            href="/shop?sort=popular"
            className="text-[9px] tracking-[0.3em] uppercase text-[#1A0F08]/50 hover:text-[#A52A1A] transition-colors hidden md:flex items-center gap-2"
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </FadeIn>

        <StaggerReveal stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {bestSellers.slice(0, 4).map((p) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group block">
              <div className="mb-4 overflow-hidden bg-[#FAF4E6] border border-[#D4A84B]/8">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={p.images[0]?.url}
                    alt={p.title}
                    className="w-full h-full object-cover p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <h3 className="font-display text-sm tracking-tight text-[#1A0F08] group-hover:text-[#A52A1A] transition-colors">
                {p.title}
              </h3>
              <p className="text-[10px] text-[#A52A1A]/30 mt-0.5">{p.subtitle}</p>
              <p className="font-mono text-xs text-[#5A2A1A]/50 mt-1.5">
                ₹{p.variants[0].price / 100}
              </p>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
