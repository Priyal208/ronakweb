import React from 'react';
import logo from '../imgs/Screenshot 2024-01-10 223757.png';
const Navbar = () => {
  return (
    <div className='bg-slate-300 flex flex-row h-60 w-full py-10'>
        <img src={logo} className='h-40 w-48 mx-5'alt="Example"/>
      <div className='px-18 mx-7 text-2xl'>About Us</div>
      <div className='mx-7 text-2xl'>Results</div>
      <div className='mx-7 text-2xl'>Testimonials</div>
      <div className='mx-7 text-2xl'>Gallery</div>
      <div className='mx-7 text-2xl'>Events</div>
      <div className='mx-7 text-2xl'>Videos</div>
      <div className='mx-7 text-2xl'>Courses</div>
      <div className='mx-7 text-2xl'>Contact Us</div>
      <div className='mx-7 text-2xl'>Our App</div>
    </div>
  );
}

export default Navbar;
