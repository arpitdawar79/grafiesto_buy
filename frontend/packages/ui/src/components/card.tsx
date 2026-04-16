import * as React from "react"
import { cn } from "../utils"
import { GlowCard } from "../visuals/glow-card"
import { SpotlightCard } from "../visuals/spotlight-card"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean
  spotlight?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow, spotlight, ...props }, ref) => {
    const defaultClasses = cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)
    
    if (spotlight) {
      return (
        <SpotlightCard className={defaultClasses} {...props}>
          {props.children}
        </SpotlightCard>
      )
    }

    if (glow) {
      return (
        <GlowCard className={defaultClasses} {...props}>
          {props.children}
        </GlowCard>
      )
    }

    return (
      <div
        ref={ref}
        className={defaultClasses}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("font-display text-2xl leading-none", className)} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"
