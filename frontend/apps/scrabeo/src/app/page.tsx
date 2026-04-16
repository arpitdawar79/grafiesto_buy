import { SmoothScroll, ScrollProgress, CursorGlow } from "@grafiesto/ui"
import { HeroSection } from "./_sections/hero"
import { PhilosophySection } from "./_sections/philosophy"
import { CollectionsSection } from "./_sections/collections"
import { ProductsSection } from "./_sections/products"
import { StorySection } from "./_sections/story"
import { NewsletterSection } from "./_sections/newsletter"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-[#C4A882]" />
      <CursorGlow />

      <HeroSection />
      <PhilosophySection />
      <CollectionsSection />
      <ProductsSection />
      <StorySection />
      <NewsletterSection />
    </>
  )
}
