"use client";

import { useInView } from "@/hooks/useInView";

export default function FinalCtaSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="cta" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400 rounded-full blur-3xl" />
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2
                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight ${isVisible ? "animate-fade-in-up" : "opacity-0"
                            }`}
                    >
                        Ready to Respond to Every Inquiry{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                            in Seconds?
                        </span>
                    </h2>

                    <p
                        className={`mt-6 text-lg text-slate-300 max-w-2xl mx-auto ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
                            }`}
                    >
                        Let&apos;s walk through how AI automation would work for your agency — no commitment, no pressure.
                    </p>

                    {/* CTA Button */}
                  <div
    className={`mt-10 ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
>
    <a
        href="https://wa.me/918859613236?text=Hi%2C%20I%E2%80%99d%20like%20to%20schedule%20a%2020-minute%20strategy%20call."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 rounded-full shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
    >
        Schedule a 20-Minute Strategy Call
        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    </a>
</div>

                    {/* Calendar placeholder */}
                    <div
                        className={`mt-14 max-w-md mx-auto ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-white">February 2026</h3>
                                <div className="flex gap-1">
                                    <button className="p-1 text-slate-400 hover:text-white" aria-label="Previous month">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button className="p-1 text-slate-400 hover:text-white" aria-label="Next month">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                                    <div key={d} className="py-1 text-slate-500 font-medium">{d}</div>
                                ))}
                                {/* Blank days for alignment */}
                                {[null, null, null, null, null, null].map((_, i) => (
                                    <div key={`blank-${i}`} />
                                ))}
                                {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
                                    const isAvailable = [2, 3, 4, 5, 9, 10, 11, 12, 16, 17, 18, 19, 23, 24, 25, 26].includes(day);
                                    const isHighlighted = day === 25;
                                    return (
                                        <div
                                            key={day}
                                            className={`py-1.5 rounded-lg text-xs cursor-default ${isHighlighted
                                                    ? "bg-blue-500 text-white font-semibold"
                                                    : isAvailable
                                                        ? "text-slate-300 hover:bg-white/10"
                                                        : "text-slate-600"
                                                }`}
                                        >
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                                    Selected
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white/20" />
                                    Available
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Reassurance */}
                    <div
                        className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400 ${isVisible ? "animate-fade-in animate-delay-500" : "opacity-0"
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            No commitment required
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            20-minute call
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Tailored to your agency
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
