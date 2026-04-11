"use client"
import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "../utils"

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: "xs" | "sm" | "md" | "lg"
  showCount?: boolean
  count?: number
  interactive?: boolean
  onChange?: (value: number) => void
}

const SIZE = { xs: "h-3 w-3", sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" }

export const RatingStars = React.forwardRef<HTMLDivElement, RatingStarsProps>(
  ({ value, max = 5, size = "sm", showCount, count, interactive, onChange, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-1", className)}
        role={interactive ? "radiogroup" : "img"}
        aria-label={`Rated ${value} out of ${max}`}
        {...props}
      >
        <div className="relative inline-flex">
          <div className="inline-flex text-muted-foreground/30">
            {Array.from({ length: max }).map((_, i) => (
              <Star key={i} className={cn(SIZE[size], "fill-current")} />
            ))}
          </div>
          <div
            className="absolute inset-0 inline-flex overflow-hidden text-warning"
            style={{ width: `${(Math.max(0, Math.min(value, max)) / max) * 100}%` }}
          >
            {Array.from({ length: max }).map((_, i) => (
              <Star key={i} className={cn(SIZE[size], "fill-current flex-none")} />
            ))}
          </div>
          {interactive && (
            <div className="absolute inset-0 inline-flex">
              {Array.from({ length: max }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="radio"
                  aria-checked={value === i + 1}
                  onClick={() => onChange?.(i + 1)}
                  className={cn(SIZE[size], "flex-none cursor-pointer")}
                  aria-label={`${i + 1} star${i === 0 ? "" : "s"}`}
                />
              ))}
            </div>
          )}
        </div>
        {showCount && typeof count === "number" && (
          <span className="text-xs text-muted-foreground">({count.toLocaleString("en-IN")})</span>
        )}
      </div>
    )
  }
)
RatingStars.displayName = "RatingStars"
