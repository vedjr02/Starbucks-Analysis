import { BriefSection } from "@/components/case-study/brief-section"
import { ClosingCta } from "@/components/case-study/closing-cta"
import { ClustersSection } from "@/components/case-study/clusters-section"
import { DefenseSection } from "@/components/case-study/defense-section"
import { Hero } from "@/components/case-study/hero"
import { InsightFeedSection } from "@/components/case-study/insight-feed-section"
import { InsightsSection } from "@/components/case-study/insights-section"
import { LeversSection } from "@/components/case-study/levers-section"
import { MetricsSection } from "@/components/case-study/metrics-section"
import { MethodologySection } from "@/components/case-study/methodology-section"
import { NarrativeReveal } from "@/components/case-study/narrative-reveal"
import { PipelineSection } from "@/components/case-study/pipeline-section"
import { ProofSection } from "@/components/case-study/proof-section"
import { RecommendationsSection } from "@/components/case-study/recommendations-section"
import { ScrollProgress } from "@/components/case-study/scroll-progress"
import { SiteNav } from "@/components/case-study/site-nav"
import { ToolsMarquee } from "@/components/case-study/tools-marquee"
import { sources } from "@/lib/case-data"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <ToolsMarquee />
        <BriefSection />
        <NarrativeReveal />
        <PipelineSection />
        <MethodologySection />
        <MetricsSection />
        <InsightFeedSection />
        <InsightsSection />
        <ProofSection />
        <LeversSection />
        <ClustersSection />
        <RecommendationsSection />
        <DefenseSection />
        <ClosingCta />
      </main>
      <footer className="section-pad border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl space-y-6">
          <p className="text-xs uppercase tracking-[0.22em] text-mist/70">
            Sources
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sources.map((source) => (
              <li key={source.label} className="text-sm">
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foam/90 underline-offset-4 hover:text-siren-bright hover:underline"
                >
                  {source.label}
                </a>
                <p className="mt-1 text-mist/70">{source.detail}</p>
              </li>
            ))}
          </ul>
          <p className="pt-4 text-center text-xs text-mist/50">
            Independent academic case study using publicly available investor
            materials. Not affiliated with or endorsed by Starbucks Corporation.
            Illustrative charts visualize disclosed patterns and are not
            proprietary POS extracts.
          </p>
        </div>
      </footer>
    </>
  )
}
