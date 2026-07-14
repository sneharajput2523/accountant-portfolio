import React from "react";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import MouseMoveEffect from "@/components/mouse-move-effect";
import JumpToTop from "@/components/jump-to-top";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";
import FramerLazyMotion from "@/components/framer-lazy-motion";
import AnalyticsBeacon from "@/components/analytics-beacon";

const inter = Inter({ subsets: ["latin"] });
// const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sneha Rajput - Professional Accountant & Tax Consultant",
    template: "%s | Sneha Rajput",
  },
  description:
    "Professional Accountant with 1.5+ years of experience specializing in Tally Prime, advanced MS Excel, GST, income tax compliance, bookkeeping, and financial auditing.",
  keywords: [
    "Sneha Rajput",
    "Accountant",
    "Tax Consultant",
    "Tally Prime Specialist",
    "GST Filing",
    "Income Tax Return",
    "Bookkeeping Services",
    "Financial Auditing",
    "Ledger Reconciliation",
    "Payroll Management",
    "Freelance Accountant",
    "Finance Consultant",
    "Excel Financial Modeling",
  ],
  authors: [{ name: "Sneha Rajput", url: "mailto:sneharajput1282@gmail.com" }],
  creator: "Sneha Rajput",
  publisher: "Sneha Rajput",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.itsniloy.me",
    title: "Sneha Rajput - Professional Accountant & Tax Consultant",
    description:
      "Professional Accountant with 1.5+ years of experience specializing in Tally Prime, advanced MS Excel, GST, income tax compliance, bookkeeping, and financial auditing.",
    siteName: "Sneha Rajput Portfolio",
    images: [
      {
        url: "/sneharajput.png",
        width: 1200,
        height: 630,
        alt: "Sneha Rajput - Accountant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Rajput - Professional Accountant & Tax Consultant",
    description:
      "Professional Accountant with 1.5+ years of experience specializing in Tally Prime, advanced MS Excel, GST, income tax compliance, bookkeeping, and financial auditing.",
    images: ["/sneharajput.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.itsniloy.me",
  },
  category: "Accounting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#020817" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sneha Rajput",
              email: "sneharajput1282@gmail.com",
              telephone: "+919238366930",
              image: "/sneharajput.png",
              jobTitle: "Professional Accountant & Tax Consultant",
              knowsAbout: [
                "Accounting",
                "Tax Compliance",
                "Tally Prime",
                "MS Excel",
                "GST Filing",
                "Bookkeeping",
                "Auditing",
                "Financial Analysis",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} min-h-screen text-white`}
        style={{
          background: "#0d131a",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen relative overflow-hidden bg-[#0d131a]">
          {/* Central Radial Light */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(40,58,74,0.55)_0%,transparent_75%)] pointer-events-none z-0 animate-pulse-slow" />

          {/* Top-Right Decorative Geometric Shapes */}
          <div className="fixed top-[-150px] right-[-150px] w-[600px] h-[600px] pointer-events-none z-0 opacity-75 animate-shape-tr">
            {/* Box 1 */}
            <div className="absolute top-0 right-0 w-[320px] h-[320px] border-[14px] border-[#253544]/60 rounded-sm shadow-[15px_15px_40px_rgba(0,0,0,0.65)] bg-[#0d131a]/10 backdrop-blur-[1px]" />
            {/* Box 2 */}
            <div className="absolute top-[80px] right-[80px] w-[340px] h-[340px] border-[18px] border-[#1d2a36]/80 rounded-sm shadow-[20px_20px_50px_rgba(0,0,0,0.7)] bg-[#0d131a]/5 backdrop-blur-[1px]" />
            {/* Box 3 */}
            <div className="absolute top-[-50px] right-[200px] w-[220px] h-[450px] border-[12px] border-[#202e3b]/40 rounded-sm shadow-[15px_15px_35px_rgba(0,0,0,0.55)]" />
            {/* Box 4 */}
            <div className="absolute top-[250px] right-[-50px] w-[260px] h-[260px] border-[16px] border-[#1a2530]/70 rounded-sm shadow-[15px_15px_35px_rgba(0,0,0,0.6)]" />
          </div>

          {/* Bottom-Left Decorative Geometric Shapes */}
          <div className="fixed bottom-[-150px] left-[-150px] w-[600px] h-[600px] pointer-events-none z-0 opacity-75 animate-shape-bl">
            {/* Box 1 */}
            <div className="absolute bottom-0 left-0 w-[320px] h-[320px] border-[14px] border-[#253544]/60 rounded-sm shadow-[-15px_-15px_40px_rgba(0,0,0,0.65)] bg-[#0d131a]/10 backdrop-blur-[1px]" />
            {/* Box 2 */}
            <div className="absolute bottom-[80px] left-[80px] w-[340px] h-[340px] border-[18px] border-[#1d2a36]/80 rounded-sm shadow-[-20px_-20px_50px_rgba(0,0,0,0.7)] bg-[#0d131a]/5 backdrop-blur-[1px]" />
            {/* Box 3 */}
            <div className="absolute bottom-[-50px] left-[200px] w-[220px] h-[450px] border-[12px] border-[#202e3b]/40 rounded-sm shadow-[-15px_-15px_35px_rgba(0,0,0,0.55)]" />
            {/* Box 4 */}
            <div className="absolute bottom-[250px] left-[-50px] w-[260px] h-[260px] border-[16px] border-[#1a2530]/70 rounded-sm shadow-[-15px_-15px_35px_rgba(0,0,0,0.6)]" />
          </div>

          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
              <JumpToTop />
              <Toaster position="top-center" />
            </FramerLazyMotion>
          </SmoothScroll>
        </div>
        <AnalyticsBeacon />
      </body>
    </html>
  );
}
