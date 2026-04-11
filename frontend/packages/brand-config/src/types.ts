export type BrandSlug =
  | "miramme"
  | "rebraciel"
  | "scrabeo"
  | "aamrah"
  | "rebo-chemicals"

/**
 * An HSL triplet stored as raw numbers so it can be composed inside
 * `hsl(var(--foo) / <alpha-value>)` — the Tailwind / shadcn convention.
 * Example: "30 25% 96%".
 */
export type HSL = string

/**
 * Full semantic color palette. Mirrors the shadcn / Radix token set so any
 * shadcn component works out of the box against any brand theme.
 */
export type ColorScale = {
  background: HSL
  foreground: HSL
  card: HSL
  cardForeground: HSL
  popover: HSL
  popoverForeground: HSL
  primary: HSL
  primaryForeground: HSL
  secondary: HSL
  secondaryForeground: HSL
  muted: HSL
  mutedForeground: HSL
  accent: HSL
  accentForeground: HSL
  destructive: HSL
  destructiveForeground: HSL
  success: HSL
  successForeground: HSL
  warning: HSL
  warningForeground: HSL
  border: HSL
  input: HSL
  ring: HSL
  /** Brand-specific marketing accent used in hero, offers, badges. */
  brand: HSL
  brandForeground: HSL
}

export type Typography = {
  /** CSS font-family stacks (will be wrapped into var(--font-sans) etc). */
  fontSans: string
  fontSerif: string
  fontDisplay: string
  fontMono: string
  /** Tracking (letter-spacing) applied to display/heading typography. */
  displayTracking: string
  bodyTracking: string
  /** Default weight applied to display typography. */
  displayWeight: string
  /** Casing applied to display typography. `normal` | `uppercase`. */
  headingCase: "normal" | "uppercase"
  /** Line height baseline for body text. */
  bodyLeading: string
}

export type RadiiScale = {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  full: string
}

export type Shadows = {
  sm: string
  md: string
  lg: string
  xl: string
  inner: string
}

export type Motion = {
  easeOut: string
  easeIn: string
  easeInOut: string
  /** e.g. "cubic-bezier(0.2, 0.9, 0.2, 1)" for signature curves. */
  signature: string
  durationFast: string
  durationBase: string
  durationSlow: string
}

export type Personality = {
  /** Shape of the CTA button. */
  buttonStyle: "sharp" | "soft" | "pill"
  /** Surface treatment for cards and panels. */
  cardStyle: "flat" | "elevated" | "bordered"
  /** Overall vibe — drives micro-interactions, gestures, haptics. */
  vibe: "editorial" | "lifestyle" | "interior" | "devotional" | "industrial"
  /** Image treatment hint for gallery / hero. */
  imageTreatment: "none" | "duotone" | "warm" | "cool" | "contrast"
  /** Whether hero typography uses serif display. */
  heroSerif: boolean
}

export type BrandFeatureFlags = {
  /** B2B quote flow (Rebo Chemicals). */
  b2bQuotes: boolean
  /** Subscriptions enabled (Aamrah ritual kits, Rebraciel bundles). */
  subscriptions: boolean
  /** Bilingual EN/HI storefront (Aamrah). */
  bilingual: boolean
  /** GST fields at checkout. */
  gstInvoicing: boolean
  /** Wishlist enabled. */
  wishlist: boolean
  /** Gift wrap upsell. */
  giftWrap: boolean
}

export type BrandTheme = {
  id: BrandSlug
  name: string
  mode: "light" | "dark"
  /** Light-mode colors. Always present — the base palette. */
  colors: ColorScale
  /** Optional dark-mode overrides. Only set the keys that differ from `colors`. */
  colorsDark?: Partial<ColorScale>
  typography: Typography
  radii: RadiiScale
  shadows: Shadows
  motion: Motion
  container: {
    maxWidth: string
    padding: string
  }
  personality: Personality
}

export type BrandConfig = {
  slug: BrandSlug
  name: string
  tagline: string
  description: string
  domain: string
  defaultLocale: string
  defaultCurrency: string
  defaultRegionId?: string
  port: number
  theme: BrandTheme
  features: BrandFeatureFlags
  /** PWA metadata. */
  pwa: {
    name: string
    shortName: string
    description: string
    themeColor: string
    backgroundColor: string
    /** Native app bundle id used by Capacitor. */
    appId: string
  }
}
