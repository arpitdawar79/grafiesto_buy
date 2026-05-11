"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { cn } from "../utils"

interface VelocitySkewProps {
  children: ReactNode
  className?: string
  skewIntensity?: number
  rotateIntensity?: number
}

export function VelocitySkew({
  children,
  className,
  skewIntensity = 2,
  rotateIntensity = 1,
}: VelocitySkewProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    restDelta: 0.001,
  })

  const velocity = useTransform(springProgress, (v) => {
    // Approximate velocity by difference (framer motion handles this via spring)
    return v
  })

  const skewX = useTransform(velocity, [0, 1], [-skewIntensity, skewIntensity])
  const rotateZ = useTransform(velocity, [0, 1], [-rotateIntensity, rotateIntensity])

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        skewX,
        rotateZ,
      }}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  ScrollVelocityText — text stretches/compresses with scroll speed          */
/* -------------------------------------------------------------------------- */

interface ScrollVelocityTextProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function ScrollVelocityText({
  children,
  className,
  intensity = 0.3,
}: ScrollVelocityTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 - intensity, 1, 1 - intensity]
  )
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 + intensity * 0.5, 1, 1 + intensity * 0.5]
  )

  const springScaleX = useSpring(scaleX, { stiffness: 300, damping: 30 })
  const springScaleY = useSpring(scaleY, { stiffness: 300, damping: 30 })

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        scaleX: springScaleX,
        scaleY: springScaleY,
      }}
    >
      {children}
    </motion.div>
  )
}
