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
import '../global.css';

const Facilities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const facilitiesData = [
    {
      img: i1,
      title: 'Highly Qualified & Expert Faculties',
      description: 'Learn from experienced educators who specialize in delivering personalized attention and in-depth subject knowledge.',
    },
    {
      img: i2,
      title: 'Regular Test & Evaluation',
      description: 'Stay on top of your progress with frequent assessments that track understanding and prepare you for board exams and beyond.',
    },
    {
      img: i3,
      title: 'Doubt Solving Sessions',
      description: 'Clear your concepts instantly with dedicated doubt-solving sessions that ensure no question goes unanswered.',
    },
    {
      img: i4,
      title: 'Modules',
      description: 'Access well-structured modules that simplify complex topics and make learning easy and organized.',
    },
    {
      img: i5,
      title: 'Animated Video Lectures',
      description: 'Engage with interactive animated videos that bring subjects to life and make learning fun and memorable.',
    },
    {
      img: i6,
      title: 'Digital Classrooms',
      description: 'Experience modern, technology-driven classrooms that enhance learning through digital tools and resources.',
    },
    {
      img: i7,
      title: 'Regular Parents Meeting',
      description: 'Foster stronger communication with consistent parent-teacher meetings that ensure alignment on your child’s progress and goals.',
    },
    {
      img: i8,
      title: 'Monthly Progress Card',
      description: 'Keep track of performance with detailed monthly reports that highlight strengths and areas for improvement.',
    },
    {
      img: i9,
      title: 'Educational Trip & Picnic',
      description: 'Combine learning with fun through educational trips and picnics that broaden students\' perspectives beyond the classroom.',
    },
  ];

  return (
    <div className='px-5 py-20' id='facilities'>
      <div className='text-6xl font-bold text-center mb-10 text-blue-900'>
        <p>OUR FACILITIES</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {facilitiesData.map((facility, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-lg shadow-lg backdrop-blur-md bg-white/30 border border-white/20 transition-all duration-300 transform hover:scale-105 ${
              hoveredIndex === index ? 'hovered' : ''
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className='flex justify-center'>
              <img src={facility.img} alt={facility.title} className='w-32 h-32 object-contain' />
            </div>
            <div className='mt-5 text-center'>
              <p className='text-2xl font-semibold mb-3'>{facility.title}</p>
              <p className='text-sm text-gray-700'>{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;