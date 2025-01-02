import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import i2 from "../imgs/logo.png";
import "../global.css";

const Navbar2 = () => {
  return (
    <div className="navbar2 w-full h-[85px] bg-gray-300/30 backdrop-blur-xl shadow-black/60 shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-full px-4 md:px-10 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={i2} alt="logo" className="h-10 md:h-12 lg:h-14" />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-6 lg:gap-10 text-sm sm:text-md font-medium text-black">
          <li className="hover:text-gray-700">
            <Link to="#about">ABOUT</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#results">RESULT</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#testimonials">TESTIMONIALS</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#facilities">FACILITIES</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#events">EVENTS</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#courses">COURSES</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#contact">CONTACT US</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="#ourapp">OUR APP</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
      