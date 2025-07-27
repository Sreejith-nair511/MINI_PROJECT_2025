"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Brain, BookOpen, Target, Timer, TrendingUp } from "lucide-react"

export default function SplashScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const steps = [
    { icon: Brain, text: "StudyMate", color: "from-purple-500 to-pink-500" },
    { icon: BookOpen, text: "Smart Notes", color: "from-blue-500 to-cyan-500" },
    { icon: Timer, text: "Focus Timer", color: "from-orange-500 to-red-500" },
    { icon: Target, text: "Goal Tracking", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, text: "Progress Analytics", color: "from-purple-500 to-pink-500" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            router.push("/onboarding")
          }, 1000)
          return prev
        }
      })
    }, 800)

    return () => clearInterval(interval)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Floating orbs - optimized for mobile */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 md:w-64 md:h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-20 h-20 md:w-48 md:h-48 bg-pink-500/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="text-center z-10 w-full max-w-sm px-4">
        {/* Main Logo Animation */}
        <div className="relative mb-6 md:mb-8">
          <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-bounce shadow-2xl">
            <Brain className="h-10 w-10 md:h-16 md:w-16 text-white animate-pulse" />
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
          <div
            className="absolute inset-0 w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-10"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* App Name */}
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          StudyMate
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 animate-fade-in-delay">Your AI Study Companion</p>

        {/* Feature Icons Animation - Mobile Optimized */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-6 md:mb-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = index <= currentStep
            const isCurrent = index === currentStep

            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isActive ? "scale-100 opacity-100" : "scale-75 opacity-30"
                }`}
              >
                <div
                  className={`w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center transition-all duration-500 ${
                    isCurrent ? "animate-pulse shadow-lg" : ""
                  }`}
                >
                  <Icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                </div>

                {isCurrent && (
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} animate-ping opacity-30`}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Current Feature Text */}
        <div className="h-6 md:h-10 mb-6 md:mb-8">
          <p className="text-white text-base md:text-xl font-medium animate-fade-in">{steps[currentStep]?.text}</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-1 md:gap-2 mb-4 md:mb-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/10 rounded-full h-1 md:h-2 mb-4 md:mb-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-800 ease-out"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Made by text */}
        <p className="text-gray-400 text-xs md:text-sm animate-fade-in-delay">
          Made with ❤️ by{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            5C Student
          </span>
        </p>
      </div>
    </div>
  )
}
