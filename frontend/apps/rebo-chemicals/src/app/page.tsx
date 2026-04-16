import { ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { ActivitySection } from "./_sections/activity"
import { CatalogueSection } from "./_sections/catalogue"
import { CTASection } from "./_sections/cta"
import { HeroSection } from "./_sections/hero"
import { MetricsSection } from "./_sections/metrics"
import { ProcessSection } from "./_sections/process"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress className="bg-cyan-400" />

      <HeroSection />
      <MetricsSection />
      <CatalogueSection />
      <ProcessSection />
      <ActivitySection />
      <CTASection />
    </>
  )
}
