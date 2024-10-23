// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import i1 from '../imgs/1.png';
import i2 from '../imgs/2.png';
import i3 from '../imgs/3.png'; 
import i4 from '../imgs/4.png';
import '../global.css'

const ImageCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [i1, i2, i3, i4]; // Alternating between logo and i1

  return (
    <div style={{ width: '100%' }}>
      <Slider {...carouselSettings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-image-container mt-[5%] md:mt-[20%]">
            <img src={src} alt={`Image ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
  