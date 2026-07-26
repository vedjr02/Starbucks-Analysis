/**
 * Case figures drawn from Starbucks public disclosures.
 * Primary sources (as of research date Jul 2026):
 * - Starbucks Q2 FY2026 earnings (period ended Mar 29, 2026)
 * - Starbucks FY2025 Form 10-K / Annual Report (year ended Sep 28, 2025)
 * - Starbucks Q4 FY2025 Digital / Loyalty IR Dashboard (as of Sep 28, 2025)
 * - Starbucks company communications on afternoon daypart (2026)
 *
 * Where a chart is labeled "illustrative", it visualizes a disclosed pattern
 * (e.g. afternoon traffic momentum) rather than proprietary POS extracts.
 */

export const caseMeta = {
  title: "Starbucks Sales Analysis",
  student: "Business Analytics Case Study",
  year: "2026",
  course: "Business Analytics",
  duration: "4-week sprint",
  dataset: "FY2025–Q2 FY2026 public filings · IR loyalty dashboard · daypart strategy notes",
  framing:
    "Secondary analysis of Starbucks Corporation investor disclosures — not a proprietary POS extract.",
}

export const sources = [
  {
    label: "Q2 FY2026 Earnings Release",
    detail: "41,129 global stores · U.S. 16,944 · China 7,991 (as of Mar 29, 2026)",
    href: "https://investor.starbucks.com/news/financial-releases/news-details/2026/Starbucks-Reports-Q2-Fiscal-Year-2026-Results/default.aspx",
  },
  {
    label: "FY2025 Form 10-K / Annual Report",
    detail: "$37.18B net revenue · beverages 73% / food 23% / other 4% · company-operated 83% of revenue",
    href: "https://s203.q4cdn.com/326826266/files/doc_financials/2025/q4/SBUX-9-28-2025-10-K-FINAL.pdf",
  },
  {
    label: "Q4 FY2025 Loyalty & Mobile Dashboard",
    detail: "34.2M U.S. 90-day active Rewards · 58% of tender dollars · 31% mobile order mix",
    href: "https://s203.q4cdn.com/326826266/files/doc_financials/2025/q4/Q4-FY25-Digital-IR-Dashboard.pdf",
  },
  {
    label: "Afternoon daypart strategy (2026)",
    detail: "Post-2pm visits rising; strongest growth 3–5pm · Refreshers #2 beverage platform (~$2B)",
    href: "https://about.starbucks.com/press/2026/starbucks-sees-growth-in-afternoon-visits-fueled-by-refreshers-and-new-menu-items/",
  },
]

export const navLinks = [
  { href: "#brief", label: "Brief" },
  { href: "#method", label: "Method" },
  { href: "#insights", label: "Insights" },
  { href: "#levers", label: "Levers" },
  { href: "#defense", label: "Defense" },
  { href: "#actions", label: "Actions" },
]

export const levers = [
  {
    id: "afternoon",
    title: "Win the 3–5 PM reset",
    summary:
      "Daypart menus, digital boards, and staffing toward the disclosed afternoon growth window.",
    lift: 5.0,
    unit: "% U.S. comps target",
  },
  {
    id: "refreshers",
    title: "Scale Refreshers platform",
    summary:
      "Lean into the ~$2B Refreshers franchise (#2 behind espresso) for cold afternoon occasions.",
    lift: 2.0,
    unit: "B platform",
  },
  {
    id: "food",
    title: "Lift afternoon food attach",
    summary:
      "Protein / snackable food + daily replenishment so afternoon food can actually sell through.",
    lift: 23,
    unit: "% food mix today",
  },
  {
    id: "loyalty",
    title: "Deepen Rewards tender",
    summary:
      "Grow beyond 34.2M active U.S. members and defend the 58% Rewards share of tender.",
    lift: 58,
    unit: "% Rewards tender",
  },
]

