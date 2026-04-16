"use client"
import * as React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { cn } from "../utils"

/**
 * ScrollProgress — a thin progress bar at the top of the page that shows scroll depth.
 */
export function ScrollProgress({
  className,
  color,
}: {
  className?: string
  color?: string
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 })

  return (
    <motion.div
      className={cn("fixed inset-x-0 top-0 z-[100] h-[2px] origin-left", className)}
      style={{
        scaleX,
        background: color ?? "hsl(var(--primary))",
      }}
    />
  )
}
