"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Menu, Volume2, Maximize } from "lucide-react"
import { RobotCharacter, AlienCharacter, StarCollector, SpaceCat } from "./game-characters"

export function UpdatedLanguageMazeGame() {
  const [timer, setTimer] = useState(10)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="text-white text-2xl font-bold bg-black/30 px-3 py-1 rounded">{formatTime(timer)}</div>

        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl px-6 py-2 rounded-full">
          GO!
        </Button>

        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <Heart key={i} className={`w-6 h-6 ${i < lives ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
            ))}
          </div>
          <div className="text-white text-2xl font-bold">✓ {score}</div>
        </div>
      </div>

      {/* Game Area with Custom Characters */}
      <div className="absolute inset-8 top-20 bottom-32">
        {/* Text Blocks */}
        <div className="absolute top-8 left-8 w-64 h-20 border-4 border-yellow-400 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl bg-black/20 px-4 py-2 rounded backdrop-blur-sm">je vais</div>
        </div>

        <div className="absolute top-32 left-8 w-64 h-24 border-4 border-yellow-400 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl bg-black/20 px-4 py-2 rounded backdrop-blur-sm text-center">
            nous
            <br />
            allons
          </div>
        </div>

        <div className="absolute top-8 right-8 w-48 h-20 border-4 border-yellow-400 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl bg-black/20 px-4 py-2 rounded backdrop-blur-sm">il va</div>
        </div>

        <div className="absolute bottom-8 right-8 w-64 h-24 border-4 border-yellow-400 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
          <div className="text-white font-bold text-xl bg-black/20 px-4 py-2 rounded backdrop-blur-sm">on va</div>
        </div>

        {/* Maze Walls */}
        <div className="absolute top-0 left-80 w-8 h-64 border-4 border-yellow-400 bg-purple-700 rounded"></div>
        <div className="absolute top-16 left-96 w-32 h-8 border-4 border-yellow-400 bg-purple-700 rounded"></div>
        <div className="absolute top-48 left-96 w-8 h-32 border-4 border-yellow-400 bg-purple-700 rounded"></div>
        <div className="absolute bottom-16 left-32 w-48 h-8 border-4 border-yellow-400 bg-purple-700 rounded"></div>

        {/* Custom Character Collectibles */}
        <div className="absolute top-24 left-96">
          <StarCollector size={24} animate={true} />
        </div>
        <div className="absolute bottom-32 left-16">
          <StarCollector size={24} animate={true} />
        </div>
        <div className="absolute top-40 right-32">
          <StarCollector size={24} animate={true} />
        </div>

        {/* NPCs */}
        <div className="absolute top-16 right-16">
          <SpaceCat size={32} animate={true} />
        </div>
        <div className="absolute bottom-24 left-64">
          <AlienCharacter size={28} animate={true} />
        </div>

        {/* Main Player Character */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <RobotCharacter size={40} animate={true} />
        </div>

        {/* Navigation Triangles */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-cyan-400 mb-2"></div>
        </div>

        <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-l-6 border-r-6 border-t-10 border-l-transparent border-r-transparent border-t-cyan-400"></div>
        </div>

        <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-cyan-400"></div>
        </div>
      </div>

      {/* Bottom Translation Panel */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-purple-900 to-purple-800 border-t-4 border-yellow-400">
        <div className="flex items-center justify-center h-full">
          <div className="text-white text-4xl font-bold">I'm going</div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Volume2 className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Maximize className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
