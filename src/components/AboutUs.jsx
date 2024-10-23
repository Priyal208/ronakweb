import React, { useState, useEffect } from 'react';
import i3 from '../imgs/left.png';
import i from '../imgs/right.png'
import '../global.css'

const AboutUs = () => {
  const [experience, setExperience] = useState(0);
  const [studentsTaught, setStudentsTaught] = useState(0);

  useEffect(() => {
    const experienceLimit = 30; // Set the limit for experience counting
    const studentsLimit = 10000; // Set the limit for students counting

    const experienceInterval = setInterval(() => {
      setExperience((prevExperience) => (prevExperience < experienceLimit ? prevExperience + 1 : experienceLimit));
    }, 100);

    const studentsInterval = setInterval(() => {
      setStudentsTaught((prevStudentsTaught) => (prevStudentsTaught < studentsLimit ? prevStudentsTaught + 1 : studentsLimit));
    }, .01);

    // Cleanup intervals when the limit is reached
    return () => {
      clearInterval(experienceInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  return (
    <div className='flex flex-wrap lg:flex-row py-20' id='about'>
      <div className='w-[25%]'>
          <img src={i3} alt='About Us' className='w-full lg:w-auto' />
        </div>

      <div className='lg:w-[25%] p-5  sm:w-[100%]'>
        <p className='text-6xl md:text-2xl text-center ml-[10%]'>ABOUT US</p>
        <p className='py-10 text-center p-5 md:text-sm ml-[10%]'>
        Welcome to Ronak Institute, a legacy of excellence in education that has stood strong for over 35 years. Established with the goal of nurturing young minds, we have had the privilege of teaching over 10,000 students, many of whom have gone on to become IITians, engineers, doctors, Chartered Accountants (CAs), Company Secretaries (CS), and successful professionals across various fields. Our commitment to quality education and personal growth has established us as a trusted name in academic coaching.</p>
      </div>
      
      <div className='lg:w-[25%] sm:w-[100%] flex flex-row'>
        <div className='w-[40%] ml-[40%]'>
          <div className='p-10'>
            <p className='text-5xl md:text-2xl font-bold'>{experience}+</p>
            <p className='text-xl md:text-base'>years of experience</p>
          </div>
          <div className='p-10'>
            <p className='text-5xl md:text-2xl font-bold'>{studentsTaught}+</p>
            <p className='text-xl md:text-base'>students taught</p>
          </div>
        </div>
      </div>

      <div className='w-[25%]'>
          <img src={i} alt='About Us' className='w-full lg:w-auto' />
      </div>
    </div>



  );
};

export default AboutUs;
