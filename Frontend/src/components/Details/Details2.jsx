import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import satelitImg from "../../assets/satelite2.jpg";

const Rapidscat2 = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleViewAllClick = () => {
    navigate('/MarsRoverPhotos'); // Navigate to Mars Rover Photos page
  };

  return (
    <>
      <section className="bg-primary text-white py-20">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Mars Rover Photos
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Welcome to NASA's Mars Rover Photos! Dive into the rugged and mysterious terrain of the Red Planet through the lens of NASA's intrepid rovers. Explore the Martian landscape as you journey across vast plains, towering mountains, and ancient valleys, discovering fascinating geological features and clues about the planet's past. These photos, captured by NASA's rovers on Mars' surface, provide invaluable insights into the planet's geology, climate, and potential for past or present life. Join us as we unravel the mysteries of Mars and witness the incredible discoveries made by our robotic explorers on this fascinating journey of exploration and discovery.
              </p>
              <button
                onClick={handleViewAllClick} // Call handleViewAllClick function on button click
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat2;
