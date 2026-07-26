"use client"

import { BlurFade } from "@/components/ui/blur-fade"

export function BriefSection() {
  return (
    <section id="brief" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <BlurFade delay={0.05} inView>
          <p className="eyebrow">The brief</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foam sm:text-4xl lg:text-5xl text-balance">
            Leadership asked one sharp question
          </h2>
        </BlurFade>

        <BlurFade delay={0.15} inView>
          <div className="space-y-6 text-lg leading-relaxed text-foam/70 sm:text-xl">
            <p>
              With eighteen months of store-level transactions in hand, which
              levers actually move revenue — and which ones only look busy on a
              dashboard?
            </p>
            <p>
              My job was to separate brand mythology from measurable drivers:
              morning rush narrative vs afternoon profit reality, loyalty as
              frequency vs loyalty as basket composition, and promotional volume
              vs durable margin.
            </p>
            <p className="border-l-2 border-siren pl-5 text-foam/90">
              Success looked like a short list of actions a district manager
              could pilot next week — not a 40-slide archaeology report.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
