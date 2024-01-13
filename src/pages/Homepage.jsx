import React from "react";

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
      <Results />
      <Courses />
      <Events />
      <Footer />
    </div>
  );
};

export default Homepage;
