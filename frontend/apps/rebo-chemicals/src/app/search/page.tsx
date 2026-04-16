"use client"
import * as React from "react"
import Link from "next/link"
import { Search, X, TrendingUp, Clock, ArrowRight } from "lucide-react"
import {
  Input,
  Button,
  Badge,
  ProductCard,
  EmptyState,
  Separator,
  searchProducts,
  getFeaturedProducts,
  getBestSellers,
  SAMPLE_COLLECTIONS,
  FadeIn,
  StaggerReveal,
  BlurIn,
  Magnetic,
  SmoothScroll,
} from "@grafiesto/ui"
import { brand } from "@/lib/brand"

const TRENDING_SEARCHES = ["candle", "oud", "gift set", "attar", "soap", "diffuser"]

export default function SearchPage() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [query, setQuery] = React.useState("")
  const [recentSearches, setRecentSearches] = React.useState<string[]>([])

  React.useEffect(() => {
    inputRef.current?.focus()
    try {
      const stored = JSON.parse(localStorage.getItem("grafiesto:recent-searches") ?? "[]")
      if (Array.isArray(stored)) setRecentSearches(stored.slice(0, 5))
    } catch {}
  }, [])

  const results = React.useMemo(() => (query.length >= 2 ? searchProducts(query) : []), [query])

  const commitSearch = (q: string) => {
    setQuery(q)
    try {
      const stored = JSON.parse(localStorage.getItem("grafiesto:recent-searches") ?? "[]")
      const updated = [q, ...stored.filter((s: string) => s !== q)].slice(0, 5)
      localStorage.setItem("grafiesto:recent-searches", JSON.stringify(updated))
      setRecentSearches(updated)
    } catch {}
  }

  const showSuggestions = query.length < 2
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <SmoothScroll>
      <div className="min-h-screen pt-28 md:pt-36">
        <div className="container max-w-4xl">
          {/* Search input — oversized, editorial */}
          <FadeIn blur={8}>
            <div className="relative">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground md:h-8 md:w-8" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && query && commitSearch(query)}
                placeholder="What are you looking for?"
                className="w-full border-b-2 border-border bg-transparent py-4 pl-10 pr-10 font-display text-2xl font-light tracking-tight outline-none placeholder:text-muted-foreground/50 focus:border-foreground md:pl-14 md:text-4xl"
                aria-label="Search products"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </FadeIn>

          {/* Suggestions state */}
          {showSuggestions && (
            <div className="mt-10 space-y-10">
              {/* Recent searches */}
              {recentSearches.length > 0 && (
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> Recent
                  </h3>
                  <FadeIn delay={0.1}>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((s) => (
                        <button
                          key={s}
                          onClick={() => commitSearch(s)}
                          className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-accent active:scale-95"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* Trending */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5" /> Trending
                </h3>
                <FadeIn delay={0.2}>
                  <div className="flex flex-wrap gap-2">
                    {TRENDING_SEARCHES.map((s) => (
                      <button
                        key={s}
                        onClick={() => commitSearch(s)}
                        className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-accent active:scale-95"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Quick collection links */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Collections
                </h3>
                <StaggerReveal stagger={0.08}>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {SAMPLE_COLLECTIONS.slice(0, 4).map((col) => (
                      <Link
                        key={col.id}
                        href={`/shop?collection=${col.handle}`}
                        className="group relative overflow-hidden rounded-xl"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={col.image}
                            alt={col.title}
                            className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-3 left-3 text-sm font-medium text-white">
                            {col.title}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </StaggerReveal>
              </div>

              {/* Featured */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Popular Products
                </h3>
                <StaggerReveal stagger={0.1}>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                    {featured.map((p) => (
                      <ProductCard
                        key={p.id}
                        title={p.title}
                        subtitle={p.subtitle}
                        image={p.images[0]?.url ?? ""}
                        price={p.variants[0].price}
                        compareAt={p.variants[0].compareAtPrice}
                        rating={p.rating}
                        reviewCount={p.reviewCount}
                        badge={p.badge}
                        href={`/product/${p.handle}`}
                      />
                    ))}
                  </div>
                </StaggerReveal>
              </div>
            </div>
          )}

          {/* Results state */}
          {!showSuggestions && (
            <div className="mt-8">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {results.length === 0
                    ? `No results for "${query}"`
                    : `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
                </p>
                {results.length > 0 && (
                  <Link
                    href={`/shop?q=${encodeURIComponent(query)}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    View in shop <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>

              {results.length === 0 ? (
                <EmptyState
                  icon={<Search className="h-6 w-6" />}
                  title="Nothing here"
                  description="We couldn't find products matching your search. Try different keywords or browse our collections."
                  action={
                    <Button variant="outline" asChild>
                      <Link href="/shop">Browse all products</Link>
                    </Button>
                  }
                />
              ) : (
                <StaggerReveal stagger={0.06}>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                    {results.map((p) => (
                      <ProductCard
                        key={p.id}
                        title={p.title}
                        subtitle={p.subtitle}
                        image={p.images[0]?.url ?? ""}
                        hoverImage={p.images[1]?.url}
                        price={p.variants[0].price}
                        compareAt={p.variants[0].compareAtPrice}
                        rating={p.rating}
                        reviewCount={p.reviewCount}
                        badge={p.badge}
                        href={`/product/${p.handle}`}
                      />
                    ))}
                  </div>
                </StaggerReveal>
              )}
            </div>
          )}
        </div>
      </div>
    </SmoothScroll>
  )
}
