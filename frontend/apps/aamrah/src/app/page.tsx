import { ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { BestsellersSection } from "./_sections/bestsellers"
import { CollectionsSection } from "./_sections/collections"
import { HeroSection } from "./_sections/hero"
import { MarqueeSection } from "./_sections/marquee"
import { NewsletterSection } from "./_sections/newsletter"
import { VoicesSection } from "./_sections/voices"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-[#D4A84B]" />

      <HeroSection />
      <MarqueeSection />
      <CollectionsSection />
      <BestsellersSection />
      <VoicesSection />
      <NewsletterSection />
    </>
  )
}
