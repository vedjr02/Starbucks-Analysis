"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { metrics } from "@/lib/case-data"

export function MetricsSection() {
  return (
    <section className="section-pad border-y border-white/5 bg-forest/35 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-xs uppercase tracking-[0.22em] text-mist/70">
          Disclosed company metrics · FY2025 / Q2 FY2026
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <BlurFade key={metric.label} delay={0.08 * i} inView>
              <div className="space-y-2">
                <p className="font-display text-4xl font-bold tracking-tight text-foam sm:text-5xl">
                  {metric.prefix ? (
                    <span className="text-siren-bright">{metric.prefix}</span>
                  ) : null}
                  <NumberTicker
                    value={metric.value}
                    decimalPlaces={metric.decimalPlaces}
                    className="text-foam dark:text-foam"
                  />
                  <span className="text-siren-bright">{metric.suffix}</span>
                </p>
                <p className="text-sm text-mist/80">{metric.label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
