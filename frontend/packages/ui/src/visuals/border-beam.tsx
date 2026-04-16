"use client"
import * as React from "react"
import { cn } from "../utils"

export interface BorderBeamProps {
  className?: string
  /** Beam size in px */
  size?: number
  /** Animation duration in seconds */
  duration?: number
  /** Delay before starting */
  delay?: number
  /** Start color */
  colorFrom?: string
  /** End color */
  colorTo?: string
  /** Anchor point (percentage) */
  anchor?: number
  /** Border radius to match parent */
  borderRadius?: string
}

/**
 * BorderBeam — a traveling beam of light along a container's border.
 * Place this inside a relative container. Stateless. Inspired by Magic UI.
 */
export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  delay = 0,
  colorFrom = "hsl(var(--primary))",
  colorTo = "hsl(var(--accent))",
  anchor = 90,
  borderRadius,
}: BorderBeamProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className
      )}
      style={{
        borderRadius,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "1px",
      }}
    >
      <div
        className="absolute inset-0 animate-[border-beam_var(--beam-duration)_linear_infinite]"
        style={
          {
            "--beam-duration": `${duration}s`,
            "--beam-delay": `${delay}s`,
            "--beam-size": `${size}px`,
            "--beam-anchor": `${anchor}%`,
            animationDelay: `${delay}s`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            offsetPath: `rect(0 auto auto 0 round ${borderRadius || "inherit"})`,
            offsetDistance: "0%",
            width: `${size}px`,
            height: "2px",
            animation: `border-beam ${duration}s linear ${delay}s infinite`,
          } as React.CSSProperties
        }
      />
    </div>
  )
}
