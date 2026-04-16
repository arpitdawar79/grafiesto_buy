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
import { motion } from "framer-motion"
import { BadgeCheck, MessageCircle, Quote, Star, Users } from "lucide-react"

export function SocialProofSection() {
  const reviews = SAMPLE_REVIEWS.filter((r) => r.rating >= 4).slice(0, 3)

  return (
    <section className="relative py-28 lg:py-40 bg-gradient-to-b from-muted/30 via-background to-background overflow-hidden">
      {/* Decorative with animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <motion.div
          className="absolute top-[15%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.02] blur-[100px]"
          animate={{
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[80px]"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header with enhanced styling */}
        <div className="text-center mb-20">
          <FadeIn>
            <motion.div
              className="w-16 h-16 rounded-full bg-primary/[0.06] flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="w-7 h-7 text-primary/40" />
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Words That{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
              >
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
          {/* Testimonials with enhanced GlowCards */}
          <div className="space-y-5">
            {reviews.map((r, i) => (
              <FadeIn key={r.id} delay={i * 0.12}>
                <GlowCard
                  glowColor={i === 0 ? "hsl(var(--primary) / 0.2)" : "hsl(var(--primary) / 0.12)"}
                  spread={i === 0 ? 60 : 40}
                  className="p-7 rounded-2xl bg-card border-foreground/[0.04] group hover:border-primary/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-primary gap-0.5">
                      {[1, 2, 3, 4, 5].map((j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + j * 0.05 }}
                        >
                          <Star className="w-3.5 h-3.5 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    {r.verified && (
                      <motion.span
                        className="inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] text-primary/70 font-medium bg-primary/[0.06] px-2 py-1 rounded-full"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <BadgeCheck className="w-3 h-3" /> Verified
                      </motion.span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/80 italic font-serif">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-foreground/[0.04]">
                    <motion.div
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {r.author[0]}
                    </motion.div>
                    <div>
                      <p className="text-xs font-semibold">{r.author}</p>
                      <p className="text-[10px] text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            ))}
          </div>

          {/* Live activity feed with enhanced styling */}
          <div>
            <FadeIn className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/[0.08] flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal">
                    Join the <span className="italic text-primary">Movement</span>
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time from our growing community
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <MagicCard
                gradientColor="hsl(var(--primary))"
                gradientOpacity={0.08}
                className="rounded-2xl border-foreground/[0.04] p-0 overflow-hidden"
              >
                <div className="relative h-[400px] overflow-hidden p-4">
                  <AnimatedList delay={2000}>
                    {[
                      {
                        name: "Priya M.",
                        action: "just purchased Velvet Rose EDP",
                        c: "hsl(var(--primary))",
                        icon: "✨",
                      },
                      {
                        name: "Arjun K.",
                        action: "left a 5-star review",
                        c: "hsl(var(--accent))",
                        icon: "⭐",
                      },
                      {
                        name: "Meera S.",
                        action: "added 3 items to wishlist",
                        c: "hsl(var(--brand))",
                        icon: "❤️",
                      },
                      {
                        name: "Rohan D.",
                        action: "joined the loyalty program",
                        c: "hsl(var(--success))",
                        icon: "🎉",
                      },
                      {
                        name: "Sneha P.",
                        action: "redeemed 500 reward points",
                        c: "hsl(var(--primary))",
                        icon: "🎁",
                      },
                      {
                        name: "Karan J.",
                        action: "ordered a gift set",
                        c: "hsl(var(--accent))",
                        icon: "🎀",
                      },
                      {
                        name: "Ananya R.",
                        action: "subscribed to the Scent Club",
                        c: "hsl(var(--brand))",
                        icon: "📬",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-card/80 backdrop-blur-sm border border-foreground/[0.04] shadow-sm hover:border-primary/20 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 shadow-lg"
                          style={{ background: `linear-gradient(135deg, ${item.c}, ${item.c}80)` }}
                        >
                          {item.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-muted-foreground"> {item.action}</span>
                          </p>
                        </div>
                        <span className="text-lg">{item.icon}</span>
                      </motion.div>
                    ))}
                  </AnimatedList>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              </MagicCard>
            </FadeIn>

            {/* Trust indicators */}
            <FadeIn delay={0.3} className="mt-6 flex flex-wrap gap-4">
              {[
                { label: "25K+ Happy Customers", icon: Users },
                { label: "4.9/5 Average Rating", icon: Star },
                { label: "Real Reviews", icon: MessageCircle },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-2 text-[11px] text-muted-foreground bg-muted/50 px-3 py-2 rounded-full"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
