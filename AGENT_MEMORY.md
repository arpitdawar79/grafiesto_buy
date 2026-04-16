# Grafiesto Buy — Agent Memory

> **Last updated:** 2026-04-16
> **Purpose:** Comprehensive context for any AI agent continuing work on this project.

---

## 1. Project Overview

**Grafiesto Buy** is a multi-tenant ecommerce platform for **5 brands**:

| Brand | Slug | Domain | Port | Category |
|-------|------|--------|------|----------|
| Miramme | `miramme` | miramme.com | 3000 | Luxury fragrances, candles, soaps |
| Rebraciel | `rebraciel` | rebraciel.com | 3001 | Mid-tier everyday luxury fragrances |
| Scrabeo | `scrabeo` | scrabeo.com | 3002 | House fragrances (diffusers, sprays) |
| Aamrah | `aamrah` | aamrah.com | 3003 | Indian ritual fragrances (dhoop, agarbatti, attars) |
| Rebo Chemicals | `rebo-chemicals` | rebochemicals.com | 3004 | B2B wholesale fragrance raw materials |

**Multi-tenancy model:** Medusa.js v2 backend with **Sales-Channel-per-brand**. Each brand gets its own publishable API key. A single Medusa instance serves all 5 brands.

**Target market:** India-first (INR, GST invoicing, Razorpay, COD). B2B flows for Rebo Chemicals (tiered pricing, quotes, MSDS).

---

## 2. Architecture

### Stack
- **Backend:** Medusa.js v2 (Node/TypeScript) — located at `apps/medusa/`
- **Frontend:** Turborepo monorepo at `frontend/` with pnpm workspaces
  - 5 Next.js 14 (App Router) storefronts
  - Shared packages (ui, brand-config, tailwind-config, pwa, medusa-client, tsconfig, eslint-config)
- **Styling:** Tailwind CSS 3.4 + CSS variables for theming
- **Components:** shadcn/ui pattern (Radix primitives + CVA + tailwind-merge)
- **PWA:** next-pwa + Capacitor for native wrapping
- **State:** Zustand (per-app)

### Monorepo Structure

```
grafiesto-buy/
├── README.md
├── PROJECT_CONTEXT.md
├── Architecture.md
├── SYSTEM_ARCHITECTURE.md
├── FEATURES_ROADMAP.md
├── AGENT_MEMORY.md              ← this file
├── .github/workflows/ci.yml
├── apps/
│   └── medusa/                  # Medusa.js v2 backend
│       ├── medusa-config.ts
│       ├── src/modules/brand/   # Custom brand module
│       ├── src/scripts/seed-brands.ts
│       └── docker-compose.yml
└── frontend/
    ├── turbo.json
    ├── pnpm-workspace.yaml      # packages: ["apps/*", "packages/*"]
    ├── apps/
    │   ├── miramme/             # port 3000
    │   ├── rebraciel/           # port 3001
    │   ├── scrabeo/             # port 3002
    │   ├── aamrah/              # port 3003
    │   └── rebo-chemicals/      # port 3004
    └── packages/
        ├── brand-config/        # @grafiesto/brand-config
        ├── ui/                  # @grafiesto/ui
        ├── tailwind-config/     # @grafiesto/tailwind-config
        ├── pwa/                 # @grafiesto/pwa
        ├── medusa-client/       # @grafiesto/medusa-client
        ├── tsconfig/            # @grafiesto/tsconfig
        └── eslint-config/       # @grafiesto/eslint-config
```

---

## 3. Theming System (CRITICAL — read carefully)

### How it works
1. Each brand has a `BrandTheme` object defined in `packages/brand-config/src/themes/{brand}.ts`
2. `BrandConfig` (in `packages/brand-config/src/brands.ts`) references the theme + metadata (name, domain, pwa config, feature flags)
3. At runtime, the root `layout.tsx` calls `themeToCssVars(brand.theme)` → produces a React `style` object of CSS custom properties
4. These CSS vars are injected on `<body>` as inline styles
5. **All UI components** reference colors as `hsl(var(--token-name) / <alpha-value>)` — no hardcoded colors anywhere
6. The Tailwind preset (`packages/tailwind-config/preset.js`) maps every Tailwind utility to these CSS vars

