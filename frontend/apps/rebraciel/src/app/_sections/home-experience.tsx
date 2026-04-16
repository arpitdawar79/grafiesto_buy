"use client"

import {
  AuroraBackground,
  Backlight,
  BorderBeam,
  EditorialCard,
  FadeIn,
  GradientText,
  InteractiveHoverButton,
  MagicCard,
  Marquee,
  MarqueeItem,
  MetricPill,
  ParticleField,
  RainbowButton,
  Ripple,
  SectionIntro,
  SpotlightCard,
  StaggerReveal,
} from "@grafiesto/ui"
import {
  ArrowRight,
  BadgeCheck,
  CreditCard,
  Globe2,
  HeartHandshake,
  MapPin,
  MoveRight,
  PackageCheck,
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  WandSparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const imagery = {
  heroModel:
    "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1400",
  skincare:
    "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=1200",
  makeup:
    "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1200",
  fragrance:
    "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hair: "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  body: "https://images.pexels.com/photos/4210370/pexels-photo-4210370.jpeg?auto=compress&cs=tinysrgb&w=1200",
  sun: "https://images.pexels.com/photos/4792675/pexels-photo-4792675.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const

const heroMetrics = [
  { value: "150+", label: "Countries Served", icon: Globe2 },
  { value: "48h", label: "Dispatch Promise", icon: Truck },
  { value: "4.9/5", label: "Average Rating", icon: Star },
]

const trustTape = [
  "Express shipping across 150+ destinations",
  "Localized pricing, duties, and beauty concierge support",
  "Derm-tested formulas curated for global skin routines",
  "Premium gifting, exclusive drops, and members-first access",
]

const commercePillars = [
  {
    eyebrow: "Global Fulfilment",
    title: "Cross-border checkout that still feels boutique.",
    description:
      "Fast dispatch, tax-aware shipping, premium packaging, and concierge-grade support built for international orders.",
    icon: PackageCheck,
    footer: "Multi-currency checkout • Tracked delivery • Gift-ready presentation",
  },
  {
    eyebrow: "Formula Curation",
    title: "Every launch is chosen like an editorial cover story.",
    description:
      "We curate makeup, skincare, and sensory rituals with a luxury buyer's eye so every category feels polished, not crowded.",
    icon: WandSparkles,
    footer: "High-performance textures • Hero ingredients • Elevated shade direction",
  },
  {
    eyebrow: "Membership",
    title: "Retention mechanics wrapped in world-class brand energy.",
    description:
      "Exclusive sets, early access, and beauty guidance that make repeat orders feel like access to an insiders club.",
    icon: HeartHandshake,
    footer: "Private previews • Ritual bundles • Seasonal rewards",
  },
]

const categoryCards = [
  {
    title: "Glow-First Skincare",
    description: "Clinical hydration and skin-barrier heroes with a luxurious finish.",
    image: imagery.skincare,
    label: "18 routines",
    href: "/shop?collection=skincare",
  },
  {
    title: "Color Atelier",
    description: "High-pigment makeup edits designed for everyday glamour and after-dark looks.",
    image: imagery.makeup,
    label: "42 hero shades",
    href: "/shop?collection=makeup",
  },
  {
    title: "Scent Wardrobe",
    description:
      "Statement perfumes, layered body notes, and sensorial gifting built for global tastes.",
    image: imagery.fragrance,
    label: "9 signature scents",
    href: "/shop?collection=fragrance",
  },
  {
    title: "Body Rituals",
    description: "Bath, body, and hair essentials that turn daily care into a premium ritual.",
    image: imagery.body,
    label: "12 ritual kits",
    href: "/shop?collection=body",
  },
]

const ritualSteps = [
  {
    title: "Prep the canvas",
    description:
      "Begin with calm hydration, lightweight SPF, and texture-perfecting prep that keeps makeup luminous all day.",
    footer: "Step 01 • Skin architecture",
  },
  {
    title: "Build the signature look",
    description:
      "Layer complexion, lip, and eye heroes chosen to work together so the final look feels intentional and globally wearable.",
    footer: "Step 02 • Color direction",
  },
  {
    title: "Seal with a sensorial finish",
    description:
      "Close with fragrance, body care, and finishing mists that turn checkout into a full lifestyle basket instead of a single-product cart.",
    footer: "Step 03 • Retention by ritual",
  },
]

const testimonials = [
  {
    quote:
      "It feels like ordering from a fashion house, but for beauty. The curation is sharp, the shipping is fast, and every package lands beautifully.",
    name: "Amina R.",
    city: "Dubai",
  },
  {
    quote:
      "The homepage instantly communicates trust and taste. I came for one serum and left with a full routine because the storytelling is that good.",
    name: "Sofia M.",
    city: "Barcelona",
  },
  {
    quote:
      "This is the rare beauty store that feels global without feeling generic. The visuals, the categories, and the checkout confidence all work together.",
    name: "Nadia K.",
    city: "Singapore",
  },
]

function EditorialImageCard({
  src,
  alt,
  badge,
  className = "",
}: {
  src: string
  alt: string
  badge: string
  className?: string
}) {
  return (
    <MagicCard
      gradientColor="hsl(var(--primary))"
      gradientOpacity={0.18}
      className={`relative overflow-hidden rounded-[2rem] border-white/55 bg-white/60 ${className}`}
    >
      <div className="relative h-full min-h-[18rem]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
          {badge}
        </div>
        <BorderBeam
          size={180}
          duration={12}
          colorFrom="hsl(var(--primary))"
          colorTo="hsl(var(--accent))"
        />
      </div>
    </MagicCard>
  )
}

export function HomeExperience() {
  return (
    <main className="overflow-x-clip bg-background">
      <Backlight color="hsl(var(--accent))" size={560} blur={160} className="opacity-[0.08]" />

      <section className="relative overflow-hidden pb-20 pt-28 md:pt-36 lg:pb-28 lg:pt-40">
        <AuroraBackground className="absolute inset-0 opacity-80" />
        <Ripple color="hsl(var(--primary) / 0.12)" count={6} className="opacity-80" />
        <ParticleField
          count={24}
          color="hsl(var(--accent))"
          minSize={2}
          maxSize={5}
          speed="slow"
          className="opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_32%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.18),transparent_30%)]" />

        <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary shadow-[0_24px_70px_-40px_rgba(15,23,42,0.45)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Global beauty platform
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-8">
              <h1 className="max-w-4xl font-serif text-[clamp(3.4rem,8vw,7rem)] font-normal leading-[0.88] tracking-tight text-foreground">
                A cosmetics homepage
                <br />
                designed to feel like a{" "}
                <GradientText
                  as="span"
                  className="font-serif italic"
                  gradient="linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 48%, hsl(var(--brand)) 100%)"
                >
                  world-class beauty destination.
                </GradientText>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16} className="mt-7 max-w-2xl">
              <p className="text-lg leading-8 text-muted-foreground md:text-xl">
                Rebraciel now opens like a premium global ecommerce flagship: cinematic,
                commerce-ready, and built to move shoppers from discovery into high-intent ritual
                shopping.
              </p>
            </FadeIn>

            <FadeIn delay={0.24} className="mt-10 flex flex-wrap gap-4">
              <RainbowButton
                asChild
                className="h-14 px-8 text-sm font-semibold shadow-[0_24px_60px_-22px_hsl(var(--primary)/0.55)]"
              >
                <Link href="/shop">
                  Shop The Global Edit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </RainbowButton>
              <InteractiveHoverButton
                asChild
                hoverText="See The Platform →"
                className="h-14 border-foreground/10 bg-white/75 px-8 backdrop-blur-xl"
              >
                <Link href="#global-edit">
                  <PlayCircle className="h-4 w-4" />
                  Explore The Experience
                </Link>
              </InteractiveHoverButton>
            </FadeIn>

            <StaggerReveal
              stagger={0.1}
              delay={0.2}
              className="mt-12 flex flex-wrap gap-4"
              direction="up"
              distance={18}
            >
              {heroMetrics.map((metric) => (
                <MetricPill
                  key={metric.label}
                  value={metric.value}
                  label={metric.label}
                  icon={<metric.icon className="h-4 w-4" />}
                />
              ))}
            </StaggerReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <FadeIn direction="left" className="md:col-span-2">
              <MagicCard
                gradientColor="hsl(var(--accent))"
                gradientOpacity={0.16}
                className="relative overflow-hidden rounded-[2rem] border-white/55 bg-white/55 p-0 shadow-[0_35px_100px_-52px_rgba(15,23,42,0.55)]"
              >
                <div className="relative h-[28rem] md:h-[34rem]">
                  <Image
                    src={imagery.heroModel}
                    alt="Editorial beauty portrait for Rebraciel"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                  <div className="absolute left-6 top-6 max-w-[11rem] rounded-[1.5rem] border border-white/25 bg-white/10 p-4 text-white backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                      Launch Direction
                    </p>
                    <p className="mt-2 font-serif text-2xl font-normal leading-none">
                      Editorial luxury
                    </p>
                    <p className="mt-2 text-sm leading-5 text-white/75">
                      Fashion-led visuals layered with conversion-first ecommerce structure.
                    </p>
                  </div>
                  <div className="absolute bottom-6 right-6 max-w-[14rem] rounded-[1.5rem] border border-white/25 bg-white/10 p-4 text-white backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                      Commerce signals
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <BadgeCheck className="h-5 w-5 text-white" />
                      <p className="text-sm leading-5 text-white/85">
                        Premium trust cues, global readiness, and category-led discovery built right
                        into the hero.
                      </p>
                    </div>
                  </div>
                  <BorderBeam
                    size={240}
                    duration={14}
                    colorFrom="hsl(var(--primary))"
                    colorTo="hsl(var(--accent))"
                  />
                </div>
              </MagicCard>
            </FadeIn>

            <FadeIn delay={0.1}>
              <EditorialImageCard
                src={imagery.skincare}
                alt="Luxury skincare composition"
                badge="Skincare Edit"
                className="h-full"
              />
            </FadeIn>

            <FadeIn delay={0.16}>
              <SpotlightCard
                spotlightColor="hsl(var(--primary) / 0.16)"
                className="h-full rounded-[2rem] border-white/55 bg-white/75 p-0 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.38)]"
              >
                <EditorialCard
                  eyebrow="Platform DNA"
                  title="Luxury visuals meet performance merchandising."
                  description="This new top fold blends aurora atmosphere, bold typography, trust metrics, and strong calls to action so the homepage feels expensive and sells with clarity."
                  icon={<CreditCard className="h-5 w-5" />}
                  footer={
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
                        Premium UX
                      </span>
                      <span className="text-muted-foreground">
                        Optimized for desktop and mobile
                      </span>
                    </div>
                  }
                  className="h-full border-0 bg-transparent p-6 shadow-none"
                />
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/6 bg-white/55 backdrop-blur-sm">
        <Marquee speed={26} pauseOnHover className="py-4">
          {trustTape.map((item) => (
            <MarqueeItem key={item} className="gap-3 px-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground/85">{item}</span>
            </MarqueeItem>
          ))}
        </Marquee>
      </section>

      <section id="global-edit" className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,hsl(var(--primary)/0.08),transparent_32%),radial-gradient(circle_at_85%_30%,hsl(var(--accent)/0.12),transparent_26%)]" />
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-8">
            <FadeIn>
              <SectionIntro
                eyebrow={
                  <>
                    <Globe2 className="h-3.5 w-3.5" />
                    Beauty without borders
                  </>
                }
                title={
                  <>
                    The homepage now sells the brand as a{" "}
                    <GradientText
                      as="span"
                      className="font-serif italic"
                      gradient="linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)"
                    >
                      premium global beauty house
                    </GradientText>
                    .
                  </>
                }
                description="Every module is tuned to move shoppers through a stronger DTC narrative: brand allure, operational trust, curated categories, and ritual-based basket building."
              />
            </FadeIn>

            <StaggerReveal className="grid gap-5" stagger={0.12}>
              {commercePillars.map((pillar) => (
                <MagicCard
                  key={pillar.title}
                  gradientColor="hsl(var(--primary))"
                  gradientOpacity={0.14}
                  className="rounded-[1.75rem] border-white/60 bg-white/65"
                >
                  <EditorialCard
                    eyebrow={pillar.eyebrow}
                    title={pillar.title}
                    description={pillar.description}
                    icon={<pillar.icon className="h-5 w-5" />}
                    footer={
                      <p className="text-sm font-medium text-muted-foreground">{pillar.footer}</p>
                    }
                    className="border-0 bg-transparent shadow-none"
                  />
                </MagicCard>
              ))}
            </StaggerReveal>
          </div>

          <FadeIn direction="left">
            <MagicCard
              gradientColor="hsl(var(--accent))"
              gradientOpacity={0.16}
              className="relative overflow-hidden rounded-[2.25rem] border-white/60 bg-white/60 p-0"
            >
              <div className="grid h-full gap-0 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[24rem] md:min-h-[100%]">
                  <Image
                    src={imagery.hair}
                    alt="Premium haircare and cosmetics editorial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 36vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/15 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                      Conversion story
                    </p>
                    <p className="mt-2 font-serif text-3xl font-normal leading-none">
                      Discovery should feel editorial.
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/80">
                      The redesign keeps shoppers in a luxury mood while continuously surfacing
                      reasons to trust, click, and add more to cart.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <EditorialCard
                    eyebrow="Operational trust"
                    title="Beauty ecommerce is stronger when logistics look premium too."
                    description="Fast-shipping cues, secure checkout language, and cross-border readiness are treated as part of the visual design instead of a generic utility strip."
                    icon={<ShieldCheck className="h-5 w-5" />}
                    footer={
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <MoveRight className="h-4 w-4" />
                        Trust messaging woven into the visual hierarchy
                      </div>
                    }
                    className="h-full"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <EditorialCard
                      eyebrow="Payment"
                      title="12 currencies"
                      description="Localized checkout language for global-first shopping confidence."
                      icon={<CreditCard className="h-5 w-5" />}
                      className="h-full"
                    />
                    <EditorialCard
                      eyebrow="Delivery"
                      title="Express routes"
                      description="Premium shipping expectations supported by clear service cues."
                      icon={<Truck className="h-5 w-5" />}
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </MagicCard>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="container relative z-10">
          <FadeIn>
            <SectionIntro
              align="center"
              eyebrow={
                <>
                  <Sparkles className="h-3.5 w-3.5" />
                  Shop by mood
                </>
              }
              title={
                <>
                  Curated category entry points with richer{" "}
                  <GradientText
                    as="span"
                    className="font-serif italic"
                    gradient="linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--brand)) 100%)"
                  >
                    editorial energy
                  </GradientText>
                  .
                </>
              }
              description="Instead of looking like a generic grid, these collections read like luxury campaigns and make the path into the catalog feel deliberate."
              actions={
                <InteractiveHoverButton
                  asChild
                  hoverText="Shop Everything →"
                  className="h-12 border-foreground/10 bg-white/70 px-6 backdrop-blur-lg"
                >
                  <Link href="/shop">
                    View Full Catalog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </InteractiveHoverButton>
              }
            />
          </FadeIn>

          <StaggerReveal className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
            {categoryCards.map((card, index) => (
              <Link key={card.title} href={card.href} className="block">
                <MagicCard
                  gradientColor={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                  gradientOpacity={0.16}
                  className="h-full rounded-[1.9rem] border-white/60 bg-white/70 p-0"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.9rem]">
                    <div className="relative h-80">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1280px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                        {card.label}
                      </div>
                    </div>
                    <div className="space-y-4 p-6">
                      <div>
                        <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                        Explore collection
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                    <BorderBeam
                      size={160}
                      duration={11 + index}
                      delay={index * 0.2}
                      colorFrom={index % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                      colorTo="hsl(var(--brand))"
                    />
                  </div>
                </MagicCard>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,hsl(var(--accent)/0.12),transparent_24%),radial-gradient(circle_at_0%_90%,hsl(var(--primary)/0.09),transparent_28%)]" />
        <div className="container relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <FadeIn>
            <MagicCard
              gradientColor="hsl(var(--primary))"
              gradientOpacity={0.16}
              className="relative overflow-hidden rounded-[2.25rem] border-white/60 bg-white/65 p-0"
            >
              <div className="relative h-[32rem]">
                <Ripple color="hsl(var(--primary) / 0.14)" count={5} />
                <Image
                  src={imagery.sun}
                  alt="Luxury skincare routine image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute bottom-6 left-6 max-w-[16rem] rounded-[1.6rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                    Basket-building logic
                  </p>
                  <p className="mt-3 font-serif text-3xl font-normal leading-none">
                    Sell full rituals, not isolated products.
                  </p>
                </div>
              </div>
            </MagicCard>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn>
              <SectionIntro
                eyebrow={
                  <>
                    <WandSparkles className="h-3.5 w-3.5" />
                    Ritual architecture
                  </>
                }
                title={
                  <>
                    Stronger merchandising for a more{" "}
                    <GradientText
                      as="span"
                      className="font-serif italic"
                      gradient="linear-gradient(120deg, hsl(var(--accent)) 0%, hsl(var(--primary)) 100%)"
                    >
                      elevated ecommerce journey
                    </GradientText>
                    .
                  </>
                }
                description="The new flow encourages shoppers to move from hero product discovery into adjacent routine categories, increasing perceived depth and cross-sell potential."
                actions={
                  <RainbowButton asChild className="h-12 px-6 text-sm font-semibold">
                    <Link href="/shop?sort=newest">
                      Shop New Rituals
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </RainbowButton>
                }
              />
            </FadeIn>

            <StaggerReveal className="grid gap-5" stagger={0.12}>
              {ritualSteps.map((step, index) => (
                <SpotlightCard
                  key={step.title}
                  spotlightColor={
                    index === 1 ? "hsl(var(--accent) / 0.16)" : "hsl(var(--primary) / 0.16)"
                  }
                  className="rounded-[1.7rem] border-white/60 bg-white/75"
                >
                  <EditorialCard
                    eyebrow={step.footer}
                    title={step.title}
                    description={step.description}
                    icon={<MapPin className="h-5 w-5" />}
                    footer={
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <Sparkles className="h-4 w-4" />
                        Designed to extend session depth and average order value
                      </div>
                    }
                    className="border-0 bg-transparent shadow-none"
                  />
                </SpotlightCard>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="container relative z-10">
          <FadeIn>
            <SectionIntro
              align="center"
              eyebrow={
                <>
                  <Quote className="h-3.5 w-3.5" />
                  Social proof
                </>
              }
              title={
                <>
                  A beauty storefront that feels loved in every{" "}
                  <GradientText
                    as="span"
                    className="font-serif italic"
                    gradient="linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)"
                  >
                    market it enters
                  </GradientText>
                  .
                </>
              }
              description="To complete the global-commerce story, the redesign mixes editorial imagery with shopper quotes and trust markers that make the brand feel established from the first scroll."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn>
              <MagicCard
                gradientColor="hsl(var(--accent))"
                gradientOpacity={0.16}
                className="overflow-hidden rounded-[2.2rem] border-white/60 bg-white/65 p-0"
              >
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="relative h-80 md:h-full">
                    <Image
                      src={imagery.makeup}
                      alt="Luxury makeup composition"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                  </div>
                  <div className="relative h-80 md:h-full">
                    <Image
                      src={imagery.fragrance}
                      alt="Luxury fragrance product visual"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75">
                        Storefront impression
                      </p>
                      <p className="mt-2 font-serif text-3xl font-normal leading-none">
                        Premium, vibrant, unmistakably global.
                      </p>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        The visual system now feels closer to luxury beauty campaigns than a generic
                        DTC landing page.
                      </p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </FadeIn>

            <StaggerReveal className="grid gap-5" stagger={0.12}>
              {testimonials.map((item) => (
                <SpotlightCard
                  key={`${item.name}-${item.city}`}
                  spotlightColor="hsl(var(--primary) / 0.14)"
                  className="rounded-[1.75rem] border-white/60 bg-white/80 p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.38)]"
                >
                  <div className="space-y-5">
                    <div className="flex items-center gap-1 text-primary">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-base leading-7 text-foreground/80">
                      &quot;{item.quote}&quot;
                    </p>
                    <div className="flex items-center justify-between border-t border-foreground/6 pt-4">
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.city}</p>
                      </div>
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                        Verified
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-8 lg:pb-32">
        <div className="container">
          <MagicCard
            gradientColor="hsl(var(--brand))"
            gradientOpacity={0.18}
            className="relative overflow-hidden rounded-[2.5rem] border-white/60 bg-white/70 p-0"
          >
            <AuroraBackground className="absolute inset-0 opacity-85" />
            <Ripple color="hsl(var(--accent) / 0.14)" count={5} className="opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.15),transparent_28%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.18),transparent_30%)]" />

            <div className="relative z-10 grid gap-10 p-8 md:p-10 lg:grid-cols-[1.02fr_0.98fr] lg:p-14">
              <div className="space-y-7">
                <SectionIntro
                  eyebrow={
                    <>
                      <Sparkles className="h-3.5 w-3.5" />
                      Homepage revamp
                    </>
                  }
                  title={
                    <>
                      A bolder, more premium front page for a{" "}
                      <GradientText
                        as="span"
                        className="font-serif italic"
                        gradient="linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--brand)) 100%)"
                      >
                        world-class cosmetics platform
                      </GradientText>
                      .
                    </>
                  }
                  description="The new design leans into luxury gradients, Magic UI effects, richer editorial composition, and stronger commerce storytelling while keeping the experience smooth on both desktop and mobile."
                />

                <div className="flex flex-wrap gap-4">
                  <RainbowButton asChild className="h-14 px-8 text-sm font-semibold">
                    <Link href="/shop">
                      Launch Into Shop
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </RainbowButton>
                  <InteractiveHoverButton
                    asChild
                    hoverText="Discover Rituals →"
                    className="h-14 border-foreground/10 bg-white/75 px-8 backdrop-blur-xl"
                  >
                    <Link href="#global-edit">
                      <Sparkles className="h-4 w-4" />
                      Revisit The Story
                    </Link>
                  </InteractiveHoverButton>
                </div>

                <div className="flex flex-wrap gap-4">
                  <MetricPill
                    value="Pexels-first"
                    label="Placeholder imagery"
                    icon={<BadgeCheck className="h-4 w-4" />}
                  />
                  <MetricPill
                    value="Magic UI"
                    label="Effects layered throughout"
                    icon={<Sparkles className="h-4 w-4" />}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <EditorialImageCard
                  src={imagery.body}
                  alt="Body ritual editorial"
                  badge="Body Ritual"
                  className="min-h-[18rem]"
                />
                <EditorialImageCard
                  src={imagery.skincare}
                  alt="Skincare editorial"
                  badge="Glow System"
                  className="min-h-[18rem] sm:translate-y-10"
                />
              </div>
            </div>
          </MagicCard>
        </div>
      </section>
    </main>
  )
}
