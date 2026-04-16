"use client"

import { BlurIn, FadeIn, NumberTicker } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Globe2, Headphones, Package, ShieldCheck, Sparkles, Truck } from "lucide-react"

const globalFeatures = [
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "Orders over $50",
    color: "hsl(var(--primary))",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "100% Protected",
    color: "hsl(var(--accent))",
  },
  {
    icon: Globe2,
    title: "Global Delivery",
    subtitle: "150+ Countries",
    color: "hsl(var(--brand))",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    subtitle: "Always Here",
    color: "hsl(var(--primary))",
  },
]

const stats = [
  { value: 150, suffix: "+", label: "Countries" },
  { value: 2, suffix: "M+", label: "Orders Shipped" },
  { value: 99, suffix: "%", label: "Satisfaction" },
  { value: 24, suffix: "h", label: "Delivery" },
]

export function GlobalBannerSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-accent/[0.03] blur-[80px]"
          animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Worldwide Service
              </span>
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-3xl lg:text-5xl font-normal tracking-tight">
              Beauty Without <span className="text-primary italic">Borders</span>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Delivering luxury cosmetics to your doorstep, wherever you are in the world.
            </p>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {globalFeatures.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <motion.div
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-foreground/[0.04] hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                </motion.div>

                <h3 className="font-semibold text-sm tracking-wide mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.subtitle}</p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Stats */}
        <FadeIn delay={0.4}>
          <div className="relative">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <motion.div
                className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[60px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-8 rounded-3xl bg-gradient-to-r from-primary/[0.03] via-accent/[0.03] to-brand/[0.03] border border-foreground/[0.04]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-4xl lg:text-5xl font-bold tracking-tight">
                      <NumberTicker value={stat.value} />
                    </span>
                    <span className="text-2xl lg:text-3xl font-bold text-primary">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Package Visual */}
        <FadeIn delay={0.6} className="mt-16">
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <Package className="w-5 h-5 text-primary" />
            <span className="text-sm">Eco-friendly packaging on all orders</span>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            <span className="text-sm">Carbon neutral shipping</span>
            <Globe2 className="w-5 h-5 text-accent" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