### Theme token structure (`BrandTheme`)
```ts
{
  id: string,
  name: string,
  mode: "light" | "dark",
  colors: ColorScale,       // 24 HSL triplets: background, foreground, card, primary, secondary, muted, accent, destructive, success, warning, border, input, ring, brand + all foreground variants
  colorsDark?: ColorScale,  // optional dark mode override
  typography: Typography,   // fontSans, fontSerif, fontDisplay, fontMono, displayTracking, bodyTracking, displayWeight, headingCase, bodyLeading
  radii: RadiiScale,        // none, sm, md, lg, xl, full (in rem/px strings)
  shadows: Shadows,         // sm, md, lg, xl, inner
  motion: Motion,           // easeOut, easeIn, easeInOut, signature, durationFast, durationBase, durationSlow
  container: { maxWidth, padding },
  personality: Personality,  // buttonStyle, cardStyle, vibe, imageTreatment, heroSerif
}
```

### Brand theme vibes (at a glance)
| Brand | Vibe | Key fonts | Radii | Speed |
|-------|------|-----------|-------|-------|
| Miramme | Dark editorial luxury | Cormorant (display), DM Sans | Sharp 1–4px | Slow 720ms |
| Rebraciel | Bright modern | Inter, Playfair Display | Generous 14–20px | Fast 250ms |
| Scrabeo | Warm interiors | Fraunces, Outfit | Medium 6–8px | Medium 400ms |
| Aamrah | Indian devotional | Tiro Devanagari, Poppins | Soft 5–7px | Slow 800ms |
| Rebo Chemicals | Industrial B2B | JetBrains Mono, Inter | Sharp 2–4px | Fast 180ms |

### Dark mode
- Uses `[data-mode="dark"]` attribute on `<html>`
- `themeToCssRule()` generates a CSS rule with dark mode variants if `colorsDark` is provided
- Currently only Miramme defaults to dark mode (`mode: "dark"`)

### Key files
- Types: `packages/brand-config/src/types.ts`
- Themes: `packages/brand-config/src/themes/{miramme,rebraciel,scrabeo,aamrah,rebo-chemicals}.ts`
- Theme index: `packages/brand-config/src/themes/index.ts` → exports `THEMES: Record<BrandSlug, BrandTheme>`
- Brand configs: `packages/brand-config/src/brands.ts` → exports `BRANDS`, `getBrand()`, `ALL_BRAND_SLUGS`
- CSS var helper: `packages/brand-config/src/utils/css-vars.ts` → exports `themeToCssVars()`, `themeToCssRule()`
- Tailwind preset: `packages/tailwind-config/preset.js`
- Global CSS: `packages/tailwind-config/globals.css`

---

## 4. UI Package (`@grafiesto/ui`)

### Location: `frontend/packages/ui/`

### Barrel export: `src/index.ts` re-exports everything

### 37 shadcn Primitives (`src/components/`)
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, card, carousel, checkbox, collapsible, command, dialog, drawer (vaul), dropdown-menu, form, hover-card, input, label, navigation-menu, pagination, popover, progress, radio-group, scroll-area, select, separator, sheet, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

### 11 Ecommerce Components (`src/ecommerce/`)
| Component | Key props | Notes |
|-----------|-----------|-------|
| `PriceTag` | amount (paise), compareAt, currency, size, unit | `formatMoney()` also exported |
| `QuantityStepper` | value, onChange, min, max, size | Rounded pill with +/- buttons |
| `RatingStars` | value, max, size, showCount, interactive | Fractional fill via CSS clip |
| `VariantSelector` | options, value, onChange, type (pill/swatch/tile) | Color swatches or text pills |
| `ProductCard` | title, image, price, rating, badge, href | Hover image swap, wishlist, add-to-cart reveal |
| `AddToCartButton` | onAdd, stickyMobile | idle→loading→added state machine |
| `CartDrawer` | items, onQuantityChange, onRemove, onCheckout | Vaul drawer with line items |
| `BottomNav` | items, active | Fixed mobile nav with badges |
| `SearchCommand` | results, recent, trending | cmdk-based dialog |
| `EmptyState` | icon, title, description, action | Centered empty placeholder |
| `SafeArea` | top, bottom, left, right | Env() padding wrapper |

