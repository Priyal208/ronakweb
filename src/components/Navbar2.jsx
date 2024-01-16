import React from "react";
import i1 from "../imgs/Untitled design.jpg"
import '../global.css'
const Navbar2 = () => {
  return (
    <div className=" navbar2 w-full h-[85px] bg-gray-300/30 backdrop-blur-xl  shadow-black/60 shadow-md">
      <div className="mx-36 mt-2">
      <img src={i1} alt="logoimg" className=" ring-4 ring-gray-300 imglogo h-[27vh] w-[27vh] " />
      </div>
      <div>
        <ul className="flex items-center text-1xl   px-[5%] text-black absolute top-0 right-0 h-full justify-end gap-16">
          <li className="btn btn-center ">ABOUT</li>
          <li className="btn btn-center ">RESULT</li>
          <li className="btn btn-center ">TESTIMONIALS</li>
          <li className="btn btn-center ">GALLERY</li>
          <li className="btn btn-center ">EVENTS</li>
          <li className="btn btn-center ">GLIMPSES</li>
          <li className="btn btn-center ">COURSES</li>
          <li className="btn btn-center ">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
