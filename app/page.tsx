"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GameMenu() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Game Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Language Galaxy
          </h1>
          <p className="text-xl text-gray-300">Learn French through space adventures!</p>
        </div>

        {/* Game Mode Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Maze Game */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-yellow-400/50 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-blue-500/20 rounded-full w-fit">
                <Gamepad2 className="w-12 h-12 text-blue-400" />
              </div>
              <CardTitle className="text-2xl text-white">Maze Adventure</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                Navigate through the cosmic maze, collect French phrases, and learn verb conjugations!
              </p>
              <Link href="/maze">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg">
                  Start Adventure
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Matching Exercise */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-green-400/50 hover:border-green-400 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-green-500/20 rounded-full w-fit">
                <Users className="w-12 h-12 text-green-400" />
              </div>
              <CardTitle className="text-2xl text-white">Drag & Drop</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                Match French phrases with their English translations in this interactive exercise!
              </p>
              <Link href="/matching">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg">
                  Start Matching
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Character Gallery */}
          <Card className="bg-white/10 backdrop-blur-sm border-2 border-purple-400/50 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-purple-500/20 rounded-full w-fit">
                <Star className="w-12 h-12 text-purple-400" />
              </div>
              <CardTitle className="text-2xl text-white">Characters</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-6">
                Meet all the cosmic characters you'll encounter in your language learning journey!
              </p>
              <Link href="/characters">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg">
                  View Characters
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Link href="/maze">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              🎮 Play Maze
            </Button>
          </Link>
          <Link href="/matching">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              🎯 Drag & Drop
            </Button>
          </Link>
          <Link href="/characters">
            <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              👾 Characters
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
