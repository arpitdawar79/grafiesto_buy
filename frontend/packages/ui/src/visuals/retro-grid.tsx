"use client"
import * as React from "react"
import { cn } from "../utils"

export interface RetroGridProps {
  className?: string
  /** Grid angle in degrees */
  angle?: number
  /** Grid line color */
  color?: string
  /** Grid cell size in px */
  cellSize?: number
}

/**
 * RetroGrid — a perspective-projected grid that recedes into the distance.
 * Use as a decorative background for hero sections or CTAs.
 * Inspired by Magic UI's Retro Grid.
 */
export function RetroGrid({ className, angle = 65, color, cellSize = 60 }: RetroGridProps) {
  const lineColor = color ?? "hsl(var(--foreground) / 0.04)"
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden [perspective:300px]", className)}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `rotateX(${angle}deg)`,
          backgroundImage: `
            linear-gradient(to right, ${lineColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
          backgroundPosition: "center center",
          transformOrigin: "center center",
          maskImage: "linear-gradient(to bottom, transparent 10%, black 30%, black 70%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 10%, black 30%, black 70%, transparent 90%)",
        }}
      />
    </div>
  )
}
