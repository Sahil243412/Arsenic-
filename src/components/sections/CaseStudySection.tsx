"use client";

import { useInView } from "@/hooks/useInView";

const metrics = [
    { value: "40+", label: "Weekly inquiries received", prefix: "" },
    { value: "80%", label: "Inquiries auto-handled by AI", prefix: "" },
    { value: "35%", label: "Faster viewing bookings", prefix: "↑" },
    { value: "< 10s", label: "Average response time", prefix: "" },
];

export default function CaseStudySection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="case-study" className="py-20 lg:py-28 bg-slate-50">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                            Example Implementation
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                            Example Implementation for a Manchester Estate Agency
                        </h2>
                    </div>

                    {/* Case study card */}
                    <div className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
                        <div className="grid lg:grid-cols-5">
                            {/* Narrative */}
                            <div className="lg:col-span-3 p-8 lg:p-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium mb-6 border border-amber-100">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                    Demonstration Scenario
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    A mid-sized Manchester agency with 12 agents
                                </h3>

                                <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <p>
                                            <strong className="text-slate-700">Before:</strong> The agency received over 40 property inquiries per week across Rightmove, Zoopla, and their website. Agents spent an average of 3 hours daily on email replies, leading to delayed responses and missed viewing opportunities.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                            </svg>
                                        </div>
                                        <p>
                                            <strong className="text-slate-700">Implementation:</strong> We deployed an AI email response system on their existing infrastructure, connected to their inbox and property database. Setup was completed within 5 working days.
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        </div>
                                        <p>
                                            <strong className="text-slate-700">After:</strong> 80% of buyer inquiries are now handled automatically with accurate, professional responses. Viewing bookings increased by 35%, and agents reclaimed over 2.5 hours per day for high-value tasks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Metrics sidebar */}
                            <div className="lg:col-span-2 bg-slate-900 p-8 lg:p-10 flex flex-col justify-center">
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                                    Key Metrics
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    {metrics.map((m, i) => (
                                        <div key={i}>
                                            <p className="text-2xl sm:text-3xl font-bold text-white">
                                                {m.prefix && <span className="text-green-400">{m.prefix}</span>}
                                                {m.value}
                                            </p>
                                            <p className="text-xs text-slate-400 mt-1 leading-snug">{m.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className={`text-center text-xs text-slate-400 mt-6 ${isVisible ? "animate-fade-in animate-delay-400" : "opacity-0"}`}>
                        This is a demonstration scenario illustrating typical implementation outcomes. Actual results will vary based on agency size, inquiry volume, and configuration.
                    </p>
                </div>
            </div>
        </section>
    );
}
