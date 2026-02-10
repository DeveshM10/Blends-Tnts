"use client"

import { MapPin, Calendar, Clock } from "lucide-react"

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
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Kirori Mal College<br />
                                    University of Delhi<br />
                                    Delhi, India
                                </p>
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

                    {/* Google Maps */}
                    <div className="relative h-[600px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.221053188554!2d77.2077194!3d28.683033399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd91b4972361%3A0xd114167941a0a5ac!2sKirori%20Mal%20College!5e0!3m2!1sen!2sin!4v1770714652666!5m2!1sen!2sin"
                            className="w-full h-full rounded-2xl"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
