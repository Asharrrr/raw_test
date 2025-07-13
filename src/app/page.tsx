
export const metadata = {
  title: "Countdown Timer - Home",
  description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
  keywords: [
    "countdown timer", 
    "countdown app", 
    "countdown timer tool", 
    "countdown timer X", 
    "tags", 
    "articles", 
    "Next.js"
  ],
  authors: [{ name: "Muhammad Ashar" }],
  alternates: {
    canonical: "https://rawtest.netlify.app/",
  },
  openGraph: {
    title: "Countdown Timer - Home",
    description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
    url: "https://rawtest.netlify.app/",
    siteName: "Countdown Timer X",
    images: [
      {
        url: "https://rawtest.netlify.app//og-image.png",
        width: 1200,
        height: 630,
        alt: "Countdown Timer X",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Countdown Timer X - Home",
    description: "Countdown Timer X - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
    images: ["https://rawtest.netlify.app//og-image.png"],
    creator: "@yourTwitterHandle", // Replace with actual handle
  },
};





import dynamic from 'next/dynamic';
import TagsSection from "@/components/TagsSection";
import AboutAuthor from '@/components/eeat/AboutAuthor';
import HowItWorks from '@/components/eeat/HowItWorks';
import UseCases from '@/components/eeat/UseCases';
import TrustBadges from '@/components/eeat/TrustBadges';
import FAQSection from '@/components/eeat/FAQSection';
import Testimonials from '@/components/Testimonials';
import TimerTable from '@/components/eeat/table';
import Head from 'next/head';
// import CountdownTimerGuide from '@/components/article';

// Dynamically import components with loading fallback
const Countdown = dynamic(() => import('@/components/count-down'), {
  loading: () => <p>Loading Countdown...</p>,
});

const CountdownTimerGuide = dynamic(() => import('@/components/article'), {
  loading: () => <p>Loading Article...</p>,
});

export default function Home() {
  return (
    

        
      
        <div>
      <Countdown />
      <AboutAuthor />
      <HowItWorks />
      <UseCases />
      <TrustBadges />
      <CountdownTimerGuide />
      < Testimonials/>

      < FAQSection />
      < TimerTable/>
      <TagsSection />
 
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////metadata for home page/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// app/metadata.ts (or wherever you keep metadata in your project)
















// export const metadata = {
//   title: "Countdown Timer - Home",
//   description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//   keywords: "countdown timer, countdown app, countdown timer tool, countdown timer X, tags, articles, Next.js",
//   author: "Muhammad Ashar",
//   openGraph: {
//     title: "Countdown Timer - Home",
//     description: "Countdown Timer - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     url: "https://yourdomain.com",
//     siteName: "Countdown Timer",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Countdown Timer X",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Countdown Timer X - Home",
//     description: "Countdown Timer X - Your go-to tool for customizable countdown timers, articles, and tags. Stay on track and organized.",
//     images: ["https://yourdomain.com/og-image.png"],
//     creator: "@yourTwitterHandle",
//   },
// };




