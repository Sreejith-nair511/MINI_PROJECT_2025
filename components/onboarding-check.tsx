"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useApp } from "./providers"

export function OnboardingCheck({ children }: { children: React.ReactNode }) {
  const { user } = useApp()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Allow splash and onboarding pages without redirect
    if (pathname === "/splash" || pathname === "/onboarding") {
      return
    }

    // If user is not onboarded and not on splash/onboarding, redirect to splash
    if (!user?.isOnboarded) {
      router.push("/splash")
    }
  }, [user, router, pathname])

  // Show loading or redirect for non-onboarded users
  if (!user?.isOnboarded && pathname !== "/splash" && pathname !== "/onboarding") {
    return null
  }

  return <>{children}</>
}
