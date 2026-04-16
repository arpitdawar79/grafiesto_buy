"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "../utils"

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gradient color for the spotlight */
  gradientColor?: string
  /** Gradient opacity */
  gradientOpacity?: number
  /** Size of the gradient spotlight */
  gradientSize?: number
}

/**
 * MagicCard — a card that follows the cursor with an animated gradient spotlight.
 * Inspired by Magic UI's Magic Card component.
 */
export const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      gradientColor = "hsl(var(--primary))",
      gradientOpacity = 0.15,
      gradientSize = 300,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(-gradientSize)
    const mouseY = useMotionValue(-gradientSize)
    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

    const handleMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    const handleLeave = () => {
      mouseX.set(-gradientSize)
      mouseY.set(-gradientSize)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn(
          "group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-2xl",
          className
        )}
        {...props}
      >
        {/* Gradient spotlight layer */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(${gradientSize}px circle at ${springX.get()}px ${springY.get()}px, ${gradientColor}, transparent 70%)`,
            opacity: gradientOpacity,
          }}
        />
        {/* Border glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(${gradientSize * 0.8}px circle at ${springX.get()}px ${springY.get()}px, ${gradientColor}20, transparent 70%)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)
MagicCard.displayName = "MagicCard"
