import React, { useState, useEffect } from 'react';
import i3 from '../imgs/left.png';
import i from '../imgs/right.png';
import '../global.css';

const AboutUs = () => {
  const [experience, setExperience] = useState(0);
  const [studentsTaught, setStudentsTaught] = useState(0);

  useEffect(() => {
    const experienceLimit = 30; // Set the limit for experience counting
    const studentsLimit = 10000; // Set the limit for students counting

    const experienceInterval = setInterval(() => {
      setExperience((prev) => {
        if (prev < experienceLimit) {
          return prev + 1;
        } else {
          clearInterval(experienceInterval);
          return experienceLimit;
        }
      });
    }, 100);

    const studentsInterval = setInterval(() => {
      setStudentsTaught((prev) => {
        if (prev < studentsLimit) {
          return prev + 100; // Increment by 100 for smoother counting
        } else {
          clearInterval(studentsInterval);
          return studentsLimit;
        }
      });
    }, 50); // Adjusted to prevent performance issues

    return () => {
      clearInterval(experienceInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  return (
    <div
      className="flex flex-row md:flex-col items-center lg:items-stretch py-20  justify-center"
      id="about"
    >
      <div className='flex flex-row items-center lg:w-[100%]'>
      {/* Left Image */}
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
        <img
          src={i3}
          alt="About Us"
          className="h-full object-contain max-h-[500px]"
        />
      </div>

      {/* About Us Text */}
      <div className="w-full lg:w-[50%] m-5 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-900">ABOUT US</h1>
        <p className="py-10 text-lg md:text-sm text-gray-700 leading-relaxed">
          Welcome to Ronak Institute, a legacy of excellence in education that
          has stood strong for over 35 years. Established with the goal of
          nurturing young minds, we have had the privilege of teaching over
          10,000 students, many of whom have gone on to become IITians,
          engineers, doctors, Chartered Accountants (CAs), Company Secretaries
          (CS), and successful professionals across various fields. Our
          commitment to quality education and personal growth has established us
          as a trusted name in academic coaching.
        </p>
      </div>
      </div>
      <div className=' flex flex-row lg:w-[100%]'>
      {/* Counters */}
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-start">
        <div className="text-center lg:text-left">
          <div className="ml-[5rem] mt-[10rem]">
            <p className="text-5xl md:text-2xl font-bold text-blue-900">{experience}+</p>
            <p className="text-lg md:text-base ">years of experience</p>
          </div> 
          <div className="ml-[5rem] pt-[2rem]">
            <p className="text-5xl md:text-2xl font-bold text-blue-900">{studentsTaught}+</p>
            <p className="text-lg md:text-base">students taught</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[50%] flex justify-center lg:justify-end">
        <img
          src={i}
          alt="About Us"
          className="h-full object-contain max-h-[500px]"
        />
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
