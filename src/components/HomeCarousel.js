// Import React and the Carousel component from react-bootstrap
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Carousel.css'; // Import CSS for styling the carousel

function HomeCarousel() {
  return (
    <Carousel className='carousel-wrapper'> {/* Wrapper for the carousel */}
      {/* First slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/af1.png" alt="First slide" /> {/* Image for the first slide */}
      </Carousel.Item>
      {/* Second slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/panda.png" alt="Second slide" /> {/* Image for the second slide */}
      </Carousel.Item>
      {/* Third slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/laf1.png" alt="Third slide" /> {/* Image for the third slide */}
      </Carousel.Item>
      {/* Fourth slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/milib4.png" alt="Fourth slide" /> {/* Image for the fourth slide */}
      </Carousel.Item>
      {/* Fifth slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/reddunk.png" alt="Fifth slide" /> {/* Image for the fifth slide */}
      </Carousel.Item>
      {/* Sixth slide */}
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src="/images/offw5.png" alt="Sixth slide" /> {/* Image for the sixth slide */}
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
