import React, { useState, useEffect } from 'react';
import i3 from '../imgs/sr_mishra_home.jpg';
import '../global.css'

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
    <div className='flex flex-wrap lg:flex-row py-20 '>
      <div className='lg:w-[50%] p-5 order-last lg:order-first sm:w-[100%]'>
        <p className='text-6xl md:text-2xl text-center '>ABOUT US</p>
        <p className='py-10 text-center p-5 md:text-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolorum placeat nostrum quibusdam minima est, pariatur odio non odit, perspiciatis illo doloribus, aliquam facere perferendis ipsa repudiandae ipsum totam veritatis architecto incidunt maiores numquam excepturi obcaecati. Accusantium deserunt alias ratione optio aliquam obcaecati maxime eius iusto, quisquam temporibus corrupti rem itaque placeat, quis nostrum quia pariatur voluptatem laborum ad distinctio. Expedita dicta, at impedit sapiente laboriosam dolores, voluptatem modi neque reiciendis dolorem fuga deserunt eveniet voluptates nulla explicabo eaque nostrum consectetur repellendus aliquid corrupti eos repellat. Laboriosam doloremque officia quos beatae iure accusantium harum, ipsum omnis asperiores commodi hic! Eveniet debitis, nesciunt quam non nobis alias atque, quos ea itaque, sunt dolore. Consequuntur perferendis esse officia porro omnis pariatur mollitia, commodi excepturi nihil saepe numquam dolore similique culpa adipisci suscipit perspiciatis eum rerum ab quasi quia quam ipsa doloremque impedit assumenda. Ab, aspernatur facilis.
        </p>
      </div>
      <div className='lg:w-[50%] sm:w-[100%] flex flex-row '>
        <div className='w-[60%]'>
          <img src={i3} alt='About Us' className='w-full lg:w-auto' />
        </div>
        <div className='w-[40%] pl-10 md:pl-5'>
          <div className='p-10'>
            <p className='text-5xl md:text-2xl font-bold'>{experience}+</p>
            <p className='text-xl md:text-base'>years of experience</p>
          </div>
          <div className='p-10'>
            <p className='text-5xl md:text-2xl font-bold'>{studentsTaught}+</p>
            <p className='text-xl md:text-base'>students taught</p>
          </div>
        </div>
      </div>

    </div>



  );
};

export default AboutUs;
