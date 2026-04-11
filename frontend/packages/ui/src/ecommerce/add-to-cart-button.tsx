"use client"
import * as React from "react"
import { Check, ShoppingBag } from "lucide-react"
import { cn } from "../utils"
import { Button, type ButtonProps } from "../components/button"

export interface AddToCartButtonProps extends Omit<ButtonProps, "onClick"> {
  onAdd?: () => void | Promise<void>
  label?: string
  addedLabel?: string
  loadingLabel?: string
  stickyMobile?: boolean
}

type State = "idle" | "loading" | "added"

export const AddToCartButton = React.forwardRef<HTMLButtonElement, AddToCartButtonProps>(
  ({ onAdd, label = "Add to bag", addedLabel = "Added", loadingLabel = "Adding…", className, stickyMobile, ...props }, ref) => {
    const [state, setState] = React.useState<State>("idle")
    const handle = async () => {
      if (state !== "idle") return
      setState("loading")
      try {
        await onAdd?.()
        setState("added")
        setTimeout(() => setState("idle"), 1600)
      } catch {
        setState("idle")
      }
    }
    return (
      <Button
        ref={ref}
        onClick={handle}
        disabled={state !== "idle" || props.disabled}
        size="lg"
        className={cn(
          "w-full transition-all",
          stickyMobile &&
            "fixed inset-x-0 bottom-0 z-40 rounded-none px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 md:static md:rounded-full md:p-0",
          className
        )}
        {...props}
      >
        {state === "loading" && (
          <>
            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {loadingLabel}
          </>
        )}
        {state === "added" && (
          <>
            <Check className="mr-2 h-4 w-4" />
            {addedLabel}
          </>
        )}
        {state === "idle" && (
          <>
            <ShoppingBag className="mr-2 h-4 w-4" />
            {label}
          </>
        )}
      </Button>
    )
  }
)
AddToCartButton.displayName = "AddToCartButton"
