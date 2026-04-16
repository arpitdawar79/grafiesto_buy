"use client"
import * as React from "react"
import { cn } from "../utils"

export interface MarqueeProps {
  children: React.ReactNode
  /** Speed in seconds per full loop */
  speed?: number
  /** Reverse direction */
  reverse?: boolean
  /** Pause on hover */
  pauseOnHover?: boolean
  /** Vertical marquee */
  vertical?: boolean
  /** Number of copies (must be ≥2 for seamless loop) */
  repeat?: number
  className?: string
}

/**
 * Marquee — an infinitely looping scroll of content. Use for logos,
 * testimonials, product images, or brand text.
 * Inspired by Magic UI's Marquee component.
 */
export function Marquee({
  children,
  speed = 30,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center justify-around gap-[var(--gap)]",
            vertical
              ? "animate-[marquee-vertical_var(--duration)_linear_infinite] flex-col"
              : "animate-[marquee-horizontal_var(--duration)_linear_infinite]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MarqueeItem — styled wrapper for items inside a Marquee                   */
/* -------------------------------------------------------------------------- */

export function MarqueeItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-4 px-4", className)}>
      {children}
    </div>
  )
}
