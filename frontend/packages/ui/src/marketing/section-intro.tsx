import type { ReactNode } from "react"
import { cn } from "../utils"

export interface SectionIntroProps {
  eyebrow?: ReactNode
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  actions,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: SectionIntroProps) {
  const centered = align === "center"

  return (
    <div className={cn("space-y-5", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary shadow-[0_18px_50px_-28px_rgba(15,23,42,0.28)] backdrop-blur-md",
            centered && "mx-auto"
          )}
        >
          {eyebrow}
        </div>
      ) : null}

      <div className={cn("space-y-4", centered && "mx-auto max-w-3xl")}>
        <h2
          className={cn(
            "font-serif text-[clamp(2.3rem,4vw,4.75rem)] font-normal leading-[0.95] tracking-tight text-foreground",
            titleClassName
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-base leading-7 text-muted-foreground md:text-lg",
              centered && "mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {actions ? (
        <div className={cn("flex flex-wrap gap-4", centered && "justify-center")}>{actions}</div>
      ) : null}
    </div>
  )
}
