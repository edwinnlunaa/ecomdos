import Carousel from 'react-bootstrap/Carousel';
import Af1 from '../images/af1.png';
import dunk from '../images/panda.png';
import laf from '../images/laf1.png';
import reddunk from '../images/reddunk.png'
import mili4 from '../images/milib4.png'
import offw5 from '../images/offw5.png'
import '../styles/Carousel.css';

function HomeCarousel() {
  return (
    <Carousel className='carousel-wrapper'>
      <Carousel.Item interval={2000}>
        <img className='carousel-img' src = {Af1} alt="First slide" style={{width: '500px', height: '250px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='carousel-img' src = {dunk} alt="First slide" style={{width: '500px', height: '250px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='carousel-img' src = {laf} alt="First slide" style={{width: '500px', height: '250px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='carousel-img' src = {mili4} alt="First slide" style={{width: '500px', height: '250px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='carousel-img' src = {reddunk} alt="First slide" style={{width: '500px', height: '250px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className='carousel-img' src = {offw5} alt="First slide" style={{width: '500px', height: '270px'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;