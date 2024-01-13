// Testimonials.js

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import logo from '../imgs/Screenshot 2024-01-10 223757.png';
import i1 from '../imgs/Screenshot 2024-01-13 195848.png';
import i2 from '../imgs/Screenshot 2024-01-13 195905.png';


const Testimonials = () => {
  const images = [i1, i2, i1, i2, i1];
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
    <div className='flex flex-wrap mb-20'>
      <div className='w-[100%] text-center my-5'>
        <p className='text-5xl md:text-2xl text-center font-semibold '>TESTIMONIALS</p>
      </div>
      <div className='lg:w-[47%] md:w-[100%] items-center my-5 m-5 relative '>
        <img
          className='testimonial-image'
          src={images[currentIndex]}
          alt={`testimonial-${currentIndex}`}
        />
        <div className='w-[100%] flex justify-between absolute bottom-0 mb-4 items-center'>
          <button
            onClick={handlePrevClick}
            className='px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-black transition duration-300'
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className='px-4 py-2 bg-slate-700 text-white rounded-full hover:bg-black transition duration-300'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className='lg:w-[50%] md:w-[100%] flex flex-row items-center'>
        <div className='w-[50%] m-5 items-center'>
          <div className='logo-container'>
            <img className='logo-image' src={logo} alt='logo' />
            <div className='play-button-container'>
              <a
                href='https://www.instagram.com/reel/CqxNj7uIe2a/?igsh=ODFsZmowNzY5NTUw'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='circular-button'>
                  <FaPlay />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='w-[50%] m-5 items-center'>
          <div className='logo-container'>
            <img className='logo-image' src={logo} alt='logo' />
            <div className='play-button-container'>
              <a
                href='https://www.instagram.com/reel/CqhgTskIybg/?igsh=czM4ZTZmOHF5aWho'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='circular-button'>
                  <FaPlay />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
