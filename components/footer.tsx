import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[400px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <h1 className="text-6xl md:text-8xl font-black text-blue-600 tracking-tighter mb-2">
              TNTS
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              X Blends
            </h2>
            <p className="mt-6 text-gray-400 max-w-md text-lg">
              Empowering the next generation of leaders through diplomacy, debate, and global cooperation.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <div className="flex flex-col gap-4">
              <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About</Link>
              <Link href="#schedule" className="text-gray-400 hover:text-blue-500 transition-colors">Committees</Link>
              <Link href="#venue" className="text-gray-400 hover:text-blue-500 transition-colors">Venue</Link>
              <Link href="#timeline" className="text-gray-400 hover:text-blue-500 transition-colors">Timeline</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Information</h3>
            <div className="flex flex-col gap-4">
              <Link href="#faqs" className="text-gray-400 hover:text-blue-500 transition-colors">FAQs</Link>
              <Link href="#fees" className="text-gray-400 hover:text-blue-500 transition-colors">Registration Fees</Link>
              <Link href="#rules" className="text-gray-400 hover:text-blue-500 transition-colors">Rules & Guidelines</Link>
            </div>
          </div>
        </div>

        <Separator className="bg-neutral-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <button
            onClick={() => window.location.href = 'https://tntsxblends.vercel.app/'}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-600/50 transition-all duration-300"
          >
            REGISTER NOW
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>© 2026 TNTS X Blends. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