### Sample Data (`src/data/`)
- `products.ts` — 12 products, types `Product`, `ProductVariant`, `ProductImage`; helpers: `getProductByHandle`, `searchProducts`, `getFeaturedProducts`, `getBestSellers`, `getNewArrivals`, `getProductsByCollection`
- `collections.ts` — 7 collections; helpers: `getCollectionByHandle`, `getFeaturedCollections`
- `reviews.ts` — 12 reviews; helpers: `getReviewsByProduct`, `getAverageRating`

### Button variants
- Variants: `default`, `brand`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- Sizes: `default (h-11)`, `sm (h-9)`, `lg (h-12)`, `xl (h-14)`, `icon (h-11 w-11)`, `icon-sm (h-9 w-9)`
- Shapes: `auto`, `sharp`, `pill`
- Has `asChild` support via Radix Slot
- `active:scale-[0.98]` for mobile press feel

### Badge variants
`default`, `brand`, `secondary`, `success`, `warning`, `destructive`, `outline`

### Dependencies (key ones)
All Radix primitives, cmdk, embla-carousel-react, vaul, sonner, framer-motion, react-hook-form, @hookform/resolvers, zod, react-day-picker, date-fns, lucide-react, class-variance-authority, clsx, tailwind-merge

---

## 5. PWA Package (`@grafiesto/pwa`)

### Location: `frontend/packages/pwa/`

### Hooks (`src/hooks/`)
| Hook | Returns | Notes |
|------|---------|-------|
| `useInstallPrompt` | `{ canInstall, isInstalled, isIOS, isStandalone, promptInstall }` | Captures `beforeinstallprompt` event |
| `useNetworkStatus` | `{ online, since, effectiveType, saveData }` | Navigator.onLine + Network Info API |
| `useHaptics` | `{ impact(style) }` | Capacitor Haptics → Web Vibration fallback |
| `useSafeArea` | `{ top, right, bottom, left }` (pixels) | Reads env(safe-area-inset-*) via probe div |
| `usePullToRefresh` | `{ pulling, progress, refreshing, bind }` | Touch-driven, spread `bind` on scroll container |

### Components (`src/components/`)
| Component | Description |
|-----------|-------------|
| `PullToRefresh` | Wrapper with spinner + arrow indicator |
| `NetworkBanner` | Fixed top banner when offline, "Back online" flash |
| `InstallPrompt` | Bottom sheet CTA; iOS: shows manual Share instructions |

### Utilities
- `buildManifest(input)` → full Web App Manifest JSON (icons, shortcuts, share_target)
- `registerServiceWorker(options)` → registers `/sw.js`, detects updates, calls `onUpdateAvailable`
- `unregisterServiceWorker()` → removes all registrations

---

## 6. Storefront App Structure (each of the 5 apps)

### Location: `frontend/apps/{brand}/`

### File structure
```
src/
├── app/
│   ├── globals.css              # Just `@import "@grafiesto/tailwind-config/globals.css"`
│   ├── layout.tsx               # Root layout — injects theme CSS vars, Navbar, Footer, MobileShell, Toaster, NetworkBanner, InstallPrompt, ServiceWorker
│   ├── manifest.ts              # Next.js metadata route → buildManifest(brand.pwa)
│   ├── page.tsx                 # Homepage — hero, trust bar, featured, collections grid, marquee, new arrivals, image band, testimonials, bestsellers
│   ├── shop/
│   │   └── page.tsx             # Product listing — sidebar filters, sort, grid toggle, active filter pills
│   ├── product/
│   │   └── [handle]/
│   │       └── page.tsx         # PDP — gallery, variants, quantity, add-to-cart, reviews, recommendations
│   ├── search/
│   │   └── page.tsx             # Search — editorial oversized input, trending, recent, instant results
│   └── offline/
│       └── page.tsx             # Offline fallback
├── components/
│   ├── navbar.tsx               # Fixed navbar with announcement marquee, mobile sheet menu, cart badge
│   ├── footer.tsx               # Newsletter, link columns, contact, social, legal
│   ├── mobile-shell.tsx         # BottomNav wrapper with haptics + safe-area padding
│   └── service-worker.tsx       # Registers SW, toasts on update available
└── lib/
    └── brand.ts                 # `const brand = getBrand(process.env.NEXT_PUBLIC_BRAND_SLUG)`
```

