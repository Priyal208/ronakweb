import React, { useState } from 'react';
import i1 from '../imgs/online_test.png';

const Facilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className='px-5 py-40'>
      <div className='text-6xl font-semibold text-center'>
        <p>OUR FACILITIES </p>
      </div>
      <div className='flex flex-row sm:flex-col'>
      {/* Facility 1 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 0 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 1' />
        <p className='text-3xl text-center'>Facility 1 Title</p>
        <p>
          Facility 1 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 2 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 1 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 2' />
        <p className='text-3xl text-center'>Facility 2 Title</p>
        <p>
          Facility 2 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 3 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7  m-5 shadow-md card ${
          hoveredIndex === 2 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 3' />
        <p className='text-3xl text-center'>Facility 3 Title</p>
        <p>
          Facility 3 Description. Replace this text with your facility's
          description.
        </p>
      </div>
      </div>
      <div className='flex flex-row sm:flex-col'>
      {/* Facility 4 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 3 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 4' />
        <p className='text-3xl text-center'>Facility 4 Title</p>
        <p>
          Facility 4 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 5 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 4 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 5' />
        <p className='text-3xl text-center'>Facility 5 Title</p>
        <p>
          Facility 5 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 6 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 5 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 6' />
        <p className='text-3xl text-center'>Facility 6 Title</p>
        <p>
          Facility 6 Description. Replace this text with your facility's
          description.
        </p>
      </div>
      </div>
      <div className='flex flex-row sm:flex-col'>
      {/* Facility 7 */}
      <div
        className={`h-[30%] w-full flex flex-col  items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 6 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(6)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 7' />
        <p className='text-3xl text-center'>Facility 7 Title</p>
        <p>
          Facility 7 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 8 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 7 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(7)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 8' />
        <p className='text-3xl text-center'>Facility 8 Title</p>
        <p>
          Facility 8 Description. Replace this text with your facility's
          description.
        </p>
      </div>

      {/* Facility 9 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 8 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(8)}
        onMouseLeave={handleMouseLeave}
      >
        <img src={i1} className='m-10' alt='Facility 9' />
        <p className='text-3xl text-center'>Facility 9 Title</p>
        <p>
          Facility 9 Description. Replace this text with your facility's
          description.
        </p>
      </div>
      </div>
</div>
    
  );
};

export default Facilities;
