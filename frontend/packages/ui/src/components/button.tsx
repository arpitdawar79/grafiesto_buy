"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils"
import { useClickRipple } from "../visuals/ripple"

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors duration-fast ease-signature focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98] touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        brand: "bg-brand text-brand-foreground hover:bg-brand/90 shadow-md",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 rounded-md",
        sm: "h-9 px-3 text-xs rounded-sm",
        lg: "h-12 px-8 text-base rounded-lg",
        xl: "h-14 px-10 text-base rounded-lg",
        icon: "h-11 w-11 rounded-md",
        "icon-sm": "h-9 w-9 rounded-sm",
      },
      shape: {
        auto: "",
        sharp: "!rounded-none",
        pill: "!rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "auto",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disableRipple?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, disableRipple = false, onClick, ...props }, ref) => {
    const { trigger, RippleLayer } = useClickRipple()
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disableRipple) {
        trigger(e)
      }
      if (onClick) {
        onClick(e)
      }
    }

    const classes = cn(buttonVariants({ variant, size, shape }), className)

    if (asChild) {
      return (
        <Slot ref={ref} className={classes} onClick={handleClick as any} {...props}>
          {props.children}
        </Slot>
      )
    }

    return (
      <button ref={ref} className={classes} onClick={handleClick as any} {...props}>
        {props.children}
        {!disableRipple && <RippleLayer />}
      </button>
    )
  }
)
Button.displayName = "Button"

export { buttonVariants }
