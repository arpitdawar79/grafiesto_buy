"use client"

import {
    AspectRatio,
    Badge,
    BlurIn,
    BorderBeam,
    Button,
    FadeIn,
    GradientText,
    InteractiveHoverButton,
    MagicCard,
    StaggerReveal,
    getBestSellers,
} from "@grafiesto/ui"
import { ArrowRight, Crown, Heart } from "lucide-react"
import Link from "next/link"

export function BestsellersSection() {
  const bestSellers = getBestSellers()

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[80px]" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 mb-6">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Signature Bestsellers
              </span>
            </div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              The Ones They{" "}
              <GradientText as="span" className="font-serif italic">
                Can&apos;t Forget
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 text-base leading-relaxed max-w-md mx-auto">
              Scents that turn heads, start conversations, and become your signature.
            </p>
          </FadeIn>
        </div>

        {/* Product grid with MagicCards */}
        <StaggerReveal stagger={0.12} className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
          {bestSellers.slice(0, 4).map((p, i) => (
            <Link key={p.id} href={`/product/${p.handle}`} className="group">
              <MagicCard
                gradientColor="hsl(var(--primary))"
                gradientOpacity={0.12}
                className="rounded-2xl lg:rounded-3xl border-foreground/[0.04] bg-gradient-to-b from-card to-card/80 p-0 overflow-hidden"
              >
                <div className="relative">
                  <AspectRatio ratio={3 / 4} className="overflow-hidden bg-muted/30">
                    <img
                      src={p.images[0]?.url}
                      alt={p.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </AspectRatio>

                  {/* Quick Add overlay */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="w-full rounded-full bg-white/95 text-foreground hover:bg-white shadow-2xl text-xs font-semibold backdrop-blur-sm"
                    >
                      <Heart className="w-3.5 h-3.5 mr-1.5" />
                      Add to Collection
                    </Button>
                  </div>

                  {i === 0 && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-primary to-accent text-white border-0 rounded-full text-[9px] font-semibold shadow-lg px-3">
                      #1 Bestseller
                    </Badge>
                  )}

                  {/* Border beam on first card */}
                  {i === 0 && (
                    <BorderBeam
                      size={150}
                      duration={10}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--accent))"
                    />
                  )}
                </div>

                {/* Product info */}
                <div className="p-4 lg:p-5">
                  <h3 className="font-medium text-sm tracking-wide">{p.title}</h3>
                  <p className="text-[11px] text-muted-foreground mt-1">{p.subtitle}</p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-foreground/[0.04]">
                    <p className="font-bold text-sm text-primary">₹{p.variants[0].price / 100}</p>
                    <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-medium">
                      Eau de Parfum
                    </span>
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </StaggerReveal>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-14">
          <InteractiveHoverButton
            hoverText="View All →"
            className="h-13 px-10 border-foreground/10"
          >
            <Link href="/shop?sort=bestselling" className="flex items-center gap-2">
              Shop All Bestsellers <ArrowRight className="w-4 h-4" />
            </Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
