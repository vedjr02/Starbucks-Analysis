"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { caseMeta, navLinks } from "@/lib/case-data"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-pad flex items-center justify-between py-4 backdrop-blur-md bg-espresso/55 border-b border-white/5">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-display text-lg font-bold tracking-tight text-foam sm:text-xl">
            Starbucks
          </span>
          <span className="hidden text-xs tracking-wide text-mist/80 sm:inline">
            {caseMeta.student}
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:gap-7 xl:gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foam/70 transition-colors hover:text-foam"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#actions"
            className="rounded-full bg-siren px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-siren-bright"
          >
            View actions
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-foam md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "section-pad border-b border-white/5 bg-espresso/95 backdrop-blur-lg md:hidden",
          open ? "block py-4" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-foam/85"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
