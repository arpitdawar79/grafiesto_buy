"use client"

import { Marquee, MarqueeItem } from "@grafiesto/ui"
import { Diamond } from "lucide-react"

const values = [
  "Handcrafted in India",
  "100% Vegan & Cruelty-Free",
  "12+ Hour Longevity",
  "Sustainable Luxury",
  "Complimentary Shipping",
  "30-Day Returns",
  "Award-Winning Scents",
  "Ethically Sourced",
]

export function MarqueeSection() {
  return (
    <div className="relative bg-foreground text-background py-4 overflow-hidden">
      {/* Subtle gradient shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.05] to-transparent animate-[shimmer-slide_8s_ease-in-out_infinite] pointer-events-none" />
      <Marquee speed={25} pauseOnHover>
        {values.map((t) => (
          <MarqueeItem key={t} className="mx-10">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-70">
              {t}
            </span>
            <Diamond className="w-2 h-2 mx-10 opacity-20 text-primary fill-primary" />
          </MarqueeItem>
        ))}
      </Marquee>
    </div>
  )
}
