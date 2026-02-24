"use client";

import { useInView } from "@/hooks/useInView";

export default function HeroSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/50" />

            {/* Subtle pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #1e40af 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Decorative blur shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"
                            }`}
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Built for UK Estate Agencies
                    </div>

                    {/* Headline */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] ${isVisible ? "animate-fade-in-up" : "opacity-0"
                            }`}
                    >
                        Automate Property Inquiry Emails{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            & Book More Viewings
                        </span>{" "}
                        Instantly
                    </h1>

                    {/* Subheadline */}
                    <p
                        className={`mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"
                            }`}
                    >
                        We help UK estate agencies respond to buyer inquiries in seconds using
                        AI — reducing manual workload and increasing booked viewings.
                    </p>

                    {/* CTAs */}
                    <div
                        className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"
                            }`}
                    >
                        <a
                            href="#cta"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                        >
                            Book a Free Strategy Call
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#how-it-works"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full transition-all"
                        >
                            See How It Works
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    {/* Trust line */}
                    <p
                        className={`mt-8 text-sm text-slate-400 ${isVisible ? "animate-fade-in animate-delay-500" : "opacity-0"
                            }`}
                    >
                        No contracts • Setup in days • Full system ownership
                    </p>
                </div>
            </div>
        </section>
    );
}
