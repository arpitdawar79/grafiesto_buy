"use client"
import * as React from "react"
import { Clock, Search, TrendingUp } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../components/command"

export type SearchResult = {
  id: string
  title: string
  subtitle?: string
  image?: string
  href?: string
  group?: string
}

export interface SearchCommandProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  placeholder?: string
  query?: string
  onQueryChange?: (q: string) => void
  results?: SearchResult[]
  recent?: string[]
  trending?: string[]
  onSelectResult?: (r: SearchResult) => void
  onSelectQuery?: (q: string) => void
  loading?: boolean
}

export function SearchCommand({
  open,
  onOpenChange,
  placeholder = "Search products, brands, collections…",
  query,
  onQueryChange,
  results = [],
  recent = [],
  trending = [],
  onSelectResult,
  onSelectQuery,
  loading,
}: SearchCommandProps) {
  const grouped = React.useMemo(() => {
    const map = new Map<string, SearchResult[]>()
    for (const r of results) {
      const key = r.group ?? "Results"
      map.set(key, [...(map.get(key) ?? []), r])
    }
    return Array.from(map.entries())
  }, [results])

  const showSuggestions = !query && (recent.length > 0 || trending.length > 0)

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={placeholder} value={query} onValueChange={onQueryChange} />
      <CommandList>
        {loading && <div className="px-4 py-6 text-center text-sm text-muted-foreground">Searching…</div>}
        {!loading && query && results.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
        {!loading && showSuggestions && (
          <>
            {recent.length > 0 && (
              <CommandGroup heading="Recent">
                {recent.map((r) => (
                  <CommandItem key={r} onSelect={() => onSelectQuery?.(r)}>
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    {r}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {trending.length > 0 && (
              <>
                {recent.length > 0 && <CommandSeparator />}
                <CommandGroup heading="Trending">
                  {trending.map((t) => (
                    <CommandItem key={t} onSelect={() => onSelectQuery?.(t)}>
                      <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
                      {t}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </>
        )}
        {!loading &&
          grouped.map(([group, items], i) => (
            <React.Fragment key={group}>
              {i > 0 && <CommandSeparator />}
              <CommandGroup heading={group}>
                {items.map((r) => (
                  <CommandItem key={r.id} onSelect={() => onSelectResult?.(r)} value={`${r.title} ${r.subtitle ?? ""}`}>
                    {r.image ? (
                      <img src={r.image} alt="" className="mr-2 h-8 w-8 rounded object-cover" />
                    ) : (
                      <Search className="mr-2 h-4 w-4" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{r.title}</span>
                      {r.subtitle && <span className="text-xs text-muted-foreground">{r.subtitle}</span>}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
      </CommandList>
    </CommandDialog>
  )
}