### Config files per app
- `package.json` — deps include `@grafiesto/ui`, `@grafiesto/pwa`, `@grafiesto/brand-config`, `next-pwa`, `@capacitor/*`, `lucide-react`, `zustand`
- `next.config.mjs` — wrapped with `next-pwa` (runtime caching for fonts, images, APIs, pages; offline fallback to `/offline`)
- `tailwind.config.ts` — uses shared preset, scans `packages/ui` and `packages/pwa`
- `tsconfig.json` — extends `@grafiesto/tsconfig/nextjs.json`, includes `next-pwa.d.ts`
- `next-pwa.d.ts` — ambient module declaration for `next-pwa`
- `capacitor.config.ts` — appId from `brand.pwa.appId`, webDir `out`
- `postcss.config.mjs` — standard autoprefixer + tailwindcss

### Brand resolution
Each app sets `NEXT_PUBLIC_BRAND_SLUG` env var (defaults to the app name). `src/lib/brand.ts` calls `getBrand(slug)` which returns the full `BrandConfig` including theme, pwa config, and feature flags.

### PWA Runtime Caching Strategy
- Google Fonts → CacheFirst (365 days)
- Images → StaleWhileRevalidate (30 days, max 256)
- API calls → NetworkFirst (8s timeout, 24hr cache)
- Pages → NetworkFirst (4s timeout)
- Offline fallback → `/offline`

### Capacitor Config
- Each app has a unique `appId` (e.g., `com.grafiesto.miramme`)
- `webDir: "out"` (requires `next export` or static export for Capacitor builds)
- Scripts: `cap:sync`, `cap:open:ios`, `cap:open:android`, `cap:add:ios`, `cap:add:android`

---

## 7. Tailwind Configuration

### Preset (`packages/tailwind-config/preset.js`)
- `darkMode: ["class", '[data-mode="dark"]']`
- All colors: `hsl(var(--{token}) / <alpha-value>)` — 24 semantic color tokens
- Border radius: none/sm/md/lg/xl/full from `var(--radius-*)`
- Font families: sans/serif/display/mono from `var(--font-*)`
- Letter spacing: display/body from `var(--tracking-*)`
- Font weight: display from `var(--weight-display)`
- Box shadows: sm/md/lg/xl/inner from `var(--shadow-*)`
- Transition timing: out/in/in-out/signature from `var(--ease-*)`
- Transition duration: fast/base/slow from `var(--duration-*)`
- Keyframes: accordion-down/up, fade-in, fade-up, slide-up
- Safe-area spacing: `safe-top`, `safe-bottom`, `safe-left`, `safe-right` → `env(safe-area-inset-*)`
- Container padding from `var(--container-pad)`

### Global CSS (`packages/tailwind-config/globals.css`)
- Default fallback token values (white theme)
- Body: safe-area padding, overscroll-behavior-y none (iOS PWA)
- Headings: use `--font-display`, `--tracking-display`, `--weight-display`
- `.no-scrollbar` utility
- `.animate-marquee` keyframes (30s linear infinite)

---

## 8. Design Principles

### Visual style
- **Editorial / award-winning**: Large display typography, generous whitespace, full-bleed imagery
- **Micro-interactions**: `active:scale-[0.98]` on buttons, `group-hover:scale-[1.04]` on images, `ease-signature` transitions
- **Glass effects**: `backdrop-blur-xl`, `bg-background/90` on navbar
- **Mobile-native feel**: Bottom nav, safe-area insets, haptic feedback, pull-to-refresh, install prompts
- Each brand looks completely different despite sharing 100% of the component code — only CSS vars change

### Mobile-first patterns
- All touch targets ≥ 44px (h-11 / h-10 minimum)
- Bottom nav hides on md+ (desktop gets header nav)
- Sheet component for mobile filters
- `stickyMobile` prop on AddToCartButton for fixed bottom CTA
- `pb-safe-bottom` / `pt-safe-top` everywhere
- Sonner toaster offset by safe-area-inset-top

---

## 9. Feature Flags per Brand

Defined in `BrandConfig.features`:
```ts
{
  b2bQuotes: boolean,      // Rebo only
  subscriptions: boolean,  // Rebraciel, Aamrah
  bilingual: boolean,      // Aamrah only (Hindi + English)
  gstInvoicing: boolean,   // All brands
  wishlist: boolean,       // All except Rebo
  giftWrap: boolean,       // Miramme, Rebraciel, Aamrah
}
```

