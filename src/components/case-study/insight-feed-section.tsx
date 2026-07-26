"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { AnimatedList } from "@/components/ui/animated-list"
import { cn } from "@/lib/utils"

const feed = [
  {
    title: "Afternoon attach spike",
    body: "Food attach +6.2 pts between 2–4 PM vs morning baseline",
    tag: "Daypart",
    color: "bg-siren",
  },
  {
    title: "Loyalty mix shift",
    body: "Members over-index on customized espresso; non-members on promo cold",
    tag: "Cohort",
    color: "bg-latte",
  },
  {
    title: "SKU concentration risk",
    body: "Top 12 SKUs = 61% sales — assortment tail is mostly noise",
    tag: "Pareto",
    color: "bg-mist",
  },
  {
    title: "Promo margin trap",
    body: "Deep Frappuccino discounts lift volume, compress contribution",
    tag: "Margin",
    color: "bg-siren-bright",
  },
  {
    title: "Holdout confirmed",
    body: "Directionally correct on 91% of unseen pilot weeks",
    tag: "Validation",
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
            What kept lighting up during exploration
          </h2>
          <p className="mt-4 max-w-md text-foam/65">
            A living reel of the signals that survived cleaning — useful when a
            professor asks “what did you actually notice in the data?”
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
