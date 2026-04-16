import type { Metadata, Viewport } from "next"
import { themeToCssVars } from "@grafiesto/brand-config"
import { Toaster } from "@grafiesto/ui"
import { NetworkBanner, InstallPrompt } from "@grafiesto/pwa"
import { brand } from "@/lib/brand"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileShell } from "@/components/mobile-shell"
import { ServiceWorker } from "@/components/service-worker"
import "./globals.css"

export const metadata: Metadata = {
  title: { default: brand.pwa.name, template: `%s · ${brand.name}` },
  description: brand.pwa.description,
  metadataBase: new URL(`https://${brand.domain}`),
  applicationName: brand.pwa.shortName,
  appleWebApp: {
    capable: true,
    title: brand.pwa.shortName,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: brand.defaultLocale,
    siteName: brand.name,
    title: brand.pwa.name,
    description: brand.pwa.description,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: brand.pwa.backgroundColor },
    { media: "(prefers-color-scheme: dark)", color: brand.pwa.themeColor },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  userScalable: true,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = themeToCssVars(brand.theme)

  return (
    <html lang={brand.defaultLocale} data-theme={brand.slug} data-mode={brand.theme.mode} suppressHydrationWarning>
      <body style={cssVars} className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ServiceWorker />
        <NetworkBanner />
        <Navbar />
        <MobileShell>{children}</MobileShell>
        <Footer />
        <InstallPrompt appName={brand.name} description={brand.pwa.description} />
        <Toaster />
      </body>
    </html>
  )
}
