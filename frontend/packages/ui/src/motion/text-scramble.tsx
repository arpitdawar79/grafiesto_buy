"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { cn } from "../utils"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

interface TextScrambleProps {
  text: string
  className?: string
  scrambleOnHover?: boolean
  duration?: number
  delay?: number
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "div"
  trigger?: "mount" | "hover" | "inview"
  once?: boolean
}

export function TextScramble({
  text,
  className,
  scrambleOnHover = false,
  duration = 1200,
  delay = 0,
  as: Tag = "span",
  trigger = "mount",
  once = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [hasTriggered, setHasTriggered] = useState(false)
  const frameRef = useRef<number>(0)
  const ref = useRef<HTMLElement>(null)

  const scramble = useCallback(() => {
    if (once && hasTriggered) return
    setHasTriggered(true)

    const length = text.length
    let iteration = 0
    const totalFrames = Math.floor(duration / 16)

    const animate = () => {
      iteration++
      const progress = iteration / totalFrames
      const revealedCount = Math.floor(progress * length)

      let result = ""
      for (let i = 0; i < length; i++) {
        if (text[i] === " ") {
          result += " "
        } else if (i < revealedCount) {
          result += text[i]
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }

      setDisplayText(result)

      if (iteration < totalFrames) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayText(text)
      }
    }

    setTimeout(() => {
      frameRef.current = requestAnimationFrame(animate)
    }, delay)
  }, [text, duration, delay, once, hasTriggered])

  useEffect(() => {
    if (trigger === "mount") {
      scramble()
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [trigger, scramble])

  useEffect(() => {
    if (trigger !== "inview" || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scramble()
          if (once) observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [trigger, once, scramble])

  const handleMouseEnter = () => {
    if (scrambleOnHover || trigger === "hover") {
      setHasTriggered(false)
      scramble()
    }
  }

  return (
    <Tag
      ref={ref as any}
      className={cn("inline-block font-mono tracking-wider", className)}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </Tag>
  )
}
