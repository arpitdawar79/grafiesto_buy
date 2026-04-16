"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../utils"

export interface BacklightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Color of the backlight glow */
  color?: string
  /** Size of the backlight */
  size?: number
  /** Blur amount */
  blur?: number
}

/**
 * Backlight — a glowing backlight effect that follows the cursor.
 * Inspired by Magic UI's Backlight component.
 */
export const Backlight = React.forwardRef<HTMLDivElement, BacklightProps>(
  ({ color = "hsl(var(--primary))", size = 400, blur = 100, className, ...props }, ref) => {
    const mouseX = React.useRef(0)
    const mouseY = React.useRef(0)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })

    React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.current = e.clientX
        mouseY.current = e.clientY
        setPosition({ x: e.clientX, y: e.clientY })
      }
      
      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
      <div
        ref={ref}
        className={cn("fixed inset-0 pointer-events-none z-0", className)}
        {...props}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            background: color,
            filter: `blur(${blur}px)`,
            opacity: 0.15,
          }}
          animate={{
            x: position.x - size / 2,
            y: position.y - size / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        />
      </div>
    )
  }
)
Backlight.displayName = "Backlight"
