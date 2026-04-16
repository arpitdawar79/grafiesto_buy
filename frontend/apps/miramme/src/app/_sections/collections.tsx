"use client"

import {
    BorderBeam,
    FadeIn,
    getFeaturedCollections,
    Parallax,
    SAMPLE_PRODUCTS,
} from "@grafiesto/ui"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CollectionsSection() {
  const collections = getFeaturedCollections()
  const hero = SAMPLE_PRODUCTS[0]

  return (
    <section className="py-32 md:py-48 bg-[#F5E6D0]">
      <div className="container mb-16">
        <FadeIn>
          <p className="text-[8px] tracking-[0.6em] uppercase text-[#C45A3C]/40 mb-4">
            Curated Worlds
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl font-extralight tracking-tighter text-[#14110D]">
            The Chapters
          </h2>
        </FadeIn>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 auto-rows-[320px] md:auto-rows-[420px]">
          {/* Chapter I — hero card */}
          <FadeIn className="md:col-span-7 md:row-span-2 relative group overflow-hidden bg-[#14110D] cursor-pointer">
            <Link href={`/shop?collection=${collections[0]?.handle}`} className="absolute inset-0">
              <Parallax speed={0.12} className="h-full">
                <img
                  src={collections[0]?.image || hero?.images[0]?.url}
                  alt={collections[0]?.title}
                  className="w-full h-[120%] object-cover transition-all duration-1000 group-hover:scale-[1.02] grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110D] via-[#14110D]/20 to-transparent" />
              <BorderBeam duration={20} colorFrom="rgba(196,90,60,0.12)" colorTo="transparent" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <p className="text-[#C45A3C]/60 text-[8px] uppercase tracking-[0.6em]">Chapter I</p>
                <h3 className="text-[#F5E6D0] font-display text-3xl md:text-5xl font-extralight tracking-tighter mt-2">
                  {collections[0]?.title}
                </h3>
                <div className="flex items-center gap-2 mt-5 text-[#F5E6D0]/15 text-[10px] tracking-[0.3em] uppercase group-hover:text-[#C45A3C]/50 transition-colors duration-700">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Chapter II — image card */}
          <FadeIn
            delay={0.1}
            className="md:col-span-5 relative group overflow-hidden cursor-pointer"
          >
            <Link href={`/shop?collection=${collections[1]?.handle}`} className="absolute inset-0">
              <img
                src={collections[1]?.image || SAMPLE_PRODUCTS[1]?.images[0]?.url}
                alt={collections[1]?.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03] grayscale group-hover:grayscale-0 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110D]/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 z-10">
                <p className="text-[#C45A3C]/50 text-[8px] uppercase tracking-[0.6em]">
                  Chapter II
                </p>
                <h3 className="text-[#F5E6D0] font-display text-2xl font-extralight tracking-tighter mt-1">
                  {collections[1]?.title}
                </h3>
              </div>
            </Link>
          </FadeIn>

          {/* Chapter III — dark typographic card */}
          <FadeIn
            delay={0.2}
            className="md:col-span-5 relative group overflow-hidden bg-[#14110D] cursor-pointer"
          >
            <Link
              href={`/shop?collection=${collections[2]?.handle}`}
              className="absolute inset-0 flex flex-col justify-end p-10"
            >
              <div className="absolute top-6 right-8 font-display text-[120px] font-extralight leading-none text-[#F5E6D0]/[0.015] select-none">
                III
              </div>
              <div className="relative z-10">
                <p className="text-[#C45A3C]/30 text-[8px] uppercase tracking-[0.6em]">
                  Chapter III
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-extralight tracking-tighter mt-2 text-[#F5E6D0]">
                  {collections[2]?.title}
                </h3>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#F5E6D0]/10 mt-4 group-hover:text-[#C45A3C]/40 transition-colors duration-500 flex items-center gap-2">
                  Discover <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
