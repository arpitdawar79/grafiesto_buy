import withPWA from "next-pwa"

const pwa = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: false, // we register manually via @grafiesto/pwa to control update UX
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  fallbacks: { document: "/offline" },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        expiration: { maxEntries: 8, maxAgeSeconds: 60 * 60 * 24 * 365 },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|gif|ico)$/i,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 256, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    {
      urlPattern: /^https?.*\/api\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "apis",
        networkTimeoutSeconds: 8,
        expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 24 },
      },
    },
    {
      urlPattern: ({ request }) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        networkTimeoutSeconds: 4,
      },
    },
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@grafiesto/ui",
    "@grafiesto/pwa",
    "@grafiesto/medusa-client",
    "@grafiesto/brand-config",
    "@grafiesto/tailwind-config",
  ],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    serverActions: { allowedOrigins: ["localhost:3000", "localhost:3001", "localhost:3002", "localhost:3003", "localhost:3004"] },
  },
}

export default pwa(nextConfig)
