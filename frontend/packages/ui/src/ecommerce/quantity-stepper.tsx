"use client"
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "../utils"

export interface QuantityStepperProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
  ariaLabel?: string
}

const SIZE = {
  sm: { btn: "h-8 w-8", text: "text-sm", input: "w-8" },
  md: { btn: "h-10 w-10", text: "text-base", input: "w-10" },
  lg: { btn: "h-12 w-12", text: "text-lg", input: "w-12" },
}

export const QuantityStepper = React.forwardRef<HTMLDivElement, QuantityStepperProps>(
  ({ value, onChange, min = 1, max = 99, step = 1, disabled, size = "md", className, ariaLabel = "Quantity" }, ref) => {
    const s = SIZE[size]
    const dec = () => onChange(Math.max(min, value - step))
    const inc = () => onChange(Math.min(max, value + step))
    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className={cn(
          "inline-flex items-center rounded-full border border-border bg-background",
          className
        )}
      >
        <button
          type="button"
          onClick={dec}
          disabled={disabled || value <= min}
          className={cn(
            "flex items-center justify-center rounded-l-full transition-colors active:scale-[0.94] disabled:opacity-40 hover:bg-accent",
            s.btn
          )}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <div
          aria-live="polite"
          className={cn("flex items-center justify-center font-medium tabular-nums", s.text, s.input)}
        >
          {value}
        </div>
        <button
          type="button"
          onClick={inc}
          disabled={disabled || value >= max}
          className={cn(
            "flex items-center justify-center rounded-r-full transition-colors active:scale-[0.94] disabled:opacity-40 hover:bg-accent",
            s.btn
          )}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    )
  }
)
QuantityStepper.displayName = "QuantityStepper"
