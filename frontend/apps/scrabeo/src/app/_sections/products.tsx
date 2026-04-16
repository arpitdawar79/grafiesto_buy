"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  FadeIn,
  StaggerReveal,
  AspectRatio,
  GlowCard,
  getBestSellers,
} from "@grafiesto/ui"

export function ProductsSection() {
  const products = getBestSellers()

  return (
    <section className="py-28 md:py-40 bg-[#EDE3D5]">
      <div className="container">
        <FadeIn className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#8B6D4A]/30 mb-3">
              Most Loved
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-normal tracking-tight text-[#2A2118]">
              Bestsellers
            </h2>
          </div>
          <Link
            href="/shop?sort=popular"
            className="text-[9px] tracking-[0.3em] uppercase text-[#2A2118]/50 hover:text-[#8B6D4A] transition-colors hidden md:flex items-center gap-2"
          >
            Shop All <ArrowRight className="w-3 h-3" />
          </Link>
        </FadeIn>

        <StaggerReveal stagger={0.08} className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.slice(0, 4).map((p) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group">
              <GlowCard className="bg-[#F4EBE0] border-[#D4C4AF] rounded-lg overflow-hidden mb-4">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={p.images[0]?.url}
                    alt={p.title}
                    className="w-full h-full object-cover p-6 mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
              </GlowCard>
              <h3 className="font-display text-sm tracking-tight text-[#2A2118] group-hover:text-[#8B6D4A] transition-colors">
                {p.title}
              </h3>
              <p className="text-[10px] text-[#8B6D4A]/40 mt-0.5">{p.subtitle}</p>
              <p className="font-mono text-xs text-[#5A4A3A]/60 mt-1.5">
                ₹{p.variants[0].price / 100}
              </p>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
