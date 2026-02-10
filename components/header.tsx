import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
      <div className="flex justify-between items-center">
        <Link href="/" className="relative w-24 h-8">
          <Image
            src="/logo.svg"
            alt="TNTS Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm font-semibold"
          >
            About
          </Link>
          <Link
            href="#schedule"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Committees
          </Link>
          <Link
            href="#venue"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Venue
          </Link>
          <Link
            href="#timeline"
            className="text-white hover:text-blue-400 transition-colors duration-300 uppercase text-sm font-semibold"
          >
            Timeline
          </Link>
          <button
            onClick={() => window.location.href = 'https://tntsxblends.vercel.app/'}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
          >
            REGISTER NOW
          </button>
        </nav>
      </div>
    </header>
  )
}
