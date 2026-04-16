"use client"

import { FadeIn, GradientText, MagicCard } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "Explore curated fragrances",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80",
    color: "hsl(var(--primary))",
  },
  {
    number: "02",
    title: "Experience",
    desc: "Scents that unfold in layers",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
    color: "hsl(var(--accent))",
  },
  {
    number: "03",
    title: "Ritual",
    desc: "Transform your identity",
    image: "https://images.unsplash.com/photo-1594035910387-fbd1af8b235e?w=400&q=80",
    color: "hsl(var(--brand))",
  },
]

export function RitualSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Subtle top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Compact header */}
        <div className="text-center mb-12">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                The Experience
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-2xl lg:text-3xl font-normal tracking-tight">
              Your Fragrance{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)"
              >
                Ritual
              </GradientText>
            </h2>
          </FadeIn>
        </div>

        {/* Compact horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <MagicCard
                  gradientColor={step.color}
                  gradientOpacity={0.08}
                  className="rounded-2xl overflow-hidden border-foreground/[0.04] p-0"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span
                        className="text-xs font-bold opacity-60 mb-1 block"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className="font-serif text-lg text-white tracking-tight">{step.title}</h3>
                      <p className="text-white/60 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
