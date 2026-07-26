"use client"

import { TextReveal } from "@/components/ui/text-reveal"

export function NarrativeReveal() {
  return (
    <section
      aria-label="Core thesis"
      className="section-pad border-y border-white/5 bg-forest/25"
    >
      <TextReveal className="mx-auto max-w-5xl">
        The morning rush owns the brand story. The afternoon owns the P&L.
      </TextReveal>
    </section>
  )
}
