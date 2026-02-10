'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Committee {
  id: number
  name: string
  fullName: string
  agenda: string
  image: string
  color: string
}

const committees: Committee[] = [
  {
    id: 1,
    name: 'UNGA',
    fullName: 'United Nations General Assembly (DISEC)',
    agenda: 'The Conflict Between Global Energy Transitions and the Violation of Indigenous Resource Sovereignty',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 2,
    name: 'UNCSW',
    fullName: 'UN Commission on the Status of Women',
    agenda: 'Addressing the Regression of Reproductive Autonomy amidst State-Sponsored Pro-Natalist Economic Policies',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop',
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 3,
    name: 'UNHRC',
    fullName: 'UN Human Rights Council',
    agenda: 'Examining Human Rights Violations in the Deployment of Neuro-Technology and Predictive Policing Algorithms',
    image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop',
    color: 'from-green-600 to-green-800',
  },
  {
    id: 4,
    name: 'AIPPM',
    fullName: 'All India Political Parties Meet',
    agenda: 'Assessing the Constitutional Crisis arising from the 2026 Delimitation Commission and the Redistribution of Parliamentary Power',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
    color: 'from-orange-600 to-orange-800',
  },
]

export default function CommitteeSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % committees.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % committees.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + committees.length) % committees.length)
  }

  const getPosition = (index: number) => {
    const diff = (index - current + committees.length) % committees.length
    return diff
  }

  return (
    <section id="schedule" className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">TNTS 2026 Committees</h2>
          <p className="text-gray-300 text-lg">Explore the global issues being debated</p>
        </div>

        <div className="relative h-96 md:h-[500px] perspective">
          <div className="relative w-full h-full flex items-center justify-center">
            {committees.map((committee, index) => {
              const position = getPosition(index)
              const isCenter = position === 0
              const isLeft = position === committees.length - 1
              const isRight = position === 1

              let transform = 'scale(0.6) translateX(-100%) opacity-0'
              let zIndex = 0

              if (isLeft) {
                transform = 'scale(0.7) translateX(-50%) opacity-50'
                zIndex = 1
              } else if (isCenter) {
                transform = 'scale(1) translateX(0) opacity-100'
                zIndex = 10
              } else if (isRight) {
                transform = 'scale(0.7) translateX(50%) opacity-50'
                zIndex = 1
              }

              return (
                <div
                  key={committee.id}
                  className="absolute w-full max-w-lg md:max-w-3xl transition-all duration-700 ease-in-out"
                  style={{
                    transform,
                    zIndex,
                  }}
                >
                  <div className={`relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${committee.color}`}>
                    <div className="relative h-96 md:h-[500px]">
                      <Image
                        src={committee.image}
                        alt={committee.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                          {committee.name}
                        </h3>
                        <p className="text-sm md:text-base text-blue-200 mb-4 font-medium">
                          {committee.fullName}
                        </p>

                        {/* Agenda Section - Improved Visibility */}
                        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <p className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-2">Agenda</p>
                          <p className="text-sm md:text-base leading-relaxed text-white font-medium">
                            {committee.agenda}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 -ml-6 md:-ml-12"
            aria-label="Previous committee"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-2 md:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 -mr-6 md:-mr-12"
            aria-label="Next committee"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-5 mt-16">
          {committees.map((committee, index) => (
            <button
              key={committee.id}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${index === current
                ? 'bg-blue-600 w-10 h-3'
                : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                }`}
              aria-label={`Go to ${committee.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
