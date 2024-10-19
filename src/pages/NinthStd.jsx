import React, { useState } from 'react';
import n1 from '../imgs/Ninth1.jpg';
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
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim ad placeat recusandae ratione nobis fugiat autem perferendis, expedita velit odit soluta fuga quas, eligendi explicabo, dolore tempora? Cum, eius.
               </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? </li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in?</li>
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
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim ad placeat recusandae ratione nobis fugiat autem perferendis, expedita velit odit soluta fuga quas, eligendi explicabo, dolore tempora? Cum, eius.
                Atque quisquam beatae sed quae? Quos molestias voluptas non repellat ad reiciendis natus, quae error repudiandae id exercitationem consequatur in eos repellendus mollitia ullam reprehenderit totam libero odit corporis laboriosam.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? A.
                Sed quaerat ducimus blanditiis magnam iure impedit, laborum quae, temporibus odit magni officiis libero incidunt, porro maxime. Recusandae vel cupiditate veritatis totam inventore odio consequuntur neque ipsum? Laborum, recusandae quo.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? A.
                Sed quaerat ducimus blanditiis magnam iure impedit, laborum quae, temporibus odit magni officiis libero incidunt, porro maxime. Recusandae vel cupiditate veritatis totam inventore odio consequuntur neque ipsum? Laborum, recusandae quo.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? A.
                Sed quaerat ducimus blanditiis magnam iure impedit, laborum quae, temporibus odit magni officiis libero incidunt, porro maxime. Recusandae vel cupiditate veritatis totam inventore odio consequuntur neque ipsum? Laborum, recusandae quo.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? A.
                Sed quaerat ducimus blanditiis magnam iure impedit, laborum quae, temporibus odit magni officiis libero incidunt, porro maxime. Recusandae vel cupiditate veritatis totam inventore odio consequuntur neque ipsum? Laborum, recusandae quo.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam veniam repellendus animi, deserunt et at doloribus id eaque molestiae dolor incidunt exercitationem quis suscipit necessitatibus fugiat nemo praesentium in? A.
                Sed quaerat ducimus blanditiis magnam iure impedit, laborum quae, temporibus odit magni officiis libero incidunt, porro maxime. Recusandae vel cupiditate veritatis totam inventore odio consequuntur neque ipsum? Laborum, recusandae quo.</li>
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
