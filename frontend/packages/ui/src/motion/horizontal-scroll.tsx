"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "../utils"

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function HorizontalScroll({
  children,
  className,
  innerClassName,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <div ref={containerRef} className={cn("relative h-[200vh]", className)}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          className={cn("flex gap-6 will-change-transform", innerClassName)}
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
