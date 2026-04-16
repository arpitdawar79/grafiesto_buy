"use client"

import {
    BorderBeam,
    FadeIn,
    GradientText,
    MagicCard,
    StaggerReveal,
} from "@grafiesto/ui"
import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Link from "next/link"

// Sample Instagram posts - in production this would come from Instagram API
const instagramPosts = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80",
    likes: 1234,
    caption: "Signature collection ✨",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80",
    likes: 892,
    caption: "New arrivals 🌹",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1594035910387-fbd1af8b235e?w=400&q=80",
    likes: 2156,
    caption: "Behind the scenes 🎨",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&q=80",
    likes: 1543,
    caption: "Crafted with love 💫",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80",
    likes: 987,
    caption: "Oud collection 🔥",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
    likes: 1876,
    caption: "Essence of India 🇮🇳",
  },
]

export function FromInstagramSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <FadeIn>
            <motion.a
              href="https://instagram.com/rebraciel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl lg:text-4xl font-normal tracking-tight">
              From{" "}
              <GradientText
                as="span"
                className="font-serif italic"
                gradient="linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)"
              >
                Instagram
              </GradientText>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-muted-foreground mt-2 text-sm">
              Follow us <span className="text-primary font-medium">@rebraciel</span> for daily inspiration
            </p>
          </FadeIn>
        </div>

        {/* Instagram grid */}
        <StaggerReveal stagger={0.08} className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/rebraciel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <MagicCard
                gradientColor="hsl(var(--primary))"
                gradientOpacity={0.08}
                className="rounded-xl border-foreground/[0.04] p-0 overflow-hidden aspect-square"
              >
                <div className="relative w-full h-full">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <Instagram className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">{post.likes.toLocaleString()} likes</span>
                    <span className="text-[10px] opacity-80 mt-1 px-2 text-center truncate max-w-full">
                      {post.caption}
                    </span>
                  </div>
                  <BorderBeam
                    size={60}
                    duration={8}
                    colorFrom="#833ab4"
                    colorTo="#fd1d1d"
                    delay={i * 0.1}
                  />
                </div>
              </MagicCard>
            </motion.a>
          ))}
        </StaggerReveal>

        <FadeIn delay={0.3} className="text-center mt-10">
          <motion.a
            href="https://instagram.com/rebraciel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <Instagram className="w-4 h-4" />
            Follow @rebraciel on Instagram
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
