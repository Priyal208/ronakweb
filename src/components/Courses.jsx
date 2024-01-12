import React from 'react';
import c1 from '../imgs/Cour4.jpg';
import c2 from '../imgs/Cour5.jpg';

const Courses = () => {
    return (
      <div className="w-full h-[65vh] bg-black flex items-center justify-center space-x-32">
        <div className='w-[40%] maincontainer h-[70%] overflow-hidden rounded-lg position-relative gradient-background'>
            <div className='overlay'>
        <h1 className=' text-white text1 text-[80px] font-semibold bottom-24 left-5'>9th</h1>
        <h2 className=' text-white text1 text-[14px] text-left bottom-12 left-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati a nobis ipsum mollitia minus ullam voluptas reiciendis reprehenderit quis debitis odio, excepturi distinctio laborum rerum, ut nulla repellat. At.</h2>
        <button className='text-white text1 text-[10px]  bottom-5 left-5'>Read more</button>
        </div>
          <img src={c1} alt="" className='w-full h-full object-cover p-[5px] rounded-lg' /> 
         
        </div>
        <div className='w-[40%] h-[70%] maincontainer rounded-lg overflow-hidden gradient-background'>
        <div className='overlay'>
        <h1 className=' text-white text1 text-[80px] font-semibold bottom-24  left-5'>10th</h1>
        <h2 className=' text-white text1 text-[14px]  bottom-12 left-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati a nobis ipsum mollitia minus ullam voluptas reiciendis reprehenderit quis debitis odio, excepturi distinctio laborum rerum, ut nulla repellat. At.</h2>
        <button className='text-white text1 text-[10px]  bottom-5 left-5'>Read more</button>
        </div>
          <img src={c2} alt="" className='w-full h-full object-cover p-[5px] rounded-lg' />  
        </div>
      </div>
    );
  };
  

export default Courses;
