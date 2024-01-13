import React from "react";
import ImageCarousel from '../components/ImageCaraousel.jsx'; 
import AboutUs from '../components/AboutUs.jsx';
import Video from '../components/Video.jsx';
import Facilities from '../components/Facilities.jsx';
import OurApp from '../components/OurApp.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
// Homepage.jsx

import Navbar2 from "../components/Navbar2";

import Footer from "../components/Footer.jsx";
import Courses from "../components/Courses.jsx";
import { Link } from "react-router-dom";
import Events from "../components/Events.jsx";

import Results from "../components/Results.jsx";

const Homepage = () => {
  return (
    <div className="body">
      <Navbar2 />
      <ImageCarousel />
      <AboutUs /> 
      <Courses />
      <Events />
      <Facilities />
      <Testimonials />
      <Results />    
      <ContactUs />
      <OurApp />
      <Video />
      <Footer />
      
    </div>
  );
};


export default Homepage;
