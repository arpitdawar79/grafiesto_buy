"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../utils"

export interface RippleProps {
  /** Main color */
  color?: string
  /** Number of circles */
  count?: number
  className?: string
}

/**
 * Ripple — concentric expanding circles. Use as a decorative background element
 * behind product images, hero sections, or feature callouts.
 * Inspired by Magic UI's Ripple component.
 */
export function Ripple({
  color = "hsl(var(--primary) / 0.08)",
  count = 5,
  className,
}: RippleProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden", className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border animate-[ripple-expand_4s_ease-out_infinite]"
          style={{
            width: `${(i + 1) * 20}%`,
            height: `${(i + 1) * 20}%`,
            borderColor: color,
            animationDelay: `${i * 0.6}s`,
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  ClickRipple — material-design-style click ripple on any element           */
/* -------------------------------------------------------------------------- */

type RipplePoint = { x: number; y: number; id: number }

export function useClickRipple() {
  const [ripples, setRipples] = React.useState<RipplePoint[]>([])

  const trigger = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const rip: RipplePoint = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    }
    setRipples((prev) => [...prev, rip])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== rip.id)), 700)
  }

  const RippleLayer = () => (
    <AnimatePresence>
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ opacity: 0.4, scale: 0 }}
          animate={{ opacity: 0, scale: 3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute rounded-full bg-foreground/20"
          style={{
            left: r.x,
            top: r.y,
            width: 80,
            height: 80,
            marginLeft: -40,
            marginTop: -40,
          }}
        />
      ))}
    </AnimatePresence>
  )

  return { trigger, RippleLayer }
}
