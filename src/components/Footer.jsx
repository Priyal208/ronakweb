import React from 'react'
import f1 from '../imgs/footerlogoo.png'
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import '../global.css'

const Footer = () => {
  return (     
  
    <div className=' divide-solid w-full  bg-black flex sm:flex-col  text-white'>
        <div className='w-1/3 vl sm:hidden'>
            <div className='h-1/2    overflow-hidden p-10 md:px-1 flex items-center justify-center '>
                <img src={f1} alt="" className='object-contain  w-full h-full md:w-[70%] md:h-[90%] items-center'/>
            </div>


            <div className='h-1/4  '>   {/*for contacts*/}
                <div className=' h-1/3  flex flex-wrap md:text-sm md:mx-5 justify-center items-center gap-5 md:gap-1 '>
                    <span>
                <IoIosCall
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px] "
                />
               </span>
                    <span><a href="tel:+919510387540">Dev:+91 9510387540</a></span>
                </div>

                
                <div className=' h-1/3 flex flex-wrap md:text-sm md:mx-5 justify-center items-center gap-5 md:gap-1'>
                <span><HiOutlineMail
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px] "
                /></span>
                    <span>thakkarriddhi1610@gmail.com</span>
                </div>
                
            </div>  {/*for contacts*/}

            <div className=' h-1/4 flex flex-wrap  justify-center items-center gap-5 md:gap-2'>
               <span className='icons'>
                <a
                  href="https://instagram.com/msu_paramarsh?igshid=MmJiY2I4NDBkZg=="
                  target="_blank"
                  rel="noopener noreferrer"
                > <AiOutlineInstagram
                color="white"
                size={26}
                className="ico "
              /></a></span>
                <span  className='icons'><a
                  href="https://twitter.com/MSU_Paramarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter color="white" size={26} className="ico" />

                </a></span>
                <span  className='icons'><a
                  href="https://youtube.com/@msu_paramarsh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube color="white" size={26} className="ico " />
                </a></span>
                <span  className='icons'> <a
                  href="https://www.linkedin.com/company/paramarsh-ideas-infinite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn color="white" size={26} className="ico " />
                </a></span>
                <span  className='icons'><a
                  href="https://m.facebook.com/ParamarshSangli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF color="white" size={26} className="ico " />
                </a></span> 
           </div>{/*for socials*/}
        </div> 

     <div className='sm:flex sm:items-center sm:justify-center lg:hidden md:hidden'>
        <div className=' sm:w-32 sm:h-32 sm:pt-5 '>
         
          <img src={f1} alt="" />

        </div>
        
        </div>
        <div className='lg:hidden sm:h-6 sm:text-sm flex justify-center items-center'>
          <span className=''>
          <IoIosCall
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px] sm:w-[15px] sm:h-[20px]"
                />
          </span>
         <span><a href="tel:+919510387540">Dev:+91 9510387540</a></span>
        </div>
        <div className='lg:hidden sm:h-6 sm:text-sm flex justify-center items-center'>
       <span className=''>
          <HiOutlineMail
                  color="white"
                  size={20}
                  className="xl:w-[30px] xl:h-[30px] sm:w-[15px] sm:h-[20px] "
                />
          </span>
          <span>thakkarriddhi1610@gmail.com</span>
        </div>

        <div className='w-2/3 p-16 sm:w-full md:p-8 grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 
         space-y-7 gap-4 place-items-start sm:place-items-center'> 
            <div className='mt-7 '> <h5>ABOUT</h5>
                <ul className='pt-2'>
                    <li>About Ronak</li>
                    <li>Facilities</li>
                    <li>Resullt</li>
                    <li>Events</li>
                    <li>Faculties</li>
                </ul>
            </div>
            <div className=''> <h5>ABOUT</h5> <ul className='pt-2'>
                    <li>About Ronak</li>
                    <li>Facilities</li>
                    <li>Resullt</li>
                    <li>Events</li>
                    <li>Faculties</li>
                </ul></div>
            <div className=''> <h5>ABOUT</h5> <ul className='pt-2' >
                    <li>About Ronak</li>
                    <li>Facilities</li>
                    <li>Resullt</li>
                    <li>Events</li>
                    <li>Faculties</li>
                </ul></div>
            <div className=''> <h5>ABOUT</h5> <ul className='pt-2'>
                    <li>About Ronak</li>
                    <li>Facilities</li>
                    <li>Resullt</li>
                    <li>Events</li>
                    <li>Faculties</li>
                </ul></div>
            <div className=''> <h5>ABOUT</h5> <ul className='pt-2'>
                    <li>About Ronak</li>
                    <li>Facilities</li>
                    <li>Resullt</li>
                    <li>Events</li>
                    <li>Faculties</li>
                </ul></div>
                <div className=' mt-10 '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.9557666344876!2d73.21086537506984!3d22.31751257967424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf6ee84f39cf%3A0x1a66ee91aa19cc68!2sRonak%20Institute%20-%20Best%20Classes%20in%20Vadodara!5e0!3m2!1sen!2sin!4v1704974102757!5m2!1sen!2sin"  style={{ border: '4px solid white', borderRadius: '10px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"    className='w-52 h-44 md:w-32 md:h-44'></iframe>
                </div> 
       
       
        
        </div>
       
        </div>
        
  )
}

export default Footer