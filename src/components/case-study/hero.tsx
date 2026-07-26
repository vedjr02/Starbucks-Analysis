"use client"

import Image from "next/image"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDownRight } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { caseMeta } from "@/lib/case-data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    },
    { scope: rootRef }
  )

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative isolate min-h-[100svh] overflow-hidden grain"
    >
      <div ref={imageRef} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=2400&q=80"
          alt="Warm cafe interior with coffee preparation — visual atmosphere for the Starbucks sales analysis"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/55 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-espresso/25 to-transparent" />
      </div>

      <div className="section-pad relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 lg:pb-24">
        <div className="mb-8 inline-flex max-w-fit items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-siren-bright" />
          <AnimatedShinyText className="mx-0 text-xs text-foam/70 dark:text-foam/70">
            {caseMeta.course} · {caseMeta.year} · {caseMeta.duration}
          </AnimatedShinyText>
        </div>

        <p className="font-display text-5xl font-extrabold tracking-tight text-foam sm:text-7xl md:text-8xl lg:text-9xl">
          Starbucks
        </p>

        <BlurFade delay={0.15} direction="up" offset={12} blur="8px">
          <h1 className="mt-4 max-w-3xl font-display text-2xl font-semibold leading-tight text-foam/95 sm:text-3xl md:text-4xl lg:text-5xl text-balance">
            Sales intelligence hidden inside every cup
          </h1>
        </BlurFade>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-foam/70 sm:text-lg">
          A business analytics case study built from Starbucks public filings —
          daypart strategy, Rewards economics, and product mix — so every claim
          can be traced to a disclosure.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#insights"
            className="inline-flex items-center gap-2 rounded-full bg-siren px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-siren-bright"
          >
            Explore the findings
            <ArrowDownRight className="size-4" />
          </a>
          <a
            href="#method"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foam/85 transition hover:border-white/30 hover:bg-white/5"
          >
            See the method
          </a>
        </div>

        <p className="mt-12 text-xs tracking-wide text-mist/70">
          {caseMeta.dataset}
        </p>
      </div>
    </section>
  )
}
