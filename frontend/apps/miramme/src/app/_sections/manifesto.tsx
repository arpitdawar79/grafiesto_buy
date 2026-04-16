"use client"

import { FadeIn, GradientText, Parallax } from "@grafiesto/ui"

const TERRACOTTA = "#C45A3C"
const TERRA_DEEP = "#8B3A24"

export function ManifestoSection() {
  return (
    <section className="grid lg:grid-cols-2 min-h-[80vh]">
      {/* Left — full-bleed editorial image */}
      <FadeIn className="relative overflow-hidden hidden lg:block">
        <Parallax speed={0.1} className="h-full">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=1200&q=80"
            alt="Fragrance ingredients"
            className="w-full h-[120%] object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-[#14110D]/20" />
      </FadeIn>

      {/* Right — manifesto quote */}
      <div className="flex items-center bg-[#F5E6D0] px-8 md:px-16 lg:px-20 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-8 right-8 font-display text-[25vw] lg:text-[15vw] font-extralight text-[#14110D]/[0.015] select-none leading-none pointer-events-none">
          M
        </div>

        <div className="relative z-10 max-w-xl">
          <FadeIn>
            <div className="w-10 h-px bg-[#C45A3C]/30 mb-12" />
          </FadeIn>

          <FadeIn delay={0.15}>
            <blockquote className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-extralight leading-[1.4] tracking-tight text-[#14110D]">
              &ldquo;A collision of raw materials &amp;{" "}
              <GradientText
                gradient={`linear-gradient(135deg, ${TERRACOTTA}, ${TERRA_DEEP})`}
                className="italic font-normal"
                animate
              >
                avant&#8209;garde
              </GradientText>{" "}
              design — scent as <span className="italic">invisible architecture</span>.&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-14 text-[9px] tracking-[0.6em] uppercase text-[#8B3A24]/30">
              — The House Manifesto, est. 2018
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
