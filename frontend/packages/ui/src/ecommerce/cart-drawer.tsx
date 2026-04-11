"use client"
import * as React from "react"
import { Trash2 } from "lucide-react"
import { cn } from "../utils"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "../components/drawer"
import { Button } from "../components/button"
import { Separator } from "../components/separator"
import { ScrollArea } from "../components/scroll-area"
import { PriceTag, type Currency, formatMoney } from "./price-tag"
import { QuantityStepper } from "./quantity-stepper"

export type CartLine = {
  id: string
  title: string
  variant?: string
  image: string
  unitPrice: number
  quantity: number
  href?: string
}

export interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartLine[]
  currency?: Currency
  subtotal?: number
  onQuantityChange?: (id: string, qty: number) => void
  onRemove?: (id: string) => void
  onCheckout?: () => void
  onContinue?: () => void
  emptyState?: React.ReactNode
}

export function CartDrawer({
  open,
  onOpenChange,
  items,
  currency = "INR",
  subtotal,
  onQuantityChange,
  onRemove,
  onCheckout,
  onContinue,
  emptyState,
}: CartDrawerProps) {
  const computed = subtotal ?? items.reduce((s, l) => s + l.unitPrice * l.quantity, 0)
  const isEmpty = items.length === 0
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[92vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Your bag</DrawerTitle>
          <DrawerDescription>
            {isEmpty ? "Your bag is empty." : `${items.length} item${items.length === 1 ? "" : "s"} ready to checkout`}
          </DrawerDescription>
        </DrawerHeader>
        {isEmpty ? (
          <div className="px-6 py-10 text-center">
            {emptyState ?? (
              <p className="text-sm text-muted-foreground">Start browsing and add pieces you love.</p>
            )}
          </div>
        ) : (
          <ScrollArea className="max-h-[52vh] px-4">
            <ul className="divide-y divide-border">
              {items.map((line) => (
                <li key={line.id} className="flex gap-3 py-4">
                  <div className="h-20 w-20 flex-none overflow-hidden rounded-md bg-muted">
                    <img src={line.image} alt={line.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="line-clamp-2 text-sm font-medium">{line.title}</h4>
                      <button
                        type="button"
                        onClick={() => onRemove?.(line.id)}
                        className="rounded p-1 text-muted-foreground hover:text-destructive"
                        aria-label={`Remove ${line.title}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    {line.variant && <p className="text-xs text-muted-foreground">{line.variant}</p>}
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantityStepper
                        value={line.quantity}
                        onChange={(q) => onQuantityChange?.(line.id, q)}
                        size="sm"
                      />
                      <PriceTag amount={line.unitPrice * line.quantity} currency={currency} size="sm" showDiscount={false} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        )}
        <DrawerFooter className={cn("gap-3", isEmpty && "hidden")}>
          <Separator />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-lg font-semibold">{formatMoney(computed, currency)}</span>
          </div>
          <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
          <Button size="lg" onClick={onCheckout} className="w-full">
            Checkout
          </Button>
          <Button size="sm" variant="ghost" onClick={onContinue} className="w-full">
            Continue shopping
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
