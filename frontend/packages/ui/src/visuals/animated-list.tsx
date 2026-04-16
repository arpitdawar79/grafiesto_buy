"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../utils"

export interface AnimatedListProps {
  children: React.ReactNode
  /** Delay between items appearing (ms) */
  delay?: number
  className?: string
}

/**
 * AnimatedList — renders children one at a time with staggered entrance.
 * Items appear from the top and push existing ones down. Loops infinitely.
 * Stateless (timer-driven). Inspired by Magic UI.
 */
export function AnimatedList({
  children,
  delay = 1500,
  className,
}: AnimatedListProps) {
  const childArray = React.useMemo(
    () => React.Children.toArray(children),
    [children]
  )
  const [visibleCount, setVisibleCount] = React.useState(0)

  React.useEffect(() => {
    if (childArray.length === 0) return
    const interval = setInterval(() => {
      setVisibleCount((prev) => (prev + 1) % (childArray.length + 1))
    }, delay)
    return () => clearInterval(interval)
  }, [childArray.length, delay])

  const visibleItems = childArray.slice(0, visibleCount)

  return (
    <div className={cn("flex flex-col gap-3 overflow-hidden", className)}>
      <AnimatePresence mode="popLayout">
        {visibleItems.map((child, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 40,
              opacity: { duration: 0.2 },
            }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
