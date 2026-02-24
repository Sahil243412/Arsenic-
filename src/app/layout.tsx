import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Email Automation for UK Estate Agencies | Respond to Inquiries Instantly",
  description:
    "We help UK estate agencies respond to buyer inquiries in seconds using AI — reducing manual workload and increasing booked viewings. Book a free strategy call today.",
  keywords: [
    "AI automation",
    "estate agency",
    "property inquiry",
    "email automation",
    "UK real estate",
    "viewing bookings",
  ],
  openGraph: {
    title: "AI Email Automation for UK Estate Agencies",
    description:
      "Respond to buyer inquiries in seconds using AI. Reduce workload, increase viewings.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
