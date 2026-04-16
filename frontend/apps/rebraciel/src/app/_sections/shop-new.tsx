"use client"

import {
    AspectRatio,
    Badge,
    BorderBeam,
    FadeIn,
    GradientText,
    InteractiveHoverButton,
    MagicCard,
    StaggerReveal,
    getNewArrivals,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function ShopNewSection() {
  const newProducts = getNewArrivals()

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <motion.div
          className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-primary/[0.02] blur-[80px]"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-primary/[0.08] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                  Just Dropped
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal tracking-tight">
                Shop{" "}
                <GradientText as="span" className="font-serif italic">
                  New
                </GradientText>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <InteractiveHoverButton
              hoverText="View All →"
              className="h-11 px-6 border-foreground/10 text-sm"
            >
              <Link href="/shop?sort=newest">See All</Link>
            </InteractiveHoverButton>
          </FadeIn>
        </div>

        {/* Product grid */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {newProducts.slice(0, 6).map((p, i) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group">
              <MagicCard
                gradientColor="hsl(var(--primary))"
                gradientOpacity={0.1}
                className="rounded-xl border-foreground/[0.04] bg-card p-0 overflow-hidden"
              >
                <div className="relative">
                  <AspectRatio ratio={3 / 4} className="overflow-hidden bg-muted/30">
                    <motion.img
                      src={p.images[0]?.url}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AspectRatio>

                  {p.new && (
                    <Badge className="absolute top-2 left-2 bg-primary text-white border-0 rounded-full text-[9px] font-semibold px-2 py-0.5">
                      New
                    </Badge>
                  )}

                  <BorderBeam
                    size={80}
                    duration={10}
                    colorFrom="hsl(var(--primary))"
                    colorTo="hsl(var(--accent))"
                    delay={i * 0.2}
                  />
                </div>

                <div className="p-3">
                  <h3 className="font-medium text-xs tracking-wide truncate group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{p.subtitle}</p>
                  <p className="font-semibold text-xs text-primary mt-2">
                    ₹{p.variants[0].price / 100}
                  </p>
                </div>
              </MagicCard>
            </Link>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
