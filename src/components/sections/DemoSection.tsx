"use client";

import { useInView } from "@/hooks/useInView";

export default function DemoSection() {
    const { ref, isVisible } = useInView(0.1);

    return (
        <section id="demo" className="py-20 lg:py-28 bg-white">
            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className={`text-center max-w-3xl mx-auto mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                        Live Demo
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        See the AI in Action
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        A real-world example of how the system handles a typical buyer inquiry.
                    </p>
                </div>

                {/* Email mockups */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Incoming email */}
                    <div className={`${isVisible ? "animate-slide-in-left animate-delay-200" : "opacity-0"}`}>
                        <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                            {/* Email header bar */}
                            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="ml-3 text-xs font-medium text-slate-400">Incoming Inquiry</span>
                            </div>

                            <div className="px-5 py-4">
                                {/* Email meta */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm flex-shrink-0">
                                        JW
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-slate-900">James Wilson</p>
                                        <p className="text-xs text-slate-400">james.wilson@gmail.com</p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            To: inquiries@hartleyestates.co.uk
                                        </p>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="border-b border-slate-100 pb-3 mb-3">
                                    <p className="text-sm font-semibold text-slate-800">
                                        Re: 3-Bed Semi-Detached, Didsbury, M20 — Rightmove
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="text-sm text-slate-600 leading-relaxed space-y-3">
                                    <p>Hi,</p>
                                    <p>
                                        I saw the 3-bed semi-detached on Wilmslow Road, Didsbury, listed at £425,000.
                                        Could you tell me if it has a south-facing garden and whether the boiler has
                                        been replaced recently?
                                    </p>
                                    <p>
                                        Also, is it possible to arrange a viewing this Saturday afternoon?
                                    </p>
                                    <p>
                                        Many thanks,<br />
                                        James Wilson
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI response */}
                    <div className={`${isVisible ? "animate-slide-in-right animate-delay-300" : "opacity-0"}`}>
                        <div className="rounded-2xl border border-blue-200 bg-white shadow-lg overflow-hidden ring-1 ring-blue-100">
                            {/* Email header bar */}
                            <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <span className="ml-3 text-xs font-medium text-blue-500 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    AI-Generated Reply — 8 seconds
                                </span>
                            </div>

                            <div className="px-5 py-4">
                                {/* Email meta */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm flex-shrink-0">
                                        HE
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-slate-900">Hartley Estates</p>
                                        <p className="text-xs text-slate-400">inquiries@hartleyestates.co.uk</p>
                                        <p className="text-xs text-slate-400 mt-0.5">
                                            To: james.wilson@gmail.com
                                        </p>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="border-b border-slate-100 pb-3 mb-3">
                                    <p className="text-sm font-semibold text-slate-800">
                                        Re: 3-Bed Semi-Detached, Didsbury, M20 — Viewing Available
                                    </p>
                                </div>

                                {/* Body */}
                                <div className="text-sm text-slate-600 leading-relaxed space-y-3">
                                    <p>Dear James,</p>
                                    <p>
                                        Thank you for your interest in the property at 14 Wilmslow Road, Didsbury.
                                        I&apos;m happy to help with your questions.
                                    </p>
                                    <p>
                                        The property does feature a south-facing rear garden, and the
                                        combi boiler was replaced in 2022 with a Worcester Bosch unit, still under warranty.
                                    </p>
                                    <p>
                                        We have viewing slots available this Saturday. You can book a time that suits you here:
                                    </p>
                                    <div className="bg-blue-50 rounded-lg px-4 py-3 border border-blue-100">
                                        <a href="#" className="text-blue-600 font-medium text-sm hover:underline">
                                            📅 Book Your Viewing — Saturday Slots Available
                                        </a>
                                    </div>
                                    <p>
                                        Kind regards,<br />
                                        Hartley Estates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
