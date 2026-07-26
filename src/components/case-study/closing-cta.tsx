"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { caseMeta } from "@/lib/case-data"

export function ClosingCta() {
  return (
    <section className="section-pad relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(0_117_74_/_0.35),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <BlurFade inView>
          <p className="eyebrow justify-center">Close</p>
          <h2 className="mt-5 font-display text-3xl font-bold text-foam sm:text-5xl lg:text-6xl text-balance">
            Built to stand out in a room full of slide decks
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foam/65 sm:text-lg">
            This case study is designed the way analytics should be presented:
            clear question, rigorous method, visual proof, and actions with
            owners — not charts for charts&apos; sake.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#insights"
              className="rounded-full bg-siren px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-siren-bright"
            >
              Replay the insights
            </a>
            <a
              href="mailto:hello@example.com?subject=Starbucks%20Sales%20Analysis"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foam/85 transition hover:border-white/30 hover:bg-white/5"
            >
              Request the full write-up
            </a>
          </div>
          <p className="mt-12 text-xs tracking-wide text-mist/60">
            {caseMeta.title} · {caseMeta.student} · {caseMeta.year}
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
