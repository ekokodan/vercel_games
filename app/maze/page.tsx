import { UpdatedLanguageMazeGame } from "@/components/updated-game"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function MazePage() {
  return (
    <div className="relative">
      <UpdatedLanguageMazeGame />

      {/* Back to Menu Button */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <Link href="/">
          <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Home className="w-4 h-4 mr-2" />
            Back to Menu
          </Button>
        </Link>
      </div>
    </div>
  )
}
