"use client"
import * as React from "react"
import { Loader2, ArrowDown } from "lucide-react"
import { usePullToRefresh } from "../hooks/usePullToRefresh"

export interface PullToRefreshProps {
  onRefresh: () => void | Promise<void>
  children: React.ReactNode
  className?: string
  threshold?: number
  disabled?: boolean
}

export function PullToRefresh({ onRefresh, children, className, threshold = 72, disabled }: PullToRefreshProps) {
  const { progress, refreshing, bind } = usePullToRefresh({ onRefresh, threshold, enabled: !disabled })
  return (
    <div
      className={className}
      style={{ overflowY: "auto", WebkitOverflowScrolling: "touch", overscrollBehaviorY: "contain" }}
      {...bind}
    >
      <div
        aria-hidden={!refreshing && progress === 0}
        className="flex items-center justify-center transition-[height] duration-150 ease-out"
        style={{ height: refreshing ? threshold : Math.max(0, progress * threshold) }}
      >
        {refreshing ? (
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        ) : (
          <ArrowDown
            className="h-5 w-5 text-muted-foreground transition-transform"
            style={{ transform: `rotate(${progress * 180}deg)`, opacity: progress }}
          />
        )}
      </div>
      {children}
    </div>
  )
}
