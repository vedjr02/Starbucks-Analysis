"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { defenseQuestions } from "@/lib/case-data"
import { cn } from "@/lib/utils"

export function DefenseSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="defense" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Oral defense</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foam sm:text-4xl lg:text-5xl text-balance">
            Questions a sharp professor will ask
          </h2>
          <p className="mt-4 max-w-2xl text-foam/65">
            Pre-loaded answers for critique — so you sound prepared, not
            rehearsed.
          </p>
        </BlurFade>

        <div className="mt-12 divide-y divide-white/8 border-y border-white/8">
          {defenseQuestions.map((item, index) => {
            const isOpen = open === index
            return (
              <BlurFade key={item.q} delay={0.05 * index} inView>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="font-display text-lg font-semibold text-foam sm:text-xl">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-1 size-5 shrink-0 text-mist transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 max-w-3xl text-base leading-relaxed text-foam/65">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
