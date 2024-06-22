import React from "react";
import MountainPng from "../../assets/space1.png";

const Intro = () => {
  return (
    <div data-testid="intro-component">
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className=" text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              TOUCH WITH EARTH
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            "Welcome!Where we invite you to embark on a cosmic journey through the captivating wonders of space. Explore the beauty and mystery of the universe with our collection of stunning NASA photos, featuring the mesmerizing 'Photo of the Day' and breathtaking images captured by Mars rovers. Delve into the realms of distant planets, celestial phenomena, and the awe-inspiring landscapes of Mars. Whether you're a space enthusiast or simply curious about the cosmos. Join us as we venture into the cosmos and marvel at the boundless beauty of our universe."
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
    </div>
  );
};

export default Intro;