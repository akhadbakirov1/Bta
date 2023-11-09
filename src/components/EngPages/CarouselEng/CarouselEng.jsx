import Carousel from 'react-bootstrap/Carousel';
import myImg from '/public/Images/myimg.jpeg';
import carouselimg1 from '/public/Images/sliderimg/nature.jpg';
import carouselimg2 from '/public/Images/sliderimg/mountain.jpeg';
import carouselimg3 from '/public/Images/sliderimg/vinecia.webp';
import logo from '/public/Images/LOGO.png'
import Geoglag from '/public/Images/flagsimg/geo.png';
import EngFlag from '/public/Images/flagsimg/eng.png';

import Button from 'react-bootstrap/Button';
import FixedTop from '../../Header/FixedTop/FixedTop';
import { Link } from 'react-router-dom';
import './carouselengsearch.scss';
import './carouseleng.css'


function Carousel3() {



  return (
    <div>

        <Link to='/'><img className='carousel3-img'src={logo} alt="" /></Link>
        <div className="nav-links">

            <ul>
                {/* <li><Link to='/'>Geo</Link></li> */}
                <li><a href='#'>Menu</a></li>
                <Link to='/'><img className='flag1' src={Geoglag} alt="" /></Link>
                <Link to='/mainpgeng'><img className='flag2' src={EngFlag} alt="" /></Link>
                
            </ul>
        </div>
<Carousel className='carousel3'  pause={false} controls={false}>
  <Carousel.Item interval={3000}>
    <img width={'100%'} height={'auto'} className='carousel-image' src={carouselimg1} alt="" />
    <Carousel.Caption className='carousel-caption'>

     
      <div className="carousel-text-main">
      <div className='carousel-text1'>Why business and Technology Academy?</div>
      </div>
      <br />
      <Button className='carousel-btn' href='#' variant="light"><a href="#">Read more</a></Button>{''}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img width={'100%'} height={'auto'} className='carousel-image'  src={carouselimg2} alt="" />
    <Carousel.Caption className='carousel-caption'>
    <div className="carousel-text-main">
    <div className='carousel-text1'>Learn web technologies</div>
    </div>
      <br />
      <Button className='carousel-btn' href='#' variant="light"><a href="#">Read more</a></Button>{''}
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000} >
    <img width={'100%'} height={'auto'} className='carousel-image'  src={carouselimg3} alt="" />
    <Carousel.Caption className='carousel-caption'>
      <div className="carousel-text-main">
      <p className='carousel-text1'>Vocational education programs</p>
      </div>
      <br />
      <Button className='carousel-btn' href='#' variant="light"><a href="#">Read more</a></Button>{''}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    
    </div>
   
  );
}

export default Carousel3;