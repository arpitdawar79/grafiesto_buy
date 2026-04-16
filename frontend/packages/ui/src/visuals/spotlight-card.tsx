"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "../utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Spotlight glow color */
  spotlightColor?: string
  /** Spotlight radius */
  radius?: number
}

/**
 * SpotlightCard — a card that follows the cursor with a radial gradient spotlight.
 * Hover to reveal a glowing highlight. Inspired by Magic UI.
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ spotlightColor = "hsl(var(--primary) / 0.12)", radius = 250, className, children, ...props }, ref) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

    const handleMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl",
          className
        )}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(${radius}px circle at ${springX.get()}px ${springY.get()}px, ${spotlightColor}, transparent 70%)`,
            x: 0,
            y: 0,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)
SpotlightCard.displayName = "SpotlightCard"
