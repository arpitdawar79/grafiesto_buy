"use client"
import * as React from "react"
import { cn } from "../utils"

export interface AnimatedBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border width */
  borderWidth?: number
  /** Gradient colors for border */
  colors?: string[]
  /** Animation speed in seconds */
  duration?: number
  /** Border radius */
  borderRadius?: string
}

/**
 * AnimatedBorder — a card/wrapper with a continuously rotating gradient border.
 * The inner content sits on top of the animated border with padding.
 */
export const AnimatedBorder = React.forwardRef<HTMLDivElement, AnimatedBorderProps>(
  (
    {
      borderWidth = 2,
      colors,
      duration = 4,
      borderRadius = "var(--radius-lg)",
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const defaultColors = [
      "hsl(var(--primary))",
      "hsl(var(--brand))",
      "hsl(var(--accent))",
      "hsl(var(--primary))",
    ]
    const c = colors ?? defaultColors

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden p-[var(--bw)]", className)}
        style={
          {
            "--bw": `${borderWidth}px`,
            borderRadius,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Rotating gradient layer */}
        <div
          className="absolute inset-[-50%] animate-[spin_var(--dur)_linear_infinite]"
          style={
            {
              "--dur": `${duration}s`,
              background: `conic-gradient(from 0deg, ${c.join(", ")})`,
            } as React.CSSProperties
          }
        />
        {/* Inner content */}
        <div
          className="relative z-10 bg-card"
          style={{ borderRadius: `calc(${borderRadius} - ${borderWidth}px)` }}
        >
          {children}
        </div>
      </div>
    )
  }
)
AnimatedBorder.displayName = "AnimatedBorder"
