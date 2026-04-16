"use client"

import { AspectRatio, FadeIn, GlowCard, StaggerReveal, getBestSellers } from "@grafiesto/ui"
import Link from "next/link"

export function BestsellersSection() {
  const bestSellers = getBestSellers()

  return (
    <section className="py-32 md:py-48 bg-[#F5E6D0]">
      <div className="container flex justify-between items-end mb-16">
        <div>
          <FadeIn>
            <p className="text-[8px] tracking-[0.6em] uppercase text-[#C45A3C]/35 mb-3">
              The Icons
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tighter text-[#14110D]">
              Most Coveted
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <Link
            href="/shop?sort=popular"
            className="text-[9px] tracking-[0.4em] uppercase border-b border-[#14110D]/20 pb-1 hover:text-[#C45A3C] transition-colors hidden md:inline-block text-[#14110D]/60"
          >
            View All
          </Link>
        </FadeIn>
      </div>

      <div className="container">
        <StaggerReveal stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {bestSellers.slice(0, 4).map((p) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group block">
              <GlowCard className="overflow-hidden bg-[#EAD9C4] mb-5 border-none">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={p.images[0]?.url}
                    alt={p.title}
                    className="w-full h-full object-cover p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110 drop-shadow-xl"
                  />
                </AspectRatio>
                {p.badge && (
                  <span className="absolute top-4 left-4 text-[7px] uppercase tracking-[0.4em] border border-[#14110D]/8 bg-[#F5E6D0]/70 backdrop-blur-sm px-3 py-1 text-[#14110D]/60">
                    {p.badge}
                  </span>
                )}
              </GlowCard>
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-display text-sm tracking-tight text-[#14110D] group-hover:text-[#C45A3C] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-[#8B3A24]/30 mt-1">
                    {p.subtitle}
                  </p>
                </div>
                <p className="font-mono text-xs text-[#6B5D4F]/60 whitespace-nowrap">
                  ₹{p.variants[0].price / 100}
                </p>
              </div>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
