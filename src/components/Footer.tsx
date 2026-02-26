export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-base font-semibold text-white tracking-tight">ARSENIC</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
                        <a href="#demo" className="hover:text-white transition-colors">Demo</a>
                        <a href="#ownership" className="hover:text-white transition-colors">Ownership</a>
                        <a href="#cta" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} InquiryAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
