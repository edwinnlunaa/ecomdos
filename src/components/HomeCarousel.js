import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css';

function HomeCarousel() {
  return (
    <Carousel className='carousel-wrapper'>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/af1.png" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/panda.png" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/laf1.png" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/milib4.png" alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/reddunk.png" alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/offw5.png" alt="Sixth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
