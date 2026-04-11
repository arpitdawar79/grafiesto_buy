"use client"

/**
 * registerServiceWorker — safe, client-only registration with update handling.
 * next-pwa generates `/sw.js` at build time. We detect updates and offer a
 * reload hook so the UI layer can prompt the user.
 */
export async function registerServiceWorker(options?: {
  onUpdateAvailable?: (registration: ServiceWorkerRegistration) => void
  onReady?: (registration: ServiceWorkerRegistration) => void
  scriptUrl?: string
}): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === "undefined") return null
  if (!("serviceWorker" in navigator)) return null
  try {
    const reg = await navigator.serviceWorker.register(options?.scriptUrl ?? "/sw.js", { scope: "/" })
    options?.onReady?.(reg)

    reg.addEventListener("updatefound", () => {
      const installing = reg.installing
      if (!installing) return
      installing.addEventListener("statechange", () => {
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          options?.onUpdateAvailable?.(reg)
        }
      })
    })

    return reg
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn("[pwa] service worker registration failed:", err)
    return null
  }
}

export function unregisterServiceWorker() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return
  navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()))
}
