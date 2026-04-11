"use client"
import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "../utils"

export type VariantOption = {
  value: string
  label: string
  /** Tailwind bg class or CSS color for swatches */
  swatch?: string
  disabled?: boolean
  outOfStock?: boolean
}

export interface VariantSelectorProps {
  label?: string
  options: VariantOption[]
  value?: string
  onChange?: (value: string) => void
  type?: "pill" | "swatch" | "tile"
  className?: string
}

export function VariantSelector({ label, options, value, onChange, type = "pill", className }: VariantSelectorProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {value && <span className="text-xs text-muted-foreground">{options.find((o) => o.value === value)?.label}</span>}
        </div>
      )}
      <div role="radiogroup" className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value
          const disabled = opt.disabled || opt.outOfStock
          const common = cn(
            "relative transition-all active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            disabled && "cursor-not-allowed opacity-40"
          )
          if (type === "swatch") {
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                aria-label={opt.label}
                disabled={disabled}
                onClick={() => onChange?.(opt.value)}
                className={cn(
                  common,
                  "h-10 w-10 rounded-full border-2",
                  selected ? "border-ring ring-2 ring-offset-2 ring-offset-background ring-ring" : "border-border"
                )}
                style={opt.swatch && !opt.swatch.startsWith("bg-") ? { backgroundColor: opt.swatch } : undefined}
              >
                {opt.swatch?.startsWith("bg-") && <span className={cn("block h-full w-full rounded-full", opt.swatch)} />}
                {opt.outOfStock && <span className="absolute inset-x-0 top-1/2 h-px -rotate-45 bg-destructive" />}
              </button>
            )
          }
          if (type === "tile") {
            return (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={selected}
                disabled={disabled}
                onClick={() => onChange?.(opt.value)}
                className={cn(
                  common,
                  "flex min-w-[64px] flex-col items-center gap-0.5 rounded-md border px-3 py-2 text-sm",
                  selected ? "border-ring bg-accent" : "border-border hover:bg-accent/50"
                )}
              >
                <span className="font-medium">{opt.label}</span>
                {opt.outOfStock && <span className="text-[10px] uppercase text-muted-foreground">Sold out</span>}
                {selected && <Check className="absolute right-1 top-1 h-3 w-3" />}
              </button>
            )
          }
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={disabled}
              onClick={() => onChange?.(opt.value)}
              className={cn(
                common,
                "rounded-full border px-4 py-1.5 text-sm",
                selected
                  ? "border-ring bg-foreground text-background"
                  : "border-border bg-background text-foreground hover:bg-accent"
              )}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
