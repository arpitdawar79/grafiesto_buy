"use client"
import * as React from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { cn } from "../utils"

export interface NumberTickerProps {
  /** Target value to animate to */
  value: number
  /** Direction: count up or down */
  direction?: "up" | "down"
  /** Delay before starting (seconds) */
  delay?: number
  /** Number of decimal places */
  decimalPlaces?: number
  /** Starting value */
  startValue?: number
  className?: string
}

/**
 * NumberTicker — animates a number from startValue to target using spring physics.
 * Stateless, triggered on scroll into view. Inspired by Magic UI.
 */
export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  decimalPlaces = 0,
  startValue = 0,
  className,
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const [display, setDisplay] = React.useState(
    Intl.NumberFormat("en-US", { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }).format(
      direction === "down" ? value : startValue
    )
  )

  React.useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [motionValue, inView, delay, value, direction, startValue])

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(
        Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)))
      )
    })
    return unsubscribe
  }, [springValue, decimalPlaces])

  return (
    <span
      ref={ref}
      className={cn("inline-block tabular-nums tracking-wider", className)}
    >
      {display}
    </span>
  )
}
