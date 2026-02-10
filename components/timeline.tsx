"use client"

import { CheckCircle2 } from "lucide-react"

const timelineData = [
    {
        day: "Day 1",
        date: "July 11, 2026",
        events: [
            { time: "9:00 AM - 10:00 AM", title: "Registration & Welcome", description: "Delegate check-in and orientation" },
            { time: "10:00 AM - 11:00 AM", title: "Opening Ceremony", description: "Keynote speeches and conference inauguration" },
            { time: "11:30 AM - 1:00 PM", title: "Committee Session 1", description: "Initial debates and position statements" },
            { time: "1:00 PM - 2:00 PM", title: "Lunch Break", description: "Networking and refreshments" },
            { time: "2:00 PM - 4:00 PM", title: "Committee Session 2", description: "Moderated caucus and working papers" },
            { time: "4:30 PM - 6:00 PM", title: "Committee Session 3", description: "Draft resolutions and amendments" },
        ],
    },
    {
        day: "Day 2",
        date: "July 12, 2026",
        events: [
            { time: "9:00 AM - 11:00 AM", title: "Committee Session 4", description: "Final debates and negotiations" },
            { time: "11:30 AM - 1:00 PM", title: "Voting Procedures", description: "Resolution voting and final decisions" },
            { time: "1:00 PM - 2:00 PM", title: "Lunch Break", description: "Final networking opportunity" },
            { time: "2:00 PM - 3:30 PM", title: "Award Ceremony", description: "Recognition of outstanding delegates" },
            { time: "3:30 PM - 4:30 PM", title: "Closing Ceremony", description: "Final remarks and conference conclusion" },
        ],
    },
]

export default function Timeline() {
    return (
        <section id="timeline" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Event Timeline</h2>
                    <p className="text-gray-300 text-lg">Your two-day journey through diplomacy and debate</p>
                </div>

                <div className="space-y-16">
                    {timelineData.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative">
                            {/* Day Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl">
                                    {day.day}
                                </div>
                                <div className="text-gray-400 text-lg">{day.date}</div>
                            </div>

                            {/* Timeline Events */}
                            <div className="relative pl-8 border-l-2 border-blue-600/30 space-y-8">
                                {day.events.map((event, eventIndex) => (
                                    <div key={eventIndex} className="relative">
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[41px] top-2">
                                            <CheckCircle2 className="w-8 h-8 text-blue-500 bg-gray-900 rounded-full" />
                                        </div>

                                        {/* Event Card */}
                                        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 hover:border-blue-500/50 transition-all duration-300">
                                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
                                            <div className="relative z-10">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                                    <span className="text-blue-400 font-semibold text-sm">{event.time}</span>
                                                </div>
                                                <p className="text-gray-400">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
