"use client"

import { motion } from "framer-motion"
import { cn } from "../utils"

interface CircularTextProps {
  text: string
  radius?: number
  className?: string
  textClassName?: string
  duration?: number
  reverse?: boolean
}

export function CircularText({
  text,
  radius = 100,
  className,
  textClassName,
  duration = 20,
  reverse = false,
}: CircularTextProps) {
  const characters = text.split("")
  const angleStep = 360 / characters.length

  return (
    <motion.div
      className={cn("relative inline-block", className)}
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {characters.map((char, i) => {
        const angle = (i * angleStep - 90) * (Math.PI / 180)
        const x = radius + radius * Math.cos(angle)
        const y = radius + radius * Math.sin(angle)

        return (
          <span
            key={i}
            className={cn(
              "absolute text-xs font-medium tracking-widest uppercase",
              textClassName
            )}
            style={{
              left: x,
              top: y,
              transform: `translate(-50%, -50%) rotate(${i * angleStep}deg)`,
            }}
          >
            {char}
          </span>
        )
      })}
    </motion.div>
  )
}
