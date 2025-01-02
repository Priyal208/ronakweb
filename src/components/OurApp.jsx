import React from 'react';
import i from '../imgs/Schedule.png';
import '../global.css'
const OurApp = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/@ronakinstitute1990';
  };

  return (
    <div className='flex flex-row py-20' id='ourapp'>
      <div className='w-[30%] ml-60 md:ml-10' data-aos="fade-right" >
        <img src={i} alt='App Screenshot' className='h-[400px]' />
      </div>

      <div className='w-[70%] flex flex-col' data-aos="fade-left">
        <div> 
          <p className='md:text-2xl text-center text-blue-900 font-bold text-6xl '>OUR APP</p>
          <p className='pt-10 text-lg text-center p-5 md:text-sm'>
          Welcome to the official Ronak Institute app—your personalized learning companion! Our app helps students, parents, and teachers stay connected. Key features include:
          <ul className='list-disc text-lg text-left mx-auto md:mx-0 md:text-base mb-8'>
            <li>Attendance Tracking</li>
            <li>Daily Test Updates</li>
            <li>Study Materials & Recorded Lectures</li>
            <li>SMS Updates & Chatbot Assistance</li>
            <li>Online Exams</li>
          </ul>
       </p>
          <div className=' text-center'>
            <button
              className=' text-3xl md:text-xl sm:text-xs border-spacing-2 border-gray-900 btn1 p-2'
              onClick={handleButtonClick}
            >
              DOWNLOAD NOW!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
