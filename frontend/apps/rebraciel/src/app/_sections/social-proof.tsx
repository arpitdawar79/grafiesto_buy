"use client"

import {
    AnimatedList,
    BlurIn,
    FadeIn,
    GlowCard,
    GradientText,
    MagicCard,
    SAMPLE_REVIEWS,
} from "@grafiesto/ui"
import { BadgeCheck, Quote, Star } from "lucide-react"

export function SocialProofSection() {
  const reviews = SAMPLE_REVIEWS.filter((r) => r.rating >= 4).slice(0, 3)

  return (
    <section className="relative py-28 lg:py-40 bg-gradient-to-b from-muted/30 via-background to-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Words That{" "}
              <GradientText as="span" className="font-serif italic">
                Linger
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 text-base max-w-md mx-auto">
              What our community of fragrance connoisseurs has to say.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Testimonials with GlowCards */}
          <div className="space-y-5">
            {reviews.map((r, i) => (
              <FadeIn key={r.id} delay={i * 0.12}>
                <GlowCard
                  glowColor="hsl(var(--primary) / 0.15)"
                  spread={50}
                  className="p-7 rounded-2xl bg-card border-foreground/[0.04]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-primary gap-0.5">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] text-primary/60 font-medium">
                        <BadgeCheck className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 italic font-serif">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-foreground/[0.04]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-white">
                      {r.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{r.author}</p>
                      <p className="text-[10px] text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>

          {/* Live activity feed */}
          <div>
            <FadeIn className="mb-6">
              <h3 className="font-serif text-2xl font-normal">
                Join the <span className="italic text-primary">Movement</span>
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                Real-time from our growing community
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <MagicCard
                gradientColor="hsl(var(--primary))"
                gradientOpacity={0.06}
                className="rounded-2xl border-foreground/[0.04] p-0 overflow-hidden"
              >
                <div className="relative h-[400px] overflow-hidden p-4">
                  <AnimatedList delay={2200}>
                    {[
                      {
                        name: "Priya M.",
                        action: "just purchased Velvet Rose EDP",
                        c: "hsl(var(--primary))",
                      },
                      { name: "Arjun K.", action: "left a 5-star review", c: "hsl(var(--accent))" },
                      {
                        name: "Meera S.",
                        action: "added 3 items to wishlist",
                        c: "hsl(var(--brand))",
                      },
                      {
                        name: "Rohan D.",
                        action: "joined the loyalty program",
                        c: "hsl(var(--success))",
                      },
                      {
                        name: "Sneha P.",
                        action: "redeemed 500 reward points",
                        c: "hsl(var(--primary))",
                      },
                      { name: "Karan J.", action: "ordered a gift set", c: "hsl(var(--accent))" },
                      {
                        name: "Ananya R.",
                        action: "subscribed to the Scent Club",
                        c: "hsl(var(--brand))",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-card/80 backdrop-blur-sm border border-foreground/[0.04] shadow-sm"
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${item.c}, ${item.c}80)` }}
                        >
                          {item.name[0]}
                        </div>
                        <p className="text-sm">
                          <span className="font-semibold">{item.name}</span>
                          <span className="text-muted-foreground"> {item.action}</span>
                        </p>
                      </div>
                    ))}
                  </AnimatedList>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              </MagicCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
