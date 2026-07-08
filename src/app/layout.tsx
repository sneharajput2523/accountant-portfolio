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
          background: "#020817",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid-background-large min-h-screen">
          <SmoothScroll>
            <FramerLazyMotion>
              <MouseMoveEffect />
              <Navbar />
              <main className="">{children}</main>
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
