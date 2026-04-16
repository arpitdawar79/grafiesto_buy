import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "../utils"

export interface MetricPillProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode
  value: ReactNode
  label: ReactNode
}

export function MetricPill({ icon, value, label, className, ...props }: MetricPillProps) {
  return (
    <div
      className={cn(
        "inline-flex min-w-[10rem] items-center gap-3 rounded-full border border-white/60 bg-white/75 px-4 py-3 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.32)] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
      ) : null}
      <div className="space-y-0.5">
        <div className="text-sm font-semibold tracking-tight text-foreground">{value}</div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}
