"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function BriefSection() {
  return (
    <section id="brief" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <BlurFade delay={0.05} inView>
          <p className="eyebrow">The brief</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foam sm:text-4xl lg:text-5xl text-balance">
            What do Starbucks&apos; own filings say is broken — and fixable?
          </h2>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <div className="space-y-6 text-lg leading-relaxed text-foam/70 sm:text-xl">
            <p>
              This case is a secondary-data analysis. I did not pull private POS
              extracts. I structured FY2025–Q2 FY2026 investor disclosures into
              an analyst brief a professor can interrogate.
            </p>
            <p>
              The sharp question: under the “Back to Starbucks” turnaround,
              which publicly disclosed levers — afternoon daypart, Rewards
              economics, and beverage/food mix — actually explain where growth
              can come from next?
            </p>
            <p className="border-l-2 border-siren pl-5 text-foam/90">
              Success = a short list of actions tied to named sources — not a
              fake 48-store dataset, and not a 40-slide archaeology report.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
