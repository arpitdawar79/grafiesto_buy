"use client"
import * as React from "react"

export type HapticStyle = "light" | "medium" | "heavy" | "success" | "warning" | "error" | "selection"

const VIBRATION_PATTERN: Record<HapticStyle, number | number[]> = {
  light: 10,
  medium: 18,
  heavy: 28,
  success: [12, 40, 12],
  warning: [20, 60, 20],
  error: [30, 60, 30, 60, 30],
  selection: 6,
}

/**
 * useHaptics — prefers Capacitor Haptics when running inside a native shell,
 * falls back to the Web Vibration API on the web. Safe to call during SSR (no-op).
 */
export function useHaptics() {
  const impact = React.useCallback(async (style: HapticStyle = "light") => {
    if (typeof window === "undefined") return
    try {
      const cap = (window as any).Capacitor
      if (cap?.isNativePlatform?.()) {
        const { Haptics, ImpactStyle, NotificationType } = await import("@capacitor/haptics")
        if (style === "success" || style === "warning" || style === "error") {
          await Haptics.notification({
            type:
              style === "success"
                ? NotificationType.Success
                : style === "warning"
                  ? NotificationType.Warning
                  : NotificationType.Error,
          })
          return
        }
        if (style === "selection") {
          await Haptics.selectionStart()
          await Haptics.selectionEnd()
          return
        }
        await Haptics.impact({
          style:
            style === "heavy" ? ImpactStyle.Heavy : style === "medium" ? ImpactStyle.Medium : ImpactStyle.Light,
        })
        return
      }
    } catch {
      /* fall through to web vibration */
    }
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(VIBRATION_PATTERN[style])
    }
  }, [])

  return { impact }
}
