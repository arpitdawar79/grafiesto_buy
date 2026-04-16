"use client"
import * as React from "react"
import { cn } from "../utils"

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Custom gradient colors */
  colors?: string[]
}

/**
 * RainbowButton — a button with an animated rainbow gradient border and glow.
 * Inspired by Magic UI's Rainbow Button.
 */
export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ colors, className, children, ...props }, ref) => {
    const defaultColors = [
      "hsl(var(--primary))",
      "hsl(var(--accent))",
      "hsl(var(--brand))",
      "hsl(var(--primary))",
    ]
    const gradient = (colors ?? defaultColors).join(", ")

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98]",
          "animate-[rainbow-shift_4s_ease_infinite]",
          className
        )}
        style={{
          background: `linear-gradient(135deg, ${gradient})`,
          backgroundSize: "300% 300%",
          animation: "rainbow-shift 4s ease infinite",
        }}
        {...props}
      >
        {/* Glow layer */}
        <span
          className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-80"
          style={{
            background: `linear-gradient(135deg, ${gradient})`,
            backgroundSize: "300% 300%",
            animation: "rainbow-shift 4s ease infinite",
          }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)
RainbowButton.displayName = "RainbowButton"
