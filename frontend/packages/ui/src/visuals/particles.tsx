"use client"
import * as React from "react"
import { cn } from "../utils"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export interface ParticleFieldProps {
  count?: number
  color?: string
  minSize?: number
  maxSize?: number
  className?: string
  speed?: "slow" | "normal" | "fast"
}

/**
 * ParticleField — floating particles that drift upward. Use as a decorative background.
 * Purely CSS-animated for performance.
 */
export function ParticleField({
  count = 40,
  color = "hsl(var(--primary))",
  minSize = 2,
  maxSize = 5,
  className,
  speed = "normal",
}: ParticleFieldProps) {
  const particles = React.useMemo<Particle[]>(() => {
    const speedMultiplier = speed === "slow" ? 1.5 : speed === "fast" ? 0.6 : 1
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      duration: (8 + Math.random() * 12) * speedMultiplier,
      delay: Math.random() * -20,
      opacity: 0.1 + Math.random() * 0.4,
    }))
  }, [count, minSize, maxSize, speed])

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-[particle-float_var(--dur)_ease-in-out_infinite]"
          style={
            {
              left: `${p.x}%`,
              bottom: `-${p.size}px`,
              width: p.size,
              height: p.size,
              backgroundColor: color,
              opacity: p.opacity,
              "--dur": `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Meteors — shooting stars streaking across the screen                      */
/* -------------------------------------------------------------------------- */

export interface MeteorsProps {
  count?: number
  className?: string
}

export function Meteors({ count = 12, className }: MeteorsProps) {
  const items = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 40}%`,
        delay: `${Math.random() * 6}s`,
        duration: `${1.5 + Math.random() * 3}s`,
        size: 1 + Math.random() * 2,
      })),
    [count]
  )

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {items.map((m) => (
        <div
          key={m.id}
          className="absolute animate-[meteor_var(--dur)_linear_infinite]"
          style={
            {
              left: m.left,
              top: m.top,
              width: `${m.size}px`,
              height: `${m.size * 80}px`,
              "--dur": m.duration,
              animationDelay: m.delay,
              background: `linear-gradient(to bottom, hsl(var(--primary) / 0.6), transparent)`,
              borderRadius: "100px",
              transform: "rotate(-45deg)",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
