"use client"
import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "../utils"

export interface ParallaxProps {
  children: React.ReactNode
  /** Offset range in px — negative goes up on scroll, positive goes down */
  offset?: number
  /** Speed multiplier (0 = static, 1 = normal scroll, 2 = double speed) */
  speed?: number
  className?: string
  /** Optionally also scale */
  scale?: [number, number]
  /** Optionally also adjust opacity */
  opacity?: [number, number]
}

/**
 * Parallax — scroll-linked vertical translation with optional scale/opacity.
 * Wrap images, headings, or decorative elements.
 */
export function Parallax({
  children,
  offset = 100,
  speed,
  className,
  scale: scaleRange,
  opacity: opacityRange,
}: ParallaxProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const effectiveOffset = speed != null ? speed * 100 : offset
  const y = useTransform(scrollYProgress, [0, 1], [effectiveOffset, -effectiveOffset])
  const scale = scaleRange ? useTransform(scrollYProgress, [0, 1], scaleRange) : undefined
  const opacity = opacityRange ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [opacityRange[0], 1, 1, opacityRange[1]]) : undefined

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y, scale, opacity }}>{children}</motion.div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  ParallaxImage — full-bleed image with parallax depth                      */
/* -------------------------------------------------------------------------- */

export interface ParallaxImageProps {
  src: string
  alt?: string
  speed?: number
  className?: string
  overlay?: boolean
  overlayOpacity?: number
}

export function ParallaxImage({
  src,
  alt = "",
  speed = 0.3,
  className,
  overlay = true,
  overlayOpacity = 0.3,
}: ParallaxImageProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 20}%`, `${speed * 20}%`])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="h-[120%] w-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />
      )}
    </div>
  )
}
