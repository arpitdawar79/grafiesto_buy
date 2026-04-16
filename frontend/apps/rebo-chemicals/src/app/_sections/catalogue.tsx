"use client"

import { Badge, Button, FadeIn, SpotlightCard, StaggerReveal, getBestSellers } from "@grafiesto/ui"
import { ArrowRight, Download, Filter } from "lucide-react"
import Link from "next/link"

export function CatalogueSection() {
  const products = getBestSellers()

  return (
    <section className="py-20 md:py-28 bg-[#0A0F1A]">
      <div className="container">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/40 mb-2">
              Product Catalogue
            </p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              Browse Raw Materials
            </h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-white/[0.06] text-slate-400 hover:bg-white/[0.04] rounded-md text-xs"
            >
              <Filter className="w-3.5 h-3.5 mr-1.5" />
              Filter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/[0.06] text-slate-400 hover:bg-white/[0.04] rounded-md text-xs"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Spec Sheet
            </Button>
          </div>
        </FadeIn>

        <StaggerReveal stagger={0.06} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {products.slice(0, 6).map((p) => (
            <Link key={p.id} href={`/product/${p.handle}`}>
              <SpotlightCard className="p-5 rounded-lg bg-white/[0.03] border-white/[0.05] group h-full hover:border-cyan-400/15 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors truncate">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-mono">{p.subtitle}</p>
                  </div>
                  <div className="w-11 h-11 rounded-md bg-white/[0.04] overflow-hidden flex-shrink-0">
                    <img
                      src={p.images[0]?.url}
                      alt=""
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-white/[0.04] text-slate-400 border-white/[0.06] text-[9px] font-mono rounded">
                    MOQ: 5kg
                  </Badge>
                  {p.badge && (
                    <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/15 text-[9px] font-mono rounded">
                      {p.badge}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.04]">
                  <span className="text-sm font-semibold text-white font-mono">
                    ₹{p.variants[0].price / 100}/kg
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400/40 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </StaggerReveal>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <Button
            variant="outline"
            className="border-white/[0.08] text-slate-300 hover:bg-white/[0.04] rounded-md"
            asChild
          >
            <Link href="/shop">
              View Full Catalogue <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
