"use client"

import { BlurIn, FadeIn, PulsatingButton, Ripple, TextReveal, WordRotate } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden bg-[#1A0F08] text-[#FAF4E6]">
      <Ripple count={3} color="rgba(212,168,75,0.02)" className="opacity-40" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4A84B]/[0.015] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <FadeIn delay={0.2}>
          <p className="text-[9px] tracking-[1em] uppercase text-[#D4A84B]/20 mb-12">
            <WordRotate
              words={["धूप · Dhoop", "अगरबत्ती · Agarbatti", "इत्र · Attar", "हवन · Hawan"]}
              duration={3500}
            />
          </p>
        </FadeIn>

        <TextReveal
          as="h1"
          effect="clip"
          stagger={0.1}
          className="font-display text-[15vw] md:text-[11vw] lg:text-[8vw] font-normal leading-[0.85] tracking-tight"
        >
          AAMRAH
        </TextReveal>

        <BlurIn delay={1.2}>
          <p className="mt-10 text-sm md:text-base font-light text-[#FAF4E6]/20 max-w-md mx-auto leading-relaxed">
            Sacred fragrances for devotion, meditation &amp; everyday ritual — rooted in centuries
            of Indian tradition
          </p>
        </BlurIn>

        <FadeIn delay={1.6} className="mt-14 flex items-center justify-center gap-6">
          <PulsatingButton
            pulseColor="rgba(212,168,75,0.12)"
            className="bg-[#A52A1A] text-[#FAF4E6] rounded-sm px-10 py-4 text-[9px] tracking-[0.5em] uppercase font-medium"
          >
            <Link href="/shop">Enter the Temple</Link>
          </PulsatingButton>
          <Link
            href="/collections"
            className="text-[8px] tracking-[0.4em] uppercase text-[#FAF4E6]/15 hover:text-[#D4A84B]/40 transition-colors border-b border-[#FAF4E6]/8 pb-1"
          >
            Collections
          </Link>
        </FadeIn>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-[#D4A84B]/15" />
        </motion.div>
      </div>
    </section>
  )
}
