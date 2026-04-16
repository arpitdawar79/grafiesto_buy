"use client"

import { FadeIn } from "@grafiesto/ui"
import { FileCheck, FlaskConical, Search, Truck } from "lucide-react"

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse & Select",
    desc: "Search our catalogue of 5,000+ aroma chemicals, essential oils and bases.",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Request Samples",
    desc: "Order test quantities with full COA and MSDS documentation.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Place Bulk Order",
    desc: "Get competitive pricing with flexible payment terms for manufacturers.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Doorstep Delivery",
    desc: "Temperature-controlled logistics across India. Track every shipment.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0D1320]">
      <div className="container">
        <FadeIn className="text-center mb-14">
          <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/40 mb-2">
            How It Works
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            From search to delivery
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.1}>
              <div className="relative p-6 rounded-lg bg-white/[0.02] border border-white/[0.05] h-full group hover:border-cyan-400/15 transition-colors">
                <span className="font-mono text-[10px] text-cyan-400/25 mb-4 block">{s.step}</span>
                <div className="w-10 h-10 rounded-md bg-white/[0.04] flex items-center justify-center mb-4 group-hover:bg-cyan-400/[0.08] transition-colors">
                  <s.icon className="w-5 h-5 text-cyan-400/50 group-hover:text-cyan-400/80 transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white">{s.title}</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
