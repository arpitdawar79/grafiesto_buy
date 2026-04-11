"use client"
import * as React from "react"
import { WifiOff } from "lucide-react"
import { useNetworkStatus } from "../hooks/useNetworkStatus"

export interface NetworkBannerProps {
  offlineLabel?: string
  reconnectedLabel?: string
  showReconnected?: boolean
}

/**
 * NetworkBanner — a sticky top banner that appears when the device goes offline.
 * Briefly shows a "Back online" confirmation when connectivity returns.
 */
export function NetworkBanner({
  offlineLabel = "You are offline",
  reconnectedLabel = "Back online",
  showReconnected = true,
}: NetworkBannerProps) {
  const { online } = useNetworkStatus()
  const [wasOffline, setWasOffline] = React.useState(false)
  const [flash, setFlash] = React.useState(false)

  React.useEffect(() => {
    if (!online) {
      setWasOffline(true)
      setFlash(false)
    } else if (wasOffline && showReconnected) {
      setFlash(true)
      const t = setTimeout(() => {
        setFlash(false)
        setWasOffline(false)
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [online, wasOffline, showReconnected])

  if (online && !flash) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-background transition-colors"
      style={{
        paddingTop: "calc(env(safe-area-inset-top) + 0.5rem)",
        backgroundColor: online ? "hsl(var(--success))" : "hsl(var(--destructive))",
      }}
    >
      {!online && <WifiOff className="h-3.5 w-3.5" />}
      <span>{online ? reconnectedLabel : offlineLabel}</span>
    </div>
  )
}
