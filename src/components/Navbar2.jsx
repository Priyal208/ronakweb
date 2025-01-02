import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import i2 from "../imgs/logo.png";
import "../global.css";

const Navbar2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar2 w-full h-[85px] bg-gray-300/30 backdrop-blur-xl shadow-black/60 shadow-md">
      {/* Navbar Container */}
      <div className="flex items-center justify-between h-full px-4 md:px-10 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={i2} alt="logo" className="h-10 md:h-12 lg:h-14" />
        </div>

        {/* Hamburger Icon (Mobile View) */}
        <div
          className="cursor-pointer"
          onClick={toggleSidebar}
        >
          <span className="text-2xl opacity-0 sm:opacity-[100%]">☰</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-6 lg:gap-10 text-sm sm:text-md z-10 font-medium text-black sm:hidden ">
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

      {/* Sidebar (Mobile View) */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-opacity-80 z-20 shadow-2xl transition duration-300 ease-in-out">
          <div className="w-[250px] h-full bg-white rounded-r-lg shadow-lg p-6 flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <span
                className="cursor-pointer text-4xl text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
                onClick={toggleSidebar}
              >
                &times;
              </span>
            </div>
            {/* Navigation Links in Sidebar */}
            <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700 bg-slate-200 p-10">
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#about" onClick={toggleSidebar}>ABOUT</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#results" onClick={toggleSidebar}>RESULT</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#testimonials" onClick={toggleSidebar}>TESTIMONIALS</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#facilities" onClick={toggleSidebar}>FACILITIES</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#events" onClick={toggleSidebar}>EVENTS</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#courses" onClick={toggleSidebar}>COURSES</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#contact" onClick={toggleSidebar}>CONTACT US</Link>
              </li>
              <li className="hover:text-gray-900 transition duration-300">
                <Link to="#ourapp" onClick={toggleSidebar}>OUR APP</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
