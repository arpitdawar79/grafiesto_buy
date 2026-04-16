"use client"

import { FadeIn, NumberTicker } from "@grafiesto/ui"

const stats = [
  { n: 5000, label: "SKUs Available", suffix: "+" },
  { n: 142, label: "Active Manufacturers", suffix: "" },
  { n: 99, label: "Order Accuracy", suffix: ".7%" },
  { n: 28, label: "Countries Served", suffix: "" },
]

export function MetricsSection() {
  return (
    <section className="bg-[#0A0F1A] border-y border-white/[0.04] py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white block">
                  <NumberTicker value={s.n} delay={0.3} />
                  {s.suffix && <span className="text-cyan-400/50">{s.suffix}</span>}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-2 block">
                  {s.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
