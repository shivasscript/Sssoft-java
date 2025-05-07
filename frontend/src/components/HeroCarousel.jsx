import React, { useState } from 'react';
import './HeroCarousel.css'; // CSS specific to the hero component

const images = [
  'https://synergiseit.com.au/wp-content/uploads/2019/11/1-1170x782.png',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  'https://www.theamegroup.com/wp-content/uploads/2018/06/managed-it-solutions.jpeg',
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-container">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <img src={images[current]} alt="IT Solutions Slide" className="hero-image" />
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default HeroCarousel;
