"use client"
import * as React from "react"
import { cn } from "../utils"

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glow color */
  glowColor?: string
  /** Glow spread in px */
  spread?: number
}

/**
 * GlowCard — a card with a soft outer glow on hover.
 * Elegant and attention-grabbing without being overdone.
 */
export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ glowColor, spread = 40, className, children, ...props }, ref) => {
    const color = glowColor ?? "hsl(var(--primary) / 0.25)"
    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl border border-border bg-card p-6 transition-all duration-500",
          "hover:border-primary/30",
          className
        )}
        style={
          {
            "--glow": color,
            "--spread": `${spread}px`,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Glow layer */}
        <div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow: `0 0 var(--spread) var(--glow), inset 0 0 var(--spread) var(--glow)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)
GlowCard.displayName = "GlowCard"