export const storeClusters = [
  {
    name: "U.S. company-operated",
    stores: 16944,
    signal: "Largest profit pool; Rewards + mobile order densest here",
    play: "Afternoon reset + mobile throughput are the priority levers",
  },
  {
    name: "China company-operated",
    stores: 7991,
    signal: "Second-largest market; competitive cold-beverage dayparts",
    play: "Localize afternoon beverages without diluting brand espresso core",
  },
  {
    name: "North America licensed",
    stores: 7263,
    signal: "Partner-operated; less direct control of labor & food replenishment",
    play: "Playbook + digital menu standards, not heavy corporate labor shifts",
  },
  {
    name: "International licensed",
    stores: 12309,
    signal: "Breadth over depth; format and assortment vary by market",
    play: "Protect hero SKUs; localize cold / tea occasions by region",
  },
]

export const tools = [
  "10-K / 8-K analysis",
  "Excel",
  "Power BI",
  "Python",
  "Tableau",
  "ratio analysis",
  "trend analysis",
  "scenario modeling",
  "segment mix",
  "loyalty KPIs",
]

export const metrics = [
  {
    label: "FY2025 consolidated net revenue",
    value: 37.2,
    suffix: "B",
    decimalPlaces: 1,
    prefix: "$",
  },
  {
    label: "Global stores (Q2 FY2026)",
    value: 41129,
    suffix: "",
    decimalPlaces: 0,
    prefix: "",
  },
  {
    label: "U.S. 90-day active Rewards",
    value: 34.2,
    suffix: "M",
    decimalPlaces: 1,
    prefix: "",
  },
  {
    label: "Rewards share of U.S. tender",
    value: 58,
    suffix: "%",
    decimalPlaces: 0,
    prefix: "",
  },
]

export const methodSteps = [
  {
    step: 1,
    title: "Frame the question",
    body: "Asked what public disclosures reveal about growth levers: daypart opportunity, loyalty economics, and product mix — especially under the “Back to Starbucks” turnaround.",
  },
  {
    step: 2,
    title: "Assemble secondary data",
    body: "Pulled FY2025 10-K / annual report, Q2 FY2026 earnings, the Q4 FY2025 loyalty & mobile IR dashboard, and company daypart communications into a structured metric sheet.",
  },
  {
    step: 3,
    title: "Explore patterns",
    body: "Compared segment revenue (North America vs International), retail mix (beverage / food / other), Rewards penetration, mobile order share, and management’s afternoon traffic narrative.",
  },
  {
    step: 4,
    title: "Recommend & stress-test",
    body: "Translated disclosed strategy into analyst-style actions a student can defend: prioritize afternoon occasions, protect Rewards tender, and raise food attach where replenishment allows.",
  },
]

export const insights = [
  {
    id: "daypart",
    eyebrow: "01 — Daypart",
    title: "Afternoon is the growth gap management is chasing",
    body: "Starbucks has long been a morning brand. Company data shared in 2026 shows visits after 2 PM rising, with the strongest growth between 3–5 PM — and executives call building the afternoon daypart “tremendous upside.” Midday-and-after sales after 11 AM are described as an ~$11B pool.",
    stat: "3–5pm",
    statLabel: "fastest-growing afternoon traffic window (U.S., 2026 company data)",
  },
  {
    id: "loyalty",
    eyebrow: "02 — Loyalty",
    title: "Rewards already own the majority of U.S. spend",
    body: "As of Q4 FY2025, Starbucks reported 34.2 million 90-day active Rewards members in the U.S., with Rewards accounting for 58% of tender dollars in U.S. company-operated stores. Mobile order was 31% of transactions — loyalty and digital are the operating system, not a side program.",
    stat: "58%",
    statLabel: "of U.S. company-operated tender dollars via Rewards",
  },
  {
    id: "mix",
    eyebrow: "03 — Product mix",
    title: "Beverages still dominate — food is the attach lever",
    body: "FY2025 company-operated retail mix was 73% beverages, 23% food, and 4% other. Refreshers are now the #2 beverage platform behind espresso (~$2B franchise), which is exactly how Starbucks is trying to win non-morning occasions.",
    stat: "73%",
    statLabel: "beverage share of company-operated retail sales (FY2025)",
  },
]

