"use client"
import * as React from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, FileText, FlaskConical, Globe, Phone, Shield, Truck, BarChart3, Package, Clock, Award, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import {
  Button,
  Badge,
  FadeIn,
  BlurIn,
  Magnetic,
  Parallax,
  ScrollProgress,
  SmoothScroll,
  CursorGlow,
  SpotlightCard,
  GradientText,
  TextShimmer,
  RetroGrid,
  Marquee,
  MarqueeItem,
  GlowCard,
  Dock,
  DockItem,
  NumberTicker,
  WordRotate,
  AnimatedList,
  BorderBeam,
  PulsatingButton,
  SAMPLE_PRODUCTS,
  getFeaturedProducts,
} from "@grafiesto/ui"

/* ─── REBO CHEMICALS — Enterprise B2B Industrial ────────────── */
export default function HomePage() {
  const chemicals = SAMPLE_PRODUCTS.filter(p => p.collectionId === "col_chemicals")
  const allProducts = [...chemicals, ...SAMPLE_PRODUCTS.filter(p => p.tags.includes("b2b") || p.tags.includes("chemical"))].slice(0, 8)

  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-[#3B82F6]" />
      <CursorGlow />

      <div className="flex flex-col bg-[#06090F] text-[#C8CED8] font-sans">

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  1 · HERO — High-contrast industrial, stark                   */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <RetroGrid className="absolute inset-0 opacity-[0.03]" />
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-[#06090F] via-transparent to-[#06090F]" />

          {/* Accent glow sphere */}
          <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

          <div className="relative z-10 container min-h-[100svh] flex flex-col justify-center py-28">
            <div className="max-w-4xl">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 bg-[#0D1220] border border-[#1A2235] px-5 py-2.5 rounded-full text-xs font-mono text-[#3B82F6] mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  ISO 9001:2015 Certified · IFRA Compliant · GMP
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h1 className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] font-black leading-[0.9] tracking-tight">
                  Industrial
                  <br />
                  <GradientText gradient="linear-gradient(135deg, #3B82F6, #8B5CF6, #06B6D4)" animate className="font-black">
                    <WordRotate words={["Sourcing.", "Chemicals.", "Materials."]} duration={2800} />
                  </GradientText>
                  <br />
                  <span className="text-[#2A3448]">Simplified.</span>
                </h1>
              </FadeIn>

              <BlurIn delay={0.7}>
                <p className="max-w-lg text-lg leading-relaxed text-[#4A5568] mt-8 font-light">
                  Premium-grade fragrance raw materials, solvents, and aroma chemicals. Fast quoting, bulk pricing, MSDS on demand.
                </p>
              </BlurIn>

              <FadeIn delay={0.9} className="flex flex-col sm:flex-row gap-3 mt-12">
                <Magnetic strength={0.1}>
                  <PulsatingButton className="rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] px-8 h-14 font-bold text-sm text-white">
                    <Link href="/shop" className="flex items-center gap-2">Browse Catalogue <ArrowRight className="w-5 h-5" /></Link>
                  </PulsatingButton>
                </Magnetic>
                <Button variant="outline" size="lg" className="rounded-lg h-14 border-[#1A2235] text-[#6B7280] hover:text-white hover:border-[#2A3448] bg-transparent font-mono" asChild>
                  <Link href="/contact" className="flex items-center gap-2"><Phone className="w-4 h-4" /> Request Quote</Link>
                </Button>
              </FadeIn>

              {/* Client logos */}
              <FadeIn delay={1.1}>
                <div className="flex items-center gap-10 mt-16 pt-10 border-t border-[#1A2235]">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#2A3448] font-mono">Trusted by</span>
                  {["Hindustan Unilever", "Godrej", "Firmenich", "IFF", "BASF"].map(name => (
                    <span key={name} className="text-[10px] font-mono uppercase tracking-widest text-[#2A3448] hidden md:block">{name}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  2 · METRICS — Dense data strip                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-[#1A2235] bg-[#0A0F18]">
          <div className="container grid grid-cols-5 divide-x divide-[#1A2235]">
            {[
              { icon: Package, v: 500, s: "+", l: "SKUs in Stock" },
              { icon: Globe, v: 2500, s: "+", l: "B2B Clients" },
              { icon: Truck, v: 18, l: "Countries" },
              { icon: Clock, v: 24, s: "hr", l: "Quote Turnaround" },
              { icon: Award, v: 99.7, s: "%", l: "Purity Avg.", d: 1 },
            ].map(({ icon: Icon, v, s, l, d }, i) => (
              <FadeIn key={l} delay={i * 0.08}>
                <div className="py-14 text-center">
                  <Icon className="w-5 h-5 text-[#3B82F6]/40 mx-auto mb-3" />
                  <p className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-white">
                    <NumberTicker value={v} decimalPlaces={d || 0} />{s && <span className="text-[#3B82F6]">{s}</span>}
                  </p>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#4A5568] mt-3 font-mono">{l}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  3 · CATALOGUE TABLE — Dense data editorial                   */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="container py-24 md:py-32">
          <div className="flex justify-between items-end mb-14">
            <div>
              <TextShimmer as="p" className="text-[10px] font-mono uppercase tracking-widest text-[#3B82F6] mb-2">Chemicals Index</TextShimmer>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Featured Materials</h2>
            </div>
            <Button variant="outline" className="border-[#1A2235] text-[#6B7280] hover:text-white bg-transparent font-mono hidden md:inline-flex" asChild>
              <Link href="/shop">Full Index <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#1A2235] bg-[#0A0F18]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A2235]">
                  {["Product", "CAS Number", "Purity", "MOQ", "Price/L", "MSDS"].map(h => (
                    <th key={h} className={`py-5 px-6 text-[8px] uppercase tracking-[0.3em] text-[#4A5568] font-mono font-semibold ${h === "Price/L" ? "text-right" : h === "MSDS" ? "text-center" : "text-left"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allProducts.slice(0, 6).map((p) => {
                  const cas = p.subtitle?.includes("CAS") ? p.subtitle.split("·")[0]?.trim() : "On Request"
                  const purity = p.subtitle?.match(/\d+%/)?.[0] || "99%+"
                  return (
                    <tr key={p.id} className="border-b border-[#1A2235]/60 hover:bg-[#0D1220] transition-colors group">
                      <td className="py-4 px-6">
                        <Link href={`/product/${p.handle}`} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-[#0D1220] overflow-hidden flex-shrink-0 border border-[#1A2235]">
                            <img src={p.images[0]?.url} alt="" className="w-full h-full object-cover opacity-70" />
                          </div>
                          <div>
                            <p className="font-semibold text-white group-hover:text-[#3B82F6] transition-colors">{p.title}</p>
                            <p className="text-[9px] text-[#4A5568] font-mono">{p.tags[0]}</p>
                          </div>
                        </Link>
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-[#6B7280]">{cas}</td>
                      <td className="py-4 px-6"><Badge variant="outline" className="bg-transparent border-[#1A2235] text-[#6B7280] text-[9px] font-mono">{purity}</Badge></td>
                      <td className="py-4 px-6 font-mono text-xs text-[#6B7280]">500ml</td>
                      <td className="py-4 px-6 text-right font-mono font-bold text-white">₹{p.variants[0]?.price ? (p.variants[0].price / 100).toLocaleString() : "—"}</td>
                      <td className="py-4 px-6 text-center">
                        <button className="text-[#4A5568] hover:text-[#3B82F6] transition-colors"><FileText className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  4 · PROCESS FLOW — Numbered steps with BorderBeam           */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-[#1A2235] bg-[#0A0F18] py-24">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white">How It Works</h2>
              <p className="text-[#4A5568] mt-3">From quote to delivery. No middlemen.</p>
            </FadeIn>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { n: "01", t: "Search & Select", d: "Browse 500+ SKUs. Filter by CAS, grade, or application.", icon: FlaskConical },
                { n: "02", t: "Request Quote", d: "Submit quantities. Tiered pricing within 24 hours.", icon: FileText },
                { n: "03", t: "Payment", d: "Net-28 terms for verified accounts. COD under ₹50K.", icon: BarChart3 },
                { n: "04", t: "Track & Receive", d: "Live GPS tracking. Temperature logs for cold-chain.", icon: Truck },
              ].map(({ n, t, d, icon: Icon }, i) => (
                <FadeIn key={n} delay={i * 0.1}>
                  <SpotlightCard className="p-8 bg-[#06090F] border-[#1A2235] rounded-xl h-full relative overflow-hidden">
                    <BorderBeam duration={14} delay={i * 3} colorFrom="rgba(59,130,246,0.3)" colorTo="transparent" />
                    <span className="text-[80px] font-black text-[#0D1220] absolute top-0 right-4 leading-none select-none">{n}</span>
                    <div className="relative z-10">
                      <Icon className="w-7 h-7 text-[#3B82F6] mb-5" />
                      <h3 className="font-bold text-lg text-white mb-2">{t}</h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed">{d}</p>
                    </div>
                  </SpotlightCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  5 · LIVE PLATFORM ACTIVITY — Full-width                     */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-20">
          <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
            <FadeIn>
              <h3 className="text-3xl font-black text-white mb-3">Platform Activity</h3>
              <p className="text-sm text-[#4A5568]">Real-time orders and RFQs from verified businesses</p>
              <div className="flex items-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-[#4A5568] font-mono"><NumberTicker value={127} /> active sessions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative h-[300px] overflow-hidden rounded-xl border border-[#1A2235] bg-[#0A0F18] p-4 font-mono">
                <AnimatedList delay={2500}>
                  {[
                    { name: "Hindustan Unilever", action: "placed PO for 200L DPG", icon: "📦", c: "#3B82F6" },
                    { name: "Godrej Consumer", action: "requested quote — Linalool 25L", icon: "📋", c: "#10B981" },
                    { name: "Firmenich India", action: "downloaded MSDS — Benzyl Alcohol", icon: "📄", c: "#8B5CF6" },
                    { name: "Asian Paints", action: "approved PO #A-2847", icon: "✅", c: "#F59E0B" },
                    { name: "Marico Ltd", action: "registered new procurement account", icon: "🏢", c: "#EC4899" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#0D1220] border border-[#1A2235]/50 text-xs">
                      <div className="w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.c}10`, border: `1px solid ${item.c}25` }}>
                        <span className="text-base">{item.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold truncate">{item.name}</p>
                        <p className="text-[#4A5568] text-[10px]">{item.action}</p>
                      </div>
                    </div>
                  ))}
                </AnimatedList>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0F18] to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  6 · COMPLIANCE — Minimal icons                               */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="border-y border-[#1A2235] bg-[#0A0F18] py-20">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "ISO 9001:2015", d: "Quality Management" },
              { t: "IFRA Certified", d: "Fragrance Safety" },
              { t: "REACH", d: "EU Chemical Regulation" },
              { t: "GMP", d: "Good Manufacturing" },
            ].map((c, i) => (
              <FadeIn key={c.t} delay={i * 0.08}>
                <div className="text-center py-8 px-4 border border-[#1A2235] rounded-xl hover:border-[#2A3448] transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#3B82F6]/60 mx-auto mb-3" />
                  <p className="font-mono font-bold text-white text-sm">{c.t}</p>
                  <p className="text-[10px] text-[#4A5568] mt-1">{c.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  7 · CTA — Stark, enterprise                                  */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="py-28 md:py-40">
          <div className="container max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">
                Ready to <GradientText gradient="linear-gradient(135deg, #3B82F6, #8B5CF6)" animate className="font-black">streamline</GradientText> procurement?
              </h2>
              <p className="text-[#4A5568] mt-6 text-lg">Custom pricing within 24 hours. Talk to our team.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Magnetic>
                <PulsatingButton className="rounded-lg bg-[#3B82F6] px-10 h-14 font-bold text-sm text-white">
                  <Link href="/contact" className="flex items-center gap-2">Get Started <ArrowRight className="w-5 h-5" /></Link>
                </PulsatingButton>
              </Magnetic>
              <Button variant="outline" size="lg" className="rounded-lg h-14 border-[#1A2235] text-[#6B7280] hover:text-white bg-transparent font-mono" asChild>
                <Link href="/shop">Browse Catalogue</Link>
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/*  FLOATING DOCK                                                */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
          <Dock className="bg-[#0D1220]/90 backdrop-blur-xl border border-[#1A2235] shadow-2xl rounded-2xl px-3 py-2">
            <DockItem label="Catalogue" onClick={() => {}}><FlaskConical className="w-5 h-5 text-[#6B7280]" /></DockItem>
            <DockItem label="Quote" onClick={() => {}}><FileText className="w-5 h-5 text-[#6B7280]" /></DockItem>
            <DockItem label="Track" onClick={() => {}}><Truck className="w-5 h-5 text-[#6B7280]" /></DockItem>
            <DockItem label="Contact" onClick={() => {}}><Phone className="w-5 h-5 text-[#6B7280]" /></DockItem>
          </Dock>
        </div>
      </div>
    </>
  )
}
