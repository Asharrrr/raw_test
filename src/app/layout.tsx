
 import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AdsterraAd from "@/components/AdsterraAd";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Countdown Timer",
  description: "A countdown timer for your next big event",
  keywords: [
    "countdown timer",
    "event countdown",
    "timer tool",
    "productivity",
    "web app",
    "free tool",
    "time management",
  ],
};
  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
            <Head>
      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Countdown Timer X",
            "url": "https://yourdomain.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourdomain.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* Organization / Creator Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ashar",
            "url": "https://yourdomain.com/about",
            "sameAs": [
              "https://github.com/yourprofile",
              "https://twitter.com/yourprofile",
              "https://linkedin.com/in/yourprofile"
            ]
          }),
        }}
      />

      {/* Software Application (Timer Tool) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Countdown Timer X",
            "operatingSystem": "All",
            "applicationCategory": "ProductivityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Person",
              "name": "Ashar"
            },
            "url": "https://yourdomain.com"
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the countdown timer free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Countdown Timer X is 100% free to use and always will be."
                }
              },
              {
                "@type": "Question",
                "name": "Do you collect any data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No personal data is collected. We respect your privacy and do not store timers or usage data."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use it offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Currently, it requires an internet connection. Offline mode is planned for a future release."
                }
              },
              {
                "@type": "Question",
                "name": "Does the timer work in the background?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the timer continues to run even if you switch tabs or minimize the browser."
                }
              }
            ]
          }),
        }}
      />
    </Head>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
     
        {children}

        <Footer />
      </body>
    </html>
  );
}
