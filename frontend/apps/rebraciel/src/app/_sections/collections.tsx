"use client"

import {
  BlurIn,
  FadeIn,
  GradientText,
  InteractiveHoverButton,
  getFeaturedCollections,
} from "@grafiesto/ui"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const easeOut = [0.22, 1, 0.36, 1]

export function CollectionsSection() {
  const collections = getFeaturedCollections()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section className="relative py-24 lg:py-36 bg-[#0c0c14] overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-rose-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-400 font-semibold">
                Curated Worlds
              </span>
            </div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight text-white">
              Collections We{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, #f43f5e, #c084fc, #fb923c)"
              >
                Adore
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-white/40 mt-5 text-base max-w-md mx-auto">
              Each collection is a world unto itself — a curated journey through scent.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {collections.map((col, i) => {
            const isHero = i === 0
            const isWide = i === 1 || i === 2
            const isFull = i === 3

            return (
              <motion.div
                key={col.id}
                className={
                  isHero
                    ? "md:col-span-2 lg:col-span-7 lg:row-span-2"
                    : isWide
                      ? "lg:col-span-5"
                      : "md:col-span-2 lg:col-span-12"
                }
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: i * 0.12, ease: easeOut }}
              >
                <Link
                  href={`/shop?collection=${col.handle}`}
                  className="group relative block overflow-hidden rounded-2xl lg:rounded-3xl border border-white/[0.06] hover:border-white/[0.15] transition-colors duration-500"
                >
                  {/* Image Container */}
                  <div className={isHero ? "aspect-[3/4] lg:aspect-[4/5]" : isWide ? "aspect-[4/3]" : "aspect-[21/9]"}>
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={isHero ? "(max-width:1024px) 100vw,58vw" : isWide ? "(max-width:1024px) 50vw,42vw" : "100vw"}
                    />
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    {isHero && <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-violet-500/10" />}
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-rose-500/10 to-transparent pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8">
                    {isHero && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
                        className="inline-flex items-center gap-1.5 mb-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-rose-400 font-semibold">Featured</span>
                      </motion.div>
                    )}
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-medium mb-1 block">
                      {col.productCount} Products
                    </span>
                    <h3 className="font-serif text-xl lg:text-2xl font-normal text-white tracking-tight group-hover:text-rose-200 transition-colors duration-300">
                      {col.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-1 max-w-xs hidden lg:block">{col.subtitle}</p>
                    <span className="inline-flex items-center gap-2 mt-3 text-[11px] font-medium text-white/50 group-hover:text-rose-300 transition-colors duration-300">
                      Explore <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-12">
          <InteractiveHoverButton hoverText="Discover All →" className="h-12 px-8 border-white/10 text-white/70">
            <Link href="/collections">View All Collections</Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
