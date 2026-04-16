"use client"
import * as React from "react"
import { cn } from "../utils"

export interface OrbitProps {
  children?: React.ReactNode
  className?: string
  /** Radius of orbit in px */
  radius?: number
  /** Duration of one full rotation in seconds */
  duration?: number
  /** Reverse direction */
  reverse?: boolean
  /** Delay before starting */
  delay?: number
  /** Path opacity */
  pathOpacity?: number
}

/**
 * OrbitCircle — an element that orbits around a center point.
 * Stack multiple at different radii/speeds for a galaxy effect.
 * Inspired by Magic UI's Orbiting Circles.
 */
export function OrbitCircle({
  children,
  className,
  radius = 120,
  duration = 12,
  reverse = false,
  delay = 0,
  pathOpacity = 0.1,
}: OrbitProps) {
  return (
    <div className={cn("absolute left-1/2 top-1/2", className)}>
      {/* Orbit path ring */}
      <div
        className="absolute rounded-full border border-foreground"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: -radius,
          top: -radius,
          opacity: pathOpacity,
        }}
      />
      {/* Orbiting element */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          animation: `orbit ${duration}s linear ${delay}s infinite ${reverse ? "reverse" : ""}`,
          width: radius * 2,
          height: radius * 2,
          left: -radius,
          top: -radius,
        }}
      >
        <div className="absolute" style={{ top: 0, left: "50%", transform: "translate(-50%, -50%)" }}>
          {children}
        </div>
      </div>
    </div>
  )
}
