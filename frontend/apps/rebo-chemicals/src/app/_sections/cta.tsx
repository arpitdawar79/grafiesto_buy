"use client"

import { Button, FadeIn, ShimmerButton } from "@grafiesto/ui"
import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0A0F1A] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/[0.02] blur-[100px]" />
      </div>

      <div className="container relative z-10 text-center max-w-2xl">
        <FadeIn>
          <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/40 mb-4">
            Ready to Scale?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Your next order starts here.
          </h2>
          <p className="text-slate-400 text-sm mt-5 max-w-md mx-auto leading-relaxed">
            Whether you need 5kg samples or 5-ton bulk orders, our team is ready to help.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mt-10">
          <ShimmerButton
            shimmerColor="#0EA5E9"
            background="#0EA5E9"
            borderRadius="6px"
            className="h-12 px-8 text-sm font-semibold text-white"
          >
            <Link href="/quote" className="flex items-center gap-2">
              Request Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </ShimmerButton>
          <Button
            variant="outline"
            className="h-12 px-8 text-sm border-white/[0.08] text-slate-300 hover:bg-white/[0.04] rounded-md"
            asChild
          >
            <Link href="/contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact Sales
            </Link>
          </Button>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/[0.05]">
            {[
              { icon: Phone, label: "+91 98XX XXX XXX" },
              { icon: Mail, label: "sales@rebochemicals.com" },
              { icon: MessageSquare, label: "Live Chat" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 text-slate-500 text-xs font-mono"
              >
                <c.icon className="w-3.5 h-3.5 text-slate-600" />
                {c.label}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
