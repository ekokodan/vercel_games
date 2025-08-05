"use client"

interface CharacterProps {
  size?: number
  className?: string
  animate?: boolean
}

// Robot Character - Main Player
export function RobotCharacter({ size = 32, className = "", animate = false }: CharacterProps) {
  return (
    <div className={`relative ${className} ${animate ? "animate-bounce" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {/* Robot Body */}
        <rect x="8" y="12" width="16" height="16" rx="2" fill="#E5E7EB" stroke="#6B7280" strokeWidth="1" />

        {/* Robot Head */}
        <rect x="10" y="4" width="12" height="10" rx="2" fill="#F3F4F6" stroke="#6B7280" strokeWidth="1" />

        {/* Eyes */}
        <circle cx="13" cy="8" r="1.5" fill="#3B82F6" />
        <circle cx="19" cy="8" r="1.5" fill="#3B82F6" />

        {/* Antenna */}
        <line x1="16" y1="4" x2="16" y2="1" stroke="#6B7280" strokeWidth="1" />
        <circle cx="16" cy="1" r="1" fill="#EF4444" />

        {/* Arms */}
        <rect x="4" y="14" width="4" height="2" rx="1" fill="#9CA3AF" />
        <rect x="24" y="14" width="4" height="2" rx="1" fill="#9CA3AF" />

        {/* Legs */}
        <rect x="11" y="28" width="3" height="3" rx="1" fill="#6B7280" />
        <rect x="18" y="28" width="3" height="3" rx="1" fill="#6B7280" />

        {/* Chest Panel */}
        <rect x="12" y="16" width="8" height="6" rx="1" fill="#D1D5DB" stroke="#9CA3AF" strokeWidth="0.5" />
        <circle cx="14" cy="18" r="0.5" fill="#10B981" />
        <circle cx="18" cy="18" r="0.5" fill="#F59E0B" />
        <rect x="13" y="20" width="6" height="1" rx="0.5" fill="#6B7280" />
      </svg>
    </div>
  )
}

// Alien Character - Friendly NPC
export function AlienCharacter({ size = 32, className = "", animate = false }: CharacterProps) {
  return (
    <div className={`relative ${className} ${animate ? "animate-pulse" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        {/* Alien Body */}
        <ellipse cx="16" cy="20" rx="8" ry="10" fill="#10B981" stroke="#059669" strokeWidth="1" />

        {/* Alien Head */}
        <ellipse cx="16" cy="12" rx="10" ry="8" fill="#34D399" stroke="#10B981" strokeWidth="1" />

        {/* Eyes */}
        <ellipse cx="12" cy="10" rx="2" ry="3" fill="#1F2937" />
        <ellipse cx="20" cy="10" rx="2" ry="3" fill="#1F2937" />
        <ellipse cx="12" cy="9" rx="0.5" ry="1" fill="#FFFFFF" />
        <ellipse cx="20" cy="9" rx="0.5" ry="1" fill="#FFFFFF" />

        {/* Antennae */}
        <line x1="12" y1="4" x2="10" y2="1" stroke="#10B981" strokeWidth="2" />
        <line x1="20" y1="4" x2="22" y2="1" stroke="#10B981" strokeWidth="2" />
        <circle cx="10" cy="1" r="1.5" fill="#F59E0B" />
        <circle cx="22" cy="1" r="1.5" fill="#F59E0B" />

        {/* Arms */}
        <ellipse cx="6" cy="18" rx="2" ry="4" fill="#10B981" />
        <ellipse cx="26" cy="18" rx="2" ry="4" fill="#10B981" />

        {/* Spots */}
        <circle cx="13" cy="15" r="1" fill="#059669" />
        <circle cx="19" cy="17" r="0.8" fill="#059669" />
        <circle cx="16" cy="22" r="1.2" fill="#059669" />
      </svg>
    </div>
  )
}

// Star Collector - Collectible Character
export function StarCollector({ size = 24, className = "", animate = false }: CharacterProps) {
  return (
    <div className={`relative ${className} ${animate ? "animate-spin" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" className="w-full h-full">
        {/* Star Shape */}
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="#FBBF24"
          stroke="#F59E0B"
          strokeWidth="1"
        />

        {/* Inner Glow */}
        <path d="M12 4l2.5 5.1L20 10.2l-4 3.9 0.9 5.5L12 16.8l-4.9 2.8L8 14.1 4 10.2l5.5-1.1L12 4z" fill="#FDE047" />

        {/* Center Sparkle */}
        <circle cx="12" cy="12" r="2" fill="#FFFFFF" opacity="0.8" />
        <circle cx="12" cy="12" r="1" fill="#FEF3C7" />
      </svg>
    </div>
  )
}

// Crystal Guardian - Boss Character
export function CrystalGuardian({ size = 48, className = "", animate = false }: CharacterProps) {
  return (
    <div className={`relative ${className} ${animate ? "animate-pulse" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 48 48" className="w-full h-full">
        {/* Guardian Body */}
        <polygon points="24,8 32,16 32,32 16,32 16,16" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" />

        {/* Crystal Core */}
        <polygon points="24,12 28,18 28,28 20,28 20,18" fill="#C4B5FD" stroke="#A78BFA" strokeWidth="1" />

        {/* Eyes */}
        <circle cx="21" cy="18" r="1.5" fill="#EF4444" />
        <circle cx="27" cy="18" r="1.5" fill="#EF4444" />

        {/* Energy Aura */}
        <circle cx="24" cy="24" r="20" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
        <circle cx="24" cy="24" r="16" fill="none" stroke="#A78BFA" strokeWidth="1" opacity="0.5" />

        {/* Floating Crystals */}
        <polygon points="12,12 16,8 20,12 16,16" fill="#C4B5FD" opacity="0.7" />
        <polygon points="28,12 32,8 36,12 32,16" fill="#C4B5FD" opacity="0.7" />
        <polygon points="12,36 16,32 20,36 16,40" fill="#C4B5FD" opacity="0.7" />
        <polygon points="28,36 32,32 36,36 32,40" fill="#C4B5FD" opacity="0.7" />
      </svg>
    </div>
  )
}

// Space Cat - Cute Companion
export function SpaceCat({ size = 28, className = "", animate = false }: CharacterProps) {
  return (
    <div className={`relative ${className} ${animate ? "animate-bounce" : ""}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 28 28" className="w-full h-full">
        {/* Cat Body */}
        <ellipse cx="14" cy="18" rx="6" ry="8" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />

        {/* Cat Head */}
        <circle cx="14" cy="10" r="6" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />

        {/* Ears */}
        <polygon points="10,6 8,2 12,4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
        <polygon points="18,6 20,2 16,4" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="1" />
        <polygon points="10,5 9,3 11,4" fill="#EC4899" />
        <polygon points="18,5 19,3 17,4" fill="#EC4899" />

        {/* Eyes */}
        <ellipse cx="11" cy="9" rx="1" ry="1.5" fill="#1F2937" />
        <ellipse cx="17" cy="9" rx="1" ry="1.5" fill="#1F2937" />
        <ellipse cx="11" cy="8.5" rx="0.3" ry="0.5" fill="#FFFFFF" />
        <ellipse cx="17" cy="8.5" rx="0.3" ry="0.5" fill="#FFFFFF" />

        {/* Nose */}
        <polygon points="14,11 13,12 15,12" fill="#EC4899" />

        {/* Mouth */}
        <path d="M14,12 Q12,13 11,12" fill="none" stroke="#6B7280" strokeWidth="0.5" />
        <path d="M14,12 Q16,13 17,12" fill="none" stroke="#6B7280" strokeWidth="0.5" />

        {/* Space Helmet */}
        <circle cx="14" cy="10" r="7" fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
        <circle cx="14" cy="10" r="7.5" fill="none" stroke="#DBEAFE" strokeWidth="0.5" />

        {/* Tail */}
        <path d="M8,20 Q4,16 6,12" fill="none" stroke="#D1D5DB" strokeWidth="2" />
      </svg>
    </div>
  )
}

// Character Showcase Component
export function CharacterShowcase() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Game Characters</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-4 mb-2 flex justify-center">
            <RobotCharacter size={64} animate={true} />
          </div>
          <p className="text-white font-semibold">Robot Player</p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-4 mb-2 flex justify-center">
            <AlienCharacter size={64} animate={true} />
          </div>
          <p className="text-white font-semibold">Alien Friend</p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-4 mb-2 flex justify-center">
            <StarCollector size={48} animate={true} />
          </div>
          <p className="text-white font-semibold">Star Collector</p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-4 mb-2 flex justify-center">
            <CrystalGuardian size={80} animate={true} />
          </div>
          <p className="text-white font-semibold">Crystal Guardian</p>
        </div>

        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-4 mb-2 flex justify-center">
            <SpaceCat size={56} animate={true} />
          </div>
          <p className="text-white font-semibold">Space Cat</p>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-12 bg-white/5 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Character Variations</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <RobotCharacter size={24} />
          <RobotCharacter size={32} />
          <RobotCharacter size={48} />
          <AlienCharacter size={24} />
          <AlienCharacter size={32} animate={true} />
          <StarCollector size={20} animate={true} />
          <StarCollector size={28} />
          <SpaceCat size={32} animate={true} />
          <CrystalGuardian size={40} />
        </div>
      </div>
    </div>
  )
}
