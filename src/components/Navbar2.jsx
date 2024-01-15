import React from "react";
import i1 from "../imgs/Untitled design.jpg"
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar2 = () => {
  return (
    <div className=" navbar2 w-full h-[85px]  bg-gray-300/30 backdrop-blur-xl  shadow-black/60 shadow-md">
      <div className="mx-36 mt-2">
      <img src={i1} alt="logoimg" className=" ring-4 ring-gray-300 imglogo h-[27vh] w-[27vh] " />
      </div>
      <div>
        <ul className="flex items-center font-medium text-md px-[5%] text-black absolute top-0 right-0 h-full justify-end gap-16">
          <li className="btn btn-center ">
            <Link to ='#about'>
            ABOUT
            </Link>
            </li>
          <li className="btn btn-center ">
            <Link to= '#results'>RESULT</Link></li>
          <li className="btn btn-center "><Link to='#testimonials'>TESTIMONIALS</Link></li>
          <li className="btn btn-center ">
            <Link to = '#facilities'>
            FACILITIES
            </Link>
          </li>
          <li className="btn btn-center "><Link to = '#events'>EVENTS</Link></li>
          <li className="btn btn-center "><Link to='#courses'>COURSES</Link></li>
          <li className="btn btn-center "><Link to='#contact'>CONTACT US</Link></li>
          <li className="btn btn-center "><Link to='#ourapp'>OUR APP</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
