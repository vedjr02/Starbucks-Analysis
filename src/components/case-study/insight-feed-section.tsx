"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { AnimatedList } from "@/components/ui/animated-list"
import { cn } from "@/lib/utils"

const feed = [
  {
    title: "Afternoon traffic accelerating",
    body: "Company: visits after 2 PM rising; strongest growth between 3–5 PM",
    tag: "Daypart",
    color: "bg-siren",
  },
  {
    title: "Rewards dominate U.S. tender",
    body: "34.2M 90-day actives · 58% of company-operated tender dollars",
    tag: "Loyalty",
    color: "bg-latte",
  },
  {
    title: "Beverage-heavy mix",
    body: "FY2025 company-operated mix: 73% beverages · 23% food · 4% other",
    tag: "Mix",
    color: "bg-mist",
  },
  {
    title: "Refreshers as #2 platform",
    body: "Cold Refreshers franchise ~$2B — second only to espresso",
    tag: "Product",
    color: "bg-siren-bright",
  },
  {
    title: "Mobile is structural",
    body: "31% of U.S. company-operated transactions via mobile order",
    tag: "Digital",
    color: "bg-forest-mid",
  },
]

export function InsightFeedSection() {
  return (
    <section className="section-pad border-y border-white/5 bg-forest/25 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        <BlurFade inView>
          <p className="eyebrow">Signal feed</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-foam sm:text-4xl text-balance">
            What kept lighting up in the disclosures
          </h2>
          <p className="mt-4 max-w-md text-foam/65">
            A reel of the public signals that shaped the brief — useful when a
            professor asks “what did the filings actually say?”
          </p>
        </BlurFade>

        <BlurFade delay={0.1} inView>
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/8 bg-espresso/60 p-4">
            <AnimatedList delay={1400} className="gap-3">
              {feed.map((item) => (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border border-white/8 bg-forest/80 p-4"
                  )}
                >
                  <span
                    className={cn("mt-1 size-2.5 shrink-0 rounded-full", item.color)}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-display text-sm font-semibold text-foam">
                        {item.title}
                      </p>
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wide text-mist">
                        {item.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foam/65">{item.body}</p>
                  </div>
                </div>
              ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso to-transparent" />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
