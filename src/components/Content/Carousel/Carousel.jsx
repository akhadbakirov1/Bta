import Carousel from "react-bootstrap/Carousel";
import mypic from "/public/Images/myimg.jpeg";
import slider1 from "/public/Images/sliderimg/slider1.jpeg";
import slider2 from "/public/Images/slider1.jpeg"
import SliderItem1 from '../../Content/SlideITems/SlideItem1/SlideItem1';
import SliderItem2 from '../../Content/SlideITems/SliderITem2/SliderItem2';
import SliderItem3 from '../../Content/SlideITems/SlideItem3/SlideItem3';


function Slider1() {

  return (
    <div className="Slide">
    <Carousel fade  className='nav-link'>
      <Carousel.Item interval={4000}>
        <SliderItem1/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <SliderItem2/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <SliderItem3/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default Slider1;