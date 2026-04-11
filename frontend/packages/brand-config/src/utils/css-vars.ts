import type { BrandTheme, ColorScale } from "../types"

/**
 * Convert a `ColorScale` object into `--name: hsl triplet` CSS vars
 * following the shadcn convention: values are stored as `H S% L%` so
 * consumers can do `hsl(var(--primary) / <alpha-value>)`.
 */
function colorsToVars(colors: Partial<ColorScale>, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {}
  const map: Record<keyof ColorScale, string> = {
    background: "background",
    foreground: "foreground",
    card: "card",
    cardForeground: "card-foreground",
    popover: "popover",
    popoverForeground: "popover-foreground",
    primary: "primary",
    primaryForeground: "primary-foreground",
    secondary: "secondary",
    secondaryForeground: "secondary-foreground",
    muted: "muted",
    mutedForeground: "muted-foreground",
    accent: "accent",
    accentForeground: "accent-foreground",
    destructive: "destructive",
    destructiveForeground: "destructive-foreground",
    success: "success",
    successForeground: "success-foreground",
    warning: "warning",
    warningForeground: "warning-foreground",
    border: "border",
    input: "input",
    ring: "ring",
    brand: "brand",
    brandForeground: "brand-foreground",
  }

  for (const key of Object.keys(colors) as Array<keyof ColorScale>) {
    const value = colors[key]
    if (value === undefined) continue
    out[`--${prefix}${map[key]}`] = value
  }
  return out
}

/**
 * Produce the complete set of CSS variables for a `BrandTheme`. Apply to
 * `<html>` (or any root element) and every shadcn / composed component
 * automatically picks up the brand.
 *
 * Returns a React `style` object you can spread: `<html style={themeToCssVars(theme)}>`.
 */
export function themeToCssVars(theme: BrandTheme): Record<string, string> {
  const vars: Record<string, string> = {
    ...colorsToVars(theme.colors),

    // Radii
    "--radius-none": theme.radii.none,
    "--radius-sm": theme.radii.sm,
    "--radius-md": theme.radii.md,
    "--radius-lg": theme.radii.lg,
    "--radius-xl": theme.radii.xl,
    "--radius-full": theme.radii.full,
    // shadcn's single --radius token (maps to lg in our scale)
    "--radius": theme.radii.lg,

    // Typography
    "--font-sans": theme.typography.fontSans,
    "--font-serif": theme.typography.fontSerif,
    "--font-display": theme.typography.fontDisplay,
    "--font-mono": theme.typography.fontMono,
    "--tracking-display": theme.typography.displayTracking,
    "--tracking-body": theme.typography.bodyTracking,
    "--weight-display": theme.typography.displayWeight,
    "--leading-body": theme.typography.bodyLeading,
    "--case-display": theme.typography.headingCase,

    // Shadows
    "--shadow-sm": theme.shadows.sm,
    "--shadow-md": theme.shadows.md,
    "--shadow-lg": theme.shadows.lg,
    "--shadow-xl": theme.shadows.xl,
    "--shadow-inner": theme.shadows.inner,

    // Motion
    "--ease-out": theme.motion.easeOut,
    "--ease-in": theme.motion.easeIn,
    "--ease-in-out": theme.motion.easeInOut,
    "--ease-signature": theme.motion.signature,
    "--duration-fast": theme.motion.durationFast,
    "--duration-base": theme.motion.durationBase,
    "--duration-slow": theme.motion.durationSlow,

    // Container
    "--container-max": theme.container.maxWidth,
    "--container-pad": theme.container.padding,

    // Personality (exposed as data-attrs too but available as CSS for edge cases)
    "--vibe": theme.personality.vibe,
  }
  return vars
}

/**
 * Generate the `[data-theme="<brand>"] { ... }` CSS rule string for static
 * inclusion in globals.css. Useful when you want all themes defined once and
 * switched via a `data-theme` attribute.
 */
export function themeToCssRule(theme: BrandTheme): string {
  const light = { ...colorsToVars(theme.colors), ...extras(theme) }
  const lightBlock = Object.entries(light)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n")

  let rule = `[data-theme="${theme.id}"] {\n${lightBlock}\n}`

  if (theme.colorsDark) {
    const dark = colorsToVars(theme.colorsDark)
    const darkBlock = Object.entries(dark)
      .map(([k, v]) => `  ${k}: ${v};`)
      .join("\n")
    rule += `\n\n[data-theme="${theme.id}"].dark,\n[data-theme="${theme.id}"][data-mode="dark"] {\n${darkBlock}\n}`
  }

  return rule
}

function extras(theme: BrandTheme) {
  return {
    "--radius": theme.radii.lg,
    "--radius-sm": theme.radii.sm,
    "--radius-md": theme.radii.md,
    "--radius-lg": theme.radii.lg,
    "--radius-xl": theme.radii.xl,
    "--radius-full": theme.radii.full,
    "--font-sans": theme.typography.fontSans,
    "--font-serif": theme.typography.fontSerif,
    "--font-display": theme.typography.fontDisplay,
    "--font-mono": theme.typography.fontMono,
    "--tracking-display": theme.typography.displayTracking,
    "--tracking-body": theme.typography.bodyTracking,
    "--weight-display": theme.typography.displayWeight,
    "--leading-body": theme.typography.bodyLeading,
    "--shadow-sm": theme.shadows.sm,
    "--shadow-md": theme.shadows.md,
    "--shadow-lg": theme.shadows.lg,
    "--shadow-xl": theme.shadows.xl,
    "--shadow-inner": theme.shadows.inner,
    "--ease-out": theme.motion.easeOut,
    "--ease-in": theme.motion.easeIn,
    "--ease-in-out": theme.motion.easeInOut,
    "--ease-signature": theme.motion.signature,
    "--duration-fast": theme.motion.durationFast,
    "--duration-base": theme.motion.durationBase,
    "--duration-slow": theme.motion.durationSlow,
  }
}
