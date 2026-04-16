import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "../utils"

export interface EditorialCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  footer?: ReactNode
}

export function EditorialCard({
  eyebrow,
  title,
  description,
  icon,
  footer,
  className,
  ...props
}: EditorialCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-white/55 bg-white/80 p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.38)] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="relative z-10 space-y-4">
        {(icon || eyebrow) && (
          <div className="flex items-center gap-3">
            {icon ? (
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {icon}
              </div>
            ) : null}
            {eyebrow ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
                {eyebrow}
              </p>
            ) : null}
          </div>
        )}

        <div className="space-y-3">
          <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-foreground">
            {title}
          </h3>
          {description ? (
            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          ) : null}
        </div>

        {footer ? <div>{footer}</div> : null}
      </div>
    </div>
  )
}
