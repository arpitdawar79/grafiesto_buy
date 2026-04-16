"use client"

import { AnimatedList, FadeIn, Marquee, MarqueeItem } from "@grafiesto/ui"

const activity = [
  { who: "Kesar Fragrances, Kannauj", what: "ordered 50kg Linalool", t: "2m ago" },
  { who: "Nova Soaps, Ahmedabad", what: "requested quote for ISO E Super", t: "5m ago" },
  { who: "Aura Candles, Bengaluru", what: "placed order for Vanillin 25kg", t: "8m ago" },
  { who: "Bharat Cosmetics, Delhi", what: "downloaded Musk Ketone MSDS", t: "12m ago" },
  { who: "Shree Essentials, Mumbai", what: "approved PO for Eucalyptol", t: "15m ago" },
]

const certs = [
  "ISO 9001:2015",
  "FSSAI",
  "GMP Certified",
  "REACH Compliant",
  "IFRA Member",
  "CoA Available",
]

export function ActivitySection() {
  return (
    <>
      <section className="py-16 bg-[#0A0F1A]">
        <div className="container">
          <FadeIn className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[11px] font-mono text-slate-500">Live Platform Activity</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative h-[240px] overflow-hidden rounded-lg border border-white/[0.05] bg-white/[0.02] p-4">
              <AnimatedList delay={2200}>
                {activity.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2.5 border-b border-white/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-white/[0.04] flex items-center justify-center text-[10px] font-mono text-cyan-400/50 flex-shrink-0">
                        {item.who[0]}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white truncate">{item.who}</p>
                        <p className="text-[10px] text-slate-500 font-mono truncate">{item.what}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 flex-shrink-0 ml-4">
                      {item.t}
                    </span>
                  </div>
                ))}
              </AnimatedList>
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0C1120] to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Compliance marquee */}
      <div className="bg-[#0A0F1A] border-y border-white/[0.04] py-3.5">
        <Marquee speed={25} pauseOnHover>
          {certs.map((cert) => (
            <MarqueeItem key={cert} className="mx-8">
              <span className="text-[10px] font-mono text-slate-600 tracking-wider">{cert}</span>
              <span className="mx-8 text-white/[0.06]">|</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </div>
    </>
  )
}
