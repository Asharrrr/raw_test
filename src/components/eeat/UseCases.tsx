// components/UseCases.tsx
import React from 'react';

const useCaseDetails = [
  {
    title: "Live Event Countdowns",
    description: "Create real-time urgency for webinars, online concerts, game launches, and special announcements.",
    keywords: ["live event countdown", "webinar timer", "event timer online", "streaming countdown"],
    // You could add a link here if you have a dedicated page for this use case:
    // link: "/use-cases/live-events"
  },
  {
    title: "Study & Focus Sessions (Pomodoro)",
    description: "Enhance productivity with timed study intervals and breaks for students and professionals.",
    keywords: ["pomodoro timer", "study countdown", "focus timer online", "productivity tool"],
  },
  {
    title: "Product Launch Pages",
    description: "Build anticipation and drive early engagement for your new product releases and updates.",
    keywords: ["product launch countdown", "new product timer", "launch page timer", "pre-order countdown"],
  },
  {
    title: "Flash Sales Timers",
    description: "Boost conversions and create immediate demand for limited-time offers and discounts.",
    keywords: ["flash sale timer", "e-commerce countdown", "discount timer", "limited time offer"],
  },
  {
    title: "Online Exams or Tests",
    description: "Provide clear time limits for assessments, ensuring fair and structured online testing environments.",
    keywords: ["online exam timer", "test countdown", "quiz timer", "assessment timer"],
  },
];

export default function UseCases() {
  return (
    <section className="py-12 px-4 bg-white"> {/* Added a light background for subtle separation */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800">
        Use Case
      </h2>
      <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Our versatile tool is designed to serve a wide range of applications, helping you create urgency, manage time, and drive action.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"> {/* Changed to grid for better layout */}
        {useCaseDetails.map((item, index) => (
          <div key={index} className="bg-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
            <p className="text-gray-700 mb-3">{item.description}</p>
            {/* Optionally, if you had dedicated pages, you could add a link here: */}
            {/* {item.link && (
                <a href={item.link} className="text-blue-500 hover:text-blue-700 font-medium mt-auto">
                  Learn More &rarr;
                </a>
            )} */}
            {/* For internal SEO, you can also list the keywords, but it's better if they are naturally in the description and dedicated pages */}
            {/* <div className="text-sm text-gray-500 mt-2">
                Keywords: {item.keywords.join(', ')}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
// // components/UseCases.tsx
// import React from 'react';

// const useCases = [
//   "Live event countdowns",
//   "Study & focus sessions (Pomodoro)",
//   "Product launch pages",
//   "Flash sales timers",
//   "Online exams or tests",
// ];

// export default function UseCases() {
//   return (
//     <section className="py-12 px-4">
//       <h2 className="text-3xl font-bold mb-4 text-center">Popular Use Cases</h2>
//       <ul className="grid gap-3 max-w-xl mx-auto text-gray-700">
//         {useCases.map((item, index) => (
//           <li key={index} className="bg-white shadow p-4 rounded-lg">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }
