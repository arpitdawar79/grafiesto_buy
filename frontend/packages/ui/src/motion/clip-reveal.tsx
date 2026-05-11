"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "../utils"

type RevealDirection = "up" | "down" | "left" | "right" | "center" | "circle"

interface ClipRevealProps {
  children: ReactNode
  direction?: RevealDirection
  duration?: number
  delay?: number
  className?: string
  once?: boolean
  threshold?: number
}

const getClipPath = (direction: RevealDirection, isHidden: boolean): string => {
  if (isHidden) {
    switch (direction) {
      case "up": return "inset(100% 0% 0% 0%)"
      case "down": return "inset(0% 0% 100% 0%)"
      case "left": return "inset(0% 100% 0% 0%)"
      case "right": return "inset(0% 0% 0% 100%)"
      case "center": return "inset(50% 50% 50% 50%)"
      case "circle": return "circle(0% at 50% 50%)"
    }
  }
  switch (direction) {
    case "circle": return "circle(100% at 50% 50%)"
    default: return "inset(0% 0% 0% 0%)"
  }
}

export function ClipReveal({
  children,
  direction = "up",
  duration = 1.2,
  delay = 0,
  className,
  once = true,
  threshold = 0.2,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: threshold })

  const variants: Variants = {
    hidden: {
      clipPath: getClipPath(direction, true),
      opacity: 0.8,
    },
    visible: {
      clipPath: getClipPath(direction, false),
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}
