"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const promoImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
]

export default function Section() {
  const container = useRef(null)
  const [currentImage, setCurrentImage] = useState(0)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % promoImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={promoImages[currentImage] || "/placeholder.svg"}
            fill
            alt="MUN conference scenes"
            style={{ objectFit: "cover" }}
            className="transition-opacity duration-1000"
          />
        </motion.div>
      </div>

      <div className="absolute top-12 right-6 z-10 bg-black/30 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
        <h3 className="text-blue-400 uppercase text-sm md:text-base lg:text-lg font-bold">
          Global Connectivity
        </h3>
      </div>

      <div className="absolute bottom-12 right-6 z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Connect with young diplomats, engage in critical thinking, and build a network that shapes tomorrow's leaders and global dialogue.
        </p>
      </div>
    </div>
  )
}
