"use client";
import Image from "next/image";

export default function ProjectsDelivered() {
  return (
    <div className="w-full flex flex-col items-center py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        260+ Projects Delivered
      </h2>

      {/* Sub-heading */}
      <p className="mt-2 text-gray-600 text-lg text-center">
        and counting more..
      </p>

      {/* Map + Dots */}
      <div className="relative mt-12 max-w-4xl w-full flex justify-center">
        {/* World Map Image */}
        <Image
          src="@/assets/images/icons/map-961700_640.webp" // <- Replace with your image path
          width={1200}
          height={600}
          alt="world map"
          className="w-full pointer-events-none select-none"
        />

        {/* DOT 1 - Red */}
        <div className="absolute top-[32%] left-[22%]">
          <div className="w-5 h-5 bg-red-500 rounded-full relative">
            <span className="absolute inset-[-10px] rounded-full border-2 border-dotted border-red-300"></span>
          </div>
        </div>

        {/* DOT 2 - Purple */}
        <div className="absolute top-[28%] left-[48%]">
          <div className="w-5 h-5 bg-purple-600 rounded-full relative">
            <span className="absolute inset-[-10px] rounded-full border-2 border-dotted border-purple-300"></span>
          </div>
        </div>

        {/* DOT 3 - Blue */}
        <div className="absolute top-[30%] left-[68%]">
          <div className="w-5 h-5 bg-blue-500 rounded-full relative">
            <span className="absolute inset-[-10px] rounded-full border-2 border-dotted border-blue-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}


// 'use client';
// import React from 'react'
// import Link from 'next/link'
// // import { Image } from 'react-bootstrap'
// import Image from "next/image";
// import automobile from "@/assets/images/icons/Artboard 1.png";
// import capital from "@/assets/images/icons/Artboard 2.png";
// import consulting from "@/assets/images/icons/Artboard 3.png";
// import ecommerce from "@/assets/images/icons/Artboard 4.png";
// import education from "@/assets/images/icons/Artboard 5.png";
// import energy from "@/assets/images/icons/Artboard 6.png";
// import events from "@/assets/images/icons/Artboard 7.png";
// import food from "@/assets/images/icons/Artboard 8.png";
// import hardware from "@/assets/images/icons/Artboard 9.png";
// import healthcare from "@/assets/images/icons/Artboard 10.png";
// import hospitality from "@/assets/images/icons/Artboard 11.png";
// import industries from "@/assets/images/icons/Artboard 12.png";




// // const { bg, img1,img2,img3,img4,img5,img6,img7,img8, images, images1, imgtitle, tagline, bILL, title, text1, text2 } = graphicdesign ;
// const items = [
//             { title: "Automobiles", icon: automobile },
//             { title: "Capital", icon: capital },
//             { title: "Consulting", icon: consulting },
//             { title: "E-Commerce", icon: ecommerce },
//             { title: "Education", icon: education },
//             { title: "Energy", icon: energy },
//             { title: "Events", icon: events },
//             { title: "Food", icon: food },
//             { title: "Hardware", icon: hardware },
//             { title: "Healthcare", icon: healthcare },
//             { title: "Hospitality", icon: hospitality },
//             { title: "Industries", icon: industries },
//           ];
          

// function ExeculsiveCardsR() {
//   return (
//     <>
//       <section className="ExeculsiveCardsR-page">
//         <div className="mainEc">
//           <div className="section-title5">
//             <span>We Work For Industries</span>
//             <h2>Helping Businesses in All Domains</h2>
//             <div className="bar"></div>
//           </div>
          
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "repeat(6, 1fr)",
//                     gap: "40px 20px",
//                     maxWidth: "1000px",
//                     margin: "0 auto",
//                   }}
//                 >
//                   {items.map((item, i) => (
//                     <div
//                       key={i}
//                       style={{
//                         textAlign: "center",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         color: "#fff",
//                       }}
//                     >
//                       <Image
//                         src={item.icon}
//                         alt={item.title}
//                         width={60}
//                         height={60}
//                         style={{ marginBottom: "10px"}}
//                       />
//                       <p style={{ fontSize: "16px", fontWeight: "500" }}>{item.title}</p>
//                     </div>
//                   ))}
//                 </div>
          
//                 {/* Mobile Responsive Styles */}
//                 <style jsx>{`
//                   @media (max-width: 900px) {
//                     div[style*="grid-template-columns"] {
//                       grid-template-columns: repeat(3, 1fr) !important;
//                     }
//                   }
//                   @media (max-width: 600px) {
//                     div[style*="grid-template-columns"] {
//                       grid-template-columns: repeat(2, 1fr) !important;
//                     }
//                   }
//                 `}</style>
          
          
//           {/* <div className="container">
//             <div className="row">
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="fa-solid fa-1x fa-inverse fa-chart-simple"></i>
//                   <h3 className="textBoxEC1">E-commerce</h3>
//                   <Link href="/ecommerce"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-bank"></i>
//                   <h3 className="textBoxEC" >Education</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-graduation-cap">
//                   </i>
//                   <h3 className="textBoxEC" >Consumers Apps</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-stock-market"></i>
//                   <h3 className="textBoxEC">Healthcare</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-employee">
//                   </i>
//                   <h3 className="textBoxEC">Real Estate</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-waiter"></i>
//                   <h3 className="textBoxEC">B2B</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-stethoscope"></i>
//                   <h3 className="textBoxEC" >BFSI</h3>
//                   <Link href="/services-details"></Link>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-3 col-6">
//                 <div className="box1">
//                   <i className="flaticon-user"></i>
//                   <h3 className="textBoxEC">View more</h3>
//                   <Link href="/services-details"></Link>  </div>
//               </div>
//             </div>
//           </div> */
//           }
// </div>
//       </section>

//     </>
//   )
// }

// export default ExeculsiveCardsR
