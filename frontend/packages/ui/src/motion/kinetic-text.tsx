"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "../utils"

interface KineticTextProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function KineticText({
  children,
  className,
  intensity = 15,
}: KineticTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 20 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MagneticText — individual letters magnetize toward cursor                 */
/* -------------------------------------------------------------------------- */

interface MagneticTextProps {
  text: string
  className?: string
  letterClassName?: string
  intensity?: number
}

export function MagneticText({
  text,
  className,
  letterClassName,
  intensity = 0.3,
}: MagneticTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn("flex flex-wrap", className)}>
      {text.split("").map((letter, i) => (
        <MagneticLetter
          key={i}
          letter={letter}
          containerRef={containerRef}
          intensity={intensity}
          className={letterClassName}
        />
      ))}
    </div>
  )
}

function MagneticLetter({
  letter,
  containerRef,
  intensity,
  className,
}: {
  letter: string
  containerRef: React.RefObject<HTMLDivElement>
  intensity: number
  className?: string
}) {
  const letterRef = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!letterRef.current || !containerRef.current) return
    const rect = letterRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distX = (e.clientX - centerX) * intensity
    const distY = (e.clientY - centerY) * intensity

    x.set(distX)
    y.set(distY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (letter === " ") {
    return <span className="inline-block">&nbsp;</span>
  }

  return (
    <motion.span
      ref={letterRef}
      className={cn("inline-block", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {letter}
    </motion.span>
  )
}
