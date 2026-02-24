"use client";

import { useInView } from "@/hooks/useInView";

const problems = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Agents manually answering repetitive emails",
        description:
            "Your team spends hours each day writing the same responses to common property questions — time better spent closing deals.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
        ),
        title: "Missed opportunities due to slow response",
        description:
            "Buyers expect a reply within minutes. A delay of even an hour can mean losing a serious buyer to another agency.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
        title: "Losing buyers to faster competitors",
        description:
            "The agency that responds first wins the viewing. If your competitors reply faster, they get the booking.",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        title: "Overloaded inbox during peak listing periods",
        description:
            "New listings generate a surge of inquiries. Without automation, your inbox becomes unmanageable within hours.",
    },
];

export default function ProblemSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="problem" className="py-20 lg:py-28 bg-white">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                        The Problem
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Every Delayed Reply Costs You a Buyer
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        UK estate agencies lose valuable leads every day due to slow, manual email responses.
                    </p>
                </div>

                {/* Problem cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, i) => (
                        <div
                            key={i}
                            className={`group p-6 rounded-2xl border border-slate-100 hover:border-slate-200 bg-white hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 ${isVisible ? `animate-fade-in-up animate-delay-${(i + 1) * 100}` : "opacity-0"
                                }`}
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                                    {problem.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 mb-1">
                                        {problem.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
