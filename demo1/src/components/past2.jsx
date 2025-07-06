import React from "react";

import DecryptedText from "./DecryptedText/DecryptedText";
import FadeContent from './FadeContent/FadeContent'

const ResponsiveBoxes2 = () => {
  const boxes = [
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdsc.37c66f43.png&w=1920&q=75",
      title: "Box 1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigma2.b953de4f.jpg&w=750&q=75",
      title: "Box 2",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgoverse.057f0e5e.jpg&w=640&q=75",
      title: "Box 3",
      desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftech_transducer1.707e53e7.png&w=1920&q=75",
      title: "Box 4",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
  ];

  return (
  <div className="p-8 max-w-6xl mx-auto bg-black text-white mt-24">
    <h1 className="text-5xl font-medium mb-8 text-center">
      Crafting Excellence : <br /> Pioneering Events by IEEE NSUT
    </h1>

    <p className="text-md mb-24 text-center">
      With a focus on excellence, IEEE NSUT's events provide unparalleled opportunities for<br />
      networking, skill-building, and real-world problem-solving.
    </p>
    <FadeContent blur={true} duration={900} easing="ease-out" initialOpacity={0}>

    {/* First row: 2/3 - 1/3 */}
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="flex-1 md:basis-2/3 bg-gray-900 p-4 md:p-12 text-white rounded-2xl">
        <img src={boxes[0].img} alt={boxes[0].title} className="w-full mb-12 mt-4 rounded" />
        <h2 className="text-md font-semibold">{boxes[0].title}</h2>
        <p>{boxes[0].desc}</p>
      </div>
      <div className="flex-1 md:basis-1/3 bg-gray-900 p-4 md:p-12 text-white rounded-2xl">
        <img src={boxes[1].img} alt={boxes[1].title} className="w-full mb-12 mt-4 rounded" />
        <h2 className="text-md font-semibold">{boxes[1].title}</h2>
        <p>{boxes[1].desc}</p> 
      </div>
    </div>
</FadeContent>
<FadeContent blur={true} duration={900} easing="ease-out" initialOpacity={0}>
    
    {/* Second row: 1/3 - 2/3 */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 md:basis-1/3 bg-gray-900 p-4 md:p-12 text-white rounded-2xl">
        <img src={boxes[2].img} alt={boxes[2].title} className="w-full mb-12 mt-4 rounded" />
        <h2 className="text-md font-semibold">{boxes[2].title}</h2>
        <p>{boxes[2].desc}</p>
      </div>
      <div className="flex-1 md:basis-2/3 bg-gray-900 p-4 md:p-12 text-white rounded-2xl">
        <img src={boxes[3].img} alt={boxes[3].title} className="w-full mb-12 mt-4 rounded" />
        <h2 className="text-md font-semibold">{boxes[3].title}</h2>
        <p>{boxes[3].desc}</p>
      </div>
    </div>
    </FadeContent>
  </div>
);
};

export default ResponsiveBoxes2;