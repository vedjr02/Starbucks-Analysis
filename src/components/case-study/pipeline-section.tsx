"use client"

import { Database, LineChart, Sparkles, Table2 } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

export function PipelineSection() {
  return (
    <section className="section-pad relative overflow-hidden py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlurFade inView>
          <p className="eyebrow">Pipeline</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foam sm:text-4xl text-balance">
            From raw POS noise to decisions you can defend
          </h2>
          <p className="mt-4 max-w-lg text-foam/65">
            Every insight on this page traces back to a reproducible path —
            tables joined, dayparts standardized, cohorts stress-tested —
            so the critique can challenge method, not magic.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foam/75">
            <li className="flex gap-3">
              <span className="text-siren-bright">01</span>
              Ingest 10-K, earnings, loyalty IR dashboards
            </li>
            <li className="flex gap-3">
              <span className="text-siren-bright">02</span>
              Normalize KPIs into a comparable metric sheet
            </li>
            <li className="flex gap-3">
              <span className="text-siren-bright">03</span>
              Explore segments, mix, Rewards, and daypart narrative
            </li>
            <li className="flex gap-3">
              <span className="text-siren-bright">04</span>
              Recommend actions tied to named sources
            </li>
          </ul>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="relative mx-auto flex h-[340px] w-full max-w-md items-center justify-center sm:h-[400px]">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-mist">
              Analytics loop
            </span>
            <OrbitingCircles radius={120} iconSize={42} speed={0.6}>
              <IconBubble>
                <Database className="size-5 text-foam" />
              </IconBubble>
              <IconBubble>
                <Table2 className="size-5 text-foam" />
              </IconBubble>
              <IconBubble>
                <LineChart className="size-5 text-foam" />
              </IconBubble>
              <IconBubble>
                <Sparkles className="size-5 text-foam" />
              </IconBubble>
            </OrbitingCircles>
            <OrbitingCircles
              radius={190}
              iconSize={36}
              speed={0.35}
              reverse
              className="hidden sm:flex"
            >
              <MiniLabel>SQL</MiniLabel>
              <MiniLabel>Python</MiniLabel>
              <MiniLabel>Tableau</MiniLabel>
              <MiniLabel>Holdout</MiniLabel>
            </OrbitingCircles>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

function IconBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-10 items-center justify-center rounded-full border border-siren/40 bg-forest shadow-[0_0_24px_rgb(0_117_74_/_0.35)]">
      {children}
    </div>
  )
}

function MiniLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-espresso/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-mist">
      {children}
    </div>
  )
}
