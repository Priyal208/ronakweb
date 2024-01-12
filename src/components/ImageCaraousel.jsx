// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import i3 from '../imgs/Specially for.png';

const ImageCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [i3, i3, i3, i3]; // Alternating between logo and i1

  return (
    <Slider {...carouselSettings}>
      {images.map((src, index) => (
        <div key={index} className="carousel-image-container mt-[5%]">
          <img src={src} alt={`Image ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
