import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        
        {/* Logo / Brand */}
        <div className="text-xl font-semibold text-center sm:text-left">
          Countdown Timer
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-center sm:text-left">
          <li>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
          </li>
            <li>
              <Link href="/privacypolicy" className="hover:text-blue-600 transition">
                Privacy policy
              </Link>
            </li>
          <li>
            <Link href="/sitemap.xml" target="_blank" className="hover:text-white transition">Sitemap.xml</Link>
          </li>
          <li>
            <Link href="/robots.txt" target="_blank" className="hover:text-white transition">robots.txt</Link>
          </li>
        </ul>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Countdown Timer X. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
//         {/* Logo / Brand */}
//         <div className="text-xl font-semibold">Countdown Timer</div>

//         {/* Navigation */}
//         <ul className="flex flex-col sm:flex-row gap-4 text-sm">
//           <li>
//             <Link href="/" className="hover:text-white transition">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-white transition">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-white transition">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/sitemap.xml"
//               target="_blank"
//               className="hover:text-white transition"
//             >
//               Sitemap
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/robots.txt"
//               target="_blank"
//               className="hover:text-white transition"
//             >
//               Robots.txt
//             </Link>
//           </li>
//         </ul>

//         {/* Copyright */}
//         <div className="text-xs text-gray-400 text-center sm:text-right">
//           &copy; {new Date().getFullYear()} Countdown Timer X. All rights
//           reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
