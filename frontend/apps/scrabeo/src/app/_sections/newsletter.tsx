"use client"

import { FadeIn, ShimmerButton, ParticleField } from "@grafiesto/ui"

export function NewsletterSection() {
  return (
    <section className="bg-[#2A2118] text-[#F4EBE0] min-h-[50vh] flex items-center py-24 relative overflow-hidden">
      <ParticleField count={8} color="#C4A882" speed="slow" className="opacity-[0.03]" />

      <div className="container max-w-lg text-center relative z-10">
        <FadeIn>
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#C4A882]/25 mb-6">
            The Inner Room
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight leading-tight">
            New scents &amp; interior stories.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form
            className="mt-12 flex border-b border-[#C4A882]/12 focus-within:border-[#C4A882]/30 transition-colors pb-1 max-w-sm mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#F4EBE0]/12 font-light tracking-wide"
            />
            <ShimmerButton
              shimmerColor="#C4A882"
              background="transparent"
              borderRadius="4px"
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
