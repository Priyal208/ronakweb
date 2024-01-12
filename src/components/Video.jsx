import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
        <div className='text-6xl font-semibold text-center p-10  '>
        <p>YOUTUBE VIDEOS </p>
        </div>
      <div className="flex flex-row items-center justify-center h-[50%] w-[100%]" id="glimpses">
          <div className="px-10 w-1/3 h-[250px]" data-aos="fade-right">
            <iframe src="https://www.youtube.com/embed/2tWAPo5ArJI?si=LRCydjzy8KqW27YE" frameborder="0" allowfullscreen title="Video 1 " style={{ width: '100%', height: '100%' }}></iframe>
          </div>
          <div className="px-10 w-1/3 h-[250px]" data-aos="fade-down">
            <iframe src="https://www.youtube.com/embed/IoVIsLgjMds?si=wCRlPniuCZJ5amEz" frameborder="0" allowfullscreen title="Video 2" style={{ width: '100%', height: '100%' }}></iframe>
          </div>
        
        <div className="px-10 w-1/3 h-[250px]" data-aos="fade-left">
          <iframe src="https://www.youtube.com/embed/e_agV9VzM9M?si=C8TrHcfOPqRJm8UB" title="YouTube video player" frameborder="0" allowfullscreen title="Video 3" style={{ width: '100%', height: '100%' }}></iframe>
        </div>
      </div>
      </div>
  );
}

export default Video;
