import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-center sm:justify-start mb-4 sm:mb-0">
          <Link
            href="/"
            className="text-2xl font-bold text-black cursor-pointer px-2 hover:text-gray-600 transition duration-300"
          >
          Countdown Timer
            <span className="text-blue-600">X</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-row gap-6 text-gray-700 text-lg">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
           
            <li>
              <Link href="/privacypolicy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0 text-gray-600 text-xl">
          <Link
            href="https://github.com/MuhammadAshar28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 mx-2"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/MuhammadAshar28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 mx-2"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-ashar-4181272b7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 mx-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="bg-white shadow-md w-full">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center items-center">
//         {/* Logo */}
//         <Link href={"/"}>

//         <div className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
//           Countdown Timer
//         </div>
//         </Link>
//         {/* Navigation */}
//         <nav>
//           <ul className="flex flex-row gap-4 text-gray-700 text-lg">
//             <li>
//               <Link href="/" className="hover:text-blue-600 transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-blue-600 transition">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-blue-600 transition">
//                 Contact Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/privacypolicy" className="hover:text-blue-600 transition">
//                 Privacy policy
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
