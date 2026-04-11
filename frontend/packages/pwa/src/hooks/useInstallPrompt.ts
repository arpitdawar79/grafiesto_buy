"use client"
import * as React from "react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export type InstallPromptState = {
  canInstall: boolean
  isInstalled: boolean
  isIOS: boolean
  isStandalone: boolean
  promptInstall: () => Promise<"accepted" | "dismissed" | "unavailable">
}

/**
 * useInstallPrompt — captures the beforeinstallprompt event on Android/desktop
 * and exposes iOS "Add to Home Screen" detection for showing manual instructions.
 */
export function useInstallPrompt(): InstallPromptState {
  const [deferred, setDeferred] = React.useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = React.useState(false)

  const isStandalone = React.useMemo(() => {
    if (typeof window === "undefined") return false
    return (
      window.matchMedia?.("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    )
  }, [])

  const isIOS = React.useMemo(() => {
    if (typeof navigator === "undefined") return false
    return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as any).MSStream
  }, [])

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const onBeforeInstall = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setIsInstalled(true)
      setDeferred(null)
    }
    window.addEventListener("beforeinstallprompt", onBeforeInstall)
    window.addEventListener("appinstalled", onInstalled)
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall)
      window.removeEventListener("appinstalled", onInstalled)
    }
  }, [])

  const promptInstall = React.useCallback(async () => {
    if (!deferred) return "unavailable" as const
    await deferred.prompt()
    const { outcome } = await deferred.userChoice
    setDeferred(null)
    return outcome
  }, [deferred])

  return {
    canInstall: !!deferred,
    isInstalled: isInstalled || isStandalone,
    isIOS,
    isStandalone,
    promptInstall,
  }
}
