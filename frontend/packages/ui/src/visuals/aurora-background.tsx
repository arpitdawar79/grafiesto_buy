"use client"
import * as React from "react"
import { cn } from "../utils"

export interface AuroraBackgroundProps {
  children?: React.ReactNode
  className?: string
  /** Show aurora — set false during testing for perf */
  showRadialGradient?: boolean
}

/**
 * AuroraBackground — ambient animated gradient blobs. Use as a hero or section background.
 * Inspired by Magic UI's Aurora Background.
 */
export function AuroraBackground({ children, className, showRadialGradient = true }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute -inset-[10px] opacity-50",
            "[--aurora:repeating-linear-gradient(100deg,var(--primary)_10%,var(--accent)_15%,var(--secondary)_20%,var(--primary)_25%,var(--brand)_30%)]",
            "[background-image:var(--aurora)]",
            "[background-size:300%]",
            "[background-position:50%_50%]",
            "animate-[aurora_15s_ease_infinite_alternate]",
            "blur-[80px]",
            "after:absolute after:inset-0",
            showRadialGradient && "after:[background:radial-gradient(ellipse_80%_50%_at_50%_-20%,transparent,hsl(var(--background)))]"
          )}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
