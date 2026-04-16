import { CursorGlow, ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { BeautyTipsSection } from "./_sections/beauty-tips"
import { BestsellersSection } from "./_sections/bestsellers"
import { CollectionsSection } from "./_sections/collections"
import { FeaturedCategoriesSection } from "./_sections/featured-categories"
import { FromInstagramSection } from "./_sections/from-instagram"
import { GlobalBannerSection } from "./_sections/global-banner"
import { HeroSection } from "./_sections/hero"
import { MarqueeSection } from "./_sections/marquee"
import { NewsletterSection } from "./_sections/newsletter"
import { ShopNewSection } from "./_sections/shop-new"
import { SocialProofSection } from "./_sections/social-proof"
import { StorySection } from "./_sections/story"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress color="linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--brand)))" />
      <CursorGlow size={500} color="hsl(var(--primary) / 0.05)" blur={100} />

      {/* 1. Hero - First impression with dramatic effects */}
      <HeroSection />

      {/* 2. Marquee - Quick trust signals */}
      <MarqueeSection />

      {/* 3. Featured Categories - Visual category exploration */}
      <FeaturedCategoriesSection />

      {/* 4. Global Banner - Worldwide shipping & trust */}
      <GlobalBannerSection />

      {/* 5. Bestsellers - Social proof with popular products */}
      <BestsellersSection />

      {/* 6. Shop New - Latest arrivals */}
      <ShopNewSection />

      {/* 7. Collections - Curated product collections */}
      <CollectionsSection />

      {/* 8. Beauty Tips - Educational content & engagement */}
      <BeautyTipsSection />

      {/* 9. Story - Brand philosophy & values */}
      <StorySection />

      {/* 10. Social Proof - Reviews & community */}
      <SocialProofSection />

      {/* 11. Instagram - Social media presence */}
      <FromInstagramSection />

      {/* 12. Newsletter - Email capture */}
      <NewsletterSection />
    </>
  )
}
