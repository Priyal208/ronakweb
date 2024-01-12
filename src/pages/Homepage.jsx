import React from "react";

import Navbar2 from "../components/Navbar2";

import Footer from "../components/Footer.jsx";
import Courses from "../components/Courses.jsx";



const Homepage = () => {
  return (
    <div>   
      <Navbar2/>
      <Courses/> 
      <Footer/>
    </div>
  );
};

export default Homepage;
