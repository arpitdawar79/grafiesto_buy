"use client"
import * as React from "react"
import { cn } from "../utils"

export interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Color of the pulsating ring */
  pulseColor?: string
  /** Pulse animation duration in seconds */
  duration?: number
}

/**
 * PulsatingButton — a button with an outer pulsating glow ring for maximum CTA attention.
 * Stateless, CSS-animated. Inspired by Magic UI.
 */
export const PulsatingButton = React.forwardRef<HTMLButtonElement, PulsatingButtonProps>(
  (
    {
      pulseColor = "hsl(var(--primary))",
      duration = 2,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:shadow-xl active:scale-[0.97]",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {/* Pulsating ring */}
      <div
        className="absolute inset-0 -z-10 animate-[pulse-ring_var(--pulse-duration)_cubic-bezier(0,0,0.2,1)_infinite] rounded-[inherit]"
        style={
          {
            "--pulse-duration": `${duration}s`,
            boxShadow: `0 0 0 0 ${pulseColor}`,
            animation: `pulse-ring ${duration}s cubic-bezier(0, 0, 0.2, 1) infinite`,
          } as React.CSSProperties
        }
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
)
PulsatingButton.displayName = "PulsatingButton"
