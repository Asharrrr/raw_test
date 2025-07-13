"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Countdown() {
  const [duration, setDuration] = useState<number | string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true);
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleReset = (): void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || "");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
      {/* Guide label above the timer */}
      <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide uppercase">
        Guide about how to use the countdown timer given below 
      </p>

      {/* Timer box container */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
          Countdown Timer
        </h1>

        {/* Input and set button */}
        <div className="flex items-center mb-6">
          <Input
            type="number"
            id="duration"
            placeholder="Enter duration in seconds"
            value={duration}
            onChange={handleDurationChange}
            className="flex-1 mr-4 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
          <Button
            onClick={handleSetDuration}
            variant="outline"
            className="text-gray-800 cursor-pointer dark:text-gray-200"
          >
            Set
          </Button>
        </div>

        {/* Countdown display */}
        <div className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
          {formatTime(timeLeft)}
        </div>

        {/* Control buttons */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleStart}
            variant="outline"
            className="text-gray-800 cursor-pointer dark:text-gray-200"
          >
            {isPaused ? "Resume" : "Start"}
          </Button>
          <Button
            onClick={handlePause}
            variant="outline"
            className="text-gray-800 cursor-pointer dark:text-gray-200"
          >
            Pause
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="text-gray-800 cursor-pointer dark:text-gray-200"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}


// "use client"; // Enables client-side rendering for this component

// import { useState, useRef, useEffect, ChangeEvent } from "react"; // Import React hooks and types
// import { Input } from "@/components/ui/input"; // Import custom Input component
// import { Button } from "@/components/ui/button"; // Import custom Button component

// export default function Countdown() {
//   // State to manage the duration input
//   const [duration, setDuration] = useState<number | string>("");
//   // State to manage the countdown timer value
//   const [timeLeft, setTimeLeft] = useState<number>(0);
//   // State to track if the timer is active
//   const [isActive, setIsActive] = useState<boolean>(false);
//   // State to track if the timer is paused
//   const [isPaused, setIsPaused] = useState<boolean>(false);
//   // Reference to store the timer ID
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   // Function to handle setting the duration of the countdown
//   const handleSetDuration = (): void => {
//     if (typeof duration === "number" && duration > 0) {
//       setTimeLeft(duration); // Set the countdown timer
//       setIsActive(false); // Reset active state
//       setIsPaused(false); // Reset paused state
//       // Clear any existing timer
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     }
//   };

//   // Function to start the countdown timer
//   const handleStart = (): void => {
//     if (timeLeft > 0) {
//       setIsActive(true); // Set the timer as active
//       setIsPaused(false); // Unpause the timer if it was paused
//     }
//   };

//   // Function to pause the countdown timer
//   const handlePause = (): void => {
//     if (isActive) {
//       setIsPaused(true); // Set the timer as paused
//       setIsActive(false); // Set the timer as inactive
//       // Clear any existing timer
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     }
//   };

//   // Function to reset the countdown timer
//   const handleReset = (): void => {
//     setIsActive(false); // Set the timer as inactive
//     setIsPaused(false); // Set the timer as not paused
//     setTimeLeft(typeof duration === "number" ? duration : 0); // Reset the timer to the original duration
//     // Clear any existing timer
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

//   // useEffect hook to manage the countdown interval
//   useEffect(() => {
//     // If the timer is active and not paused
//     if (isActive && !isPaused) {
//       // Set an interval to decrease the time left
//       timerRef.current = setInterval(() => {
//         setTimeLeft((prevTime) => {
//           // If time is up, clear the interval
//           if (prevTime <= 1) {
//             clearInterval(timerRef.current!);
//             return 0;
//           }
//           // Decrease the time left by one second
//           return prevTime - 1;
//         });
//       }, 1000); // Interval of 1 second
//     }
//     // Cleanup function to clear the interval
//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [isActive, isPaused]); // Dependencies array to rerun the effect

//   // Function to format the time left into mm:ss format
//   const formatTime = (time: number): string => {
//     const minutes = Math.floor(time / 60); // Calculate minutes
//     const seconds = time % 60; // Calculate seconds
//     // Return the formatted string
//     return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
//       2,
//       "0"
//     )}`;
//   };

//   // Function to handle changes in the duration input field
//   const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setDuration(Number(e.target.value) || ""); // Update the duration state
//   };

//   // JSX return statement rendering the Countdown UI
//   return (
//     // Container div for centering the content
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
    
//     {/* Guide label above the timer */}
//     <p className="mb-4 text-sm text-gray-700 dark:text-gray-300 font-medium tracking-wide uppercase">
//       Guide below
//     </p>

//     {/* Timer box container */}
//     <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md"></div>
//       {/* Title of the countdown timer */}
//       <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
//         Countdown Timer
//       </h1>
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-300 dark:bg-gray-900">
//       {/* Timer box container */}
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
//         {/* Title of the countdown timer */}
//         <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
//           Countdown Timer
//         </h1>
//         {/* Input and set button container */}
//         <div className="flex items-center mb-6">
//           <Input
//             type="number"
//             id="duration"
//             placeholder="Enter duration in seconds"
//             value={duration}
//             onChange={handleDurationChange}
//             className="flex-1 mr-4 rounded-md border-gray-300 dark:border-gray-600  dark:bg-gray-700 dark:text-gray-200"
//           />
//           <Button
//             onClick={handleSetDuration}
//             variant="outline"
//             className="text-gray-800 cursor-pointer
//  dark:text-gray-200"
//           >
//             Set
//           </Button>
//         </div>
//         {/* Display the formatted time left */}
//         <div className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
//           {formatTime(timeLeft)}
//         </div>
//         {/* Buttons to start, pause, and reset the timer */}
//         <div className="flex justify-center gap-4">
//           <Button
//             onClick={handleStart}
//             variant="outline"
//             className="text-gray-800 cursor-pointer
//  dark:text-gray-200"
//           >
//             {isPaused ? "Resume" : "Start"}
//           </Button>
//           <Button
//             onClick={handlePause}
//             variant="outline"
//             className="text-gray-800 cursor-pointer
//  dark:text-gray-200"
//           >
//             Pause
//           </Button>
//           <Button
//             onClick={handleReset}
//             variant="outline"
//             className="text-gray-800 cursor-pointer
//  dark:text-gray-200"
//           >
//             Reset
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }