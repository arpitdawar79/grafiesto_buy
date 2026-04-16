"use client"

import { FadeIn, ParticleField, PulsatingButton } from "@grafiesto/ui"

export function NewsletterSection() {
  return (
    <section className="bg-[#1A0F08] text-[#FAF4E6] min-h-[50vh] flex items-center py-24 relative overflow-hidden">
      <ParticleField count={8} color="#D4A84B" speed="slow" className="opacity-[0.03]" />

      <div className="container max-w-lg text-center relative z-10">
        <FadeIn>
          <p className="text-[9px] tracking-[0.5em] uppercase text-[#D4A84B]/20 mb-6">
            Sacred Circle
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight leading-tight">
            New rituals &amp; sacred offerings.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form
            className="mt-12 flex border-b border-[#D4A84B]/10 focus-within:border-[#D4A84B]/25 transition-colors pb-1 max-w-sm mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-[#FAF4E6]/10 font-light tracking-wide"
            />
            <PulsatingButton
              pulseColor="rgba(212,168,75,0.1)"
              className="bg-transparent text-[#D4A84B]/50 hover:text-[#D4A84B] h-10 px-6 text-[8px] uppercase tracking-[0.4em]"
            >
              Subscribe
            </PulsatingButton>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
