'use client';
import React from 'react'
// import Slider from 'react-slick'
import { useWindowSize } from "@react-hook/window-size/throttled";
import Bannertxt from "./Bannertxt";
import { useEffect, useState } from 'react';
import ContactForm from '../contact/ContactForm';
import bannerGif from "./banner.gif";
// import bannerVideo from "./tzar_web.mp4";

function MainHerobanner() {
  const [width, height] = useWindowSize({ fps: 60 });
  const breakpoint = 600;
  // console.log(bannerVideo)
  const [isClient, setIsClient] = useState(false);

  // console.log(bannerGif)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Or some other placeholder
  }

  if (width > breakpoint) {
    return (
      <>
        <section className="section-hero">
          <div className="video-container">
            <Bannertxt />
            {/* <video autoPlay loop muted src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"></video> */}
            {/* <video autoPlay loop muted playsInline className="video-bg desktop-video">
              <source
                // src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"
                src='./banner.gif'
                // type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
         {/* <img
            src={bannerGif.src}
            alt="Banner"
            className="video-bg desktop-video"
          /> */}
          <video
              autoPlay
              loop
              muted
              playsInline
              className="video-bg desktop-video"
            >
              {/* <source src="./tzar_web.mp4" type="video/mp4" /> */}
              <source src="./Tzar.co web.mp4" type="video/mp4" />
          </video>
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      <section className="section-hero" style={{background: "#1D4224"}}>
        {/* <div className="video-container"> */}
          <Bannertxt />
          {/* <video autoPlay loop muted src='https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029'></video> */}
          <video autoPlay loop muted src='./Tzar mob.mp4'></video>
          {/* <video autoPlay loop muted playsInline className="video-bg mobile-video">
            <source
              src="https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          <ContactForm />
        {/* </div> */}
      </section>
    </>
  );
}
export default MainHerobanner;


// 'use client';
// import React, { useEffect, useState } from 'react';
// import { useWindowSize } from "@react-hook/window-size/throttled";
// import Bannertxt from "./Bannertxt";
// import ContactForm from '../contact/ContactForm';

// function MainHerobanner() {
//   const [width, height] = useWindowSize({ fps: 60 });
//   const breakpoint = 600;
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   if (!isClient) {
//     return <div>Loading...</div>;
//   }

//   if (width > breakpoint) {
//     return (
//       <>
//         <section className="section-hero">
//           <div className="video-container">
//             <Bannertxt />
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="video-bg desktop-video"
//             >
//               <source
//                 src="https://ik.imagekit.io/xhgygdewi6/tzarheader.mp4?updatedAt=1698295413309"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </section>

//         {/* ✅ Styles */}
//         <style jsx>{`
//           .section-hero {
//             position: relative;
//             overflow: hidden;
//             width: 100%;
//             height: 100vh;
//           }

//           .section-hero .video-container {
//             position: relative;
//             width: 100%;
//             height: 100%;
//           }

//           .section-hero video {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           /* ✅ For Apple laptop range (MacBook Pro / Air screens) */
//           @media screen and (max-width: 1450px) and (min-width: 1200px) {
//             .section-hero {
//               height: 90vh; /* same visible area as desktop */
//             }
//             .section-hero video {
//               height: 90vh;
//               object-fit: cover;
//             }
//             .section-hero .video-container {
//               height: 90vh;
//             }
//           }

          
//         `}</style>
//       </>
//     );
//   }

//   return (
//   <>
//     <section className="section-hero">
//       <div className="mobile-hero-wrap">

//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="mobile-video"
//           src="https://ik.imagekit.io/xhgygdewi6/Bgvideo.mp4?updatedAt=1710580577029"
//         ></video>

//         {/* ⭐ Banner Text */}
//         <div className="mobile-banner-text">
//           <Bannertxt />
//         </div>

//         {/* ⭐ Contact Form OVERLAY */}
//         <div className="mobile-contact-box">
//           <ContactForm />
//         </div>

//       </div>
//     </section>

//     <style jsx>{`
//       .section-hero {
//         position: relative;
//         width: 100%;
//         height: 100vh;
//         overflow: hidden;
//       }

//       .mobile-hero-wrap {
//         position: relative;
//         width: 100%;
//         height: 100%;
//       }

//       .mobile-video {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//       }

//       /* ⭐ Contact Form Box EXACT STYLE LIKE IMAGE */
//       .mobile-contact-box {
//         position: absolute;
//         right: 20px;
//         top: 50%;
//         transform: translateY(-50%);
//         width: 360px;
//         background: #ffffff;
//         padding: 25px 20px;
//         border-radius: 15px;
//         box-shadow: 0 0 25px rgba(0,0,0,0.25);
//         z-index: 10;
//       }

//       /* ⭐ Keep form inside readable on mobile */
//       @media (max-width: 600px) {
//         .mobile-contact-box {
//           width: 90%;
//           right: 50%;
//           transform: translate(50%, 0);
//           bottom: 20px;
//           top: auto;
//         }
//       }

//       /* ⭐ Ensure form fields display properly */
//       .mobile-contact-box :global(input),
//       .mobile-contact-box :global(select),
//       .mobile-contact-box :global(textarea) {
//         height: 42px !important;
//         border-radius: 8px !important;
//       }

//       .mobile-banner-text {
//         position: absolute;
//         z-index: 5;
//         top: 20%;
//         left: 20px;
//         right: 20px;
//       }
//     `}
//     </style>
//   </>
// );

// }

// export default MainHerobanner;
