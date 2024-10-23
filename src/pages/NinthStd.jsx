import React, { useState } from 'react';
import n1 from '../imgs/1 (2).png';
import Footer from '../components/Footer';
import { RxDoubleArrowDown } from 'react-icons/rx';
import '../global.css'

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
In addition to board exam preparation, we place significant emphasis on Olympiad training. Olympiads play a crucial role in developing analytical and problem-solving skills, which are not only beneficial for academic excellence but also lay a strong foundation for competitive exams like JEE and NEET. Our Olympiad training covers advanced concepts, focusing on critical thinking and innovative approaches, helping students build a strong foundation for their future academic and professional pursuits.
                </></ul>
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
              For board exams, we primarily focus on the NCERT curriculum, ensuring thorough understanding across all subjects:

- *Mathematics*
- *Science*
- *English*
- *Gujarati*
- *Social Science*
- *Sanskrit*
- *Hindi*

We believe in a unique, patient, and creative teaching method that allows students to grasp concepts effectively within the classroom itself. Our experienced faculty uses interactive learning techniques to make lessons engaging and easily comprehensible. We also provide regular assessments and personalized feedback to monitor progress and boost confidence.

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

export default NinthStd;
