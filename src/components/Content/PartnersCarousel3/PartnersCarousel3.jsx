
import {Keyboard, Mousewheel, FreeMode, A11y, Autoplay, Virtual , EffectCards} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';


import partner1 from '/public/Images/partnerslogo/shemosavlebi.png';
import partner2 from '/public/Images/partnerslogo/orientiri.png';
import partner3 from '/public/Images/partnerslogo/caritas.png';
import partner4 from '/public/Images/partnerslogo/chipidze.png';
import partner5 from '/public/Images/partnerslogo/psikikuri.png';
import partner6 from '/public/Images/partnerslogo/ludushauri.png';
import partner7 from '/public/Images/partnerslogo/pediatriuli.png';
import partner8 from '/public/Images/partnerslogo/amerikuli.png';
import partner9 from '/public/Images/partnerslogo/geohospitalsi.png';
import partner10 from '/public/Images/partnerslogo/unix.png';
import partner11 from '/public/Images/partnerslogo/kera.png';
import partner12 from '/public/Images/partnerslogo/swc.png';
import partner13 from '/public/Images/partnerslogo/sanitary.png';
import partner14 from '/public/Images/partnerslogo/karkasi.png';
import partner15 from '/public/Images/partnerslogo/energopro.png';
import partner16 from '/public/Images/partnerslogo/112.png';
import partner17 from '/public/Images/partnerslogo/n1skola.png';
import partner18 from '/public/Images/partnerslogo/n43bagi.png';
import partner19 from '/public/Images/partnerslogo/n46bagi.png';
import partner20 from '/public/Images/partnerslogo/n49bagi.png';
import partner21 from '/public/Images/partnerslogo/psikikuri2.png';
import partner22 from '/public/Images/partnerslogo/skaineti.png';
import partner23 from '/public/Images/partnerslogo/terminali.png';
import partner24 from '/public/Images/partnerslogo/intelekt.png';
import './partnerscarousel3.css';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

const  PartnersCarousel3 = () => {
  return (
    <>
      <div className="one">
        <hr />
        <h1 className='one-h1'>პარტნიორები</h1>
       <hr />
    </div>
    <div className="swipe-container">
    <Swiper className='swiper-margintop'
      // install Swiper modules
      modules={[Keyboard, Mousewheel,FreeMode, A11y, Autoplay,Virtual, EffectCards ,]}
      freeMode={true}
      spaceBetween={100}
      slidesPerView={5}
      mousewheel={true}
      keyboard={true}
      // navigation
      autoplay={{ delay: 500 }} 
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
        <div className="swiper-all">
      <SwiperSlide className='swiper-main'>
        <a href='https://www.rs.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner1}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>
      </div>


      <SwiperSlide className='swiper-main'>
        <a href='https://ahtbilisi.com/ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner8}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://unix.ge/ka/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner10}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner11}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://orientiri.edu.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner2}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://caritas.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner3}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='http://chapidze.ge/#item-2'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner4}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://mhpa.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner5}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://gudushauri.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner6}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>


      <SwiperSlide className='swiper-main'>
        <a href='https://www.rs.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner7}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>


      <SwiperSlide className='swiper-main'>
        <a href='https://gh.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner9}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>


      <SwiperSlide className='swiper-main'>
        <a href='http://safework.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner12}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://sanitary.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner13}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='http://ltdkarkasi.ge/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner14}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='https://www.energo-pro.ge/ka/'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner15}
                    height={150}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner16}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>


      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner17}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner18}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner19}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner20}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner21}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner22}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner23}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <a href='#'>
                <div className="slider-main">
                <div className="slide">
                    <img
                    src={partner24}
                    height={180}
                    width={250}
                    alt=""
                    />
                </div>
            </div>
        </a>

      </SwiperSlide>



    </Swiper>
    </div>
    </>
  );
};

export default PartnersCarousel3;