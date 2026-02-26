"use client";

import { useInView } from "@/hooks/useInView";

export default function FinalCtaSection() {
    const { ref, isVisible } = useInView(0.1);

    // ✅ Dynamic calendar logic
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Adjust because week starts Monday (Mo)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    return (
        <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400 rounded-full blur-3xl" />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Heading */}
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        Ready to Respond to Every Inquiry{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                            in Seconds?
                        </span>
                    </h2>

                    <p className={`mt-6 text-lg text-slate-300 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
                        Let&apos;s walk through how AI automation would work for your agency — no commitment, no pressure.
                    </p>

                    {/* CTA Button */}
                    <div className={`mt-10 ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}>
                        <a
                            href="https://wa.me/918859613236?text=Hi%2C%20I%E2%80%99d%20like%20to%20schedule%20a%2020-minute%20strategy%20call."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 rounded-full shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                        >
                            Schedule a 20-Minute Strategy Call
                        </a>
                    </div>

                    {/* Calendar */}
                    <div className={`mt-14 max-w-md mx-auto ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">

                            {/* Dynamic Month */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-white">
                                    {new Date().toLocaleString("default", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </h3>
                            </div>

                            {/* Week Days */}
                            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                                    <div key={d} className="py-1 text-slate-500 font-medium">{d}</div>
                                ))}

                                {/* Dynamic blank days */}
                                {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                                    <div key={`blank-${i}`} />
                                ))}

                                {/* Dynamic days */}
                                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                                    const isToday =
                                        day === now.getDate() &&
                                        month === now.getMonth() &&
                                        year === now.getFullYear();

                                    return (
                                        <div
                                            key={day}
                                            className={`py-1.5 rounded-lg text-xs 
                                                ${isToday
                                                    ? "bg-blue-500 text-white font-semibold"
                                                    : "text-slate-300 hover:bg-white/10"
                                                }`}
                                        >
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Legend */}
                            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Today
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white/20" />
                                    Other days
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
