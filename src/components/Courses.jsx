import React from 'react';
import c1 from '../imgs/9.png';
import c2 from '../imgs/10.png';
import { Link } from "react-router-dom";
import backgroundImage from "../imgs/bgimg.avif"
import '../global.css'
const Courses = () => {
    return (
  <div className=' bg-slate-400 pb-10 py-20' id='courses'>
    <div className='text-black  text-center text-6xl '>COURSES</div>

  
      <div className="w-full h-[65vh] flex md:flex-col md:space-y-10 md:space-x-0  items-center justify-center space-x-32 ">
        
        <div className='w-[40%] md:w-[85%] maincontainer h-[70%] overflow-hidden rounded-lg position-relative gradient-background'>
          <div className='overlay'>
            <h1 className='text-white text1 text-[80px] font-semibold bottom-24 left-5'>9th</h1>
            <h2 className='text-white text1 text-[13px] text-left bottom-11 left-5'>
              At Ronak Institute, we offer a comprehensive coaching program for 9th-grade students, focusing on both board exams and Olympiads. Our approach is designed to strengthen foundational knowledge, enabling students to excel academically while also preparing them for competitive exams.
            </h2>
            <button className='btn-read-more bottom-5 left-5'>
              <Link to="/NinthStd">Read More</Link>
            </button>
          </div>
          <img src={c1} alt="9th Grade" className='w-full h-full object-fit p-[5px] rounded-lg' />
        </div>

        {/* 10th Grade Course */}
        <div className='w-[40%] md:w-[85%] h-[70%] maincontainer rounded-lg overflow-hidden gradient-background'>
          <div className='overlay'>
            <h1 className='text-white text1 text-[80px] font-semibold bottom-24 left-5'>10th</h1>
            <h2 className='text-white text1 text-[14px] bottom-12 left-5'>
              At Ronak Institute, we understand that 10th grade is a pivotal year, shaping the academic path of students as they prepare for their board exams. Our coaching program is designed to empower students to excel both in their board exams and Olympiad competitions.
            </h2>
            <button className='btn-read-more bottom-5 left-5'>
              <Link to="/TenthStd">Read More</Link>
            </button>
          </div>
          <img src={c2} alt="10th Grade" className='w-full h-full object-fit p-[5px] rounded-lg' />
        </div>
      </div>
    </div>
  );
};

export default Courses;

/* Inline CSS Styles */
const styles = `
.btn-read-more {
  background-color: #ffffff;
  border: 2px solid #ffffff;
  color: #000000;
  border-radius: 999px; /* Circular edges */
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-read-more a {
  text-decoration: none;
  color: inherit;
}

.btn-read-more:hover {
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
  transform: scale(1.05); /* Slight zoom effect */
}

.overlay {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5); /* Add transparency */
}
.gradient-background {
  background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);
}
`;

/* Adding the styles to the document head */
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
