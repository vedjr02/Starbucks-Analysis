"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { Ripple } from "@/components/ui/ripple"
import { caseMeta } from "@/lib/case-data"

export function ClosingCta() {
  return (
    <section className="section-pad relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(0_117_74_/_0.35),transparent_55%)]" />
      <Ripple
        className="opacity-40"
        mainCircleSize={180}
        mainCircleOpacity={0.18}
        numCircles={6}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <BlurFade inView>
          <p className="eyebrow">Close</p>
          <h2 className="mt-5 font-display text-3xl font-bold text-foam sm:text-5xl lg:text-6xl text-balance">
            Built to stand out in a room full of slide decks
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foam/65 sm:text-lg">
            Clear question. Rigorous method. Visual proof. Actions with owners.
            Present it live — toggle the levers, walk the segments, defend the
            sources.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#levers"
              className="rounded-full bg-siren px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-siren-bright"
            >
              Try the levers
            </a>
            <a
              href="#insights"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foam/85 transition hover:border-white/30 hover:bg-white/5"
            >
              Replay the insights
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
