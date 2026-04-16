"use client"

import { BlurIn, BorderBeam, FadeIn, GradientText, InteractiveHoverButton } from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Droplets, Gem, Heart, Palette, Sparkles, Sun, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Skincare Essentials",
    subtitle: "Clean beauty for radiant skin",
    icon: Droplets,
    image:
      "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/skincare",
    featured: true,
    color: "from-rose-400 to-pink-500",
  },
  {
    title: "Makeup Collection",
    subtitle: "Professional grade cosmetics",
    icon: Palette,
    image:
      "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/makeup",
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Fragrance",
    subtitle: "Signature scents that linger",
    icon: Wind,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/fragrance",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Hair Care",
    subtitle: "Salon-quality treatments",
    icon: Sparkles,
    image:
      "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/hair",
    color: "from-teal-400 to-cyan-500",
  },
  {
    title: "Body & Bath",
    subtitle: "Luxurious self-care rituals",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/body",
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Sun Care",
    subtitle: "Protection with elegance",
    icon: Sun,
    image:
      "https://images.pexels.com/photos/4792675/pexels-photo-4792675.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/shop/suncare",
    color: "from-yellow-400 to-amber-500",
  },
]

export function FeaturedCategoriesSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

        <motion.div
          className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px]"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-accent/[0.02] blur-[80px]"
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
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
                <Gem className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">
                Curated Categories
              </span>
            </motion.div>
          </FadeIn>
          <BlurIn delay={0.15}>
            <h2 className="font-serif text-4xl lg:text-6xl font-normal tracking-tight leading-[0.95]">
              Explore Our{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
              >
                Collections
              </GradientText>
            </h2>
          </BlurIn>
          <FadeIn delay={0.3}>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              From skincare rituals to makeup artistry, find everything you need to express your
              unique beauty.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[200px] lg:auto-rows-[280px]">
          {categories.map((category, i) => (
            <FadeIn
              key={category.title}
              delay={i * 0.1}
              className={category.featured ? "col-span-2 row-span-2" : ""}
            >
              <motion.div
                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={category.href} className="relative block h-full">
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </motion.div>

                    <h3 className="font-serif text-xl lg:text-2xl font-normal text-white tracking-tight group-hover:text-primary/90 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">{category.subtitle}</p>

                    <span className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                      Shop Now
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>

                  {/* Border Beam for featured items */}
                  {category.featured && (
                    <BorderBeam
                      size={150}
                      duration={12}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--accent))"
                    />
                  )}

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  </div>
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5} className="text-center mt-12">
          <InteractiveHoverButton
            hoverText="View All →"
            className="h-14 px-10 border-foreground/10 backdrop-blur-sm"
          >
            <Link href="/shop">Explore All Categories</Link>
          </InteractiveHoverButton>
        </FadeIn>
      </div>
    </section>
  )
}
