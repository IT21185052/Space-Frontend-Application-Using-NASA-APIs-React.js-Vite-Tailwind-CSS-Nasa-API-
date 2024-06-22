import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import sateliteImg from "../../assets/satelite1.jpg";

const Details = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleViewAllClick = () => {
    navigate('/PhotoOfDay'); // Navigate to Photo of the Day page
  };

  return (
    <>
      <section className="bg-primary text-white pb-12" >
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Photo Of the Day
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                Welcome to NASA Photo of the Day! Embark on a daily journey through the cosmos with us as we unveil the universe's wonders one stunning image at a time. Each day, NASA brings us a captivating snapshot captured by satellites, telescopes, and rovers, offering a unique glimpse into the vast expanse of space. From mesmerizing views of our own planet Earth to breathtaking glimpses of distant galaxies and celestial phenomena, these photos encapsulate the beauty, mystery, and majesty of the cosmos. Join us as we marvel at the awe-inspiring sights and unravel the secrets of the universe together, one photo at a time.
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
