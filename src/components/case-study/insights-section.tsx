"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  categoryShare,
  daypartSeries,
  insights,
  regionalLift,
} from "@/lib/case-data"

const tooltipStyle = {
  background: "#13241e",
  border: "1px solid rgba(143,185,165,0.2)",
  borderRadius: "12px",
  color: "#e6efe9",
}

export function InsightsSection() {
  return (
    <section id="insights" className="section-pad relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BlurFade inView>
          <p className="eyebrow">Insights</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold text-foam sm:text-4xl lg:text-5xl text-balance">
            Three findings that changed the recommendation
          </h2>
        </BlurFade>

        <div className="mt-16 space-y-24">
          {/* Insight 1 + daypart chart */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <BlurFade inView>
              <InsightCopy insight={insights[0]} />
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <figure className="space-y-4">
                <figcaption className="text-sm text-mist">
                  Illustrative daypart demand shape (indexed)
                </figcaption>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={daypartSeries}>
                      <defs>
                        <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#1aa86a" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="#1aa86a" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="rgba(143,185,165,0.12)" vertical={false} />
                      <XAxis
                        dataKey="hour"
                        tick={{ fill: "#8fb9a5", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#8fb9a5", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue index"
                        stroke="#1aa86a"
                        fill="url(#revFill)"
                        strokeWidth={2.5}
                      />
                      <Area
                        type="monotone"
                        dataKey="attach"
                        name="Food attach %"
                        stroke="#d4b896"
                        fill="transparent"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-mist/60">
                  Illustrative curve aligned with disclosed afternoon momentum
                  (strongest growth 3–5 PM) · not proprietary POS
                </p>
              </figure>
            </BlurFade>
          </div>

          {/* Insight 2 + category mix */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <BlurFade inView className="order-2 lg:order-1">
              <figure className="space-y-4">
                <figcaption className="text-sm text-mist">
                  FY2025 company-operated retail sales mix
                </figcaption>
                <div className="flex h-72 items-center gap-6">
                  <ResponsiveContainer width="55%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryShare}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={58}
                        outerRadius={90}
                        paddingAngle={3}
                        stroke="none"
                      >
                        {categoryShare.map((entry) => (
                          <Cell key={entry.name} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                  <ul className="space-y-2 text-sm">
                    {categoryShare.map((item) => (
                      <li key={item.name} className="flex items-center gap-2 text-foam/80">
                        <span
                          className="size-2.5 rounded-full"
                          style={{ background: item.fill }}
                        />
                        {item.name}
                        <span className="text-mist">{item.value}%</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </figure>
            </BlurFade>
            <BlurFade delay={0.1} inView className="order-1 lg:order-2">
              <InsightCopy insight={insights[1]} />
            </BlurFade>
          </div>

          {/* Insight 3 + regional lift */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
            <BlurFade inView>
              <InsightCopy insight={insights[2]} />
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <figure className="space-y-4">
                <figcaption className="text-sm text-mist">
                  FY2025 net revenue by segment ($B)
                </figcaption>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionalLift} barGap={6}>
                      <CartesianGrid stroke="rgba(143,185,165,0.12)" vertical={false} />
                      <XAxis
                        dataKey="region"
                        tick={{ fill: "#8fb9a5", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#8fb9a5", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Bar
                        dataKey="baseline"
                        name="Net revenue ($B)"
                        fill="#1aa86a"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-mist/60">
                  Source: Starbucks FY2025 segment disclosures · $ billions
                </p>
              </figure>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}

function InsightCopy({
  insight,
}: {
  insight: (typeof insights)[number]
}) {
  return (
    <div>
      <p className="eyebrow">{insight.eyebrow}</p>
      <h3 className="mt-4 font-display text-2xl font-bold text-foam sm:text-3xl text-balance">
        {insight.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-foam/70 sm:text-lg">
        {insight.body}
      </p>
      <p className="mt-8 font-display text-5xl font-bold tracking-tight text-siren-bright sm:text-6xl">
        {insight.stat}
      </p>
      <p className="mt-2 text-sm text-mist">{insight.statLabel}</p>
    </div>
  )
}
