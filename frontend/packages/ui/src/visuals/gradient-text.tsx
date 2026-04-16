"use client"
import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "../utils"

export interface GradientTextProps {
  children: React.ReactNode
  className?: string
  /** CSS gradient string */
  gradient?: string
  /** Animate the gradient */
  animate?: boolean
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

/**
 * GradientText — text with animated or static gradient fill.
 * Inspired by Magic UI's Animated Gradient Text.
 */
export function GradientText({
  children,
  className,
  gradient,
  animate = true,
  as: Tag = "span",
}: GradientTextProps) {
  const defaultGradient = "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--brand)) 50%, hsl(var(--accent-foreground)) 100%)"
  return (
    <Tag
      className={cn(
        "bg-clip-text text-transparent",
        animate && "animate-[gradient-x_6s_ease_infinite]",
        className
      )}
      style={{
        backgroundImage: gradient ?? defaultGradient,
        backgroundSize: animate ? "200% 100%" : "100% 100%",
      }}
    >
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------------- */
/*  TextShimmer — text with a sweeping shimmer highlight                      */
/* -------------------------------------------------------------------------- */

export interface TextShimmerProps {
  children: string
  className?: string
  shimmerWidth?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function TextShimmer({
  children,
  className,
  shimmerWidth = 80,
  duration = 3,
  as: Tag = "span",
}: TextShimmerProps) {
  return (
    <Tag
      className={cn("relative inline-block bg-clip-text text-transparent", className)}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          hsl(var(--foreground)) 0%,
          hsl(var(--foreground)) 40%,
          hsl(var(--primary)) 50%,
          hsl(var(--foreground)) 60%,
          hsl(var(--foreground)) 100%
        )`,
        backgroundSize: `${shimmerWidth * 3}% 100%`,
        animation: `shimmer-text ${duration}s ease-in-out infinite`,
      }}
    >
      {children}
    </Tag>
  )
}
