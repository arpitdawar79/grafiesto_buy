"use client"

import {
    AnimatedBorder,
    BlurIn,
    FadeIn,
    GlowCard,
    GradientText,
    InteractiveHoverButton,
    StaggerReveal,
    getFeaturedCollections,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Layers, Sparkles } from "lucide-react"
import Link from "next/link"

export function CollectionsSection() {
  const collections = getFeaturedCollections()

  return (
    <section className="relative py-28 lg:py-40 bg-foreground text-background overflow-hidden">
      {/* Ambient gradient accents on dark bg with animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[150px]"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[120px]"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-20">
          <FadeIn>
            <motion.div
              className="inline-flex items-center gap-2.5 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/[0.12] flex items-center justify-center">
                <Layers className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Curated Worlds
              </span>
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Collections We{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
              >
                Adore
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-background/50 mt-6 text-base leading-relaxed max-w-md mx-auto">
              Each collection is a world unto itself — a curated journey through scent.
            </p>
          </FadeIn>
        </div>

        {/* Bento collection grid with AnimatedBorder on featured items */}
        <StaggerReveal
          stagger={0.1}
          className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[220px] lg:auto-rows-[280px]"
        >
          {collections.slice(0, 4).map((col, i) => {
            const span =
              i === 0
                ? "lg:col-span-7 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-5"
                    : "col-span-2 lg:col-span-12 lg:!h-[200px]"

            const isFeatured = i === 0

            return (
              <motion.div
                key={col.id}
                className={span}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/shop?collection=${col.handle}`}
                  className="relative group block h-full overflow-hidden rounded-2xl lg:rounded-3xl"
                >
                  {/* Animated border for featured collection */}
                  {isFeatured ? (
                    <AnimatedBorder
                      borderWidth={2}
                      duration={6}
                      borderRadius="24px"
                      className="h-full"
                    >
                      <div className="relative h-full overflow-hidden">
                        <motion.img
                          src={col.image}
                          alt={col.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                      </div>
                    </AnimatedBorder>
                  ) : (
                    <GlowCard
                      glowColor="hsl(var(--primary) / 0.2)"
                      spread={60}
                      className="h-full rounded-2xl lg:rounded-3xl overflow-hidden"
                    >
                      <motion.img
                        src={col.image}
                        alt={col.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5 transition-all duration-500 group-hover:from-black/80" />
                    </GlowCard>
                  )}

                  {/* Shine border effect on featured card */}
                  {isFeatured && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.15)]" />
                    </div>
                  )}

                  {/* Content with enhanced typography */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
                    {isFeatured && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-1.5 mb-3"
                      >
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-semibold">
                          Featured
                        </span>
                      </motion.div>
                    )}
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium mb-2 block">
                      {col.productCount} Products
                    </span>
                    <h3 className="font-serif text-xl lg:text-3xl font-normal text-white tracking-tight group-hover:text-primary/90 transition-colors duration-300">
                      {col.title}
                    </h3>
                    <p className="text-white/50 text-xs mt-1.5 hidden lg:block max-w-xs leading-relaxed">
                      {col.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 text-[11px] font-medium text-white/60 group-hover:text-primary transition-colors duration-300">
                      Explore Collection{" "}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </StaggerReveal>

        {/* Bottom CTA with enhanced styling */}
        <FadeIn delay={0.3} className="text-center mt-14">
          <InteractiveHoverButton
            hoverText="Discover All →"
            className="h-14 px-10 border-background/20 text-background backdrop-blur-sm"
          >
            <Link href="/collections" className="flex items-center gap-2">
              View All Collections <ArrowRight className="w-4 h-4" />
            </Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
