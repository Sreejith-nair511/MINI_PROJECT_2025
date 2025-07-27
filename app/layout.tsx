import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Providers } from "@/components/providers"
import { OnboardingCheck } from "@/components/onboarding-check"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StudyMate - Student Productivity App",
  description: "Your ultimate study companion with Pomodoro timer, notes, and progress tracking",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#7c3aed",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <OnboardingCheck>
            <AnimatedBackground />
            <div className="min-h-screen relative">
              <Sidebar />
              <main className="lg:ml-64 min-h-screen">{children}</main>
            </div>
          </OnboardingCheck>
        </Providers>
      </body>
    </html>
  )
}
