"use client"
import * as React from "react"

export type NetworkStatus = {
  online: boolean
  since: number
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g"
  saveData?: boolean
}

/**
 * useNetworkStatus — reflects navigator.onLine + Network Information API.
 * Defaults to online during SSR to avoid flashing an offline banner.
 */
export function useNetworkStatus(): NetworkStatus {
  const [state, setState] = React.useState<NetworkStatus>({ online: true, since: Date.now() })

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const conn = (navigator as any).connection

    const read = () =>
      setState({
        online: navigator.onLine,
        since: Date.now(),
        effectiveType: conn?.effectiveType,
        saveData: conn?.saveData,
      })

    read()
    window.addEventListener("online", read)
    window.addEventListener("offline", read)
    conn?.addEventListener?.("change", read)
    return () => {
      window.removeEventListener("online", read)
      window.removeEventListener("offline", read)
      conn?.removeEventListener?.("change", read)
    }
  }, [])

  return state
}
