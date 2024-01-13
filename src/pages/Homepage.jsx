import React from 'react';
import ImageCarousel from '../components/ImageCaraousel.jsx'; 
import AboutUs from '../components/AboutUs.jsx';
import Video from '../components/Video.jsx';
import Facilities from '../components/Facilities.jsx';
import OurApp from '../components/OurApp.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
// Homepage.jsx
const Homepage = () => {
  return (
    <div className='body'>
      <ImageCarousel />
      <AboutUs />
      <ContactUs />
      <Video />
      <Facilities />
     <Testimonials />
      <OurApp />
      
    </div>
  );
};


export default Homepage;
