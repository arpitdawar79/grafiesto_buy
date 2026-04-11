"use client"
import * as React from "react"
import { toast } from "@grafiesto/ui"
import { registerServiceWorker } from "@grafiesto/pwa"

/**
 * ServiceWorker — mounts once at the root to register the next-pwa generated worker
 * and surface update notifications via the Sonner toaster.
 */
export function ServiceWorker() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    registerServiceWorker({
      onUpdateAvailable: () => {
        toast("A new version is available", {
          description: "Reload to get the latest updates.",
          action: { label: "Reload", onClick: () => window.location.reload() },
          duration: 10000,
        })
      },
    })
  }, [])
  return null
}
