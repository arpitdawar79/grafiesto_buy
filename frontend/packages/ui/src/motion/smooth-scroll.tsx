"use client"
import * as React from "react"

/**
 * SmoothScroll — initializes Lenis smooth scrolling globally.
 * Place once in your root layout. Automatically cleans up on unmount.
 */
export function SmoothScroll({ children }: { children?: React.ReactNode }) {
  React.useEffect(() => {
    let lenis: any
    let raf: number

    const init = async () => {
      try {
        const { default: Lenis } = await import("lenis")
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 1.5,
        })

        const loop = (time: number) => {
          lenis.raf(time)
          raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)
      } catch {
        /* lenis not available */
      }
    }
    init()
    return () => {
      if (raf) cancelAnimationFrame(raf)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
