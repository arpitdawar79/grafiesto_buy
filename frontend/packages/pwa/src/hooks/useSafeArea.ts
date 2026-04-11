"use client"
import * as React from "react"

export type SafeAreaInsets = { top: number; right: number; bottom: number; left: number }

/**
 * useSafeArea — reads env(safe-area-inset-*) pixel values. Requires `viewport-fit=cover`
 * on the HTML meta viewport tag. Returns 0s during SSR.
 */
export function useSafeArea(): SafeAreaInsets {
  const [insets, setInsets] = React.useState<SafeAreaInsets>({ top: 0, right: 0, bottom: 0, left: 0 })

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const probe = document.createElement("div")
    probe.style.cssText =
      "position:fixed;top:0;left:0;width:0;height:0;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);"
    document.body.appendChild(probe)

    const read = () => {
      const cs = getComputedStyle(probe)
      setInsets({
        top: parseFloat(cs.paddingTop) || 0,
        right: parseFloat(cs.paddingRight) || 0,
        bottom: parseFloat(cs.paddingBottom) || 0,
        left: parseFloat(cs.paddingLeft) || 0,
      })
    }
    read()
    window.addEventListener("resize", read)
    window.addEventListener("orientationchange", read)
    return () => {
      window.removeEventListener("resize", read)
      window.removeEventListener("orientationchange", read)
      probe.remove()
    }
  }, [])

  return insets
}
