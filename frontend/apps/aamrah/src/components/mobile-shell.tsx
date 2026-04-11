"use client"
import * as React from "react"
import { Home, Search, ShoppingBag, Heart, User } from "lucide-react"
import { BottomNav, type BottomNavItem } from "@grafiesto/ui"
import { useHaptics } from "@grafiesto/pwa"

const items: BottomNavItem[] = [
  { key: "home", label: "Home", icon: <Home className="h-5 w-5" />, href: "/" },
  { key: "shop", label: "Shop", icon: <Search className="h-5 w-5" />, href: "/shop" },
  { key: "bag", label: "Bag", icon: <ShoppingBag className="h-5 w-5" />, href: "/cart" },
  { key: "wishlist", label: "Saved", icon: <Heart className="h-5 w-5" />, href: "/wishlist" },
  { key: "account", label: "Account", icon: <User className="h-5 w-5" />, href: "/account" },
]

/**
 * MobileShell — wraps the app with safe-area padding and a mobile bottom nav.
 * On md+ screens the bottom nav is hidden and the children render edge-to-edge.
 */
export function MobileShell({ children }: { children: React.ReactNode }) {
  const { impact } = useHaptics()
  const [active, setActive] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const resolve = () => {
      const p = window.location.pathname
      if (p === "/") setActive("home")
      else if (p.startsWith("/shop")) setActive("shop")
      else if (p.startsWith("/cart")) setActive("bag")
      else if (p.startsWith("/wishlist")) setActive("wishlist")
      else if (p.startsWith("/account")) setActive("account")
      else setActive(undefined)
    }
    resolve()
    window.addEventListener("popstate", resolve)
    return () => window.removeEventListener("popstate", resolve)
  }, [])

  return (
    <>
      <main
        className="min-h-screen pb-[calc(env(safe-area-inset-bottom)+56px)] md:pb-0"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        {children}
      </main>
      <BottomNav
        items={items.map((i) => ({ ...i, onClick: () => impact("selection") }))}
        active={active}
      />
    </>
  )
}
