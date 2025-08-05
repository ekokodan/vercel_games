"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Volume2, Maximize } from "lucide-react"

interface FrenchPhrase {
  id: string
  french: string
  english: string
  color: string
}

const frenchPhrases: FrenchPhrase[] = [
  { id: "1", french: "je vais", english: "I'm going", color: "bg-blue-300" },
  { id: "2", french: "vous allez", english: "you're going (someone you don't know)", color: "bg-pink-300" },
  { id: "3", french: "elle va", english: "she's going", color: "bg-yellow-300" },
  { id: "4", french: "elle va manger", english: "she's going to eat", color: "bg-orange-300" },
  { id: "5", french: "je vais danser", english: "I'm going to dance", color: "bg-purple-300" },
  { id: "6", french: "ils vont", english: "they're going (boys)", color: "bg-teal-300" },
  { id: "7", french: "il va jouer à Minecraft", english: "he is going to play Minecraft", color: "bg-blue-300" },
  { id: "8", french: "nous allons", english: "we're going", color: "bg-purple-300" },
  { id: "9", french: "demain", english: "tomorrow", color: "bg-yellow-300" },
  { id: "10", french: "tu vas", english: "you're going (someone you know)", color: "bg-orange-300" },
  { id: "11", french: "il va", english: "He's going", color: "bg-purple-300" },
]

const englishPhrases = [
  "we're going",
  "she's going",
  "they're going (boys)",
  "He's going",
  "you're going (someone you know)",
  "he is going to play Minecraft",
  "I'm going to dance",
  "tomorrow",
  "you're going (someone you don't know)",
  "I'm going",
  "she's going to eat",
]

export default function MatchingExercise() {
  const [timer, setTimer] = useState(5)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [draggedPhrase, setDraggedPhrase] = useState<FrenchPhrase | null>(null)

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

  const handleDragStart = (phrase: FrenchPhrase) => {
    setDraggedPhrase(phrase)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, englishPhrase: string) => {
    e.preventDefault()
    if (draggedPhrase) {
      setAnswers((prev) => ({
        ...prev,
        [englishPhrase]: draggedPhrase.french,
      }))
      setDraggedPhrase(null)
    }
  }

  const handleInputChange = (englishPhrase: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [englishPhrase]: value,
    }))
  }

  const handleSubmit = () => {
    console.log("Submitted answers:", answers)
    // Here you would typically validate answers and show results
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Timer */}
      <div className="text-4xl font-bold text-gray-800 mb-6">{formatTime(timer)}</div>

      {/* French Phrases Cards */}
      <div className="bg-white rounded-lg border-2 border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-6 gap-3">
          {frenchPhrases.map((phrase) => (
            <div
              key={phrase.id}
              className={`${phrase.color} rounded-lg p-3 text-center font-semibold text-gray-800 cursor-move hover:shadow-lg transition-shadow`}
              draggable
              onDragStart={() => handleDragStart(phrase)}
            >
              {phrase.french}
            </div>
          ))}
        </div>
      </div>

      {/* Matching Exercise */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          {englishPhrases.slice(0, 6).map((englishPhrase, index) => (
            <div key={index} className="flex items-center gap-4">
              <div
                className="w-32 h-12 border-2 border-gray-300 rounded bg-white flex items-center justify-center text-sm font-medium"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, englishPhrase)}
              >
                {answers[englishPhrase] && (
                  <span className="text-blue-600 truncate px-2">{answers[englishPhrase]}</span>
                )}
              </div>
              <span className="text-gray-800 font-medium flex-1">{englishPhrase}</span>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {englishPhrases.slice(6).map((englishPhrase, index) => (
            <div key={index + 6} className="flex items-center gap-4">
              <div
                className="w-32 h-12 border-2 border-gray-300 rounded bg-white flex items-center justify-center text-sm font-medium"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, englishPhrase)}
              >
                {answers[englishPhrase] && (
                  <span className="text-blue-600 truncate px-2">{answers[englishPhrase]}</span>
                )}
              </div>
              <span className="text-gray-800 font-medium flex-1">{englishPhrase}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleSubmit}
          className="px-8 py-3 text-lg font-semibold bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
          variant="outline"
        >
          Submit Answers
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className="fixed bottom-4 left-4 right-4 flex justify-between items-center">
        <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-200">
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-200">
            <Volume2 className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-200">
            <Maximize className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
