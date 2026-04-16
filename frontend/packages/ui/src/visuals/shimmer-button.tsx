"use client"
import * as React from "react"
import { cn } from "../utils"

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  shimmerDuration?: string
  background?: string
  borderRadius?: string
}

/**
 * ShimmerButton — a premium CTA with a sweeping shimmer effect.
 * Inspired by Magic UI's ShimmerButton.
 */
export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "hsl(var(--primary-foreground))",
      shimmerSize = "0.1em",
      shimmerDuration = "2.5s",
      background = "hsl(var(--primary))",
      borderRadius = "100px",
      className,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden whitespace-nowrap px-8 text-sm font-medium text-primary-foreground transition-all hover:shadow-xl active:scale-[0.97]",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{ background, borderRadius }}
      {...props}
    >
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <div
          className="absolute inset-[-100%] animate-[shimmer-slide_var(--shimmer-duration)_ease-in-out_infinite]"
          style={
            {
              "--shimmer-duration": shimmerDuration,
              background: `linear-gradient(90deg, transparent 30%, ${shimmerColor}20 50%, transparent 70%)`,
            } as React.CSSProperties
          }
        />
      </div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
)
ShimmerButton.displayName = "ShimmerButton"
