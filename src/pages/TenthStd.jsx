import React, { useState } from 'react';
import n1 from '../imgs/2 (1).png';
import Footer from '../components/Footer';
import { RxDoubleArrowDown } from 'react-icons/rx';
import '../global.css'
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

  const containerStyle1 = {
    height: isFirstExpanded ? '100%' : '20%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media (max-width: 900px)': {
      height: isFirstExpanded ? '800vh' : '15vh', // Adjust for medium screen size (md)
    },
  };

  const containerStyle2 = {
    height: isSecondExpanded ? '100%' : '20%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const arrowStyle1 = {
    marginTop: isFirstExpanded ? 'auto' : 'initial',
    transform: isFirstExpanded ? 'rotate(180deg)' : 'none',
  
  };

  const textVisibility1 = {
    
      display: isFirstExpanded ? 'block' : 'none',
  
  };
  const textVisibility2 = {
    
    display: isSecondExpanded ? 'block' : 'none',

};
  const arrowStyle2 = {
    marginTop: isSecondExpanded ? 'auto' : 'initial',
    transform: isSecondExpanded ? 'rotate(180deg)' : 'none',
  };

  

  return (
    <div>
      <img src={n1} alt="" />
      <div className='font-semibold text-3xl text-center border-2 p-10'>
        FOR CLASS IX STUDENTS
      </div>
      <div className='flex flex-col justify-center mb-10 items-center space-y-10'>
        <div className='bg-blue-800' style={containerStyle1}>
          <div className='font-thin text-[40px] md:text-[30px] sm:text-[18px] '>TARGET COMPETITIVE EXAMS</div>
          <div className='text-white  text-md p-3 ' style={textVisibility1}>
              <ul className='space-y-7'>
              <>
              Our Olympiad coaching goes beyond the basics, encouraging students to think critically, solve challenging problems, and explore advanced concepts. We provide focused training for Math, Science, and other relevant subjects, emphasizing logical reasoning and analytical skills. Olympiad preparation not only sharpens their minds but also acts as a stepping stone for higher competitive exams like JEE and NEET. We believe that early exposure to competitive learning helps students approach future challenges with greater confidence and competence.
              </>  
              </ul>
              </div>
          <RxDoubleArrowDown
            color='white'
            size={28}
            className='mt-3 cursor-pointer sm:w-4  sm:h-4'
            style={arrowStyle1}
            onClick={() => handleArrowClick(1)}
          />
        </div>
        <div className='bg-blue-800' style={containerStyle2}>
          <div className='font-thin text-[40px]  md:text-[30px] sm:text-[18px] '>TARGET NCERT EXAMS</div>
          <div className='text-white text-md p-3' style={textVisibility2}>
              <ul>
              <ul className='space-y-7'>
                <>
                For board exams, we follow the NCERT curriculum, ensuring comprehensive coverage of key subjects:

- *Mathematics*
- *Science*
- *English*
- *Gujarati*
- *Social Science*
- *Sanskrit*
- *Hindi*

We adopt a result-oriented teaching approach that combines patience, creativity, and clarity. Our expert teachers break down complex topics into simple concepts, making learning engaging and effective. With regular mock tests, detailed assessments, and interactive sessions, we aim to build confidence, enhance performance, and ensure students achieve their best results. 

                </>
              </ul>
              </ul>
              </div>
          <RxDoubleArrowDown
            color='white'
            size={28} 
            className='mt-3 cursor-pointer sm:w-4  sm:h-4'
            style={arrowStyle2}
            onClick={() => handleArrowClick(2)}
          />
          
        </div>
    
      </div>
      <Footer />
    </div>
  );
};


export default TenthStd;
