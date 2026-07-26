import type { Metadata } from "next"
import { Geist_Mono, Manrope, Syne } from "next/font/google"
import { Providers } from "@/components/providers"
import "./globals.css"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Starbucks Sales Analysis · Business Analytics Case Study",
  description:
    "A business analytics case study of Starbucks using FY2025–Q2 FY2026 public filings: daypart strategy, Rewards economics, and product mix.",
  openGraph: {
    title: "Starbucks Sales Analysis",
    description:
      "Uncovering what quietly reshapes Starbucks revenue — dayparts, loyalty, and product mix.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${manrope.variable} ${geistMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
