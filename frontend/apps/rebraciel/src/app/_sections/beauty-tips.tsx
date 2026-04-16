"use client"

import {
  AnimatedList,
  BlurIn,
  BorderBeam,
  FadeIn,
  GlowCard,
  GradientText,
  MagicCard,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { BookOpen, Clock, Heart, Lightbulb, Sparkles, Star } from "lucide-react"

const tips = [
  {
    id: 1,
    title: "The Double Cleanse Method",
    description: "Start with an oil-based cleanser to remove makeup, followed by a water-based cleanser for deep purification.",
    icon: Sparkles,
    readTime: "3 min read",
    likes: 2340,
    color: "hsl(var(--primary))",
    featured: true,
  },
  {
    id: 2,
    title: "Layering Skincare",
    description: "Apply products from thinnest to thickest consistency for maximum absorption and efficacy.",
    icon: Lightbulb,
    readTime: "4 min read",
    likes: 1856,
    color: "hsl(var(--accent))",
  },
  {
    id: 3,
    title: "The 60-Second Rule",
    description: "Massage your cleanser for a full minute to activate ingredients and boost circulation.",
    icon: Clock,
    readTime: "2 min read",
    likes: 3124,
    color: "hsl(var(--brand))",
  },
  {
    id: 4,
    title: "Patch Testing 101",
    description: "Always test new products on a small area 48 hours before full application.",
    icon: Heart,
    readTime: "3 min read",
    likes: 1567,
    color: "hsl(var(--primary))",
  },
]

const recentActivity = [
  { user: "Sarah M.", action: "saved 'Layering Skincare' guide", time: "2 min ago", icon: "💡" },
  { user: "Emma L.", action: "shared a beauty tip", time: "5 min ago", icon: "✨" },
  { user: "Jessica K.", action: "completed 'Double Cleanse' quiz", time: "8 min ago", icon: "🎯" },
  { user: "Mia R.", action: "bookmarked 3 articles", time: "12 min ago", icon: "🔖" },
  { user: "Anna B.", action: "started '60-Second Rule' challenge", time: "15 min ago", icon: "⏱️" },
  { user: "Lisa T.", action: "shared routine with friends", time: "20 min ago", icon: "🤝" },
]

export function BeautyTipsSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <motion.div
          className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[100px]"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[80px]"
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/[0.08] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Beauty University
              </span>
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Tips That{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
              >
                Transform
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Expert-backed beauty wisdom to elevate your skincare routine and makeup artistry.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          {/* Tips Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {tips.map((tip, i) => (
              <FadeIn key={tip.id} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <MagicCard
                    gradientColor={tip.color}
                    gradientOpacity={0.1}
                    className={`rounded-2xl border-foreground/[0.04] p-0 overflow-hidden ${tip.featured ? "sm:col-span-2" : ""}`}
                  >
                    <div className="relative p-6">
                      {/* Featured Badge */}
                      {tip.featured && (
                        <div className="absolute top-4 right-4">
                          <motion.div
                            className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-semibold px-2.5 py-1 rounded-full"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <Star className="w-3 h-3" /> Featured
                          </motion.div>
                        </div>
                      )}

                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${tip.color}15` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <tip.icon className="w-5 h-5" style={{ color: tip.color }} />
                      </motion.div>

                      {/* Content */}
                      <h3 className="font-semibold text-base tracking-wide mb-2 group-hover:text-primary transition-colors">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {tip.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {tip.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" /> {tip.likes.toLocaleString()}
                        </span>
                      </div>

                      {/* Border Beam */}
                      <BorderBeam
                        size={80}
                        duration={8}
                        colorFrom={tip.color}
                        colorTo="hsl(var(--accent))"
                        delay={i * 0.5}
                      />
                    </div>
                  </MagicCard>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Live Activity Feed */}
          <div>
            <FadeIn className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/[0.08] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal">Community Buzz</h3>
                  <p className="text-muted-foreground text-sm">See what beauty lovers are doing</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <GlowCard
                glowColor="hsl(var(--primary) / 0.15)"
                spread={40}
                className="rounded-2xl border-foreground/[0.04] p-0 overflow-hidden"
              >
                <div className="relative h-[420px] overflow-hidden p-4">
                  <AnimatedList delay={2500}>
                    {recentActivity.map((activity, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-3.5 rounded-xl bg-card/80 backdrop-blur-sm border border-foreground/[0.04] shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm">
                          {activity.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="font-semibold">{activity.user}</span>
                            <span className="text-muted-foreground"> {activity.action}</span>
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatedList>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                </div>
              </GlowCard>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
