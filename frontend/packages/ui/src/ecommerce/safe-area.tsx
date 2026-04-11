import * as React from "react"
import { cn } from "../utils"

export interface SafeAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: boolean
  bottom?: boolean
  left?: boolean
  right?: boolean
  as?: React.ElementType
}

/**
 * Wrapper that applies iOS/Android safe-area insets via CSS env() padding.
 * Use at the root of any fullscreen mobile view that touches the notch or home indicator.
 */
export const SafeArea = React.forwardRef<HTMLDivElement, SafeAreaProps>(
  ({ top, bottom, left, right, as: Tag = "div", className, style, ...props }, ref) => {
    const paddings: React.CSSProperties = {}
    if (top) paddings.paddingTop = "env(safe-area-inset-top)"
    if (bottom) paddings.paddingBottom = "env(safe-area-inset-bottom)"
    if (left) paddings.paddingLeft = "env(safe-area-inset-left)"
    if (right) paddings.paddingRight = "env(safe-area-inset-right)"
    return <Tag ref={ref} className={cn(className)} style={{ ...paddings, ...style }} {...props} />
  }
)
SafeArea.displayName = "SafeArea"
