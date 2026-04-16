"use client"

import { FadeIn, Magnetic, Parallax, SAMPLE_PRODUCTS, ShimmerButton } from "@grafiesto/ui"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function FeaturedProductSection() {
  const hero = SAMPLE_PRODUCTS[0]

  return (
    <section className="grid lg:grid-cols-2 min-h-[100vh]">
      {/* Image half */}
      <FadeIn className="relative bg-[#EAD9C4] overflow-hidden">
        <Parallax speed={0.15} className="h-full min-h-[60vh] lg:min-h-0">
          <img
            src={hero?.images[0]?.url}
            alt={hero?.title}
            className="w-full h-[120%] object-cover"
          />
        </Parallax>
      </FadeIn>

      {/* Content half */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 bg-[#F5E6D0]">
        <FadeIn>
          <p className="text-[9px] tracking-[0.6em] uppercase text-[#C45A3C]/40 mb-10">
            Editor&rsquo;s Icon
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tighter leading-[0.9] text-[#14110D]">
            {hero?.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[#6B5D4F] font-light text-sm leading-relaxed mt-6 max-w-md">
            {hero?.subtitle}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex text-[#C45A3C]/40">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-[10px] text-[#8B3A24]/30">{hero?.reviewCount} reviews</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="font-display text-2xl tracking-tighter mt-6 text-[#14110D]">
            ₹{(hero?.variants[0]?.price || 0) / 100}
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10">
          <Magnetic strength={0.08}>
            <ShimmerButton
              shimmerColor="#F5E6D0"
              background="#14110D"
              borderRadius="0px"
              className="h-14 px-10 text-[9px] tracking-[0.5em] uppercase font-medium"
            >
              <Link href={`/product/${hero?.handle}`} className="flex items-center gap-3">
                Add to Bag <ArrowRight className="w-4 h-4" />
              </Link>
            </ShimmerButton>
          </Magnetic>
        </FadeIn>
      </div>
    </section>
  )
}