---

## 10. What Has NOT Been Built Yet

### Backend
- [ ] Medusa.js v2 is scaffolded but not wired to frontend
- [ ] Brand module seed script exists but hasn't been run
- [ ] No API integration — frontend uses sample JSON data
- [ ] No authentication / user accounts
- [ ] No payment gateway (Razorpay planned)
- [ ] No order management

### Frontend pages not yet built
- [ ] Cart page (`/cart`)
- [ ] Checkout flow (`/checkout`)
- [ ] User account pages (`/account`, `/account/orders`, `/account/addresses`)
- [ ] Wishlist page (`/wishlist`)
- [ ] About page (`/about`)
- [ ] Contact page (`/contact`)
- [ ] FAQ page (`/faq`)
- [ ] Shipping & Returns (`/shipping`)
- [ ] Privacy / Terms / Refund policy pages
- [ ] Track order page (`/track`)
- [ ] 404 page

### Frontend features not yet built
- [ ] Cart state management (Zustand store)
- [ ] Wishlist state management
- [ ] Authentication UI (login, register, forgot password)
- [ ] Checkout form (addresses, shipping methods, payment)
- [ ] Order confirmation page
- [ ] Email templates
- [ ] Dark mode toggle (only Miramme defaults to dark)
- [ ] Internationalization (Aamrah bilingual Hindi/English)
- [ ] B2B features for Rebo (quote request, bulk pricing table, MSDS downloads)
- [ ] Product filtering by tags
- [ ] Infinite scroll / pagination on shop page
- [ ] Image zoom on PDP
- [ ] Recently viewed products
- [ ] Compare products
- [ ] Product quick view modal
- [ ] Notification preferences
- [ ] Analytics / tracking integration

### Infrastructure
- [ ] `pnpm install` has not been run (deps not installed)
- [ ] No CI/CD pipeline tested
- [ ] No staging/production deployment
- [ ] No Docker setup for frontend
- [ ] PWA icons not created (placeholder paths in manifest)
- [ ] Capacitor native shells not initialized (`cap add ios/android` not run)

---

## 11. Commands

```bash
# Install all dependencies
cd frontend && pnpm install

# Run a single storefront
pnpm --filter @grafiesto/storefront-miramme dev     # port 3000
pnpm --filter @grafiesto/storefront-rebraciel dev   # port 3001
pnpm --filter @grafiesto/storefront-scrabeo dev     # port 3002
pnpm --filter @grafiesto/storefront-aamrah dev      # port 3003
pnpm --filter @grafiesto/storefront-rebo-chemicals dev  # port 3004

# Run all storefronts
pnpm dev

# Build all
pnpm build

# Type check
pnpm typecheck

# Lint
pnpm lint

# Capacitor (per app)
pnpm --filter @grafiesto/storefront-miramme cap:add:ios
pnpm --filter @grafiesto/storefront-miramme cap:sync
pnpm --filter @grafiesto/storefront-miramme cap:open:ios
```

---

## 12. Package Dependency Graph

```
@grafiesto/storefront-{brand}
  ├── @grafiesto/ui
  │   ├── @radix-ui/* (all primitives)
  │   ├── vaul (drawer)
  │   ├── sonner (toasts)
  │   ├── cmdk (command palette)
  │   ├── embla-carousel-react
  │   ├── framer-motion
  │   ├── react-hook-form + zod
  │   ├── lucide-react
  │   └── class-variance-authority + clsx + tailwind-merge
  ├── @grafiesto/pwa
  │   ├── @capacitor/core
  │   ├── @capacitor/haptics
  │   ├── @capacitor/status-bar
  │   ├── @capacitor/app
  │   └── @capacitor/network
  ├── @grafiesto/brand-config (zero deps — pure TS)
  ├── @grafiesto/tailwind-config (tailwindcss peer)
  ├── @grafiesto/medusa-client
  ├── next + next-pwa
  └── zustand
```

---

## 13. Known Issues & Gotchas

1. **Cyrillic bug (FIXED):** Early in development, `miramme` theme was accidentally named with Cyrillic `м` characters. Fixed — now exported as `themeMiramme`.

2. **next-pwa type declaration:** Each app has a `next-pwa.d.ts` file because `next-pwa` doesn't ship types. Must be included in `tsconfig.json` `"include"`.

