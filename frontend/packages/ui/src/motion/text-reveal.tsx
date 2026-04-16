"use client"
import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "../utils"

export interface TextRevealProps {
  children: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
  /** Split mode: "words" splits by space, "chars" by character, "lines" wraps each line */
  split?: "words" | "chars"
  /** Reveal style */
  effect?: "slide-up" | "blur-in" | "fade" | "clip"
}

/**
 * TextReveal — splits text into words or chars and animates each with stagger.
 * Inspired by award-winning editorial sites.
 */
export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  once = true,
  split = "words",
  effect = "slide-up",
}: TextRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.3 })

  const units = split === "chars" ? children.split("") : children.split(" ")

  const variants = {
    "slide-up": {
      hidden: { y: "100%", opacity: 0 },
      visible: { y: "0%", opacity: 1 },
    },
    "blur-in": {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    clip: {
      hidden: { clipPath: "inset(100% 0% 0% 0%)" },
      visible: { clipPath: "inset(0% 0% 0% 0%)" },
    },
  }

  const v = variants[effect]
  const MotionTag = motion[Tag] as any

  return (
    <MotionTag ref={ref} className={cn("flex flex-wrap", className)} aria-label={children}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={v.hidden}
            animate={inView ? v.visible : v.hidden}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden
          >
            {unit}
            {split === "words" && i < units.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/* -------------------------------------------------------------------------- */
/*  LetterPullUp — letters pull up from below with spring                     */
/* -------------------------------------------------------------------------- */

export interface LetterPullUpProps {
  children: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  className?: string
  delay?: number
}

export function LetterPullUp({ children, as: Tag = "h2", className, delay = 0 }: LetterPullUpProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const letters = children.split("")
  const MotionTag = motion[Tag] as any

  return (
    <MotionTag ref={ref} className={cn("flex flex-wrap justify-center", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: 80, opacity: 0, rotateX: -80 }}
          animate={inView ? { y: 0, opacity: 1, rotateX: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            delay: delay + i * 0.04,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </MotionTag>
  )
}

/* -------------------------------------------------------------------------- */
/*  BlurIn — entire text blurs in from invisible                              */
/* -------------------------------------------------------------------------- */

export interface BlurInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BlurIn({ children, className, delay = 0, duration = 0.8 }: BlurInProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
      animate={inView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MorphingText — text cycles between an array of words with morph effect    */
/* -------------------------------------------------------------------------- */

export interface MorphingTextProps {
  words: string[]
  interval?: number
  className?: string
}

export function MorphingText({ words, interval = 3000, className }: MorphingTextProps) {
  const [idx, setIdx] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % words.length), interval)
    return () => clearInterval(t)
  }, [words.length, interval])

  return (
    <span className={cn("relative inline-block", className)}>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 top-0 inline-block"
          initial={false}
          animate={{
            opacity: i === idx ? 1 : 0,
            y: i === idx ? 0 : 20,
            filter: i === idx ? "blur(0px)" : "blur(8px)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={i === idx ? { position: "relative" } : {}}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
