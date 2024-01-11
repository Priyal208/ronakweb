// ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import logo from '../imgs/Screenshot 2024-01-10 223757.png';
import i1 from '../imgs/Screenshot 2024-01-10 231850.png';

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

  const images = [logo, i1, logo, i1]; // Alternating between logo and i1

  return (
    <Slider {...carouselSettings}>
      {images.map((src, index) => (
        <div key={index} className="carousel-image-container">
          <img src={src} alt={`Image ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
