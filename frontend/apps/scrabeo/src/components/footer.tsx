"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Separator, Input, Button } from "@grafiesto/ui"
import { brand } from "@/lib/brand"

const FOOTER_NAV = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/shop" },
      { label: "Fragrances", href: "/shop?collection=fragrances" },
      { label: "Candles", href: "/shop?collection=candles" },
      { label: "Body & Bath", href: "/shop?collection=body" },
      { label: "Home", href: "/shop?collection=home" },
      { label: "Gifts", href: "/shop?collection=gifts" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Track Order", href: "/track" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Ingredients", href: "/ingredients" },
      { label: "Wholesale", href: "/wholesale" },
      { label: "Careers", href: "/careers" },
    ],
  },
]

const SOCIAL = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      {/* Newsletter section */}
      <div className="container py-16">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-light tracking-tight md:text-4xl">
              Stay in the know
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground leading-relaxed">
              New arrivals, exclusive offers, and stories from the atelier — delivered straight to your inbox. No spam, unsubscribe anytime.
            </p>
          </div>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="your@email.com"
              className="flex-1"
              aria-label="Email for newsletter"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      <Separator />

      {/* Link columns */}
      <div className="container grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
        {FOOTER_NAV.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/60">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground/60">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-foreground/40" />
              hello@{brand.domain}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-foreground/40" />
              +91 98XXX XXXXX
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-foreground/40" />
              Mumbai, India
            </li>
          </ul>
          {/* Social */}
          <div className="mt-6 flex gap-3">
            {SOCIAL.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom bar */}
      <div className="container flex flex-col items-center gap-2 py-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          <Link href="/refund" className="hover:text-foreground">Refund Policy</Link>
        </div>
      </div>
    </footer>
  )
}
