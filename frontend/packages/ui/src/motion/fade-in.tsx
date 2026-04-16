"use client"
import * as React from "react"
import { motion, useInView, type Variant } from "framer-motion"
import { cn } from "../utils"

type Direction = "up" | "down" | "left" | "right" | "none"

export interface FadeInProps {
  children: React.ReactNode
  direction?: Direction
  distance?: number
  duration?: number
  delay?: number
  blur?: number
  once?: boolean
  threshold?: number
  className?: string
  as?: keyof JSX.IntrinsicElements
  stagger?: number
  scale?: number
}

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
}

/**
 * FadeIn — scroll-triggered reveal with direction, blur, and scale.
 * Wrap any content for an elegant on-scroll entrance.
 */
export function FadeIn({
  children,
  direction = "up",
  distance = 40,
  duration = 0.7,
  delay = 0,
  blur = 0,
  once = true,
  threshold = 0.15,
  className,
  as = "div",
  stagger,
  scale,
}: FadeInProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: threshold })
  const offset = OFFSET[direction]
  const Component = motion[as as "div"] as any

  const hidden: Variant = {
    opacity: 0,
    x: offset.x * distance,
    y: offset.y * distance,
    filter: blur ? `blur(${blur}px)` : "blur(0px)",
    scale: scale ?? 1,
  }
  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
  }

  if (stagger && React.Children.count(children) > 1) {
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, i) => (
          <motion.div
            initial={hidden}
            animate={inView ? visible : hidden}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <Component
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </Component>
  )
}
