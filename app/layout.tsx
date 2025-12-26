import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "lev.dev",
  description: "Levsah's Personal Portfolio Site",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfairDisplay.variable} ${cormorantGaramond.variable} font-serif bg-black text-white min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
