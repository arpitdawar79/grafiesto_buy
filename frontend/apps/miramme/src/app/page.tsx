import { ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { BestsellersSection } from "./_sections/bestsellers"
import { CollectionsSection } from "./_sections/collections"
import { FeaturedProductSection } from "./_sections/featured-product"
import { HeroSection } from "./_sections/hero"
import { ManifestoSection } from "./_sections/manifesto"
import { MarqueeBand } from "./_sections/marquee-band"
import { NewsletterSection } from "./_sections/newsletter"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-[#C45A3C]" />

      <HeroSection />
      <MarqueeBand />
      <ManifestoSection />
      <CollectionsSection />
      <FeaturedProductSection />
      <BestsellersSection />
      <NewsletterSection />
    </>
  )
}
