"use client"

import { BlurIn, Button, FadeIn, GradientText, ShimmerButton, WordRotate } from "@grafiesto/ui"
import { ArrowRight, Building2, ShieldCheck, Truck } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#0A0F1A]">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[800px] h-[600px] rounded-full bg-cyan-500/[0.02] blur-[120px]" />
      </div>

      <div className="container relative z-10 py-24">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-slate-400 font-mono">
                Now serving{" "}
                <WordRotate
                  words={["142 manufacturers", "28 countries", "5,000+ SKUs"]}
                  duration={2500}
                  className="text-cyan-400 font-medium"
                />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] font-bold leading-[0.95] tracking-tight text-white">
              Industrial-grade{" "}
              <GradientText gradient="linear-gradient(135deg, #0EA5E9, #67E8F9)" animate>
                aroma chemicals,
              </GradientText>
              <br />
              delivered.
            </h1>
          </FadeIn>

          <BlurIn delay={0.5}>
            <p className="text-slate-400 text-base md:text-lg mt-8 max-w-lg leading-relaxed">
              Sourced, tested, and shipped to your factory floor. Essential oils, fixatives, and
              bases for manufacturers who demand consistency.
            </p>
          </BlurIn>

          <FadeIn delay={0.7} className="flex flex-wrap gap-3 mt-10">
            <ShimmerButton
              shimmerColor="#0EA5E9"
              background="#0EA5E9"
              borderRadius="6px"
              className="h-12 px-8 text-sm font-semibold text-white"
            >
              <Link href="/shop" className="flex items-center gap-2">
                Browse Catalogue <ArrowRight className="w-4 h-4" />
              </Link>
            </ShimmerButton>
            <Button
              variant="outline"
              className="h-12 px-8 text-sm border-white/[0.08] text-slate-300 hover:bg-white/[0.04] rounded-md"
              asChild
            >
              <Link href="/quote">Request Bulk Quote</Link>
            </Button>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={0.9}>
            <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/[0.05]">
              {[
                { icon: ShieldCheck, label: "ISO 9001 Certified" },
                { icon: Truck, label: "Pan-India Delivery" },
                { icon: Building2, label: "FSSAI Compliant" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-slate-500">
                  <b.icon className="w-4 h-4 text-slate-600" />
                  <span className="text-[11px] font-mono">{b.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
