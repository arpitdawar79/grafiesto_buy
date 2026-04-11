"use client"
import * as React from "react"
import { cn } from "../utils"

export type BottomNavItem = {
  key: string
  label: string
  icon: React.ReactNode
  activeIcon?: React.ReactNode
  href?: string
  badge?: number | string
  onClick?: () => void
}

export interface BottomNavProps {
  items: BottomNavItem[]
  active?: string
  className?: string
  as?: React.ElementType
  /** Render inside a <nav> that hides on md+ screens (mobile-only). Default true. */
  mobileOnly?: boolean
}

export function BottomNav({ items, active, className, as: Link = "a", mobileOnly = true }: BottomNavProps) {
  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md",
        "pb-[env(safe-area-inset-bottom)]",
        mobileOnly && "md:hidden",
        className
      )}
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around">
        {items.map((item) => {
          const isActive = active === item.key
          const content = (
            <>
              <span className="relative flex h-6 w-6 items-center justify-center">
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
                {item.badge !== undefined && item.badge !== 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className={cn("text-[10px] font-medium", isActive ? "text-foreground" : "text-muted-foreground")}>
                {item.label}
              </span>
            </>
          )
          return (
            <li key={item.key} className="flex-1">
              {item.href ? (
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-1 transition-transform active:scale-[0.94]",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {content}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex h-14 w-full flex-col items-center justify-center gap-1 transition-transform active:scale-[0.94]",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {content}
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
