"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import CommitteeSlider from "@/components/committee-slider"
import Venue from "@/components/venue"
import Timeline from "@/components/timeline"
import Promo from "@/components/promo"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Hero />
      <Featured />
      <CommitteeSlider />
      <Venue />
      <Timeline />
      <Promo />
      <Footer />
    </main>
  )
}
