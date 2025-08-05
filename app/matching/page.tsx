import MatchingExercise from "@/components/matching-exercise"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function MatchingPage() {
  return (
    <div className="relative">
      <MatchingExercise />

      {/* Back to Menu Button */}
      <div className="absolute top-4 right-4 z-20">
        <Link href="/">
          <Button variant="outline" className="bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200">
            <Home className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>
        </Link>
      </div>
    </div>
  )
}
