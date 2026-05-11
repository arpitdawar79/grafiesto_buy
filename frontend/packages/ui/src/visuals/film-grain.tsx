"use client"

import { useEffect, useRef } from "react"
import { cn } from "../utils"

interface FilmGrainProps {
  opacity?: number
  className?: string
}

export function FilmGrain({ opacity = 0.035, className }: FilmGrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let frameCount = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const renderGrain = () => {
      frameCount++
      // Only update every 3 frames for subtlety
      if (frameCount % 3 === 0) {
        const imageData = ctx.createImageData(canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          const value = Math.random() * 255
          data[i] = value     // R
          data[i + 1] = value // G
          data[i + 2] = value // B
          data[i + 3] = 255   // A
        }

        ctx.putImageData(imageData, 0, 0)
      }

      animationId = requestAnimationFrame(renderGrain)
    }

    animationId = requestAnimationFrame(renderGrain)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "fixed inset-0 pointer-events-none z-[100] mix-blend-overlay",
        className
      )}
      style={{ opacity }}
    />
  )
}
