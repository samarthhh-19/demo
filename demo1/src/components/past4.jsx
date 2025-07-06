import React from "react";
import CardSwap, { Card } from "./CardSwap/CardSwap";

const HeroSection = () => {
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
    <section className="flex w-full h-screen text-white bg-black overflow-hidden relative mt-24">
      {/* Left 1/3: Text content */}
      <div className="w-1/2 flex flex-col justify-center items-start pl-12 pr-8 z-10">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Crafting Excellence : Pioneering Events by IEEE NSUT
        </h1>
        <p className="text-lg mb-4">
          With a focus on excellence, IEEE NSUT's events provide unparalleled opportunities for
networking, skill-building, and real-world problem-solving.
        </p>
      </div>

      {/* Right 2/3: Animated cards */}
      <div className="w-1/2 relative flex items-center justify-center">
        <CardSwap width={500} height={650} cardDistance={90} verticalDistance={70} delay={4000}>
          <Card>
            <div className="flex flex-col h-full w-full overflow-hidden rounded-xl">
              <img
                src={boxes[0].img}
                alt="box 0"
                className="h-3/5 w-full object-contain"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{boxes[0].title}</h2>
                <p className="text-sm text-gray-300">
                  {boxes[0].desc}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col h-full w-full overflow-hidden rounded-xl">
              <img
                src={boxes[1].img}
                alt="Innovation 2"
                className="h-3/5 w-full object-contain"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{boxes[1].title}</h2>
                <p className="text-sm text-gray-300">
                  {boxes[1].desc}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col h-full w-full overflow-hidden rounded-xl">
              <img
                src={boxes[2].img}
                alt="Innovation 3"
                className="h-3/5 w-full object-contain"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{boxes[2].title}</h2>
                <p className="text-sm text-gray-300">
                  {boxes[2].desc}
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col h-full w-full overflow-hidden rounded-xl">
              <img
                src={boxes[3].img}
                alt="Innovation 4"
                className="h-3/5 w-full object-contain"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{boxes[3].title}</h2>
                <p className="text-sm text-gray-300">
                  {boxes[3].desc}
                </p>
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
};

export default HeroSection;
