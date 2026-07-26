"use client"

import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"
import { NumberTicker } from "@/components/ui/number-ticker"

const proofs = [
  {
    label: "Holdout accuracy",
    value: 91,
    suffix: "%",
    detail: "Directionally correct on unseen weeks",
  },
  {
    label: "Stores validated",
    value: 12,
    suffix: "",
    detail: "Pilot cluster across two regions",
  },
  {
    label: "Weeks modeled",
    value: 78,
    suffix: "",
    detail: "Seasonality-aware baseline window",
  },
]

export function ProofSection() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Validation</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold text-foam sm:text-4xl text-balance">
            Recommendations survived a holdout test
          </h2>
        </BlurFade>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {proofs.map((item, i) => (
            <BlurFade key={item.label} delay={0.08 * i} inView>
              <div className="relative overflow-hidden rounded-2xl bg-forest/70 p-6 sm:p-7">
                <ShineBorder
                  className="pointer-events-none absolute inset-0 rounded-[inherit]"
                  shineColor={["#00754a", "#1aa86a", "#d4b896"]}
                  borderWidth={1}
                  duration={12}
                />
                <p className="relative font-display text-4xl font-bold tracking-tight text-foam">
                  <NumberTicker
                    value={item.value}
                    className="text-foam dark:text-foam"
                  />
                  <span className="text-siren-bright">{item.suffix}</span>
                </p>
                <p className="relative mt-2 font-display text-sm font-semibold text-foam/90">
                  {item.label}
                </p>
                <p className="relative mt-1 text-sm text-mist/75">{item.detail}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
