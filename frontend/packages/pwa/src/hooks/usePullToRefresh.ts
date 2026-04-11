"use client"
import * as React from "react"

export type PullToRefreshOptions = {
  onRefresh: () => void | Promise<void>
  threshold?: number
  resistance?: number
  enabled?: boolean
}

export type PullToRefreshState = {
  pulling: boolean
  progress: number
  refreshing: boolean
  bind: {
    onTouchStart: (e: React.TouchEvent) => void
    onTouchMove: (e: React.TouchEvent) => void
    onTouchEnd: () => void
  }
}

/**
 * usePullToRefresh — lightweight touch-driven pull-to-refresh. Spread `bind` onto
 * the scroll container, render your own indicator using `progress` (0..1) and `refreshing`.
 * Only triggers when the container is scrolled to the very top.
 */
export function usePullToRefresh({
  onRefresh,
  threshold = 72,
  resistance = 2.4,
  enabled = true,
}: PullToRefreshOptions): PullToRefreshState {
  const startY = React.useRef<number | null>(null)
  const [distance, setDistance] = React.useState(0)
  const [refreshing, setRefreshing] = React.useState(false)

  const onTouchStart = (e: React.TouchEvent) => {
    if (!enabled || refreshing) return
    const scrollTop = (e.currentTarget as HTMLElement).scrollTop
    if (scrollTop <= 0) startY.current = e.touches[0].clientY
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (startY.current == null) return
    const delta = e.touches[0].clientY - startY.current
    if (delta > 0) setDistance(Math.min(delta / resistance, threshold * 1.5))
  }
  const onTouchEnd = async () => {
    if (startY.current == null) return
    startY.current = null
    if (distance >= threshold) {
      setRefreshing(true)
      try {
        await onRefresh()
      } finally {
        setRefreshing(false)
        setDistance(0)
      }
    } else {
      setDistance(0)
    }
  }

  return {
    pulling: distance > 0,
    progress: Math.min(distance / threshold, 1),
    refreshing,
    bind: { onTouchStart, onTouchMove, onTouchEnd },
  }
}
