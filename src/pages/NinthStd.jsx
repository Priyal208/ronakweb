import React, { useState } from 'react';
import n1 from '../imgs/1 (2).png';
import Footer from '../components/Footer';
import { RxDoubleArrowDown } from 'react-icons/rx';
import '../global.css';

const NinthStd = () => {
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
    background: 'rgba(255, 255, 255, 0.5)', // Increased opacity for better text visibility
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '20px',
    transition: 'height 0.3s ease-in-out',
  });

  const textStyle = {
    color: '#000', // Changed text color to black for better visibility
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
                In addition to board exam preparation, we place significant emphasis on Olympiad training. Olympiads play a crucial role in developing analytical and problem-solving skills, which are not only beneficial for academic excellence but also lay a strong foundation for competitive exams like JEE and NEET. Our Olympiad training covers advanced concepts, focusing on critical thinking and innovative approaches, helping students build a strong foundation for their future academic and professional pursuits.
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
                For board exams, we primarily focus on the NCERT curriculum, ensuring thorough understanding across all subjects:
              </li>
              <li>* Mathematics</li>
              <li>* Science</li>
              <li>* English</li>
              <li>* Gujarati</li>
              <li>* Social Science</li>
              <li>* Sanskrit</li>
              <li>* Hindi</li>
              <li>
                We believe in a unique, patient, and creative teaching method that allows students to grasp concepts effectively within the classroom itself. Our experienced faculty uses interactive learning techniques to make lessons engaging and easily comprehensible. We also provide regular assessments and personalized feedback to monitor progress and boost confidence.
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

export default NinthStd;
