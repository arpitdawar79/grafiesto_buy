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
    getFeaturedProducts,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function SelectedForYouSection() {
  const featuredProducts = getFeaturedProducts()

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-muted/20">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-accent/[0.03] blur-[80px]"
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-primary/[0.08] flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Curated For You
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal tracking-tight">
              Selected{" "}
              <GradientText as="span" className="font-serif italic">
                For You
              </GradientText>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground mt-2 text-sm max-w-md mx-auto">
              Handpicked fragrances tailored to your preferences
            </p>
          </FadeIn>
        </div>

        {/* Product grid - 4 larger cards */}
        <StaggerReveal stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProducts.slice(0, 4).map((p, i) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group">
              <MagicCard
                gradientColor="hsl(var(--accent))"
                gradientOpacity={0.1}
                className="rounded-2xl border-foreground/[0.04] bg-card p-0 overflow-hidden"
              >
                <div className="relative">
                  <AspectRatio ratio={1} className="overflow-hidden bg-muted/30">
                    <motion.img
                      src={p.images[0]?.url}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6 }}
                    />
                  </AspectRatio>

                  {p.badge && (
                    <Badge className="absolute top-3 left-3 bg-accent text-white border-0 rounded-full text-[9px] font-semibold px-2.5 py-1">
                      {p.badge}
                    </Badge>
                  )}

                  <BorderBeam
                    size={100}
                    duration={12}
                    colorFrom="hsl(var(--accent))"
                    colorTo="hsl(var(--primary))"
                    delay={i * 0.3}
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-sm tracking-wide group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-1">{p.subtitle}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-foreground/[0.04]">
                    <p className="font-bold text-sm text-primary">₹{p.variants[0].price / 100}</p>
                    {p.rating > 0 && (
                      <span className="text-[10px] text-muted-foreground">
                        ★ {p.rating}
                      </span>
                    )}
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </StaggerReveal>

        <FadeIn delay={0.3} className="text-center mt-10">
          <InteractiveHoverButton
            hoverText="Browse All →"
            className="h-12 px-8 border-foreground/10"
          >
            <Link href="/shop" className="flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
