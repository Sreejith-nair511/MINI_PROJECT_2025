"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { User, Bell, Palette, Clock, Shield, Download, Trash2 } from "lucide-react"
import { useApp } from "@/components/providers"
import { Footer } from "@/components/footer"

export default function SettingsPage() {
  const { theme, setTheme, user } = useApp()
  const [selectedMode, setSelectedMode] = useState(theme.mode)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="glass-card p-6">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-300">Customize your StudyMate experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Name
              </Label>
              <Input id="username" defaultValue={user?.name || ""} className="glass-card border-white/20 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="glass-card border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-white">
                Bio
              </Label>
              <Input
                id="bio"
                placeholder="Tell us about yourself..."
                className="glass-card border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Study Reminders</p>
                <p className="text-gray-400 text-sm">Get notified when it's time to study</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Goal Deadlines</p>
                <p className="text-gray-400 text-sm">Reminders for upcoming deadlines</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Achievement Alerts</p>
                <p className="text-gray-400 text-sm">Celebrate your accomplishments</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Weekly Reports</p>
                <p className="text-gray-400 text-sm">Summary of your weekly progress</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Timer Settings */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Pomodoro Timer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="work-duration" className="text-white">
                Work Duration (minutes)
              </Label>
              <Input
                id="work-duration"
                type="number"
                defaultValue="25"
                min="1"
                max="60"
                className="glass-card border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="break-duration" className="text-white">
                Short Break (minutes)
              </Label>
              <Input
                id="break-duration"
                type="number"
                defaultValue="5"
                min="1"
                max="30"
                className="glass-card border-white/20 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="long-break" className="text-white">
                Long Break (minutes)
              </Label>
              <Input
                id="long-break"
                type="number"
                defaultValue="15"
                min="1"
                max="60"
                className="glass-card border-white/20 text-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Auto-start breaks</p>
                <p className="text-gray-400 text-sm">Automatically start break timer</p>
              </div>
              <Switch />
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">Save Timer Settings</Button>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="glass-card border-0">
          <CardHeader>
            <CardTitle className="text-white text-lg flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Appearance & Themes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Study Modes */}
            <div className="space-y-3">
              <Label className="text-white font-medium">Study Mode</Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { mode: "study", label: "Study", icon: "📚", gradient: "from-blue-500 to-purple-500" },
                  { mode: "focus", label: "Focus", icon: "🎯", gradient: "from-orange-500 to-red-500" },
                  { mode: "relax", label: "Relax", icon: "🧘", gradient: "from-green-500 to-teal-500" },
                ].map((item) => (
                  <Button
                    key={item.mode}
                    variant={selectedMode === item.mode ? "default" : "ghost"}
                    className={`h-16 flex-col gap-1 ${
                      selectedMode === item.mode ? `bg-gradient-to-r ${item.gradient}` : "glass-button"
                    }`}
                    onClick={() => {
                      setSelectedMode(item.mode as any)
                      setTheme({ ...theme, mode: item.mode })
                    }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs">{item.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Themes */}
            <div className="space-y-3">
              <Label className="text-white font-medium">Color Themes</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Purple Dream",
                    gradient: "from-purple-900 via-blue-900 to-indigo-900",
                    primary: "purple",
                    secondary: "pink",
                  },
                  {
                    name: "Ocean Breeze",
                    gradient: "from-blue-900 via-cyan-900 to-teal-900",
                    primary: "blue",
                    secondary: "cyan",
                  },
                  {
                    name: "Sunset Glow",
                    gradient: "from-orange-900 via-red-900 to-pink-900",
                    primary: "orange",
                    secondary: "red",
                  },
                  {
                    name: "Forest Calm",
                    gradient: "from-green-900 via-emerald-900 to-teal-900",
                    primary: "green",
                    secondary: "emerald",
                  },
                  {
                    name: "Royal Gold",
                    gradient: "from-yellow-900 via-orange-900 to-red-900",
                    primary: "yellow",
                    secondary: "orange",
                  },
                  {
                    name: "Mystic Night",
                    gradient: "from-gray-900 via-purple-900 to-black",
                    primary: "gray",
                    secondary: "purple",
                  },
                ].map((themeOption) => (
                  <Button
                    key={themeOption.name}
                    variant="ghost"
                    className={`h-20 p-3 glass-button hover:scale-105 transition-all ${
                      theme.gradient === themeOption.gradient ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setTheme({ ...theme, ...themeOption })}
                  >
                    <div className="w-full h-full rounded-lg bg-gradient-to-br ${themeOption.gradient} flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{themeOption.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Dark Mode</p>
                  <p className="text-gray-400 text-sm">Always enabled for better focus</p>
                </div>
                <Switch defaultChecked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Animations</p>
                  <p className="text-gray-400 text-sm">Smooth transitions and effects</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Sound Effects</p>
                  <p className="text-gray-400 text-sm">Notification and timer sounds</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">Apply Theme Changes</Button>
          </CardContent>
        </Card>
      </div>

      {/* Data & Privacy */}
      <Card className="glass-card border-0">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Data & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="ghost" className="glass-button justify-start h-auto p-4">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Download className="h-4 w-4" />
                  <span className="font-medium">Export Data</span>
                </div>
                <p className="text-gray-400 text-sm">Download your study data</p>
              </div>
            </Button>

            <Button variant="ghost" className="glass-button justify-start h-auto p-4">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Privacy Settings</span>
                </div>
                <p className="text-gray-400 text-sm">Manage your privacy</p>
              </div>
            </Button>

            <Button
              variant="ghost"
              className="glass-button justify-start h-auto p-4 hover:bg-red-500/10 hover:text-red-400"
            >
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Trash2 className="h-4 w-4" />
                  <span className="font-medium">Delete Account</span>
                </div>
                <p className="text-gray-400 text-sm">Permanently delete account</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card className="glass-card border-0">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <h3 className="text-white font-semibold">StudyMate v1.0.0</h3>
            <p className="text-gray-400 text-sm">Built with ❤️ for students worldwide</p>
            <div className="flex justify-center gap-4 text-sm">
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                Terms of Service
              </Button>
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                Privacy Policy
              </Button>
              <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0">
                Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  )
}
