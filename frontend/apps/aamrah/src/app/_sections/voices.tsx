"use client"

import { AnimatedList, FadeIn, SAMPLE_REVIEWS } from "@grafiesto/ui"
import { Star } from "lucide-react"

export function VoicesSection() {
  const reviews = SAMPLE_REVIEWS.filter((r) => r.rating >= 4).slice(0, 3)

  return (
    <section className="grid lg:grid-cols-2">
      {/* Testimonials */}
      <div className="bg-[#1A0F08] text-[#FAF4E6] p-10 md:p-16 lg:p-20 flex flex-col justify-center min-h-[50vh]">
        <FadeIn>
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#D4A84B]/25 mb-10">
            Devotee Voices
          </p>
        </FadeIn>
        <div className="space-y-8">
          {reviews.map((r, i) => (
            <FadeIn key={r.id} delay={i * 0.15}>
              <div className="border-l border-[#D4A84B]/10 pl-6">
                <div className="flex text-[#D4A84B]/25 mb-3">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="w-2.5 h-2.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed font-light italic text-[#FAF4E6]/40">
                  &ldquo;{r.body.slice(0, 120)}...&rdquo;
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#D4A84B]/15">
                  {r.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Live activity */}
      <div className="bg-[#FAF4E6] p-10 md:p-16 lg:p-20 flex flex-col justify-center min-h-[50vh]">
        <FadeIn>
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#A52A1A]/30 mb-8">
            Live Offerings
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="relative h-[300px] overflow-hidden">
            <AnimatedList delay={2800}>
              {[
                { who: "Priya, Varanasi", what: "acquired Chandan Dhoop Set", icon: "🪔" },
                { who: "Rahul, Jaipur", what: "ordered Temple Agarbatti Pack", icon: "✦" },
                { who: "Meera, Mumbai", what: "purchased Rose Attar", icon: "🌹" },
                { who: "Anand, Delhi", what: "gifted Hawan Samagri Kit", icon: "🎁" },
                { who: "Kavita, Pune", what: "reviewed Guggul Dhoop ★★★★★", icon: "⭐" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-3 border-b border-[#1A0F08]/[0.04]"
                >
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#1A0F08]">{item.who}</p>
                    <p className="text-xs text-[#5A2A1A]/40 truncate">{item.what}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF4E6] to-transparent pointer-events-none" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
