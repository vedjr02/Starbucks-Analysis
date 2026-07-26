import { Marquee } from "@/components/ui/marquee"
import { tools } from "@/lib/case-data"

export function ToolsMarquee() {
  return (
    <section
      aria-label="Analytics toolkit"
      className="border-y border-white/5 bg-forest/40 py-4"
    >
      <Marquee pauseOnHover className="[--duration:35s] [--gap:2.5rem]">
        {tools.map((tool) => (
          <span
            key={tool}
            className="font-display text-sm uppercase tracking-[0.22em] text-mist/80"
          >
            {tool}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
