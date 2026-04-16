"use client"
import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Grid3X3,
  List,
  SlidersHorizontal,
  ChevronDown,
  X,
  Search,
} from "lucide-react"
import {
  Button,
  Input,
  Badge,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Checkbox,
  Label,
  Separator,
  ScrollArea,
  ProductCard,
  EmptyState,
  SAMPLE_PRODUCTS,
  SAMPLE_COLLECTIONS,
  FadeIn,
  StaggerReveal,
  BlurIn,
  TextShimmer,
  SmoothScroll,
} from "@grafiesto/ui"
import type { Product } from "@grafiesto/ui"
import { brand } from "@/lib/brand"

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
]

const PRICE_RANGES = [
  { label: "Under ₹500", min: 0, max: 50000 },
  { label: "₹500 – ₹1,000", min: 50000, max: 100000 },
  { label: "₹1,000 – ₹3,000", min: 100000, max: 300000 },
  { label: "₹3,000 – ₹5,000", min: 300000, max: 500000 },
  { label: "Over ₹5,000", min: 500000, max: Infinity },
]

function sortProducts(products: Product[], sort: string): Product[] {
  const sorted = [...products]
  switch (sort) {
    case "newest":
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    case "price-asc":
      return sorted.sort((a, b) => a.variants[0].price - b.variants[0].price)
    case "price-desc":
      return sorted.sort((a, b) => b.variants[0].price - a.variants[0].price)
    case "popular":
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount)
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating)
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const collectionParam = searchParams.get("collection")
  const sortParam = searchParams.get("sort") ?? "featured"
  const queryParam = searchParams.get("q") ?? ""

  const [sort, setSort] = React.useState(sortParam)
  const [query, setQuery] = React.useState(queryParam)
  const [selectedCollections, setSelectedCollections] = React.useState<Set<string>>(
    collectionParam ? new Set([collectionParam]) : new Set()
  )
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<number | null>(null)
  const [gridCols, setGridCols] = React.useState<2 | 3 | 4>(3)
  const [filtersOpen, setFiltersOpen] = React.useState(false)

  const toggleCollection = (handle: string) => {
    setSelectedCollections((prev) => {
      const next = new Set(prev)
      if (next.has(handle)) next.delete(handle)
      else next.add(handle)
      return next
    })
  }

  const filtered = React.useMemo(() => {
    let prods = [...SAMPLE_PRODUCTS]

    if (query) {
      const q = query.toLowerCase()
      prods = prods.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle?.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      )
    }

    if (selectedCollections.size > 0) {
      const collectionIds = SAMPLE_COLLECTIONS
        .filter((c) => selectedCollections.has(c.handle))
        .map((c) => c.id)
      prods = prods.filter((p) => collectionIds.includes(p.collectionId))
    }

    if (selectedPriceRange !== null) {
      const range = PRICE_RANGES[selectedPriceRange]
      prods = prods.filter((p) => {
        const price = p.variants[0].price
        return price >= range.min && price < range.max
      })
    }

    return sortProducts(prods, sort)
  }, [query, selectedCollections, selectedPriceRange, sort])

  const activeFilterCount =
    selectedCollections.size + (selectedPriceRange !== null ? 1 : 0) + (query ? 1 : 0)

  const clearFilters = () => {
    setSelectedCollections(new Set())
    setSelectedPriceRange(null)
    setQuery("")
  }

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Search within */}
      <div>
        <Label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Search
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <Separator />

      {/* Collections */}
      <div>
        <Label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Collections
        </Label>
        <div className="space-y-2">
          {SAMPLE_COLLECTIONS.map((col) => (
            <label
              key={col.id}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1 text-sm transition-colors hover:bg-accent"
            >
              <Checkbox
                checked={selectedCollections.has(col.handle)}
                onCheckedChange={() => toggleCollection(col.handle)}
              />
              <span className="flex-1">{col.title}</span>
              <span className="text-xs text-muted-foreground">{col.productCount}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price */}
      <div>
        <Label className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Price Range
        </Label>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, i) => (
            <label
              key={range.label}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-1 text-sm transition-colors hover:bg-accent"
            >
              <Checkbox
                checked={selectedPriceRange === i}
                onCheckedChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <>
          <Separator />
          <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full">
            Clear all filters ({activeFilterCount})
          </Button>
        </>
      )}
    </div>
  )

  return (
    <div className="container py-8 pt-36 md:pt-40">
      <SmoothScroll />

      {/* Breadcrumb */}
      <FadeIn>
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <span className="text-foreground">Shop</span>
          {collectionParam && (
            <>
              <span>/</span>
              <span className="text-foreground capitalize">{collectionParam}</span>
            </>
          )}
        </nav>
      </FadeIn>

      {/* Page header */}
      <div className="mb-8">
        <FadeIn blur={8}>
          <h1 className="font-display text-4xl font-light tracking-tight md:text-5xl">
            {collectionParam
              ? SAMPLE_COLLECTIONS.find((c) => c.handle === collectionParam)?.title ?? "Shop"
              : "Shop All"}
          </h1>
        </FadeIn>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground">
          {collectionParam
            ? SAMPLE_COLLECTIONS.find((c) => c.handle === collectionParam)?.description
            : "Browse our complete collection of artisan fragrances, candles, and body care."}
        </p>
      </div>

      {/* Toolbar */}
      <FadeIn delay={0.2}>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {/* Mobile filter trigger */}
          <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge variant="brand" className="ml-2 h-5 w-5 rounded-full p-0 text-[10px]">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <ScrollArea className="mt-4 h-[calc(100vh-80px)] pr-4">
                <FilterPanel />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {/* Active filter pills */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {query && (
                <Badge variant="secondary" className="gap-1">
                  &quot;{query}&quot;
                  <button onClick={() => setQuery("")} aria-label="Remove search filter">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {Array.from(selectedCollections).map((handle) => (
                <Badge key={handle} variant="secondary" className="gap-1 capitalize">
                  {handle}
                  <button onClick={() => toggleCollection(handle)} aria-label={`Remove ${handle} filter`}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {selectedPriceRange !== null && (
                <Badge variant="secondary" className="gap-1">
                  {PRICE_RANGES[selectedPriceRange].label}
                  <button onClick={() => setSelectedPriceRange(null)} aria-label="Remove price filter">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1" />

          {/* Sort */}
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Grid toggle — desktop only */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              onClick={() => setGridCols(3)}
              className={`rounded p-1.5 ${gridCols === 3 ? "bg-accent" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="3 column grid"
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setGridCols(4)}
              className={`rounded p-1.5 ${gridCols === 4 ? "bg-accent" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="4 column grid"
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <p className="text-sm text-muted-foreground">{filtered.length} products</p>
        </div>
      </FadeIn>

      {/* Main grid */}
      <div className="flex gap-8">
        {/* Desktop sidebar filters */}
        <aside className="hidden w-64 flex-none md:block">
          <div className="sticky top-36">
            <FadeIn direction="left">
              <FilterPanel />
            </FadeIn>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <EmptyState
              icon={<Search className="h-6 w-6" />}
              title="No products found"
              description="Try adjusting your filters or search terms."
              action={
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              }
            />
          ) : (
            <StaggerReveal stagger={0.06}>
              <div
                className={`grid gap-4 md:gap-6 ${
                  gridCols === 4
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2 md:grid-cols-3"
                }`}
              >
                {filtered.map((p) => (
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
      </div>
    </div>
  )
}
