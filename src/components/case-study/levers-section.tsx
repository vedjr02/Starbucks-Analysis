"use client"

import { useMemo, useState } from "react"
import { BlurFade } from "@/components/ui/blur-fade"
import { MagicCard } from "@/components/ui/magic-card"
import { levers } from "@/lib/case-data"
import { cn } from "@/lib/utils"

export function LeversSection() {
  const [active, setActive] = useState<string[]>([
    "afternoon",
    "refreshers",
    "food",
    "loyalty",
  ])

  const selected = useMemo(
    () => levers.filter((lever) => active.includes(lever.id)),
    [active]
  )

  const toggle = (id: string) => {
    setActive((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="levers" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Strategic levers</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foam sm:text-4xl lg:text-5xl text-balance">
            Toggle the plays management is already signaling
          </h2>
          <p className="mt-4 max-w-2xl text-foam/65">
            These are not invented POS lifts — they are decision levers grounded
            in disclosed KPIs and the afternoon / Rewards strategy. Toggle them
            to structure a class critique.
          </p>
        </BlurFade>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 rounded-2xl border border-white/8 bg-forest/50 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-mist">
              Priorities selected
            </p>
            <p className="mt-2 font-display text-5xl font-bold tracking-tight text-siren-bright">
              {selected.length}
              <span className="text-2xl text-foam/50"> / {levers.length}</span>
            </p>
          </div>
          <p className="max-w-sm text-sm text-foam/60">
            {selected.length === 0
              ? "No levers selected — open the board for discussion."
              : selected.map((item) => item.title).join(" · ")}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {levers.map((lever, i) => {
            const isOn = active.includes(lever.id)
            return (
              <BlurFade key={lever.id} delay={0.06 * i} inView>
                <button
                  type="button"
                  onClick={() => toggle(lever.id)}
                  aria-pressed={isOn}
                  className="w-full text-left"
                >
                  <MagicCard
                    className={cn(
                      "rounded-2xl border p-6 transition",
                      isOn
                        ? "border-siren/50 bg-forest/80"
                        : "border-white/8 bg-forest/40 opacity-80"
                    )}
                    gradientFrom="#00754a"
                    gradientTo="#d4b896"
                    gradientColor="#1e3d32"
                    gradientOpacity={0.55}
                    gradientSize={260}
                  >
                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-lg font-semibold text-foam">
                          {lever.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-foam/65">
                          {lever.summary}
                        </p>
                        <p className="mt-4 text-sm text-mist">
                          Anchor KPI: {lever.lift}
                          {lever.unit.startsWith("%") || lever.unit.startsWith("B")
                            ? ""
                            : " "}
                          {lever.unit}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                          isOn
                            ? "bg-siren text-primary-foreground"
                            : "bg-white/10 text-foam/70"
                        )}
                      >
                        {isOn ? "On" : "Off"}
                      </span>
                    </div>
                  </MagicCard>
                </button>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
