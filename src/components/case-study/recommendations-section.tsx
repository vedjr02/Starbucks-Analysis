"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { deliverables, recommendations } from "@/lib/case-data"

export function RecommendationsSection() {
  return (
    <section id="actions" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Actions</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foam sm:text-4xl lg:text-5xl text-balance">
            Recommendations a district manager can argue from the filings
          </h2>
        </BlurFade>

        <ol className="mt-16 divide-y divide-white/8 border-y border-white/8">
          {recommendations.map((item, index) => (
            <BlurFade key={item.title} delay={0.06 * index} inView>
              <li className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
                <span className="font-display text-3xl font-bold text-siren/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-foam sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-foam/65 sm:text-lg">
                    {item.detail}
                  </p>
                </div>
              </li>
            </BlurFade>
          ))}
        </ol>

        <BlurFade delay={0.1} inView className="mt-16">
          <p className="eyebrow">Deliverables</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {deliverables.map((item) => (
              <li key={item} className="text-foam/80">
                <span className="mr-2 text-siren-bright">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  )
}
