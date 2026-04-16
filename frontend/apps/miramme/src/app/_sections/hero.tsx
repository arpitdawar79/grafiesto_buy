"use client"

import { BlurIn, FadeIn, Magnetic, Parallax, ShimmerButton, TextReveal } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

const CREAM = "#F5E6D0"
const TERRACOTTA = "#C45A3C"
const DARK = "#14110D"

export function HeroSection() {
  return (
    <section className="relative h-[100svh] grid lg:grid-cols-2 overflow-hidden bg-[#14110D]">
      {/* Left — editorial imagery */}
      <FadeIn className="relative hidden lg:block">
        <Parallax speed={0.12} className="h-full">
          <img
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=1400&q=80"
            alt="Miramme atelier"
            className="w-full h-[115%] object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-60 transition-all duration-[1.5s]"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#14110D]" />
        <div className="absolute bottom-12 left-12 z-10">
          <p className="text-[8px] tracking-[0.5em] uppercase text-[#F5E6D0]/15">
            Spring / Summer 2026
          </p>
        </div>
      </FadeIn>

      {/* Right — typography & CTA */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 relative z-10 text-[#F5E6D0]">
        <FadeIn delay={0.2}>
          <p className="text-[8px] tracking-[1em] uppercase text-[#C45A3C]/40 mb-10">
            La Maison de Parfum
          </p>
        </FadeIn>

        <TextReveal
          as="h1"
          effect="clip"
          stagger={0.08}
          className="font-display text-[16vw] md:text-[10vw] lg:text-[6.5vw] font-extralight leading-[0.82] tracking-[-0.06em]"
        >
          MIRAMME
        </TextReveal>

        <BlurIn delay={1}>
          <p className="mt-8 text-sm font-light leading-relaxed text-[#F5E6D0]/25 max-w-sm">
            Where raw materials meet avant&#8209;garde design. Scent as invisible architecture.
          </p>
        </BlurIn>

        <FadeIn delay={1.4} className="mt-12 flex items-center gap-6">
          <Magnetic strength={0.06}>
            <ShimmerButton
              shimmerColor={CREAM}
              background={TERRACOTTA}
              borderRadius="0px"
              className="h-14 px-10 text-[8px] tracking-[0.5em] uppercase font-medium"
            >
              <Link href="/shop" className="flex items-center gap-3">
                Discover <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </ShimmerButton>
          </Magnetic>
          <Link
            href="/collections"
            className="text-[8px] tracking-[0.4em] uppercase text-[#F5E6D0]/20 hover:text-[#C45A3C]/60 transition-colors border-b border-[#F5E6D0]/10 pb-1"
          >
            Collections
          </Link>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-8 md:left-16 lg:left-20"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#C45A3C]/20" />
        </motion.div>
      </div>
    </section>
  )
}
