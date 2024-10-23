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
          <p className='text-5xl md:text-2xl text-center  '>OUR APP</p>
          <p className='pt-10 text-center p-5 md:text-sm'>
          Ronak Institute App*

Welcome to the official Ronak Institute app—your personalized learning companion designed to enhance your educational journey! Our app is equipped with a variety of features to ensure that students, parents, and teachers stay connected and informed at all times. Here’s what you can expect:

- *Attendance Tracking*: Stay updated on your daily attendance with real-time tracking, ensuring consistent learning and accountability.
- *Daily Test Updates*: Get instant notifications about daily tests, helping you keep up with the syllabus and prepare effectively.
- *Study Materials*: Access all necessary study materials directly on your device, making learning flexible and convenient.
- *Recorded Video Lectures*: Missed a class? No problem! Watch recorded lectures anytime, anywhere, to revise concepts at your own pace.
- *SMS Updates*: Receive important announcements and updates via SMS to ensure you never miss any crucial information.
- *Chatbot Assistance*: Have questions? Get quick answers through our in-app chatbot, available 24/7 to guide you.
- *Circulars & Notices*: Stay informed with regular circulars and notices, keeping you updated about institute events and activities.
- *Online Exams*: Practice and assess your knowledge with online exams, simulating a real test environment right from your home.

Experience a seamless and effective learning environment with the Ronak Institute app—where education meets technology!</p>
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
