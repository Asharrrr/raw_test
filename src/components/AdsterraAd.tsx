'use client';

import { useEffect } from 'react';

const AdsterraAd = () => {
  useEffect(() => {
    // 1. Create and insert the config script
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : '83292b0abc97301ed424f2ab6c8cf58d',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    document.body.appendChild(configScript);

    // 2. Load the actual Adsterra script
    const adScript = document.createElement('script');
    adScript.src = '//www.highperformanceformat.com/83292b0abc97301ed424f2ab6c8cf58d/invoke.js';
    adScript.type = 'text/javascript';
    adScript.async = true;
    document.body.appendChild(adScript);

    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(adScript);
    };
  }, []);

  return (
    <span
      style={{
      
        display: 'inline-block',
        width: 160,
        height: 300,
        // optional: add border or background to see the box during dev
        // border: '1px solid #ccc',
        // backgroundColor: '#f0f0f0',
      }}
    />
  );
};

export default AdsterraAd;



// // components/AdsterraAd.tsx
// 'use client';

// import { useEffect } from 'react';

// const AdsterraAd = () => {
//   useEffect(() => {
//     // 1. Create and insert the config script
//     const configScript = document.createElement('script');
//     configScript.type = 'text/javascript';
//     configScript.innerHTML = `
//       atOptions = {
        
//         'key' : '83292b0abc97301ed424f2ab6c8cf58d',
//         'format' : 'iframe',
//         'height' : 300,
//         'width' : 160,
//         'params' : {}
//       };
//     `;
//     document.body.appendChild(configScript);

//     // 2. Load the actual Adsterra script
//     const adScript = document.createElement('script');
//     adScript.src = '//www.highperformanceformat.com/83292b0abc97301ed424f2ab6c8cf58d/invoke.js';
//     adScript.type = 'text/javascript';
//     adScript.async = true;
//     document.body.appendChild(adScript);

//     return () => {
//       document.body.removeChild(configScript);
//       document.body.removeChild(adScript);
//     };
//   }, []);

//   return null; // You can return a div with fixed size if needed
// };

// export default AdsterraAd;



// 'use client';

// import { useEffect, useRef } from 'react';

// const AdsterraAd = () => {
//   const adRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Step 1: Create the ad configuration script
//     const configScript = document.createElement('script');
//     configScript.type = 'text/javascript';
//     configScript.innerHTML = `
//       atOptions = {
//         'key': '83292b0abc97301ed424f2ab6c8cf58d',
//         'format': 'iframe',
//         'height': 300,
//         'width': 160,
//         'params': {}
//       };
//     `;

//     // Step 2: Create the actual Adsterra ad script
//     const adScript = document.createElement('script');
//     adScript.src = '//www.highperformanceformat.com/83292b0abc97301ed424f2ab6c8cf58d/invoke.js';
//     adScript.type = 'text/javascript';
//     adScript.async = true;

//     // Step 3: Append both scripts inside the container
//     if (adRef.current) {
//       adRef.current.appendChild(configScript);
//       adRef.current.appendChild(adScript);
//     }

//     // Cleanup
//     return () => {
//       if (adRef.current) {
//         adRef.current.innerHTML = '';
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={adRef}
//       style={{
//         position: 'fixed',
//         bottom: '80px', // push above the footer
//         left: '20px',
//         zIndex: 9999,
//         width: '160px',
//         height: '300px',
//       }}
//     />
//   );
// };

// export default AdsterraAd;
