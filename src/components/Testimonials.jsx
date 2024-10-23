// Testimonials.js

import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa';
import logo from '../imgs/dhr.png';
import d from '../imgs/dr.png'
import i1 from '../imgs/testii/1.png';
import i2 from '../imgs/testii/2.png';
import i3 from '../imgs/testii/3.png';
import i4 from '../imgs/testii/4.png';
import i5 from '../imgs/testii/5.png';
import i6 from '../imgs/testii/6.png';
import i7 from '../imgs/testii/7.png';
import i8 from '../imgs/testii/8.png';
import i9 from '../imgs/testii/9.png';

import '../global.css'

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
    <div className='flex flex-wrap mb-20 py-20' id='testimonials'>
      <div className='w-[100%] text-center my-5'>
        <p className='text-6xl md:text-2xl text-center '>TESTIMONIALS</p>
      </div>
      <div className='lg:w-[47%] md:w-[100%] items-center my-5 m-5 relative pt-10'>
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
            <img className='logo-image' src={d} alt='logo' />
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
