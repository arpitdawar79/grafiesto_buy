"use client"
import * as React from "react"
import { cn } from "../utils"

export type Currency = "INR" | "USD" | "EUR" | "GBP" | "AED"

const LOCALE: Record<Currency, string> = {
  INR: "en-IN",
  USD: "en-US",
  EUR: "de-DE",
  GBP: "en-GB",
  AED: "en-AE",
}

export function formatMoney(amountMinor: number, currency: Currency = "INR") {
  const value = amountMinor / 100
  return new Intl.NumberFormat(LOCALE[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value)
}

export interface PriceTagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Price in minor units (paise / cents) */
  amount: number
  /** Optional compare-at / MRP in minor units */
  compareAt?: number
  currency?: Currency
  size?: "sm" | "md" | "lg" | "xl"
  showDiscount?: boolean
  /** Optional unit suffix (per kg, /month, etc.) */
  unit?: string
}

const SIZE_CLASSES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
}

export const PriceTag = React.forwardRef<HTMLDivElement, PriceTagProps>(
  ({ amount, compareAt, currency = "INR", size = "md", showDiscount = true, unit, className, ...props }, ref) => {
    const hasDiscount = compareAt && compareAt > amount
    const discountPct = hasDiscount ? Math.round(((compareAt! - amount) / compareAt!) * 100) : 0
    return (
      <div ref={ref} className={cn("inline-flex items-baseline gap-2", className)} {...props}>
        <span className={cn("font-display font-semibold tracking-tight text-foreground", SIZE_CLASSES[size])}>
          {formatMoney(amount, currency)}
          {unit && <span className="ml-1 text-xs font-normal text-muted-foreground">{unit}</span>}
        </span>
        {hasDiscount && (
          <>
            <span className="text-sm text-muted-foreground line-through">{formatMoney(compareAt!, currency)}</span>
            {showDiscount && (
              <span className="text-xs font-semibold text-success">-{discountPct}%</span>
            )}
          </>
        )}
      </div>
    )
  }
)
PriceTag.displayName = "PriceTag"
