import './whyus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faBuildingColumns, faGraduationCap, faHandshake, faInfo, faRotateLeft} from '@fortawesome/free-solid-svg-icons';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
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

const  WhyUs = () => {
  return (
    <>
    <div className="swipe-container">
    <Swiper className='swiper-margintop'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faGraduationCap} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>
    
      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBook} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBuildingColumns} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faRotateLeft} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>

      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faHandshake} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>
      
      <SwiperSlide className='swiper-main'>
        <MDBCard className='swiper-border w-50'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faInfo} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
      </SwiperSlide>
    </Swiper>
    </div>
    

    <MDBCard className='swiper-border w-100'>
          <MDBCardBody className='swiper-item'>
            <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faInfo} /></MDBCardTitle>
            <MDBCardText><p className='swiper-text'>30 წლიანი გამოცდილება განათლების სფეროში</p></MDBCardText>
          </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default WhyUs;