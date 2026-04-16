import { CursorGlow, ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { BestsellersSection } from "./_sections/bestsellers"
import { CollectionsSection } from "./_sections/collections"
import { HeroSection } from "./_sections/hero"
import { MarqueeSection } from "./_sections/marquee"
import { NewsletterSection } from "./_sections/newsletter"
import { RitualSection } from "./_sections/ritual"
import { SocialProofSection } from "./_sections/social-proof"
import { StorySection } from "./_sections/story"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress color="linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--brand)))" />
      <CursorGlow size={500} color="hsl(var(--primary) / 0.05)" blur={100} />

      <HeroSection />
      <MarqueeSection />
      <BestsellersSection />
      <CollectionsSection />
      <RitualSection />
      <StorySection />
      <SocialProofSection />
      <NewsletterSection />
    </>
  )
}
