import React from 'react'
import i from '../imgs/Screenshot 2024-01-13 190835.png'

const ContactUs = () => {
    const handleButtonClick = () => {
      window.location.href = 'https://www.youtube.com/@ronakinstitute1990';
    };
  return (
    <div className='flex flex-row m-10' id='contact'>
    <div className='w-[40%] flex flex-col' data-aos="fade-right">
      <div>
        <p className='text-5xl md:text-2xl text-center font-bold ' >CONTACT US</p>
        <p className='py-10 text-center p-5 text-4xl md:text-xl'>
          FILL THE FORM TO GET FREE COUNSELLING SESSION 
        </p>
        <div className=' text-center'>
          <button
            className=' text-3xl md:text-xl sm:text-xs border-spacing-2  border-gray-900 btn2 p-2'
            onClick={handleButtonClick}
          >
            CLICK HERE!
          </button>
        </div>
      </div>
    </div>

    <div className='w-[60%] ml-60 md:ml-10' data-aos="fade-left">
      <img src={i} alt='App Screenshot' className='h-[400px]' />
    </div>
  </div>
  )
}

export default ContactUs;