"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * CursorGlow — a soft glow that follows the cursor. Place once in your layout.
 * Adds an ambient light effect that responds to mouse movement.
 */
export function CursorGlow({
  size = 400,
  color = "hsl(var(--primary) / 0.08)",
  blur = 80,
}: {
  size?: number
  color?: string
  blur?: number
}) {
  const x = useMotionValue(-size)
  const y = useMotionValue(-size)
  const springX = useSpring(x, { stiffness: 80, damping: 30 })
  const springY = useSpring(y, { stiffness: 80, damping: 30 })

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - size / 2)
      y.set(e.clientY - size / 2)
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [x, y, size])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      aria-hidden
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}
