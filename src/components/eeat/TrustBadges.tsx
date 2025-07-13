// components/TrustBadges.tsx
import React from 'react';

export default function TrustBadges() {
  return (
    <div className="text-center mb-8 mt-4 bg-gray-300 py-5">
      <h2 className="text-3xl font-bold text-black">Key Qualities</h2>

      {/* Row 1 */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          Easy to Use
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
          Fast & Reliable
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          Secure & Responsive {/* Changed from "Flash and Secure" */}
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          Constantly Evolving {/* Changed from "New in Market" */}
        </span>
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
          Open Source
        </span>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          100% Free
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
          SSL Secure
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          No Spam {/* This one is already good! */}
        </span>
        <span className="bg-blue-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
          Highly Useful {/* Changed from "Good Needs" */}
        </span>
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
          Built with ❤️ by Ashar
        </span>
      </div>

      {/* Row 3 - Existing Badges (already good!) */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
          Privacy Focused
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          Mobile Friendly
        </span>
        <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
          No Login Required
        </span>
        <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
          Clean Design
        </span>
        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
          Light & Clear Display {/* Changed from "Light in contrast" */}
        </span>
      </div>
    </div>
  );
}

// // components/TrustBadges.tsx
// import React from 'react';

// export default function TrustBadges() {
//   return (
//     <div className="text-center mb-8 mt-4">
//       <h2 className="text-3xl font-bold text-black">Key Qualities</h2>

//       {/* Row 1 */}
//       <div className="flex justify-center flex-wrap gap-4 mt-8">
//         <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
//           Easy to Use
//         </span>
//         <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
//           Fast & Reliable
//         </span>
//         <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//           Flash and Secure
//         </span>
//         <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//           New in Market
//         </span>
//         <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
//           Open Source
//         </span>
//       </div>

//       {/* Row 2 */}
//       <div className="flex justify-center flex-wrap gap-4 mt-4">
//         <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
//           100% Free
//         </span>
//         <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
//           SSL Secure
//         </span>
//         <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//           No Spam
//         </span>
//         <span className="bg-blue-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
//           Good Needs
//         </span>
//         <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
//           Built with ❤️ by Ashar
//         </span>
//       </div>

//       {/* Row 3 - New Badges */}
//       <div className="flex justify-center flex-wrap gap-4 mt-4">
//         <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
//           Privacy Focused
//         </span>
//         <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
//           Mobile Friendly
//         </span>
//         <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
//           No Login Required
//         </span>
//         <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
//           Clean Design
//         </span>
//         <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
//           Light in contrast
//         </span>
//       </div>
//     </div>
//   );
// }



// // components/TrustBadges.tsx
// import React from 'react';

// export default function TrustBadges() {
//   return (
//     <div className="text-center mb-8 text-3xl mt-4 font-bold text-black">


//       <span>Key Qualities</span>
//     <div className="flex justify-center flex-wrap gap-4 mt-8">
//       <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
//         Easy to Use
//       </span>
//       <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
//         Fast & Reliable
//       </span>
//       <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//        Flash and Secure
//       </span>
//         <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//        New in market
//       </span>
//       <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
//         Open Source
//       </span>
//       <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
//         100% Free
//       </span>
//       <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
//         SSL Secure
//       </span>
//       <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
//         No Spam
//       </span>
//       <span className="bg-blue-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
//         Good needs
//       </span>
//       <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
//         Built with ❤️ by Ashar
//       </span>
//     </div>
//     </div>
//   );
// }
