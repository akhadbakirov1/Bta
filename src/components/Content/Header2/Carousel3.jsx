import Carousel from 'react-bootstrap/Carousel';
import myImg from '/public/Images/myimg.jpeg';
import carouselimg1 from '/public/Images/sliderimg/nature.jpg';
import carouselimg2 from '/public/Images/sliderimg/mountain.jpeg';
import carouselimg3 from '/public/Images/sliderimg/vinecia.webp';
import logo from '/public/Images/BTA PNG.png';
import './Carousel3.css'
import Button from 'react-bootstrap/Button';
import FixedTop from '../../Header/FixedTop/FixedTop';
import { Link } from 'react-router-dom';
import Geoglag from '/public/Images/flagsimg/geo.png';
import EngFlag from '/public/Images/flagsimg/eng.png';
import './carouselsearch.scss';


function Carousel3() {
  const openNavbar = () => {
    const navbarToggle = document.querySelector('.nav-toggle');
      navbarToggle.click();
  };



  return (
    <div>

        <Link to='/'><img className='carousel3-img'src={logo} alt="" /></Link>
        <div className="nav-links">
            <div className="search-main">
              <div className="search-container">
                  <div className="search-box">
                    <input type="text" placeholder=''/>
                    <span></span>
                  </div>
             </div>
          </div>
            <ul>
                {/* <li><Link to='/mainpgeng'>Eng</Link></li> */}

                <li><a className='menu-toggle' onClick={openNavbar}>მენიუ</a></li>
                <Link to='/'><img className='flag1' src={Geoglag} alt="" /></Link>
                <Link to='/mainpgeng'><img className='flag2' src={EngFlag} alt="" /></Link>
                
            </ul>
        </div>
<Carousel className='carousel3'  pause={false} controls={true}>
  <Carousel.Item interval={3000}>
    <img width={'100%'} height={'auto'} className='carousel-image' src={carouselimg1} alt="" />
    <Carousel.Caption className='carousel-caption'>

    <div className="carousel-text-bt-position">
      <div className="carousel-text-main">
      <div className='carousel-text1'>რატომ ბიზნესისა და ტექნოლოგიების აკადემია?</div>
      </div>
      <Button className='carousel-btn' href='#' variant="light"><a href="#">ვრცლად</a></Button>{''}
      </div>
      <br />
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img width={'100%'} height={'auto'} className='carousel-image'  src={carouselimg2} alt="" />
    <Carousel.Caption className='carousel-caption'>
    <div className="carousel-text-bt-position">
      <div className="carousel-text-main">
      <div className='carousel-text1'>ისწავლეთ ვებტექნოლოგიები</div>
      </div>
      <Button className='carousel-btn' href='#' variant="light"><a href="#">ვრცლად</a></Button>{''}
      </div>
      <br />
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000} >
    <img width={'100%'} height={'auto'} className='carousel-image'  src={carouselimg3} alt="" />
    <Carousel.Caption className='carousel-caption'>
    <div className="carousel-text-bt-position">
      <div className="carousel-text-main">
      <div className='carousel-text1'>პროფესიული საგანმანათლებლო პროგრამები</div>
      </div>
      <Button className='carousel-btn' href='#' variant="light"><a href="#">ვრცლად</a></Button>{''}
      </div>
      <br />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    </div>
   
  );
}

export default Carousel3;