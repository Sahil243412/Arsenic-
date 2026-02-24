"use client";

import { useInView } from "@/hooks/useInView";

const features = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
        ),
        title: "Hosted on Your Infrastructure",
        description:
            "The system runs on servers you control. Your data never passes through third-party platforms.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: "Your Domain, Your Brand",
        description:
            "All communications come from your domain. Buyers see your agency name — not ours.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
        ),
        title: "Your OpenAI API Key",
        description:
            "You use your own API key, so you control costs directly and have full visibility into usage.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: "No Vendor Lock-in",
        description:
            "Walk away any time. You own the code, the configuration, and the data. No ongoing dependencies on us.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Full Transparency",
        description:
            "We provide complete documentation, clear code, and ongoing access. You know exactly how the system works.",
    },
];

export default function OwnershipSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="ownership" className="py-20 lg:py-28 bg-white">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                        Full Ownership
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        You Own the Entire System
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        We&apos;re an implementation partner, not a SaaS vendor. Once built, the system is entirely yours.
                    </p>
                </div>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 bg-white hover:bg-blue-50/30 transition-all duration-300 ${i === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""
                                } ${isVisible ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : "opacity-0"}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
