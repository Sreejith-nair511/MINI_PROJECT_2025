"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Brain, Sparkles, BookOpen, Target, Timer, Mail, User, ArrowRight, ArrowLeft } from "lucide-react"
import { useApp } from "@/components/providers"

export default function OnboardingPage() {
  const [formData, setFormData] = useState({ name: "", email: "" })
  const [step, setStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { setUser, theme } = useApp()
  const router = useRouter()

  const handleNext = () => {
    if (step === 0 && !formData.name.trim()) return
    if (step === 1 && !formData.email.trim()) return

    if (step < 2) {
      setStep(step + 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return

    setIsAnimating(true)
    setTimeout(() => {
      setUser({ name: formData.name.trim(), email: formData.email.trim(), isOnboarded: true })
      router.push("/")
    }, 2000)
  }

  const features = [
    {
      icon: Timer,
      title: "Pomodoro Timer",
      description: "Stay focused with proven study techniques",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BookOpen,
      title: "Smart Notes",
      description: "Organize your thoughts and ideas efficiently",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and achieve your academic goals",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Sparkles,
      title: "Progress Analytics",
      description: "Track your learning journey with insights",
      color: "from-purple-500 to-pink-500",
    },
  ]

  if (isAnimating) {
    return (
      <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient} p-4`}>
        <div className="text-center">
          <div className="relative mb-6 md:mb-8">
            <div className="w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-pulse">
              <Brain className="h-10 w-10 md:h-16 md:w-16 text-white animate-bounce" />
            </div>
            <div className="absolute inset-0 w-20 h-20 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 animate-fade-in">
            Welcome, {formData.name}! 🎉
          </h2>
          <p className="text-gray-300 animate-fade-in-delay px-4 text-sm md:text-base">
            Setting up your personalized study space...
          </p>
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="flex space-x-1 md:space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 md:w-3 md:h-3 bg-purple-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.gradient} flex items-center justify-center p-4`}>
      <div className="w-full max-w-sm md:max-w-4xl">
        {step === 0 && (
          <div className="text-center animate-fade-in">
            <div className="mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-bounce">
                <Brain className="h-8 w-8 md:h-12 md:w-12 text-white" />
              </div>
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                StudyMate
              </h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 px-4">
                Your AI-powered study companion for Indian students
              </p>
            </div>

            <Card className="glass-card border-0 mx-auto">
              <CardContent className="p-4 md:p-8">
                <h2 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">
                  नमस्ते! Let's get started 🙏
                </h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm md:text-lg">
                      What should we call you?
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name (e.g., Arjun, Priya, Rahul)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="pl-10 md:pl-12 glass-card border-white/20 text-white placeholder:text-gray-400 h-12 md:h-14 text-sm md:text-lg"
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-12 md:h-14 text-sm md:text-lg font-medium touch-manipulation"
                    disabled={!formData.name.trim()}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 1 && (
          <div className="animate-slide-in">
            <div className="text-center mb-4 md:mb-8">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Nice to meet you, {formData.name}! 👋
              </h2>
              <p className="text-base md:text-xl text-gray-300 px-4">We need your Gmail to save your progress</p>
            </div>

            <Card className="glass-card border-0 max-w-md mx-auto">
              <CardContent className="p-4 md:p-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleNext()
                  }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm md:text-lg">
                      Your Gmail Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 md:h-5 md:w-5" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 md:pl-12 glass-card border-white/20 text-white placeholder:text-gray-400 h-12 md:h-14 text-sm md:text-lg"
                        required
                      />
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm">We'll use this to sync your data across devices</p>
                  </div>

                  <div className="flex gap-2 md:gap-3">
                    <Button
                      type="button"
                      onClick={() => setStep(0)}
                      variant="ghost"
                      className="flex-1 glass-button h-12 md:h-14 text-sm md:text-lg touch-manipulation"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-12 md:h-14 text-sm md:text-lg font-medium touch-manipulation"
                      disabled={!formData.email.trim()}
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="animate-slide-in">
            <div className="text-center mb-4 md:mb-8">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                Perfect! Here's what StudyMate offers 🚀
              </h2>
              <p className="text-base md:text-xl text-gray-300 px-4">Everything you need to excel in your studies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="glass-card border-0 hover:scale-105 transition-all duration-300 animate-fade-in-up touch-manipulation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-3 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm md:text-lg">{feature.title}</h3>
                        <p className="text-gray-400 text-xs md:text-base">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <div className="flex gap-2 md:gap-3 max-w-md mx-auto">
                <Button
                  onClick={() => setStep(1)}
                  variant="ghost"
                  className="flex-1 glass-button h-12 md:h-14 text-sm md:text-lg touch-manipulation"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 h-12 md:h-14 text-sm md:text-lg font-medium touch-manipulation"
                >
                  Start My Journey! 🎯
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="flex justify-center mt-4 md:mt-8 gap-1 md:gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                i <= step ? "bg-purple-500" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
