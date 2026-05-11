"use client"

import { useRef, useState, type ReactNode, type HTMLAttributes } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "../utils"

interface TiltCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  tiltAmount?: number
  perspective?: number
  scale?: number
  glareOpacity?: number
  glareColor?: string
  borderRadius?: number
  className?: string
  innerClassName?: string
}

export function TiltCard({
  children,
  tiltAmount = 10,
  perspective = 1000,
  scale = 1.02,
  glareOpacity = 0.15,
  glareColor = "hsl(var(--primary))",
  borderRadius = 24,
  className,
  innerClassName,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAmount, -tiltAmount]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAmount, tiltAmount]), springConfig)

  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig)
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovering(false)
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ perspective }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={cn("relative w-full h-full", innerClassName)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          borderRadius,
        }}
        animate={{ scale: isHovering ? scale : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius,
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, ${glareColor}, transparent 60%)`,
            opacity: isHovering ? glareOpacity : 0,
            mixBlendMode: "overlay",
          }}
          animate={{ opacity: isHovering ? glareOpacity : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}
