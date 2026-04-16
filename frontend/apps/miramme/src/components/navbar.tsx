"use client"
import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  ChevronRight,
} from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ScrollArea,
  Separator,
  Magnetic,
  Dock,
  DockItem,
  SAMPLE_COLLECTIONS,
} from "@grafiesto/ui"
import { brand } from "@/lib/brand"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const collections = SAMPLE_COLLECTIONS.filter((c) => c.handle !== "raw-materials")

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/85 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {/* Announcement bar */}
      <div className="overflow-hidden bg-foreground text-background">
        <div className="flex whitespace-nowrap py-1.5 text-xs tracking-wide animate-marquee">
          <span className="mx-8">Free shipping on orders above ₹999</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Use code WELCOME15 for 15% off your first order</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Handcrafted with love in India</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Free shipping on orders above ₹999</span>
          <span className="mx-8">✦</span>
          <span className="mx-8">Use code WELCOME15 for 15% off your first order</span>
        </div>
      </div>

      <nav className="container flex h-16 items-center justify-between gap-4">
        {/* Left — Mobile menu + desktop nav */}
        <div className="flex items-center gap-6">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[320px] p-0">
              <SheetHeader className="p-6 pb-2">
                <SheetTitle className="font-display text-xl">{brand.name}</SheetTitle>
              </SheetHeader>
              <ScrollArea className="h-[calc(100vh-80px)]">
                <div className="flex flex-col gap-1 px-4 py-2">
                  <MobileNavLink href="/" label="Home" onClick={() => setMobileOpen(false)} />
                  <MobileNavLink href="/shop" label="Shop All" onClick={() => setMobileOpen(false)} />
                  <Separator className="my-2" />
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Collections</p>
                  {collections.map((c) => (
                    <MobileNavLink key={c.id} href={`/shop?collection=${c.handle}`} label={c.title} onClick={() => setMobileOpen(false)} />
                  ))}
                  <Separator className="my-2" />
                  <MobileNavLink href="/account" label="Account" onClick={() => setMobileOpen(false)} />
                  <MobileNavLink href="/wishlist" label="Wishlist" onClick={() => setMobileOpen(false)} />
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/shop?collection=fragrances">Fragrances</NavLink>
            <NavLink href="/shop?collection=candles">Candles</NavLink>
            <NavLink href="/shop?collection=body">Body</NavLink>
            <NavLink href="/shop?collection=gifts">Gifts</NavLink>
          </div>
        </div>

        {/* Center — Logo */}
        <Magnetic strength={0.1}>
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-display text-xl font-semibold tracking-tight transition-opacity hover:opacity-80 md:text-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {brand.name}
            </motion.span>
          </Link>
        </Magnetic>

        {/* Right — Actions */}
        <div className="flex items-center">
          <Dock className="h-14 border-none bg-transparent shadow-none px-0 backdrop-blur-none" maxScale={1.4} distance={60}>
            {/* Search */}
            <DockItem href="/search" label="Search" className="bg-transparent hover:bg-accent h-10 w-10">
              <Search className="h-5 w-5" />
            </DockItem>

            {/* Wishlist */}
            <DockItem href="/wishlist" label="Wishlist" className="hidden md:flex bg-transparent hover:bg-accent h-10 w-10">
              <Heart className="h-5 w-5" />
            </DockItem>

            {/* Account */}
            <DockItem href="/account" label="Account" className="hidden md:flex bg-transparent hover:bg-accent h-10 w-10">
              <User className="h-5 w-5" />
            </DockItem>

            {/* Cart */}
            <DockItem href="/cart" label="Cart" className="bg-transparent hover:bg-accent h-10 w-10 relative">
              <ShoppingBag className="h-5 w-5" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-1 top-1 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground"
              >
                2
              </motion.span>
            </DockItem>
          </Dock>
        </div>
      </nav>
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform hover:after:scale-x-100"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-accent active:scale-[0.98]"
    >
      {label}
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  )
}
