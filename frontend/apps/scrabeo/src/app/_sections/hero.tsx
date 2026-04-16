"use client"

import { BlurIn, FadeIn, GradientText, Parallax, ShimmerButton, TextReveal } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] overflow-hidden bg-[#2A2118]">
      {/* Full-bleed parallax background */}
      <Parallax speed={0.3} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=2000&q=80"
          alt="Interior with scent"
          className="w-full h-[130%] object-cover opacity-40"
        />
      </Parallax>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A2118] via-[#2A2118]/50 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 container">
        <FadeIn delay={0.2}>
          <p className="text-[9px] tracking-[0.8em] uppercase text-[#C4A882]/40 mb-6">
            House Fragrance for Considered Interiors
          </p>
        </FadeIn>

        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-normal leading-[0.88] tracking-tight text-[#F4EBE0]">
          <TextReveal as="span" effect="clip" stagger={0.08}>
            The
          </TextReveal>{" "}
          <GradientText
            gradient="linear-gradient(135deg, #C4A882, #8B6D4A)"
            animate
            className="italic"
          >
            invisible
          </GradientText>
          <br />
          <TextReveal as="span" effect="clip" stagger={0.08} delay={0.3}>
            architecture
          </TextReveal>
        </h1>

        <BlurIn delay={1}>
          <p className="text-[#C4A882]/50 text-sm md:text-base font-light max-w-md mt-8 leading-relaxed">
            Reed diffusers, room sprays &amp; refills for homes that take scent seriously.
          </p>
        </BlurIn>

        <FadeIn delay={1.3} className="mt-10">
          <ShimmerButton
            shimmerColor="#C4A882"
            background="#F4EBE0"
            borderRadius="4px"
            className="h-14 px-10 text-[10px] tracking-[0.4em] uppercase font-medium text-[#2A2118]"
          >
            <Link href="/shop" className="flex items-center gap-3">
              Explore Collection
            </Link>
          </ShimmerButton>
        </FadeIn>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-[#C4A882]/20" />
        </motion.div>
      </div>
    </section>
  )
}
