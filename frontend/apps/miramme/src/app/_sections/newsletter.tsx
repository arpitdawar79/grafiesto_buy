"use client"

import { FadeIn, ParticleField, ShimmerButton } from "@grafiesto/ui"

export function NewsletterSection() {
  return (
    <section className="bg-[#14110D] text-[#F5E6D0] min-h-[50vh] flex items-center py-28 relative overflow-hidden">
      <ParticleField count={8} color="#C45A3C" speed="slow" className="opacity-[0.02]" />

      <div className="container max-w-xl text-center relative z-10">
        <FadeIn>
          <p className="text-[9px] tracking-[0.6em] uppercase text-[#C45A3C]/25 mb-8">
            The Inner Circle
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-extralight tracking-tighter leading-tight">
            Private collections &amp; atelier stories.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form
            className="mt-14 flex border-b border-[#F5E6D0]/8 focus-within:border-[#C45A3C]/30 transition-colors pb-1 max-w-sm mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#F5E6D0]/12 font-light tracking-wide"
            />
            <ShimmerButton
              shimmerColor="#C45A3C"
              background="transparent"
              borderRadius="0"
              className="h-10 px-6 text-[8px] uppercase tracking-[0.4em]"
            >
              Subscribe
            </ShimmerButton>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
