"use client"

import {
  FadeIn,
  NumberTicker,
  Marquee,
  MarqueeItem,
} from "@grafiesto/ui"

export function PhilosophySection() {
  return (
    <>
      <section className="py-32 md:py-44 bg-[#F4EBE0]">
        <div className="container max-w-4xl text-center">
          <FadeIn>
            <p className="text-[9px] tracking-[0.6em] uppercase text-[#8B6D4A]/30 mb-8">
              Philosophy
            </p>
            <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-normal leading-[1.4] tracking-tight text-[#2A2118]">
              We believe scent is the{" "}
              <span className="italic text-[#8B6D4A]">sixth wall</span> of a room.
              Every space deserves a fragrance as considered as its furniture.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-16 bg-[#2A2118] text-[#F4EBE0]">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { n: 48, label: "Natural ingredients", suffix: "+" },
            { n: 180, label: "Days avg. lifespan" },
            { n: 12, label: "Signature scents" },
            { n: 99, label: "Sustainable packaging", suffix: "%" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <span className="font-display text-4xl md:text-5xl font-normal tracking-tighter block">
                  <NumberTicker value={s.n} delay={0.4} />
                  {s.suffix && <span className="text-[#C4A882]/40">{s.suffix}</span>}
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#F4EBE0]/20 mt-3 block">
                  {s.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Ghost marquee */}
      <div className="py-10 bg-[#F4EBE0] border-b border-[#2A2118]/[0.04] overflow-hidden">
        <Marquee speed={40} pauseOnHover>
          {Array.from({ length: 6 }).map((_, i) => (
            <MarqueeItem key={i} className="mx-8">
              <span className="font-display text-7xl md:text-8xl font-normal tracking-tight text-[#2A2118]/[0.025] select-none">
                Scrabeo
              </span>
            </MarqueeItem>
          ))}
        </Marquee>
      </div>
    </>
  )
}
