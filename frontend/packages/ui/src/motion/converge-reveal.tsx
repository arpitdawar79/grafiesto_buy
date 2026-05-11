"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"
import { cn } from "../utils"

type ConvergeOrigin = "left" | "right" | "top" | "bottom" | "edges" | "corners"

interface ConvergeRevealProps {
  children: ReactNode
  origin?: ConvergeOrigin
  duration?: number
  delay?: number
  stagger?: number
  distance?: number
  className?: string
  once?: boolean
  blur?: boolean
  scale?: boolean
}

export function ConvergeReveal({
  children,
  origin = "edges",
  duration = 1,
  delay = 0,
  stagger = 0.08,
  distance = 60,
  className,
  once = true,
  blur = true,
  scale = true,
}: ConvergeRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.2 })

  const getOrigin = (): { x: number; y: number } => {
    switch (origin) {
      case "left": return { x: -distance, y: 0 }
      case "right": return { x: distance, y: 0 }
      case "top": return { x: 0, y: -distance }
      case "bottom": return { x: 0, y: distance }
      case "edges": return { x: distance, y: 0 }
      case "corners": return { x: distance, y: distance }
    }
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: getOrigin().x,
      y: getOrigin().y,
      filter: blur ? "blur(12px)" : "blur(0px)",
      scale: scale ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  ConvergeStagger — children converge from alternating directions           */
/* -------------------------------------------------------------------------- */

interface ConvergeStaggerProps {
  children: ReactNode[]
  className?: string
  once?: boolean
  stagger?: number
  duration?: number
  distance?: number
}

export function ConvergeStagger({
  children,
  className,
  once = true,
  stagger = 0.1,
  duration = 0.8,
  distance = 80,
}: ConvergeStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.15 })

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => {
        const isLeft = i % 2 === 0
        const isTop = i % 4 < 2

        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: isLeft ? -distance : distance,
              y: isTop ? -distance * 0.3 : distance * 0.3,
              filter: "blur(10px)",
              scale: 0.92,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration,
              delay: i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {child}
          </motion.div>
        )
      })}
    </div>
  )
}
