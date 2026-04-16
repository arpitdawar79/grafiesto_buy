"use client"
import * as React from "react"
import { cn } from "../utils"

export interface ShineBorderProps {
  /** Border radius override */
  borderRadius?: number
  /** Border width in px */
  borderWidth?: number
  /** Animation duration in seconds */
  duration?: number
  /** Shine gradient colors */
  color?: string[]
  className?: string
  children?: React.ReactNode
}

/**
 * ShineBorder — an animated shiny gradient rotating around a card's border.
 * Wraps children. Stateless, CSS-animated. Inspired by Magic UI.
 */
export function ShineBorder({
  borderRadius = 12,
  borderWidth = 2,
  duration = 8,
  color = ["hsl(var(--primary))", "hsl(var(--accent))", "hsl(var(--brand))"],
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative overflow-hidden p-[var(--shine-border-width)]", className)}
      style={
        {
          "--shine-border-width": `${borderWidth}px`,
          "--shine-border-radius": `${borderRadius}px`,
          borderRadius: `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      {/* Rotating gradient layer */}
      <div
        className="pointer-events-none absolute inset-0 animate-[spin_var(--shine-duration)_linear_infinite]"
        style={
          {
            "--shine-duration": `${duration}s`,
            background: `conic-gradient(from 0deg, ${color.join(", ")}, ${color[0]})`,
            animationDuration: `${duration}s`,
          } as React.CSSProperties
        }
      />
      {/* Inner content */}
      <div
        className="relative z-10 h-full w-full bg-background"
        style={{ borderRadius: `${borderRadius - borderWidth}px` }}
      >
        {children}
      </div>
    </div>
  )
}
