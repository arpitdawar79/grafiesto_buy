import { CursorGlow, ScrollProgress, SmoothScroll } from "@grafiesto/ui"
import { HomeExperience } from "./_sections/home-experience"

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress color="linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--brand)))" />
      <CursorGlow size={500} color="hsl(var(--primary) / 0.05)" blur={100} />
      <HomeExperience />
    </>
  )
}
