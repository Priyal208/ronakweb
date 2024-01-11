import React from "react";

const Navbar2 = () => {
  return (
    <div className="w-full h-[70px] bg-slate-700/90 backdrop-blur-xl relative shadow-black/50 shadow-md">
      <div>
        <ul className="flex items-center px-[5%] text-white absolute top-0 right-0 h-full justify-end gap-20">
          <li>About</li>
          <li>Result</li>
          <li>Testimonials</li>
          <li>Gallery</li>
          <li>Events</li>
          <li>Glimpses</li>
          <li>Courses</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
