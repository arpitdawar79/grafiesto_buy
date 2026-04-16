"use client"

import { Leaf, Droplets, Home, Recycle } from "lucide-react"
import { FadeIn, SpotlightCard, ParallaxImage } from "@grafiesto/ui"

const values = [
  { icon: Leaf, title: "Natural Origins", desc: "Ethically sourced botanicals from trusted growers" },
  { icon: Droplets, title: "Handblended", desc: "Small-batch production in our Mumbai studio" },
  { icon: Home, title: "Room-Specific", desc: "Formulations designed for specific spaces" },
  { icon: Recycle, title: "Refillable", desc: "All vessels designed for lifetime reuse" },
]

export function StorySection() {
  return (
    <>
      <ParallaxImage
        src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=2000&q=80"
        alt="Craftsmanship"
        speed={0.3}
        overlay
        overlayOpacity={0.4}
        className="h-[50vh]"
      />

      <section className="py-28 md:py-40 bg-[#F4EBE0]">
        <div className="container">
          <FadeIn className="text-center mb-14">
            <p className="text-[9px] tracking-[0.5em] uppercase text-[#8B6D4A]/30 mb-3">
              Our Ethos
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-[#2A2118]">
              Built on <span className="italic text-[#8B6D4A]">intention</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <SpotlightCard className="p-8 rounded-lg bg-[#EDE3D5] border-[#D4C4AF] h-full group">
                  <div className="w-10 h-10 rounded-md bg-[#F4EBE0] flex items-center justify-center mb-5">
                    <item.icon className="w-5 h-5 text-[#8B6D4A]" />
                  </div>
                  <h3 className="font-display text-sm font-medium text-[#2A2118]">{item.title}</h3>
                  <p className="text-xs text-[#5A4A3A]/60 mt-2 leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
