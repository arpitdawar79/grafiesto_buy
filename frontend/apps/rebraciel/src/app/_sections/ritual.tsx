"use client"

import {
  BlurIn,
  FadeIn,
  GradientText,
  MagicCard,
  Parallax,
  TextReveal,
} from "@grafiesto/ui"
import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "Explore our curated collection of handcrafted fragrances, each telling a unique story of Indian heritage.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
  },
  {
    number: "02",
    title: "Experience",
    desc: "Each scent unfolds in layers — top notes that captivate, heart notes that embrace, base notes that linger.",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&q=80",
  },
  {
    number: "03",
    title: "Ritual",
    desc: "Apply to pulse points and let the warmth of your skin transform each fragrance into something uniquely yours.",
    image: "https://images.unsplash.com/photo-1594035910387-fbd1af8b235e?w=600&q=80",
  },
]

export function RitualSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
              The Experience
            </span>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95] mt-5 max-w-2xl mx-auto">
              Your Fragrance{" "}
              <GradientText as="span" className="font-serif italic">
                Ritual
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 text-base max-w-md mx-auto leading-relaxed">
              Three steps to discovering a scent that becomes part of your identity.
            </p>
          </FadeIn>
        </div>

        {/* Ritual steps */}
        <div className="space-y-20 lg:space-y-32 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Parallax offset={40}>
                    <MagicCard
                      gradientColor="hsl(var(--primary))"
                      gradientOpacity={0.1}
                      className="rounded-3xl overflow-hidden border-foreground/[0.04] p-0"
                    >
                      <motion.div
                        className="aspect-[4/5] overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </MagicCard>
                  </Parallax>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""}`}>
                  <span className="text-6xl lg:text-8xl font-bold text-foreground/[0.04] font-serif block leading-none mb-4">
                    {step.number}
                  </span>
                  <TextReveal
                    as="h3"
                    effect="blur-in"
                    className="font-serif text-3xl lg:text-4xl font-normal tracking-tight"
                  >
                    {step.title}
                  </TextReveal>
                  <p className="text-muted-foreground mt-4 text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                  <div className="mt-6 w-16 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
