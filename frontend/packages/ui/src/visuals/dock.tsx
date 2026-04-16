"use client"
import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "../utils"

export interface DockProps {
  children: React.ReactNode
  className?: string
  /** Maximum scale on hover */
  maxScale?: number
  /** Distance of effect in px */
  distance?: number
}

/**
 * Dock — macOS-style dock with spring magnification on hover.
 * Wrap DockItem children inside.
 * Inspired by Magic UI's Dock component.
 */
export function Dock({ children, className, maxScale = 1.8, distance = 120 }: DockProps) {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-2 rounded-2xl border border-border bg-card/80 px-3 pb-2 backdrop-blur-xl",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { mouseX, maxScale, distance })
        }
        return child
      })}
    </motion.div>
  )
}

export interface DockItemProps {
  children: React.ReactNode
  className?: string
  label?: string
  onClick?: () => void
  href?: string
  /* Injected by Dock */
  mouseX?: any
  maxScale?: number
  distance?: number
}

export function DockItem({
  children,
  className,
  label,
  onClick,
  href,
  mouseX,
  maxScale = 1.8,
  distance = 120,
}: DockItemProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const distanceVal = useTransform(mouseX ?? useMotionValue(Infinity), (val: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return Infinity
    return val - rect.left - rect.width / 2
  })

  const widthSync = useTransform(distanceVal, [-distance, 0, distance], [40, 40 * maxScale, 40])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 15 })

  const Wrapper = href ? "a" : "button"

  return (
    <Wrapper
      {...(href ? { href } : { type: "button" as const, onClick })}
      className="group relative"
    >
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        className={cn(
          "flex items-center justify-center rounded-xl bg-muted text-foreground transition-colors hover:bg-accent",
          className
        )}
      >
        {children}
      </motion.div>
      {label && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      )}
    </Wrapper>
  )
}
