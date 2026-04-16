"use client"
import * as React from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { cn } from "../utils"

export interface CountUpProps {
  to: number
  from?: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  once?: boolean
  separator?: string
}

/**
 * CountUp — spring-animated number counter that triggers on scroll.
 * Perfect for stats, social proof, and trust indicators.
 */
export function CountUp({
  to,
  from = 0,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  once = true,
  separator = ",",
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once, amount: 0.5 })
  const motionVal = useMotionValue(from)
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 })
  const [display, setDisplay] = React.useState(formatNum(from, decimals, separator))

  React.useEffect(() => {
    if (inView) motionVal.set(to)
    else motionVal.set(from)
  }, [inView, to, from, motionVal])

  React.useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      setDisplay(formatNum(v, decimals, separator))
    })
    return unsubscribe
  }, [spring, decimals, separator])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

function formatNum(n: number, decimals: number, sep: string): string {
  const fixed = n.toFixed(decimals)
  const [int, dec] = fixed.split(".")
  const withSep = int.replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  return dec ? `${withSep}.${dec}` : withSep
}
