"use client"
import { Toaster as Sonner, type ToasterProps } from "sonner"

/**
 * Toaster — Sonner bound to our theme tokens. Drop `<Toaster />` once in the root layout.
 * Toasts respect safe-area bottom by default on mobile.
 */
export const Toaster = ({ ...props }: ToasterProps) => (
  <Sonner
    className="toaster group"
    position="top-center"
    offset="calc(env(safe-area-inset-top) + 1rem)"
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    }}
    {...props}
  />
)

export { toast } from "sonner"
