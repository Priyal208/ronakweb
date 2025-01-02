import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import logo from '../imgs/dhr.png';
import d from '../imgs/dr.png';
import i1 from '../imgs/testii/1.png';
import i2 from '../imgs/testii/2.png';
import i3 from '../imgs/testii/3.png';
import i4 from '../imgs/testii/4.png';
import i5 from '../imgs/testii/5.png';
import i6 from '../imgs/testii/6.png';
import i7 from '../imgs/testii/7.png';
import i8 from '../imgs/testii/8.png';
import i9 from '../imgs/testii/9.png';

import '../global.css';

const Testimonials = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center" id="testimonials">
      <div className="w-[100%] text-center my-5">
        <p className="text-6xl md:text-2xl text-center text-blue-900 font-bold">TESTIMONIALS</p>
      </div>

      {/* Top Images Section */}
      <div className="flex flex-row justify-center items-center w-full mb-10 gap-10">
        {/* Left Image */}
        <div className="flex flex-col items-center relative">
          <img
            className="logo-image w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
            src={logo}
            alt="logo"
          />
          {/* Play Button on Left Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="https://www.instagram.com/reel/CqxNj7uIe2a/?igsh=ODFsZmowNzY5NTUw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="circular-button bg-white shadow-lg">
                <FaPlay />
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center relative">
          <img
            className="logo-image w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] "
            src={d}
            alt="logo"
          />
          {/* Play Button on Right Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="https://www.instagram.com/reel/CqhgTskIybg/?igsh=czM4ZTZmOHF5aWho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="circular-button bg-white shadow-lg">
                <FaPlay />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative flex items-center justify-center w-full lg:w-[70%]">
        <img
          className="testimonial-image w-[80%] lg:w-[100%] rounded-xl shadow-lg"
          src={images[currentIndex]}
          alt={`testimonial-${currentIndex}`}
        />
        <div className="w-[100%] flex justify-between absolute bottom-0 mb-4 items-center">
          <button
            onClick={handlePrevClick}
            className="px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-black transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-black transition duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
