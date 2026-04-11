import type { Config } from "tailwindcss"
import preset from "@grafiesto/tailwind-config"

const config: Config = {
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/pwa/src/**/*.{ts,tsx}",
  ],
}

export default config
