"use client"

import { Marquee, MarqueeItem } from "@grafiesto/ui"

const words = [
  "Fragrance",
  "Architecture",
  "Atelier",
  "Oud",
  "Amber",
  "Sandalwood",
  "Rose",
  "Vetiver",
]

export function MarqueeBand() {
  return (
    <div className="bg-[#14110D] border-y border-[#F5E6D0]/[0.04] py-5">
      <Marquee speed={30} pauseOnHover>
        {words.map((w) => (
          <MarqueeItem key={w} className="mx-6 md:mx-10">
            <span className="font-display text-sm md:text-base font-extralight tracking-[0.3em] uppercase text-[#F5E6D0]/[0.08] select-none">
              {w}
            </span>
            <span className="mx-6 md:mx-10 text-[#C45A3C]/10 text-[10px]">◆</span>
          </MarqueeItem>
        ))}
      </Marquee>
    </div>
  )
}
