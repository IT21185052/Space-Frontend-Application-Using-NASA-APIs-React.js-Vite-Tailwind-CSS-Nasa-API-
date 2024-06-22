import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import BgVideo from "./assets/earth.mp4";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Details from './components/Details/Details';
import Rapidscat2 from './components/Details/Details2';
import Footer from './components/Footer/Footer';
import Footer2 from './components/Footer/Footer2';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PhotoOfDay from './components/PhotoOfDay/PhotoOfDay';
import MarsRoverPhotos from './components/MarsRoverPhotos/MarsRoverPhotos';

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="h-screen flex justify-center items-center relative">
        <Navbar/>
        <video
          autoPlay
          loop
          muted
          className="fixed right-0 top-0 h-full w-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/PhotoOfDay' element={<PhotoOfDay />} />
          <Route path='/MarsRoverPhotos' element={<MarsRoverPhotos />} />
        </Routes>
      </div>
      {location.pathname!== '/PhotoOfDay' && location.pathname!== '/MarsRoverPhotos' && (
        <>
          <Features/>
          <Details/>
          <Rapidscat2/>
          <Footer/>
          <Footer2/>
        </>
      )}
    </>
  );
};

export default App;
