import React , {useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePicture, AiOutlinePhone } from 'react-icons/ai';
import AddLoginReg from '../../components/AddLoginReg/AddLoginReg';
import PhotoOfDay from '../../components/PhotoOfDay/PhotoOfDay';
import MarsRoverPhotos from '../../components/MarsRoverPhotos/MarsRoverPhotos';


const Navbar = () => {
  const [menu,setMenu] = useState("Home")
  return (
    <>
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <Link to='/'><span>NASA-SPACE</span></Link>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4">
              <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
            <div className="flex flex-col items-center">
              <AiOutlineHome /> {/* Home Icon */}
              <Link to='/'><span>Home</span></Link> {/* Title */}
            </div>
              </li>
              <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
            <div className="flex flex-col items-center">
              <AiOutlineInfoCircle /> {/* Features Icon */}
              <Link to='/Features'><span>Features</span></Link> {/* Title */}
            </div>
              </li>
              <li onClick={() => setMenu("technology")} className={menu === "technology" ? "active" : ""}>
            <div className="flex flex-col items-center">
              <AiOutlinePicture /> {/* Gallery Icon */}
              <Link to='/Details'><span>Gallery</span></Link> {/* Title */}
            </div>
              </li>
              <li onClick={() => setMenu("galaxy")} className={menu === "galaxy" ? "active" : ""}>
            <div className="flex flex-col items-center">
              <AiOutlinePhone /> {/* Contact Icon */}
              <Link to='/Footer'><span>Contact</span></Link> {/* Title */}
            </div>
              </li>
              <li onClick={() => setMenu("photo")} className={menu === "photo"? "active" : ""}>
            <div className="flex flex-col items-center">
              <AiOutlinePicture /> {/* Photo Icon */}
              <Link to='/PhotoOfDay'><span>APOD</span></Link> {/* Title */}
            </div>
              </li>
              <li onClick={() => setMenu("marsRoverPhotos")} className={menu === "marsRoverPhotos" ? "active" : ""}>
                 <div className="flex flex-col items-center">
                    <AiOutlinePicture /> {/* Mars Rover Photos Icon */}
                    <Link to='/MarsRoverPhotos'><span>Mars Rover Photos</span></Link> {/* Title */}
                 </div>
                </li>
            </ul>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
