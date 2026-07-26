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
      <footer className="section-pad border-t border-white/5 py-8 text-center text-xs text-mist/50">
        Independent academic case study for coursework. Not affiliated with or
        endorsed by Starbucks Corporation.
      </footer>
    </>
  )
}
