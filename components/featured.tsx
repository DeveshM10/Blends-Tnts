'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

const carouselImages = [
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop", alt: "Young delegates networking at conference" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop", alt: "Passionate debate in MUN committee" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop", alt: "Delegates collaborating on resolutions" },
  { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop", alt: "International conference assembly hall" },
  { src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=800&fit=crop", alt: "Delegates in formal committee session" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop", alt: "Conference attendees engaged in discussion" },
  { src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop", alt: "Professional networking at summit" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop", alt: "International delegates discussion" },
]

export default function Featured() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black px-6 py-20 lg:py-32">
      <h3 className="uppercase mb-6 text-blue-400 font-bold text-sm tracking-widest">Why TNTS X Blends?</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 lg:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 lg:mb-8 leading-tight">
              Experience diplomacy <span className="text-blue-400">without boundaries</span>
            </h2>
          </div>

          {/* Dazzling Feature Cards */}
          <div className="space-y-4 lg:space-y-6">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-600/30 p-5 lg:p-6 hover:border-blue-400/60 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-600/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white font-black text-lg lg:text-xl">1</span>
                  </div>
                  <h4 className="text-white font-bold text-base lg:text-lg">500+ Delegates</h4>
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Young voices from across India and beyond shaping global discourse</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-600/30 p-5 lg:p-6 hover:border-purple-400/60 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-600/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                    <span className="text-white font-black text-lg lg:text-xl">2</span>
                  </div>
                  <h4 className="text-white font-bold text-base lg:text-lg">All Grade Levels</h4>
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Grade 6 through undergraduate participation in authentic debate</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-600/30 p-5 lg:p-6 hover:border-cyan-400/60 transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-600/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                    <span className="text-white font-black text-lg lg:text-xl">3</span>
                  </div>
                  <h4 className="text-white font-bold text-base lg:text-lg">Unfiltered Debate</h4>
                </div>
                <p className="text-gray-300 text-sm lg:text-base">Real global issues discussed without restrictions or limitations</p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm lg:text-base leading-relaxed pt-4 border-t border-gray-700">
            A platform where young voices shape global conversations, unfiltered perspectives drive innovation, and international cooperation becomes reality.
          </p>

          <button
            onClick={() => window.location.href = 'https://tntsxblends.vercel.app/'}
            className="group relative w-full sm:w-auto px-8 lg:px-10 py-3 lg:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-600/50 transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10">REGISTER NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[650px]">
          <Image
            src={carouselImages[currentImage].src || "/placeholder.svg"}
            alt={carouselImages[currentImage].alt}
            fill
            className="w-full h-full object-cover rounded-2xl transition-opacity duration-1000 shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`transition-all duration-300 rounded-full ${index === currentImage
                  ? "bg-white w-10 h-3"
                  : "bg-white/40 hover:bg-white/60 w-3 h-3"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
