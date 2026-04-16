"use client"
import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "../utils"

export interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

/**
 * BentoGrid — a responsive grid that arranges children in a creative bento layout.
 * Child items can use `col-span-*` and `row-span-*` for emphasis.
 */
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid auto-rows-[18rem] grid-cols-2 gap-4 md:auto-rows-[20rem] md:grid-cols-3 lg:grid-cols-4 lg:gap-5",
        className
      )}
    >
      {children}
    </div>
  )
}

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  image?: string
  /** Extra Tailwind classes for span control e.g. "md:col-span-2 md:row-span-2" */
  span?: string
  href?: string
  cta?: string
}

export function BentoCard({
  title,
  description,
  icon,
  image,
  span,
  href,
  cta,
  className,
  children,
  ...props
}: BentoCardProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const Wrapper = href ? "a" : "div"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Wrapper
        {...(href ? { href } : {})}
        className={cn(
          "group relative flex flex-col justify-end overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-xl",
          span,
          className
        )}
        {...(props as any)}
      >
        {image && (
          <div className="absolute inset-0">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
          </div>
        )}
        <div className="relative z-10">
          {icon && <div className="mb-3 text-primary">{icon}</div>}
          <h3 className="font-display text-lg font-medium tracking-tight">{title}</h3>
          {description && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>}
          {cta && (
            <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
              {cta}
              <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
          {children}
        </div>
      </Wrapper>
    </motion.div>
  )
}
