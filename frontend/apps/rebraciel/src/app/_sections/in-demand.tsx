"use client"

import {
    AspectRatio,
    Badge,
    BorderBeam,
    FadeIn,
    GradientText,
    MagicCard,
    NumberTicker,
    StaggerReveal,
    getBestSellers,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Flame, TrendingUp } from "lucide-react"
import Link from "next/link"

export function InDemandSection() {
  // Get top selling products with high ratings
  const inDemandProducts = getBestSellers()
    .filter(p => p.rating >= 4.5)
    .slice(0, 5)

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <motion.div
          className="absolute top-[15%] right-[10%] w-[200px] h-[200px] rounded-full bg-brand/[0.05] blur-[60px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-brand/[0.12] flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 text-brand" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand font-semibold">
                  Trending Now
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal tracking-tight">
                In{" "}
                <GradientText
                  as="span"
                  className="font-serif italic"
                  gradient="linear-gradient(135deg, hsl(var(--brand)) 0%, hsl(var(--primary)) 100%)"
                >
                  Demand
                </GradientText>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link href="/shop?sort=bestselling" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              View Top Rated <TrendingUp className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <StaggerReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {inDemandProducts.map((p, i) => (
              <Link key={p.id} href={`/product/${p.handle}`} className="group">
                <MagicCard
                  gradientColor="hsl(var(--brand))"
                  gradientOpacity={0.1}
                  className="rounded-xl border-foreground/[0.04] bg-card p-0 overflow-hidden"
                >
                  <div className="relative">
                    <AspectRatio ratio={1} className="overflow-hidden bg-muted/30">
                      <motion.img
                        src={p.images[0]?.url}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AspectRatio>

                    {i === 0 && (
                      <Badge className="absolute top-2 left-2 bg-brand text-white border-0 rounded-full text-[8px] font-semibold px-2 py-0.5 flex items-center gap-1">
                        <Flame className="w-3 h-3" /> Hot
                      </Badge>
                    )}

                    <BorderBeam
                      size={60}
                      duration={8}
                      colorFrom="hsl(var(--brand))"
                      colorTo="hsl(var(--primary))"
                      delay={i * 0.15}
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-medium text-xs tracking-wide truncate group-hover:text-brand transition-colors">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-semibold text-xs text-brand">
                        ₹{p.variants[0].price / 100}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <span className="text-brand">★</span>
                        <span>{p.rating}</span>
                      </div>
                    </div>
                    {p.reviewCount > 0 && (
                      <p className="text-[9px] text-muted-foreground mt-1">
                        <NumberTicker value={p.reviewCount} /> reviews
                      </p>
                    )}
                  </div>
                </MagicCard>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  )
}