3. **Sample data image URLs:** Some Unsplash URLs in sample data may have typos (e.g., `photo-1594035910387-fbd1ca19e tried`). These should be replaced with valid URLs when noticed.

4. **Capacitor `webDir: "out"`:** Requires Next.js static export (`output: "export"` in next.config). Currently config is `standalone` by default — needs toggling for Capacitor builds.

5. **Body safe-area padding:** The globals.css adds `padding-top: env(safe-area-inset-top)` to body, but the layout also applies it via MobileShell. May need deduplication if double padding is observed.

6. **Service worker in dev:** `registerServiceWorker` is gated behind `NODE_ENV === "production"`. `next-pwa` is disabled in dev (`disable: process.env.NODE_ENV === "development"`).

7. **Container utility:** Tailwind `container` class is configured with `var(--container-pad)` padding and `center: true`. Each brand theme sets its own `container.maxWidth` and `container.padding`.

---

## 14. File Quick Reference

| What | Path |
|------|------|
| Brand types | `frontend/packages/brand-config/src/types.ts` |
| All brand configs | `frontend/packages/brand-config/src/brands.ts` |
| Theme: Miramme | `frontend/packages/brand-config/src/themes/miramme.ts` |
| Theme: Rebraciel | `frontend/packages/brand-config/src/themes/rebraciel.ts` |
| Theme: Scrabeo | `frontend/packages/brand-config/src/themes/scrabeo.ts` |
| Theme: Aamrah | `frontend/packages/brand-config/src/themes/aamrah.ts` |
| Theme: Rebo | `frontend/packages/brand-config/src/themes/rebo-chemicals.ts` |
| CSS var helper | `frontend/packages/brand-config/src/utils/css-vars.ts` |
| Tailwind preset | `frontend/packages/tailwind-config/preset.js` |
| Global CSS | `frontend/packages/tailwind-config/globals.css` |
| UI barrel export | `frontend/packages/ui/src/index.ts` |
| UI components | `frontend/packages/ui/src/components/*.tsx` |
| Ecommerce components | `frontend/packages/ui/src/ecommerce/*.tsx` |
| Sample data | `frontend/packages/ui/src/data/*.ts` |
| PWA hooks | `frontend/packages/pwa/src/hooks/*.ts` |
| PWA components | `frontend/packages/pwa/src/components/*.tsx` |
| Manifest builder | `frontend/packages/pwa/src/manifest.ts` |
| SW registration | `frontend/packages/pwa/src/register-sw.ts` |
| App layout (any brand) | `frontend/apps/{brand}/src/app/layout.tsx` |
| Homepage | `frontend/apps/{brand}/src/app/page.tsx` |
| Shop page | `frontend/apps/{brand}/src/app/shop/page.tsx` |
| PDP | `frontend/apps/{brand}/src/app/product/[handle]/page.tsx` |
| Search page | `frontend/apps/{brand}/src/app/search/page.tsx` |
| Navbar | `frontend/apps/{brand}/src/components/navbar.tsx` |
| Footer | `frontend/apps/{brand}/src/components/footer.tsx` |
| Mobile shell | `frontend/apps/{brand}/src/components/mobile-shell.tsx` |
| Brand resolver | `frontend/apps/{brand}/src/lib/brand.ts` |
| Next config | `frontend/apps/{brand}/next.config.mjs` |
| Capacitor config | `frontend/apps/{brand}/capacitor.config.ts` |
| Medusa config | `apps/medusa/medusa-config.ts` |
| CI workflow | `.github/workflows/ci.yml` |

---

## 15. Animation & Visual Effects System (NEW — 2026-04-16)

### Dependencies added
- `gsap` ^3.12.5 — timeline/scroll-triggered animations
- `@react-spring/web` ^9.7.5 — spring physics
- `@react-three/fiber` ^8.17.10 — React Three Fiber (3D)
- `@react-three/drei` ^9.117.0 — R3F helpers (Float, Environment, Sparkles, PresentationControls)
- `three` ^0.170.0 — Three.js
- `lenis` ^1.1.14 — smooth scrolling
- `framer-motion` ^11.11.9 — (was already present, used extensively)

