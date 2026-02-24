"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
    {
        number: "01",
        title: "Buyer Sends Inquiry",
        description:
            "A potential buyer emails your agency about a property listing through Rightmove, Zoopla, or your website.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "AI Reads & Understands Intent",
        description:
            "The AI analyses the message, identifies the property, understands what the buyer is asking, and assesses urgency.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Professional Reply Generated",
        description:
            "A polished, on-brand reply is generated instantly — answering the buyer's specific questions with accurate property details.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Viewing Link Included",
        description:
            "The reply includes a direct booking link for a property viewing, making it effortless for the buyer to take the next step.",
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
];

export default function HowItWorksSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                        How It Works
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        From Inquiry to Viewing in Seconds
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        A simple, four-step process that runs automatically — no manual intervention required.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`relative group ${isVisible ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : "opacity-0"
                                }`}
                        >
                            {/* Connector line (desktop only) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-blue-200 to-blue-100" />
                            )}

                            <div className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 h-full">
                                {/* Step number */}
                                <div className="text-xs font-bold text-blue-400 mb-4 tracking-widest">
                                    STEP {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
