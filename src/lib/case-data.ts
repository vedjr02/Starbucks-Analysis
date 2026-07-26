export const caseMeta = {
  title: "Starbucks Sales Analysis",
  student: "Business Analytics Case Study",
  year: "2026",
  course: "Business Analytics",
  duration: "4-week sprint",
  dataset: "1.2M+ transactions · 48 stores · 18 months",
}

export const navLinks = [
  { href: "#brief", label: "Brief" },
  { href: "#method", label: "Method" },
  { href: "#insights", label: "Insights" },
  { href: "#levers", label: "Levers" },
  { href: "#actions", label: "Actions" },
]

export const levers = [
  {
    id: "labor",
    title: "Afternoon labor shift",
    summary: "Move 1–2 barista hours into the 2–4 PM window.",
    lift: 3.1,
    unit: "% revenue",
  },
  {
    id: "margin",
    title: "Seasonal margin guardrails",
    summary: "Cap deep discounts on low-margin cold drinks.",
    lift: 2.4,
    unit: "% margin pts",
  },
  {
    id: "loyalty",
    title: "Non-member challenge",
    summary: "Two-visit loyalty challenge for promo cohorts.",
    lift: 1.8,
    unit: "% conversion",
  },
  {
    id: "assortment",
    title: "Localized top-12",
    summary: "Let clusters swap 2–3 tail SKUs by affinity.",
    lift: 1.1,
    unit: "% waste down",
  },
]

export const storeClusters = [
  {
    name: "Urban commute",
    stores: 14,
    signal: "Morning volume high, weak afternoon attach",
    play: "Protect AM staffing; add PM food prompts",
  },
  {
    name: "Suburban family",
    stores: 11,
    signal: "Weekend cold-drink spikes, promo sensitive",
    play: "Bundle food with seasonal, not markdown-only",
  },
  {
    name: "Campus / evening",
    stores: 9,
    signal: "Late daypart loyalty mix, custom espresso",
    play: "Extend barista skill coverage after 3 PM",
  },
  {
    name: "Travel corridor",
    stores: 14,
    signal: "High churn guests, thin basket depth",
    play: "Express menu + attach offers at pickup",
  },
]

export const tools = [
  "SQL",
  "Python",
  "pandas",
  "Tableau",
  "Power BI",
  "Excel",
  "R",
  "cohort analysis",
  "regression",
  "RFM scoring",
]

export const metrics = [
  {
    label: "Transactions analyzed",
    value: 1.2,
    suffix: "M+",
    decimalPlaces: 1,
  },
  {
    label: "Revenue lift identified",
    value: 8.4,
    suffix: "%",
    decimalPlaces: 1,
  },
  {
    label: "Loyalty AOV multiple",
    value: 2.3,
    suffix: "×",
    decimalPlaces: 1,
  },
  {
    label: "Stores in sample",
    value: 48,
    suffix: "",
    decimalPlaces: 0,
  },
]

export const methodSteps = [
  {
    step: 1,
    title: "Frame the question",
    body: "Mapped stakeholder goals into three measurable questions: what drives revenue by daypart, which products underperform after seasonality, and how loyalty changes basket composition.",
  },
  {
    step: 2,
    title: "Clean & model",
    body: "Joined POS, product, and loyalty tables. Removed voids and test SKUs, standardized dayparts, and built a dimensional model for store × product × hour analysis.",
  },
  {
    step: 3,
    title: "Explore patterns",
    body: "Used cohort, Pareto, and time-series views to isolate seasonality from structural shifts — separating weather spikes from menu and promo effects.",
  },
  {
    step: 4,
    title: "Validate & recommend",
    body: "Stress-tested findings with holdout weeks and store clusters, then translated statistical signals into inventory, staffing, and promo actions managers can actually run.",
  },
]

export const insights = [
  {
    id: "daypart",
    eyebrow: "01 — Daypart",
    title: "Afternoon is the silent profit engine",
    body: "Morning gets the brand spotlight, but 2–5 PM delivered 34% of beverage revenue with higher attach rates on food. Understaffing in this window was leaving money on the counter.",
    stat: "34%",
    statLabel: "of beverage revenue · 2–5 PM",
  },
  {
    id: "loyalty",
    eyebrow: "02 — Loyalty",
    title: "Members don’t just visit more — they buy differently",
    body: "Loyalty guests showed 2.3× average order value and shifted mix toward customized espresso drinks. Non-members clustered in promo-led cold beverages with thin margins.",
    stat: "2.3×",
    statLabel: "AOV vs non-members",
  },
  {
    id: "mix",
    eyebrow: "03 — Product mix",
    title: "A short list of SKUs carries the P&L",
    body: "The top 12 SKUs drove 61% of sales. Seasonal Frappuccinos spiked volume but diluted margin when paired with deep discounts — a classic volume-over-value trap.",
    stat: "61%",
    statLabel: "sales from top 12 SKUs",
  },
]

export const daypartSeries = [
  { hour: "6a", revenue: 42, attach: 18 },
  { hour: "7a", revenue: 78, attach: 22 },
  { hour: "8a", revenue: 96, attach: 24 },
  { hour: "9a", revenue: 88, attach: 26 },
  { hour: "10a", revenue: 64, attach: 28 },
  { hour: "11a", revenue: 58, attach: 31 },
  { hour: "12p", revenue: 72, attach: 36 },
  { hour: "1p", revenue: 80, attach: 38 },
  { hour: "2p", revenue: 94, attach: 41 },
  { hour: "3p", revenue: 100, attach: 44 },
  { hour: "4p", revenue: 92, attach: 40 },
  { hour: "5p", revenue: 70, attach: 33 },
  { hour: "6p", revenue: 48, attach: 27 },
  { hour: "7p", revenue: 36, attach: 21 },
]

export const categoryShare = [
  { name: "Espresso", value: 38, fill: "var(--siren)" },
  { name: "Cold brew", value: 22, fill: "var(--mist)" },
  { name: "Frappuccino", value: 18, fill: "var(--latte)" },
  { name: "Tea & other", value: 12, fill: "var(--foam)" },
  { name: "Food attach", value: 10, fill: "var(--forest-mid)" },
]

export const regionalLift = [
  { region: "West", baseline: 100, optimized: 109 },
  { region: "Southwest", baseline: 100, optimized: 112 },
  { region: "Midwest", baseline: 100, optimized: 106 },
  { region: "Northeast", baseline: 100, optimized: 108 },
  { region: "Southeast", baseline: 100, optimized: 111 },
]

export const recommendations = [
  {
    title: "Rebalance afternoon labor",
    detail:
      "Shift 1–2 barista hours from the 7–9 AM peak into 2–4 PM at high-attach stores. Modeled +3.1% same-store beverage revenue with no net labor increase.",
  },
  {
    title: "Protect margin on seasonal cold drinks",
    detail:
      "Cap deep discounts on Frappuccino SKUs below the 40th margin percentile. Pair promotions with food attach offers instead of pure beverage markdowns.",
  },
  {
    title: "Activate non-member journeys",
    detail:
      "Target the promo-led cold-beverage cohort with a two-visit loyalty challenge. Simulation suggested a 14% conversion lift in the first 30 days.",
  },
  {
    title: "Localize the top-12 set",
    detail:
      "Keep the national hero SKUs, but let store clusters swap 2–3 tail items based on regional affinity — cutting waste without hurting perceived variety.",
  },
]

export const deliverables = [
  "Executive dashboard (Tableau)",
  "SQL dimensional model",
  "Python notebook + reproducible pipeline",
  "Store playbook (1-pager)",
  "Sensitivity analysis appendix",
]
