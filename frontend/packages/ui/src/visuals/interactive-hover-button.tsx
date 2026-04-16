"use client"
import * as React from "react"
import { cn } from "../utils"

export interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text shown on hover */
  hoverText?: string
  /** Background color on hover */
  hoverBg?: string
  asChild?: boolean
}

/**
 * InteractiveHoverButton — a button that reveals new content on hover with a sweeping fill.
 * Inspired by Magic UI's Interactive Hover Button.
 */
export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { hoverText, hoverBg = "hsl(var(--primary))", className, asChild = false, children, ...props },
    ref
  ) => {
    const content = (
      <>
        <span
          className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          style={{ backgroundColor: hoverBg }}
        />
        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-40 group-hover:opacity-0">
          {children}
        </span>
        <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 -translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
          {hoverText ?? children}
        </span>
      </>
    )

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<{
        className?: string
        style?: React.CSSProperties
        children?: React.ReactNode
      }>

      return React.cloneElement(child, {
        ...props,
        className: cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-border bg-background px-8 text-sm font-medium transition-all duration-500 hover:border-transparent",
          className,
          child.props.className
        ),
        style: {
          ...child.props.style,
        },
        children: (
          <>
            <span
              className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              style={{ backgroundColor: hoverBg }}
            />
            <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:translate-x-40 group-hover:opacity-0">
              {child.props.children}
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 -translate-x-40 group-hover:translate-x-0 group-hover:opacity-100">
              {hoverText ?? child.props.children}
            </span>
          </>
        ),
        ref,
      })
    }

    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-border bg-background px-8 text-sm font-medium transition-all duration-500 hover:border-transparent",
          className
        )}
        {...props}
      >
        {content}
      </button>
    )
  }
)
InteractiveHoverButton.displayName = "InteractiveHoverButton"
