import React from "react";
import wave from "../../assets/wave.gif";
import { FaImages } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

const ServiceData = [
  {
    title: "Image Gallary",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaImages className="text-7xl" />,
    aosDelay: "200",
  },
  {
    title: "Exploring",
    description:
      "Used for astronomical explorations using astronomy image gallary.",
    icon: <FaShuttleSpace className="text-7xl" />,
    aosDelay: "200",
  },
  {
    title: "History",
    description:
      "Finding our Astronomical History Bryond the Universe",
    icon: <FaSpaceAwesome className="text-7xl" />,
    aosDelay: "200",
  },
];
const Features = () => {
  return (
    <>
      <section className="bg-primary">
        <div className="container">
          <div className="min-h-[400px]">
            <div>
              <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 ">
                {ServiceData.map((data, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      data-aos-delay={data.aosDelay}
                      className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                    >
                      {data.icon}
                      <h1>{data.title}</h1>
                      <p>{data.content}</p>
                      <p className="text-sm">{data.description}</p>
                    </div>
                  );
                })}
              </div>
              <img
                src={wave}
                alt=""
                className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;