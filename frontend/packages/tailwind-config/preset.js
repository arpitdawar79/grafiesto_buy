import animate from "tailwindcss-animate"

/**
 * Shared Tailwind preset for every storefront. It deliberately contains NO
 * hard-coded colors — every token is a CSS variable set by the brand theme at
 * runtime (see `@grafiesto/brand-config` → `themeToCssVars`). That means any
 * brand can inherit and override just by setting `:root` vars.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [],
  theme: {
    container: {
      center: true,
      padding: "var(--container-pad, 1.5rem)",
      screens: { "2xl": "1400px" },
    },
    extend: {
      maxWidth: {
        container: "var(--container-max, 1400px)",
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--brand) / <alpha-value>)",
          foreground: "hsl(var(--brand-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        none: "var(--radius-none, 0px)",
        sm: "var(--radius-sm, 2px)",
        DEFAULT: "var(--radius-md, 4px)",
        md: "var(--radius-md, 4px)",
        lg: "var(--radius-lg, 8px)",
        xl: "var(--radius-xl, 12px)",
        full: "var(--radius-full, 9999px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "var(--tracking-display, -0.02em)",
        body: "var(--tracking-body, 0em)",
      },
      lineHeight: {
        body: "var(--leading-body, 1.6)",
      },
      fontWeight: {
        display: "var(--weight-display, 500)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        inner: "var(--shadow-inner)",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
        in: "var(--ease-in)",
        "in-out": "var(--ease-in-out)",
        signature: "var(--ease-signature)",
      },
      transitionDuration: {
        fast: "var(--duration-fast, 150ms)",
        DEFAULT: "var(--duration-base, 250ms)",
        base: "var(--duration-base, 250ms)",
        slow: "var(--duration-slow, 400ms)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down var(--duration-base) var(--ease-out)",
        "accordion-up": "accordion-up var(--duration-base) var(--ease-out)",
        "fade-in": "fade-in var(--duration-base) var(--ease-out)",
        "fade-up": "fade-up var(--duration-base) var(--ease-signature)",
        "slide-up": "slide-up var(--duration-base) var(--ease-signature)",
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  plugins: [animate],
}
