export const revalidate = 60; // Revalidate every 60 seconds
import type { Metadata } from 'next';
import Head from 'next/head';
const SITE_URL = "http://localhost:3000"; // Change to your production URL

export const metadata: Metadata = {
  title: 'Contact | Countdown Timer X',
  description: 'Have questions or feedback? Get in touch with the Countdown Timer X team.',
  keywords: ['contact countdown timer', 'get in touch', 'Countdown Timer X support'],
  openGraph: {
    title: 'Contact | Countdown Timer X',
    description: 'Reach out to the Countdown Timer X team.',
    url: `${SITE_URL}/contact`,
    siteName: 'Countdown Timer X',
    images: [
      {
        url: `${SITE_URL}/og-image-contact.png`,
        width: 1200,
        height: 630,
        alt: 'Contact Countdown Timer X',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Countdown Timer X',
    description: 'We would love to hear from you!',
    images: [`${SITE_URL}/og-image-contact.png`],
  },
};

export default async function ContactPage() {
  return (
    <div>
      <Head>
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              url: `${SITE_URL}/contact`,
              name: "Contact | Countdown Timer X",
              description: "Have questions or feedback? Get in touch with the Countdown Timer X team.",
              publisher: {
                "@type": "Organization",
                name: "Countdown Timer X",
                url: `${SITE_URL}`,
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "raooolex@proton.me",
                contactType: "Customer Support",
              },
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-center">
            Have questions? Send us a message and we'll get back to you as soon as possible.
          </p>

          <p className="mt-6 text-center text-green-600 font-semibold">
            Note: This form is currently not working. Please email us at: raoolex@proton.me
          </p>

          <form action="/contact" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////metadata///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// export const dynamic = 'force-dynamic';

// const revalidate = 60; // Revalidate every 60 seconds

// export default async function ContactPage(props: { searchParams?: { submitted?: string } }) {
//   const submitted = (await props.searchParams)?.submitted === 'true';

//   if (submitted) {
//     return (
//       <div>

//       <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 flex items-center justify-center">
//           <Head>
//         <link rel="canonical" href="https://countdowntimerx.com/" />
//       </Head>
//         <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
//           <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
//           <p className="text-gray-600 mb-8 text-center">
//             Have questions? Send us a message and we'll get back to you as soon as possible.
//           </p>

//           {/* <form action="/contact?submitted=true" method="POST" className="space-y-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
//             >
//             Send Message
//             </button>
//           </form> */}

//           <form action="/contact?submitted=true" method="POST" className="space-y-6">
//   <div>
//     <label htmlFor="name" className="block text-sm font-medium mb-1">
//       Name
//     </label>
//     <input
//       type="text"
//       id="name"
//       name="name"
//       required
//       autoComplete="name"
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//       placeholder="Your full name"
//       />
//   </div>

//   <div>
//     <label htmlFor="email" className="block text-sm font-medium mb-1">
//       Email
//     </label>
//     <input
//       type="email"
//       id="email"
//       name="email"
//       required
//       autoComplete="email"
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//       placeholder="your.email@example.com"
//     />
//   </div>

//   <div>
//     <label htmlFor="message" className="block text-sm font-medium mb-1">
//       Message
//     </label>
//     <textarea
//       id="message"
//       name="message"
//       rows={5}
//       required
//       autoComplete="off"
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//       placeholder="Write your message here..."
//     ></textarea>
//   </div>

//   <button
//     type="submit"
//     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
//     >
//     Send Message
//   </button>
// </form>

//           <p className="mt-6 text-center text-green-600 font-semibold">
//             Thank you for your message! this form is currently not working, please. Email US at: raoolex@proton.me
//           </p>
//         </div>
//       </main>
//     </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 flex items-center justify-center">
//       <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
//         <p className="text-gray-600 mb-8 text-center">
//           Have questions? Send us a message and we'll get back to you as soon as possible.
//         </p>

//         <form action="/contact?submitted=true" method="POST" className="space-y-6">
//           {/* form fields */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Your full name"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="your.email@example.com"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium mb-1">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows={5}
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//               placeholder="Write your message here..."
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </main>
//   );
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////metsdata///////////////////////////////////////////////////////////////////////////////////////////////////////
// import type { Metadata } from 'next';
// import Head from 'next/head';

// export const metadata: Metadata = {
//   title: 'Contact | Countdown Timer X',
//   description: 'Have questions or feedback? Get in touch with the Countdown Timer X team.',
//   keywords: ['contact countdown timer', 'get in touch', 'Countdown Timer X support'],
//   openGraph: {
//     title: 'Contact | Countdown Timer X',
//     description: 'Reach out to the Countdown Timer X team.',
//     url: 'https://countdowntimerx.com/contact',
//     siteName: 'Countdown Timer X',
//     images: [
//       {
//         url: 'https://countdowntimerx.com/og-image-contact.png',
//         width: 1200,
//         height: 630,
//         alt: 'Contact Countdown Timer X',
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Contact | Countdown Timer X',
//     description: 'We would love to hear from you!',
//     images: ['https://countdowntimerx.com/og-image-contact.png'],
//   },
// };
