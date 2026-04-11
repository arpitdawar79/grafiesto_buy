"use client"
import * as React from "react"
import { Download, Share, X } from "lucide-react"
import { useInstallPrompt } from "../hooks/useInstallPrompt"

export interface InstallPromptProps {
  appName?: string
  description?: string
  storageKey?: string
  /** Delay in ms before the prompt appears. Default 15s */
  delay?: number
}

/**
 * InstallPrompt — shows a dismissible bottom sheet encouraging the user to install the PWA.
 * - Chrome/Android/desktop: uses beforeinstallprompt
 * - iOS Safari: shows manual "Share → Add to Home Screen" instructions
 * - Remembers dismissal in localStorage
 */
export function InstallPrompt({
  appName = "this app",
  description = "Install for a faster, app-like experience.",
  storageKey = "grafiesto:install-dismissed",
  delay = 15000,
}: InstallPromptProps) {
  const { canInstall, isInstalled, isIOS, promptInstall } = useInstallPrompt()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (isInstalled) return
    if (localStorage.getItem(storageKey)) return
    if (!canInstall && !isIOS) return
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [canInstall, isIOS, isInstalled, delay, storageKey])

  const dismiss = () => {
    setVisible(false)
    try {
      localStorage.setItem(storageKey, "1")
    } catch {}
  }

  const install = async () => {
    const result = await promptInstall()
    if (result !== "unavailable") dismiss()
  }

  if (!visible || isInstalled) return null

  return (
    <div
      role="dialog"
      aria-labelledby="install-prompt-title"
      className="fixed inset-x-3 z-50 rounded-xl border border-border bg-background p-4 shadow-xl"
      style={{ bottom: "calc(env(safe-area-inset-bottom) + 72px)" }}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss install prompt"
        className="absolute right-2 top-2 rounded-full p-1.5 text-muted-foreground hover:bg-accent"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3 pr-8">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Download className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <h3 id="install-prompt-title" className="text-sm font-semibold text-foreground">
            Install {appName}
          </h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
          {isIOS && !canInstall ? (
            <p className="mt-2 flex items-center gap-1 text-xs text-foreground">
              Tap <Share className="inline h-3.5 w-3.5" /> then <strong>Add to Home Screen</strong>.
            </p>
          ) : (
            <button
              type="button"
              onClick={install}
              className="mt-3 inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform active:scale-95"
            >
              Install
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
