import React, { useState } from 'react';
import i1 from '../imgs/facilities/1.png';
import i2 from '../imgs/facilities/2.png';
import i3 from '../imgs/facilities/3.png';
import i4 from '../imgs/facilities/4.png';
import i5 from '../imgs/facilities/5.png';
import i6 from '../imgs/facilities/6.png';
import i7 from '../imgs/facilities/7.png';
import i8 from '../imgs/facilities/8.png';
import i9 from '../imgs/facilities/9.png';
import '../global.css'

const Facilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    
    <div className='px-5 py-20 bg-gray-300' id='facilities'>
      <div className='text-6xl font-semibold text-center'>
        <p>OUR FACILITIES </p>
      </div>
      <div className='flex flex-row sm:flex-col pt-10'>
      {/* Facility 1 */}
      <div
        className={`h-[30%] w-full flex flex-col items-center justify-center p-7 m-5 shadow-md card ${
          hoveredIndex === 0 ? 'hovered' : ''
        }`}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <div className='imgcard relative'>
        <img src={i1} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Highly Qualified & Expert Faculties</p>
        <p>
        Learn from experienced educators who specialize in delivering personalized attention and in-depth subject knowledge.
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
       <div className='imgcard'>
        <img src={i2} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Regular Test & Evaluation</p>
        <p>
        Stay on top of your progress with frequent assessments that track understanding and prepare you for board exams and beyond.
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
        <div className='imgcard'>
        <img src={i3} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Doubt Solving Sessions</p>
        <p>
        Clear your concepts instantly with dedicated doubt-solving sessions that ensure no question goes unanswered.
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
       <div className='imgcard'>
        <img src={i4} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Modules</p>
        <p>
        Access well-structured modules that simplify complex topics and make learning easy and organized.
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
     <div className='imgcard'>
        <img src={i5} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Animated Video Lectures</p>
        <p>
        Engage with interactive animated videos that bring subjects to life and make learning fun and memorable.
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
       <div className='imgcard'>
        <img src={i6} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Digital Classrooms</p>
        <p>
        Experience modern, technology-driven classrooms that enhance learning through digital tools and resources.
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
        <div className='imgcard'>
        <img src={i7} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Regular Parents Meeting</p>
        <p>
        Foster stronger communication with consistent parent-teacher meetings that ensure alignment on your child’s progress and goals.
        
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
       <div className='imgcard'>
        <img src={i8} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Monthly Progress Card:</p>
        <p>
        Keep track of performance with detailed monthly reports that highlight strengths and areas for improvement.

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
       <div className='imgcard'>
        <img src={i9} className='m-10 imgcard' alt='Facility 1' />
        </div>
        <p className='text-3xl text-center'>Educational Trip & Picnic</p>
        <p>
        Combine learning with fun through educational trips and picnics that broaden students' perspectives beyond the classroom.
        </p>
      </div>
      </div>
</div>
    
  );
};

export default Facilities;