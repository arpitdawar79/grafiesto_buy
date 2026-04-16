"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "../utils"

export interface MagneticProps {
  children: React.ReactNode
  strength?: number
  className?: string
  /** Also rotate slightly towards cursor */
  tilt?: boolean
}

/**
 * Magnetic — wraps any element to make it follow the cursor within its bounds.
 * Perfect for CTAs, icons, and interactive elements.
 */
export function Magnetic({ children, strength = 0.35, className, tilt }: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    x.set(dx)
    y.set(dy)
    if (tilt) {
      rotateX.set((e.clientY - cy) * -0.1)
      rotateY.set((e.clientX - cx) * 0.1)
    }
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        x: springX,
        y: springY,
        rotateX: tilt ? springRX : 0,
        rotateY: tilt ? springRY : 0,
      }}
      className={cn("inline-flex", className)}
    >
      {children}
    </motion.div>
  )
}
