"use client"
import * as React from "react"
import { Heart, ShoppingBag } from "lucide-react"
import { cn } from "../utils"
import { AspectRatio } from "../components/aspect-ratio"
import { Badge } from "../components/badge"
import { Button } from "../components/button"
import { PriceTag, type Currency } from "./price-tag"
import { RatingStars } from "./rating-stars"
import { SpotlightCard } from "../visuals/spotlight-card"
import { Magnetic } from "../motion/magnetic"

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  image: string
  hoverImage?: string
  price: number
  compareAt?: number
  currency?: Currency
  rating?: number
  reviewCount?: number
  badge?: string
  soldOut?: boolean
  wishlisted?: boolean
  onWishlist?: () => void
  onAddToCart?: () => void
  href?: string
  as?: React.ElementType
  ratio?: number
  orientation?: "portrait" | "square"
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      title,
      subtitle,
      image,
      hoverImage,
      price,
      compareAt,
      currency = "INR",
      rating,
      reviewCount,
      badge,
      soldOut,
      wishlisted,
      onWishlist,
      onAddToCart,
      href,
      as: Root = "div",
      ratio,
      orientation = "portrait",
      className,
      ...props
    },
    ref
  ) => {
    const aspect = ratio ?? (orientation === "square" ? 1 : 3 / 4)
    const Wrapper: any = href ? "a" : "div"
    return (
      <Root ref={ref} className={cn("group relative flex flex-col gap-3", className)} {...props}>
        <Wrapper {...(href ? { href } : {})} className="relative block overflow-hidden rounded-[14px]">
          <SpotlightCard className="h-full w-full !border-none !bg-muted/40 shadow-none !rounded-[14px]">
            <AspectRatio ratio={aspect}>
              <img
                src={image}
                alt={title}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-all duration-700 ease-signature",
                  hoverImage ? "group-hover:opacity-0 group-hover:scale-[1.08]" : "group-hover:scale-[1.08]"
                )}
              />
              {hoverImage && (
                <img
                  src={hoverImage}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-signature group-hover:opacity-100 group-hover:scale-[1.08]"
                />
              )}
            </AspectRatio>
            {(badge || soldOut) && (
              <div className="absolute left-3 top-3 flex flex-col gap-1 z-20">
                {soldOut ? (
                  <Badge variant="secondary" className="backdrop-blur-md bg-secondary/80">Sold out</Badge>
                ) : (
                  badge && <Badge variant="brand" className="backdrop-blur-md bg-brand/80">{badge}</Badge>
                )}
              </div>
            )}
            {onWishlist && (
              <Magnetic strength={0.2} className="absolute right-3 top-3 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    onWishlist()
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-transform active:scale-90 shadow-sm"
                  aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={cn("h-4 w-4 transition-colors", wishlisted && "fill-destructive text-destructive")} />
                </button>
              </Magnetic>
            )}
            {onAddToCart && !soldOut && (
              <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 translate-y-4 opacity-0 transition-all duration-500 ease-signature group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <Button
                  size="sm"
                  className="w-full shadow-lg backdrop-blur-md"
                  onClick={(e) => {
                    e.preventDefault()
                    onAddToCart()
                  }}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to bag
                </Button>
              </div>
            )}
          </SpotlightCard>
        </Wrapper>
        <div className="flex flex-col gap-1.5 px-1">
          {subtitle && <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/80">{subtitle}</p>}
          <h3 className="line-clamp-2 text-[15px] font-medium leading-snug text-foreground transition-colors group-hover:text-primary">{title}</h3>
          {typeof rating === "number" && (
            <RatingStars value={rating} size="xs" showCount count={reviewCount} />
          )}
          <PriceTag amount={price} compareAt={compareAt} currency={currency} size="sm" className="mt-0.5" />
        </div>
      </Root>
    )
  }
)
ProductCard.displayName = "ProductCard"
