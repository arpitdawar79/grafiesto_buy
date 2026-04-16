"use client"

import { Marquee, MarqueeItem } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Diamond, Sparkles } from "lucide-react"

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
    <div className="relative bg-foreground text-background py-5 overflow-hidden">
      {/* Animated gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Subtle gradient shimmer overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.08] to-transparent pointer-events-none"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing center highlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <Marquee speed={30} pauseOnHover>
        {values.map((t, i) => (
          <MarqueeItem key={t} className="mx-10 flex items-center">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity duration-300">
                {t}
              </span>
              {i % 4 === 0 ? (
                <Sparkles className="w-3 h-3 opacity-40 text-primary" />
              ) : (
                <Diamond className="w-2 h-2 opacity-30 text-primary fill-primary" />
              )}
            </motion.div>
          </MarqueeItem>
        ))}
      </Marquee>
    </div>
  )
}
