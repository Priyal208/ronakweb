import React from 'react';
import i from '../imgs/bigstock-Smart-Phone-With-Blue-Screen-I-29625884 (2).jpg';

const OurApp = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/@ronakinstitute1990';
  };

  return (
    <div className='flex flex-row '>
      <div className='w-[30%] ml-60 md:ml-10' data-aos="fade-right" >
        <img src={i} alt='App Screenshot' className='h-[400px]' />
      </div>

      <div className='w-[70%] flex flex-col' data-aos="fade-left">
        <div>
          <p className='text-5xl md:text-2xl text-center font-semibold '>OUR APP</p>
          <p className='py-10 text-center p-5 md:text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur molestias voluptate, enim porro blanditiis aliquid dolorum cum quisquam non, totam provident fugit. Aut velit nisi aliquid eaque, nesciunt illum.
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