### Motion Primitives (`@grafiesto/ui/src/motion/`)
| Component | Description |
|-----------|-------------|
| `FadeIn` | Scroll-triggered reveal with direction, blur, scale, stagger children |
| `TextReveal` | Splits text into words/chars and animates with stagger (slide-up, blur-in, fade, clip) |
| `LetterPullUp` | Letters pull up from below with spring physics |
| `BlurIn` | Entire element blurs in from invisible |
| `MorphingText` | Cycles between an array of words with morph transition |
| `Magnetic` | Wraps any element to make it follow cursor within bounds |
| `Parallax` | Scroll-linked vertical translation with optional scale/opacity |
| `ParallaxImage` | Full-bleed image with parallax depth and overlay |
| `SmoothScroll` | Initializes Lenis smooth scrolling globally |
| `CountUp` | Spring-animated number counter triggered on scroll |
| `StaggerReveal` | Animates direct children one-by-one on scroll with configurable direction |
| `CursorGlow` | Soft radial glow that follows the cursor (desktop only) |
| `ScrollProgress` | Thin progress bar at top of page showing scroll depth |

### Visual Effects — Magic UI Inspired (`@grafiesto/ui/src/visuals/`)
| Component | Description |
|-----------|-------------|
| `ShimmerButton` | Premium CTA with sweeping shimmer effect |
| `AuroraBackground` | Ambient animated gradient blobs for hero/section backgrounds |
| `SpotlightCard` | Card with mouse-following radial gradient spotlight on hover |
| `GradientText` | Text with animated or static gradient fill |
| `TextShimmer` | Text with sweeping shimmer highlight |
| `AnimatedBorder` | Continuously rotating conic-gradient border |
| `ParticleField` | Floating particles that drift upward (CSS-animated) |
| `Meteors` | Shooting star streaks across the screen |
| `BentoGrid` + `BentoCard` | Creative bento layout with animated reveal |
| `Marquee` + `MarqueeItem` | Infinitely looping scroll (horizontal/vertical, pauseOnHover) |
| `RetroGrid` | Perspective-projected grid receding into distance |
| `Dock` + `DockItem` | macOS-style dock with spring magnification |
| `Ripple` | Concentric expanding circles (decorative background) |
| `useClickRipple` | Material-design click ripple hook |
| `OrbitCircle` | Element orbiting around a center point |
| `GlowCard` | Card with soft outer glow on hover |
| `ImageComparison` | Interactive slider to compare two images |

### 3D Components (`@grafiesto/ui/src/three/`)
| Component | Description |
|-----------|-------------|
| `ProductScene` | 3D floating product card with glass reflection (R3F + Drei). Falls back to static image when R3F unavailable |
| `FloatingBottles` | Hero scene with multiple product images floating in 3D space with sparkles. Interactive rotation via PresentationControls |

### CSS Keyframes added to `globals.css`
`marquee-horizontal`, `marquee-vertical`, `shimmer-slide`, `aurora`, `gradient-x`, `shimmer-text`, `particle-float`, `meteor`, `ripple-expand`, `orbit`, `pulse-glow`, `scale-in`, `float`

### How Pages Use These

**Homepage** (award-winning creative design):
- Hero: AuroraBackground + ParticleField + RetroGrid + FloatingBottles (3D) + TextReveal for h1 + ShimmerButton CTA with Magnetic wrap
- Trust bar: CountUp animated numbers
- Product grids: StaggerReveal with 0.1s stagger
- Collections: SpotlightCard wrappers
- Brand marquee: Marquee component with brand name repeated
- Parallax image band: ParallaxImage with overlay
- Testimonials: GlowCard wrappers
- Bestseller hero: AnimatedBorder wrapper
- Newsletter CTA: AuroraBackground + MorphingText cycling words + Ripple
- Global: SmoothScroll + ScrollProgress + CursorGlow

**PDP** (product detail page):
- Gallery: FadeIn direction="left" + 3D View toggle (ProductScene)
- Product info: Cascading FadeIn direction="right" with increasing delays
- Subtitle: TextShimmer
- Trust badges: SpotlightCard
- Reviews summary: GlowCard + CountUp for review count
- Individual reviews: SpotlightCard with spotlight hover
- Recommendations: StaggerReveal

**Shop page**: FadeIn wrappers on sections + StaggerReveal on product grid

**Search page**: FadeIn blur on search input + StaggerReveal on results/collections

**Navbar**: Framer motion spring entrance + Magnetic on logo + action icons

