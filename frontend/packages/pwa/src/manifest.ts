export type WebManifest = {
  name: string
  short_name: string
  description: string
  start_url: string
  scope: string
  display: "standalone" | "fullscreen" | "minimal-ui" | "browser"
  orientation: "any" | "portrait" | "landscape" | "portrait-primary"
  background_color: string
  theme_color: string
  categories: string[]
  lang: string
  dir: "ltr" | "rtl"
  icons: Array<{ src: string; sizes: string; type: string; purpose?: string }>
  screenshots?: Array<{ src: string; sizes: string; type: string; form_factor?: "wide" | "narrow"; label?: string }>
  shortcuts?: Array<{ name: string; short_name?: string; description?: string; url: string; icons?: { src: string; sizes: string }[] }>
  share_target?: {
    action: string
    method: "GET" | "POST"
    enctype?: string
    params: { title?: string; text?: string; url?: string }
  }
  prefer_related_applications?: boolean
}

export type BuildManifestInput = {
  name: string
  shortName: string
  description: string
  themeColor: string
  backgroundColor: string
  startUrl?: string
  lang?: string
  dir?: "ltr" | "rtl"
  iconBase?: string
  categories?: string[]
  shortcuts?: WebManifest["shortcuts"]
}

/**
 * buildManifest — produces a full Web App Manifest from a brand config.
 * Assumes you've placed PWA icons at `${iconBase}/icon-{192,256,384,512}.png` and
 * a maskable variant at `${iconBase}/icon-maskable-512.png`.
 */
export function buildManifest(input: BuildManifestInput): WebManifest {
  const base = input.iconBase ?? "/icons"
  return {
    name: input.name,
    short_name: input.shortName,
    description: input.description,
    start_url: input.startUrl ?? "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: input.backgroundColor,
    theme_color: input.themeColor,
    categories: input.categories ?? ["shopping", "lifestyle"],
    lang: input.lang ?? "en-IN",
    dir: input.dir ?? "ltr",
    icons: [
      { src: `${base}/icon-192.png`, sizes: "192x192", type: "image/png", purpose: "any" },
      { src: `${base}/icon-256.png`, sizes: "256x256", type: "image/png", purpose: "any" },
      { src: `${base}/icon-384.png`, sizes: "384x384", type: "image/png", purpose: "any" },
      { src: `${base}/icon-512.png`, sizes: "512x512", type: "image/png", purpose: "any" },
      { src: `${base}/icon-maskable-512.png`, sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: input.shortcuts ?? [
      { name: "Shop", short_name: "Shop", url: "/shop" },
      { name: "Cart", short_name: "Cart", url: "/cart" },
      { name: "Account", short_name: "Account", url: "/account" },
    ],
    share_target: {
      action: "/share",
      method: "GET",
      params: { title: "title", text: "text", url: "url" },
    },
    prefer_related_applications: false,
  }
}
