"use client"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Header from "./header"

const heroImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&h=1080&fit=crop",
]

export default function Hero() {
  const container = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={container} className="h-screen overflow-hidden bg-black">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={heroImages[currentImage]}
          fill
          alt="MUN Conference"
          style={{ objectFit: "cover", transform: "scale(1.2)" }}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-start z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="mb-8 md:mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-2">
                TNTS <span className="text-blue-500">X</span> Blends
              </h1>
            </div>

            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight">
              Unfiltered. Unrestricted. Unprecedented.
            </h3>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-12 text-gray-100 max-w-2xl">
              The one-of-a-kind National Youth Summit and Model United Nations conference where 500+ delegates from Grade 6 to undergraduates debate global issues. July 11–12, 2026 at a premier institution in Delhi.
            </p>

            <button
              onClick={() => window.location.href = 'https://tntsxblends.vercel.app/'}
              className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-bold transition-all duration-300 cursor-pointer rounded-lg shadow-lg hover:shadow-xl"
            >
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
          {heroImages.map((_, index) => (
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
      </motion.div>
    </div>
  )
}
