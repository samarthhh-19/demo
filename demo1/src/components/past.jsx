import React from "react";
import TiltedCard from "./TiltedCard/TiltedCard";
import ScrollFloat from "./ScrollFloat/ScrollFloat"
const ResponsiveBoxes = () => {
  const boxes = [
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdsc.37c66f43.png&w=1920&q=75",
      title: "Box 1",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigma2.b953de4f.jpg&w=750&q=75",
      title: "Box 2",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgoverse.057f0e5e.jpg&w=640&q=75",
      title: "Box 3",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftech_transducer1.707e53e7.png&w=1920&q=75",
      title: "Box 4",
      desc: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo voluptates error odit, explicabo in eum non eveniet itaque inventore dolorem impedit quo sed iste nisi.",
    },
  ];

  return (
  <div className="p-8 max-w-6xl mx-auto bg-black text-white mt-12">
    <h1 className="text-5xl font-medium mb-8 text-center">
        Crafting Excellence : <br /> Pioneering Events by IEEE NSUT
    </h1>


    <p className="text-md mb-24 text-center">
      With a focus on excellence, IEEE NSUT's events provide unparalleled opportunities for<br />
      networking, skill-building, and real-world problem-solving.
    </p>

    {/* First row: 2/3 - 1/3 */}
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <div className="flex-1 md:basis-2/3 bg-gray-900 p-4 md:p-8 text-white rounded-2xl">
        {/* <img src={boxes[0].img} alt={boxes[0].title} className="w-full mb-12 mt-4 rounded" /> */}
        <div className="mb-4 rounded">
            <TiltedCard
            imageSrc={boxes[0].img}
            altText={boxes[0].title}
            captionText={boxes[0].title}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="280px"
            imageWidth="100%"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            />
        </div>
        <h2 className="text-3xl font-semibold">{boxes[0].title}</h2>
        <p>{boxes[0].desc}</p>
      </div>
      <div className="flex-1 md:basis-1/3 bg-gray-900 p-4 md:p-8 text-white rounded-2xl">
        {/* <img src={boxes[1].img} alt={boxes[1].title} className="w-full mb-12 mt-4 rounded" /> */}
        <div className="mb-4">
            <TiltedCard
            imageSrc={boxes[1].img}
            altText={boxes[1].title}
            captionText={boxes[1].title}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="280px"
            imageWidth="100%"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            />
        </div>
        <h2 className="text-3xl font-semibold">{boxes[1].title}</h2>
        <p>{boxes[1].desc}</p>
      </div>
    </div>

    {/* Second row: 1/3 - 2/3 */}
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 md:basis-1/3 bg-gray-900 p-4 md:p-8 text-white rounded-2xl">
        {/* <img src={boxes[2].img} alt={boxes[2].title} className="w-full mb-12 mt-4 rounded" /> */}
        <div className="mb-4">
            <TiltedCard
            imageSrc={boxes[2].img}
            altText={boxes[2].title}
            captionText={boxes[2].title}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="280px"
            imageWidth="100%"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            />
        </div>
        <h2 className="text-3xl font-semibold">{boxes[2].title}</h2>
        <p>{boxes[2].desc}</p>
      </div>
      <div className="flex-1 md:basis-2/3 bg-gray-900 p-4 md:p-8 text-white rounded-2xl">
        {/* <img src={boxes[3].img} alt={boxes[3].title} className="w-full mb-12 mt-4 rounded" /> */}
        <div className="mb-4">
            <TiltedCard
            imageSrc={boxes[3].img}
            altText={boxes[3].title}
            captionText={boxes[3].title}
            containerHeight="300px"
            containerWidth="100%"
            imageHeight="280px"
            imageWidth="100%"
            rotateAmplitude={20}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            />
        </div>
        <h2 className="text-3xl font-semibold">{boxes[3].title}</h2>

        <p>{boxes[3].desc}</p>
      </div>
    </div>
  </div>
);
};

export default ResponsiveBoxes;