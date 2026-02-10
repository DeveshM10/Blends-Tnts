"use client"

import { MapPin, Calendar, Clock, Lock } from "lucide-react"
import { motion } from "framer-motion"

export default function Venue() {
    return (
        <section id="venue" className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black py-20 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Venue & Dates</h2>
                    <p className="text-gray-300 text-lg">Join us at one of Delhi's most prestigious institutions</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Location Details */}
                    <div className="space-y-8">
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-600/30 p-8 hover:border-blue-400/60 transition-all duration-300">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/30 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-300" />
                            <div className="relative z-10">
                                <MapPin className="w-12 h-12 text-blue-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Location</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-md">
                                        <Lock className="w-4 h-4" />
                                        <span className="font-bold tracking-widest uppercase">Revealing Soon</span>
                                    </div>
                                    <p className="text-gray-500 text-sm">A premier institution in New Delhi, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-600/30 p-8 hover:border-purple-400/60 transition-all duration-300">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-300" />
                            <div className="relative z-10">
                                <Calendar className="w-12 h-12 text-purple-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Dates</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    July 11-12, 2026<br />
                                    Two days of intensive debate and diplomacy
                                </p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 border border-cyan-600/30 p-8 hover:border-cyan-400/60 transition-all duration-300">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-600/30 rounded-full blur-3xl group-hover:blur-[100px] transition-all duration-300" />
                            <div className="relative z-10">
                                <Clock className="w-12 h-12 text-cyan-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-4">Duration</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Full-day sessions<br />
                                    9:00 AM - 6:00 PM both days
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Reveal Placeholder */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-slate-900 flex items-center justify-center group cursor-help">
                        {/* Animated Background Gradients */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[120px] animate-pulse" />
                            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-[120px] animate-pulse delay-75" />
                        </div>

                        <div className="relative z-10 text-center px-8">
                            <motion.div
                                animate={{
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
                            >
                                <Lock className="w-20 h-20 text-blue-500 mx-auto" />
                            </motion.div>

                            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic">
                                Secret Venue
                            </h3>

                            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />

                            <p className="text-gray-400 text-xl font-medium max-w-sm mx-auto leading-relaxed">
                                Stay tuned as we prepare to unveil Delhi's most prestigious institution.
                            </p>

                            <div className="mt-12 flex justify-center gap-1">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-2 h-2 rounded-full bg-blue-500"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-20 opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    )
}
