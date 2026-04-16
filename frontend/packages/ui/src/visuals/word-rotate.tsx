"use client"
import * as React from "react"
import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "../utils"

export interface WordRotateProps {
  /** Array of words to cycle through */
  words: string[]
  /** Duration between word changes in ms */
  duration?: number
  className?: string
  /** Custom motion props for enter/exit */
  motionProps?: HTMLMotionProps<"span">
}

/**
 * WordRotate — vertically rotates through an array of words.
 * Stateless (timer-driven display only). Inspired by Magic UI.
 */
export function WordRotate({
  words,
  duration = 2500,
  className,
  motionProps,
}: WordRotateProps) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)
    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className={cn("inline-flex overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
