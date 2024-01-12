import React, { useState, useEffect } from 'react';
import i3 from '../imgs/sr_mishra_home.jpg';

const AboutUs = () => {
  const [experience, setExperience] = useState(0);
  const [studentsTaught, setStudentsTaught] = useState(0);

  useEffect(() => {
    const experienceLimit = 30; // Set the limit for experience counting
    const studentsLimit = 1000; // Set the limit for students counting

    const experienceInterval = setInterval(() => {
      setExperience((prevExperience) => (prevExperience < experienceLimit ? prevExperience + 1 : experienceLimit));
    }, 100);

    const studentsInterval = setInterval(() => {
      setStudentsTaught((prevStudentsTaught) => (prevStudentsTaught < studentsLimit ? prevStudentsTaught + 1 : studentsLimit));
    }, 1);

    // Cleanup intervals when the limit is reached
    return () => {
      clearInterval(experienceInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  return (
    <div className='flex flex-row py-20'>
      <div className='w-[50%] p-5'>
        <p className='text-5xl text-center font-semibold '>ABOUT US</p>
        <p className='py-10 text-center p-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat repellat distinctio earum ab optio consequuntur
          neque magni iusto facere. Culpa omnis repellat vero? Obcaecati, voluptas provident. Vitae quam itaque reiciendis
          dolores, tempora et eaque, deserunt odit ut officia sed incidunt deleniti ipsam illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat repellat distinctio earum ab optio consequuntur
          neque magni iusto facere. Culpa omnis repellat vero? Obcaecati, voluptas provident. Vitae quam itaque reiciendis
          dolores, tempora et eaque, deserunt odit ut officia sed incidunt deleniti ipsam illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat repellat distinctio earum ab optio consequuntur
          neque magni iusto facere. Culpa omnis repellat vero? Obcaecati, voluptas provident. Vitae quam itaque reiciendis
          dolores, tempora et eaque, deserunt odit ut officia sed incidunt deleniti ipsam illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugiat repellat distinctio earum ab optio consequuntur
          neque magni iusto facere. Culpa omnis repellat vero? Obcaecati, voluptas provident. Vitae quam itaque reiciendis
          dolores, tempora et eaque, deserunt odit ut officia sed incidunt deleniti ipsam illum! 
        </p>
      </div>
      <div className='w-[30%]'>
        <img src={i3} alt='About Us' />
      </div>
      <div className='w-[20%] py-10'>
        <div className='p-10'>
          <p className='text-5xl font-bold'>{experience}+</p>
          <p className='text-xl'>years of experience</p>
        </div>
        <div className='p-10'>
          <p className='text-5xl font-bold'>{studentsTaught}+</p>
          <p className='text-xl'>students taught</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
