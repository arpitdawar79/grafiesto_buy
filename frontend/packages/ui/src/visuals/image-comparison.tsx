"use client"
import * as React from "react"
import { cn } from "../utils"

export interface ImageComparisonProps {
  before: string
  after: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
  initialPosition?: number
}

/**
 * ImageComparison — interactive slider to compare two images (before/after).
 * Drag the handle to reveal. Perfect for product photography or transformations.
 */
export function ImageComparison({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
  initialPosition = 50,
}: ImageComparisonProps) {
  const [position, setPosition] = React.useState(initialPosition)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const isDragging = React.useRef(false)

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }

  const onStart = () => { isDragging.current = true }
  const onEnd = () => { isDragging.current = false }
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    updatePosition(clientX)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative select-none overflow-hidden rounded-xl", className)}
      onMouseMove={onMove}
      onTouchMove={onMove}
      onMouseUp={onEnd}
      onTouchEnd={onEnd}
      onMouseLeave={onEnd}
    >
      {/* After image (full) */}
      <img src={after} alt={afterAlt} className="block w-full" draggable={false} />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          alt={beforeAlt}
          className="block h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
          draggable={false}
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onMouseDown={onStart}
        onTouchStart={onStart}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/90 shadow-lg backdrop-blur-sm">
          <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 5l-5 7 5 7M16 5l5 7-5 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}
