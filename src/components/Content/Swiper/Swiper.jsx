
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faBuildingColumns, faGraduationCap, faHandshake, faInfo, faRotateLeft} from '@fortawesome/free-solid-svg-icons';

import { Scrollbar, A11y, Autoplay, Virtual , EffectCards} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import './swiper.css';

const  Swiper1 = () => {
  return (
    <>
      <div className="one">
        <hr />
        <h1 className='one-h1'>რატომ ჩვენ</h1>
       <hr />
    </div>
    <div className="swipe-container">
    <Swiper className='swiper-margintop'
      // install Swiper modules
      modules={[Scrollbar, A11y, Autoplay,Virtual, EffectCards]}
      spaceBetween={0}
      slidesPerView={3}
      // navigation
      autoplay={{ delay: 2000 }} 
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='swiper-main'>
      <Link to='/aboutacademy'>
                <MDBCard className='swiper-border '>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faGraduationCap} /></MDBCardTitle>
                        <MDBCardText className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Link>



      </SwiperSlide>
    
      <SwiperSlide className='swiper-main'>
      <Link to='/authorization'>
                <MDBCard className='swiper-border'>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBook} /></MDBCardTitle>
                        <MDBCardText className='swiper-text'>ავტორიზაცია 12 საგანმანათლებლო პროგრამაზე</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Link>
      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
      <Link to='/comfortableenvironment'>
                <MDBCard className='swiper-border'>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBuildingColumns} /></MDBCardTitle>
                        <MDBCardText className='swiper-text'>კომფორტული გარემო სამ სასწავლო კორპუსში</MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </Link>
      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
      <Link to='/programspg'>
            <MDBCard className='swiper-border '>
                <MDBCardBody className='swiper-item'>
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faRotateLeft} /></MDBCardTitle>
                    <MDBCardText className='swiper-text'>შრომის ბაზარზე მოთხოვნადი პროფესიები</MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </Link>
      </SwiperSlide>

      {/* <SwiperSlide className='swiper-main'>
      <a href="">
            <MDBCard className='swiper-border '>
                <MDBCardBody className='swiper-item'>
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faHandshake} /></MDBCardTitle>
                    <MDBCardText><p className='swiper-text'>ჩვენი საქმიანი პარტნიორები</p></MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </a>
      </SwiperSlide> */}
      
      <SwiperSlide className='swiper-main'>
      <Link to='/iso9001'>
            <MDBCard className='swiper-border '>
                <MDBCardBody className='swiper-item' >
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faInfo} /></MDBCardTitle>
                    <MDBCardText className='swiper-text'>ISO 9001</MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </Link>
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
};

export default Swiper1;