/** Illustrative indexed traffic shape aligned with disclosed afternoon momentum (not POS). */
export const daypartSeries = [
  { hour: "6a", revenue: 55, attach: 18 },
  { hour: "7a", revenue: 88, attach: 20 },
  { hour: "8a", revenue: 100, attach: 22 },
  { hour: "9a", revenue: 92, attach: 24 },
  { hour: "10a", revenue: 70, attach: 26 },
  { hour: "11a", revenue: 62, attach: 28 },
  { hour: "12p", revenue: 68, attach: 30 },
  { hour: "1p", revenue: 72, attach: 31 },
  { hour: "2p", revenue: 78, attach: 33 },
  { hour: "3p", revenue: 86, attach: 35 },
  { hour: "4p", revenue: 90, attach: 36 },
  { hour: "5p", revenue: 84, attach: 34 },
  { hour: "6p", revenue: 60, attach: 28 },
  { hour: "7p", revenue: 42, attach: 22 },
]

/** Exact FY2025 company-operated retail mix from the 10-K. */
export const categoryShare = [
  { name: "Beverages", value: 73, fill: "var(--siren)" },
  { name: "Food", value: 23, fill: "var(--latte)" },
  { name: "Other", value: 4, fill: "var(--mist)" },
]

/** FY2025 segment net revenue ($B) from company disclosures. */
export const regionalLift = [
  { region: "N. America", baseline: 27.4, optimized: 27.4 },
  { region: "International", baseline: 7.8, optimized: 7.8 },
  { region: "Channel Dev.", baseline: 1.9, optimized: 1.9 },
]

export const recommendations = [
  {
    title: "Staff and merchandise for the 3–5 PM reset",
    detail:
      "Management says afternoon traffic is rising fastest between 3 and 5 PM. Align labor, digital menu boards, and cold-beverage features to that window — not only the morning peak.",
  },
  {
    title: "Treat Refreshers as a second hero platform",
    detail:
      "Refreshers are disclosed as the #2 beverage platform (~$2B). Build afternoon occasions around cold, customizable drinks instead of discounting espresso to chase volume.",
  },
  {
    title: "Raise food attach where replenishment allows",
    detail:
      "Food is already 23% of company-operated mix, but afternoon attach is constrained when stores are not on daily replenishment. Prioritize protein / snackable items in stores that can keep food fresh.",
  },
  {
    title: "Defend and deepen Rewards economics",
    detail:
      "With 34.2M active U.S. members and 58% of tender, loyalty is the growth flywheel. Focus on same-day return visits and mobile order quality rather than one-off promo spikes.",
  },
]

export const deliverables = [
  "Metric sheet from 10-K / earnings / IR dashboards",
  "Segment & mix dashboard (Power BI / Tableau)",
  "Afternoon opportunity brief (1-pager)",
  "Scenario levers for class critique",
  "Source appendix + assumption log",
]

export const defenseQuestions = [
  {
    q: "Did you analyze Starbucks’ private POS data?",
    a: "No — this is a secondary-data case. All KPIs come from investor disclosures (10-K, earnings, loyalty IR dashboard) and company daypart communications. Charts labeled illustrative show patterns those disclosures describe.",
  },
  {
    q: "Why prioritize afternoon if mornings still look bigger?",
    a: "Because management itself frames afternoon as under-penetrated upside. Public commentary highlights post-2 PM visit growth, especially 3–5 PM, plus Refreshers as the cold-occasion engine.",
  },
  {
    q: "Is 58% Rewards tender the same as 58% of customers?",
    a: "No. It’s share of tender dollars in U.S. company-operated stores — a spend concentration metric. Member count (34.2M 90-day actives) is the separate scale metric.",
  },
  {
    q: "What would change your recommendation?",
    a: "If subsequent earnings showed afternoon traffic stalling, Refreshers growth fading, or Rewards tender falling while comps stayed weak — I’d shift toward morning retention and pricing before daypart expansion.",
  },
]

export const proofs = [
  {
    label: "Global store footprint",
    value: 41129,
    suffix: "",
    detail: "Company-operated + licensed · Q2 FY2026",
  },
  {
    label: "Company-operated revenue mix",
    value: 83,
    suffix: "%",
    detail: "Share of FY2025 consolidated net revenue",
  },
  {
    label: "Mobile order share",
    value: 31,
    suffix: "%",
    detail: "Of U.S. company-operated transactions · Q4 FY2025",
  },
]
