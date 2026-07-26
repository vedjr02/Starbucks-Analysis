"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BlurFade } from "@/components/ui/blur-fade"
import { storeClusters } from "@/lib/case-data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function ClustersSection() {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      gsap.from(".cluster-row", {
        opacity: 0,
        y: 28,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      })
    },
    { scope: rootRef }
  )

  return (
    <section
      id="clusters"
      ref={rootRef}
      className="section-pad border-y border-white/5 bg-forest/30 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Store clusters</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foam sm:text-4xl text-balance">
            One playbook never fits 41,000+ coffeehouses
          </h2>
          <p className="mt-4 max-w-2xl text-foam/65">
            Q2 FY2026 store counts by operating model. Recommendations change
            when you move from U.S. company-operated denseness to licensed
            international breadth.
          </p>
        </BlurFade>

        <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
          {storeClusters.map((cluster) => (
            <article
              key={cluster.name}
              className="cluster-row grid gap-4 py-7 md:grid-cols-[1.1fr_0.7fr_1.2fr] md:items-start md:gap-8"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-foam">
                  {cluster.name}
                </h3>
                <p className="mt-1 text-sm text-mist">
                  {cluster.stores.toLocaleString()} stores
                </p>
              </div>
              <p className="text-sm leading-relaxed text-foam/70 md:pt-1">
                {cluster.signal}
              </p>
              <p className="border-l border-siren/50 pl-4 text-sm leading-relaxed text-foam/85 md:border-l-0 md:pl-0 md:pt-1">
                <span className="mr-2 text-siren-bright">Play →</span>
                {cluster.play}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
