"use client"

import { FadeIn, Marquee, MarqueeItem, NumberTicker } from "@grafiesto/ui"

const bilingual = [
  "शुद्ध सामग्री · Pure Ingredients",
  "पारंपरिक विधि · Traditional Methods",
  "हस्तनिर्मित · Handcrafted",
  "पवित्र सुगंध · Sacred Fragrances",
  "प्राकृतिक · Natural",
]

const stats = [
  { n: 108, label: "Sacred ingredients", suffix: "" },
  { n: 5, label: "Generations of craft", suffix: "th" },
  { n: 100, label: "Natural & pure", suffix: "%" },
  { n: 2000, label: "Years of tradition", suffix: "+" },
]

export function MarqueeSection() {
  return (
    <>
      {/* Bilingual marquee */}
      <div className="bg-[#FAF4E6] border-y border-[#D4A84B]/8 py-4 overflow-hidden">
        <Marquee speed={25} pauseOnHover>
          {bilingual.map((t) => (
            <MarqueeItem key={t} className="mx-10">
              <span className="text-xs text-[#5A2A1A]/35 tracking-wider font-light">{t}</span>
              <span className="mx-10 text-[#D4A84B]/15 text-[10px]">✦</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </div>

      {/* Sacred numbers */}
      <section className="py-16 bg-[#1A0F08] text-[#FAF4E6]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-4xl md:text-5xl font-normal tracking-tighter block">
                    <NumberTicker value={s.n} delay={0.4} />
                    {s.suffix && <span className="text-[#D4A84B]/25 text-2xl">{s.suffix}</span>}
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#FAF4E6]/12 mt-3 block">
                    {s.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
