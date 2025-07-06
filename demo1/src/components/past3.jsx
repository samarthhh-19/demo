import React from "react";

const ResponsiveBoxes3 = () => {
  const boxes = [
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdsc.37c66f43.png&w=1920&q=75",
      title: "Box 1",
      desc: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis expedita asperiores eligendi quam unde voluptatem explicabo error est? Consequuntur, aliquid. Repellendus ut praesentium illum at?",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffigma2.b953de4f.jpg&w=750&q=75",
      title: "Box 2",
      desc: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis expedita asperiores eligendi quam unde voluptatem explicabo error est? Consequuntur, aliquid. Repellendus ut praesentium illum at?",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falgoverse.057f0e5e.jpg&w=640&q=75",
      title: "Box 3",
      desc: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis expedita asperiores eligendi quam unde voluptatem explicabo error est? Consequuntur, aliquid. Repellendus ut praesentium illum at?",
    },
    {
      img: "https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftech_transducer1.707e53e7.png&w=1920&q=75",
      title: "Box 4",
      desc: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore omnis expedita asperiores eligendi quam unde voluptatem explicabo error est? Consequuntur, aliquid. Repellendus ut praesentium illum at?",
    },
  ];

  return (
    <div className="p-8 max-w-full overflow-hidden bg-black text-white relative mt-24">
      <h1 className="text-5xl font-medium mb-8 text-center">
        Crafting Excellence: <br /> Pioneering Events by IEEE NSUT
      </h1>

      <p className="text-md mb-24 text-center">
        With a focus on excellence, IEEE NSUT's events provide unparalleled opportunities for
        networking, skill-building, and real-world problem-solving.
      </p>

      <div className="relative w-full">
        <div className="flex w-max animate-scroll whitespace-nowrap items-stretch">
          {[...boxes, ...boxes].map((box, idx) => {
            const isWide = (box.title === "Box 1" || box.title === "Box 4");
            return (
              <div
                key={idx}
                className={`flex-shrink-0 ${
                  isWide ? "w-[64rem]" : "w-[32rem]"
                } bg-gray-900 p-4 mx-4 rounded-2xl md:p-12`}
              >
                <img
                  src={box.img}
                  alt={box.title}
                  className="w-full mb-4 rounded md:mb-8"
                />
                <h2 className="text-xl font-semibold">{box.title}</h2>
                <p className="text-sm whitespace-normal break-words overflow-hidden">{box.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ResponsiveBoxes3;
