import React, { useState } from 'react';
import n1 from '../imgs/2 (1).png';
import Footer from '../components/Footer';
import { RxDoubleArrowDown } from 'react-icons/rx';
import '../global.css';

const TenthStd = () => {
  const [isFirstExpanded, setFirstExpanded] = useState(false);
  const [isSecondExpanded, setSecondExpanded] = useState(false);

  const handleArrowClick = (index) => {
    if (index === 1) {
      setFirstExpanded(!isFirstExpanded);
    } else if (index === 2) {
      setSecondExpanded(!isSecondExpanded);
    }
  };

  const glassContainerStyle = (isExpanded) => ({
    height: isExpanded ? '100%' : '20%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.7)', // Increased opacity for better text visibility
    boxShadow: '0 8px 32px 0 rgba(239, 60, 45, 0.5)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '20px',
    transition: 'height 0.3s ease-in-out',
  });

  const textStyle = {
    color: '#000', 
    fontWeight: '500',
  };

  const arrowStyle = (isExpanded) => ({
    marginTop: isExpanded ? 'auto' : 'initial',
    transform: isExpanded ? 'rotate(180deg)' : 'none',
    transition: 'transform 0.3s ease',
  });

  const textVisibility = (isExpanded) => ({
    display: isExpanded ? 'block' : 'none',
    transition: 'display 0.3s ease',
  });

  return (
    <div>
      <img src={n1} alt="" />
      <div className="flex flex-col justify-center mb-10 items-center space-y-10 pt-[5rem]">
        <div style={glassContainerStyle(isFirstExpanded)}>
          <div className="font-thin text-[40px] md:text-[30px] sm:text-[18px]" style={textStyle}>
            TARGET COMPETITIVE EXAMS
          </div>
          <div className="text-md p-3" style={{ ...textVisibility(isFirstExpanded), ...textStyle }}>
            <ul className="space-y-7">
              <li>
                Our Olympiad coaching goes beyond the basics, encouraging students to think critically, solve challenging problems, and explore advanced concepts. We provide focused training for Math, Science, and other relevant subjects, emphasizing logical reasoning and analytical skills. Olympiad preparation not only sharpens their minds but also acts as a stepping stone for higher competitive exams like JEE and NEET. We believe that early exposure to competitive learning helps students approach future challenges with greater confidence and competence.
              </li>
            </ul>
          </div>
          <RxDoubleArrowDown
            color="black" // Changed arrow color to black for better contrast
            size={28}
            className="mt-3 cursor-pointer sm:w-4 sm:h-4"
            style={arrowStyle(isFirstExpanded)}
            onClick={() => handleArrowClick(1)}
          />
        </div>

        <div style={glassContainerStyle(isSecondExpanded)}>
          <div className="font-thin text-[40px] md:text-[30px] sm:text-[18px]" style={textStyle}>
            TARGET NCERT EXAMS
          </div>
          <div className="text-md p-3" style={{ ...textVisibility(isSecondExpanded), ...textStyle }}>
            <ul className="space-y-7">
              <li>
                For board exams, we follow the NCERT curriculum, ensuring comprehensive coverage of key subjects:
              </li>
              <li>* Mathematics</li>
              <li>* Science</li>
              <li>* English</li>
              <li>* Gujarati</li>
              <li>* Social Science</li>
              <li>* Sanskrit</li>
              <li>* Hindi</li>
              <li>
                We adopt a result-oriented teaching approach that combines patience, creativity, and clarity. Our expert teachers break down complex topics into simple concepts, making learning engaging and effective. With regular mock tests, detailed assessments, and interactive sessions, we aim to build confidence, enhance performance, and ensure students achieve their best results.
              </li>
            </ul>
          </div>
          <RxDoubleArrowDown
            color="black" // Changed arrow color to black for better contrast
            size={28}
            className="mt-3 cursor-pointer sm:w-4 sm:h-4"
            style={arrowStyle(isSecondExpanded)}
            onClick={() => handleArrowClick(2)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TenthStd;
