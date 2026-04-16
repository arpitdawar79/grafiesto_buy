"use client"
import * as React from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "../utils"

export interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  duration?: number
  delay?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

/**
 * StaggerReveal — animates direct children one by one on scroll.
 * Use for grids, lists, or any group of elements.
 */
export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  duration = 0.5,
  delay = 0,
  once = true,
  direction = "up",
  distance = 30,
}: StaggerRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.1 })

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const item: Variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
