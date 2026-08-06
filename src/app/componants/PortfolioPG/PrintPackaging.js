"use client";
import React from 'react'
import { Image, Container} from 'react-bootstrap';
import Pr7 from "@/assets/images/projects/maharaja-responsiv-website.jpg"
import Pr8 from "@/assets/images/projects/maharaja-responsiv-website.jpg"
import Pr9 from "@/assets/images/projects/printPackaging1.png"
import Pr10 from "@/assets/images/projects/printPackaging2.png"
import Pr11 from "@/assets/images/projects/printPackaging3.png"
import Pr12 from "@/assets/images/projects/printPackaging4.png"
import Pr13 from "@/assets/images/projects/maharaja-responsiv-website.jpg"
import Pr14 from "@/assets/images/projects/maharaja-responsiv-website.jpg"
import Pr15 from "@/assets/images/projects/maharaja-responsiv-website.jpg"
import Pr16 from "@/assets/images/projects/maharaja-responsiv-website.jpg"


const data = [
  {
    // https://ik.imagekit.io/qofcbis03/1.jpg?updatedAt=1682421815117
    id: 1,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1.jpg?updatedAt=1682423152315",
    category: "brand",
  },
  {
    id: 2,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3.jpg?updatedAt=1682423152314",
    category: "brand",
  },
  {
    id: 3,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/2.jpg?updatedAt=1682423151909",
    category: "brand",
  },

  {
    id: 4,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/8__1_.jpg?updatedAt=1682601106978",
    category: "brand",
  },
  {
    id: 5,
    type: "video",
    videoUrl: 'https://www.youtube.com/embed/7MPOVdcTT2E',
    category: "reels",
  },
  {
    id: 6,
    type: "video",
    videoUrl: 'https://www.youtube.com/embed/IUS0ux2MhWI',
    category: "reels",
  },
  {
    id: 7,
    type: "video",
    videoUrl: 'https://www.youtube.com/embed/OTh5RHPFs-I',
    category: "reels",
  },
  {
    id: 8,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/YBhpoYvxlKw",
    category: "reels",
  },

  {
    id: 9,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/10.jpg?updatedAt=1682601106985",
    category: "brand",
  },
  {
    id: 10,
    type: "image",
    imagesUrl: Pr7.src,
    category: "Web",
  },
  {
    id: 11,
    type: "image",
    imagesUrl: Pr8.src,
    category: "Web",
  },
  {
    id: 12,
    type: "image",
    imagesUrl: Pr13.src,
    category: "Web",
  },
  {
    id: 13,
    type: "image",
    imagesUrl: Pr14.src,
    category: "Web",
  },
  {
    id: 14,
    type: "image",
    imagesUrl: Pr15.src,
    category: "Web",
  },
  {
    id: 15,
    type: "image",
    imagesUrl: Pr16.src,
    category: "Web",
  },
  // {
  //   id: 16,
  //   type: "image",
  //   imagesUrl: Pr7.src,
  //   category: "Web",
  // },
  // {
  //   id: 17,
  //   type: "image",
  //   imagesUrl: Pr8.src,
  //   category: "Photograph",
  // },
  {
    id: 18,
    type: "image",
    imagesUrl: Pr9.src,
    category: "Print & Packaging",
  },
  {
    id: 19,
    type: "image",
    imagesUrl: Pr10.src,
    category: "Print & Packaging",
  },
  {
    id: 20,
    type: "image",
    imagesUrl: Pr11.src,
    category: "Print & Packaging",
  },
  {
    id: 21,
    type: "image",
    imagesUrl: Pr12.src,
    category: "Print & Packaging",
  },

  {
    id: 22,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/OZ9SDm3lPn8",
    category: "reels",
  },

  {
    id: 23,
    type: "video",
    videoUrl: 'https://www.youtube.com/embed/A4M1nWVAOQQ',
    category: "reels",
  },

  {
    id: 24,
    type: "video",
    videoUrl: 'https://www.youtube.com/embed/6hmb37ircHo',
    category: "reels",
  },

  {
    id: 25,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/hLxltxtLGsw",
    category: "reels",
  },

  {
    id: 26,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Sc6UNBemC3c",
    category: "reels",
  },

  {
    id: 27,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/fVNR25FvE_Q",
    category: "reels",
  },
  {
    id: 28,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/2__6_.jpg?updatedAt=1682602425931",
    category: "brand",
  },

  {
    id: 29,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__3_.jpg?updatedAt=1682601964160",
    category: "brand",
  },

  {
    id: 30,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__4_.jpg?updatedAt=1682601964160",
    category: "brand",
  },

  {
    id: 31,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__2_.jpg?updatedAt=1682601964180",
    category: "brand",
  },

  {
    id: 32,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__2___1_.jpg?updatedAt=1682601964157",
    category: "brand",
  },

  {
    id: 33,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/1__5_.jpg?updatedAt=1682601964185",
    category: "brand",
  },
  {
    id: 34,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/5__1_.jpg?updatedAt=1682602425847",
    category: "brand",
  },

  {
    id: 35,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__1_.jpg?updatedAt=1682602425880",
    category: "brand",
  },

  {
    id: 36,
    type: "image",
    imagesUrl: "https://ik.imagekit.io/ihxz8q7gr/3__5_.jpg?updatedAt=1682602425890",
    category: "brand",
  },
  {
    id: 37,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/_wPXOrzwERk?si=sh6AektxhWprfBwT",
    category: "Night Club Shoot",
  },
  {
    id: 38,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/KO6RTpW6wOY?si=MOEFiGvxXn6k9WgD",
    category: "Night Club Shoot",
  },
  {
    id: 39,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/meZyRF6aJ9U?si=34Q53My64-f_Aj78",
    category: "Night Club Shoot",
  },
  {
    id: 34,
    type: "video",
    videoUrl: "https://www.youtube.com/embed/ACSxYu_r1Bk?si=lbSZerL00vVqA7PR",
    category: "Night Club Shoot",
  },



];

function PrintPackaging() {
  const [category, setCategory] = React.useState("Print & Packaging");
  const filteredData = category === "" ?
    data : data.filter((item) => item.category === category);

  const [active, setActive] = React.useState(false);

  // const handleClick = () => {
  //   setButtonClass('Filterbtnactive');
  // };





  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  return (
    <div>
        <div className="videoGrid">
          {filteredData.map((item) => {
            if (item.type === "image" && item.category === "brand" || item.category === "brand" || item.category === "Photograph" || item.category === "Print & Packaging") {
              return <Image key={item.id} src={item.imagesUrl} alt="" className="imgResponsive" />;
            } else if (item.type === "images" || item.category === "Web") {
              return <Image key={item.id} src={item.imagesUrl} alt="" className="imgResponsiveWebsite" />;
            } else if (item.type == "video") {
              return (
                <>
                  <iframe
                    key={item.id}
                    src={item.videoUrl}
                    className="VideoResponsive embeddedvideo"
                    title="Embedded YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </>
              );
            }
          })}
        </div>
    </div>
  )
}

export default PrintPackaging