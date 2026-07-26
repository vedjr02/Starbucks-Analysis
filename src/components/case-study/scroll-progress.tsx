"use client"

import { ScrollProgress as MagicScrollProgress } from "@/components/ui/scroll-progress"

export function ScrollProgress() {
  return (
    <MagicScrollProgress className="z-[60] h-[2px] bg-gradient-to-r from-siren via-siren-bright to-latte" />
  )
}
