import React from 'react';
import ImageCarousel from '../components/ImageCaraousel.jsx'; 
import AboutUs from '../components/AboutUs.jsx';
import Video from '../components/Video.jsx';
import Facilities from '../components/Facilities.jsx';
// Homepage.jsx
const Homepage = () => {
  return (
    <div className='body'>
      <ImageCarousel />
      <AboutUs />
      <Video />
      <Facilities />
    </div>
  );
};


export default Homepage;
