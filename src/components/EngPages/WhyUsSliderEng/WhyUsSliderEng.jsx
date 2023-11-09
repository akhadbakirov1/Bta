
import './whyusslidereng.css'
import Slider from 'react-infinite-logo-slider'
// import WhyUs from '../WhyUs/WhyUs'

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook, faBuildingColumns, faGraduationCap, faHandshake, faInfo, faRotateLeft} from '@fortawesome/free-solid-svg-icons';




function PartnersCarousel22 () {
    return (
        <>
           
            <div class="one">
                <hr />
                <h1 className='one-h1'>Why Us</h1>
                <hr />
            </div>
            <br />
             <Slider
            width="300px"
            height = '100px'
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
            <a href="#">
                <MDBCard className='swiper-border w-100'>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faGraduationCap} /></MDBCardTitle>
                        <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </a>
            </Slider.Slide>

            <Slider.Slide>
            <a href="#">
                <MDBCard className='swiper-border w-100'>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBook} /></MDBCardTitle>
                        <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </a>
            </Slider.Slide>

            <Slider.Slide>
            <a href="">
                <MDBCard className='swiper-border w-100'>
                    <MDBCardBody className='swiper-item'>
                        <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faBuildingColumns} /></MDBCardTitle>
                        <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </a>
            </Slider.Slide>
            
            <Slider.Slide>
            <a href="">
            <MDBCard className='swiper-border w-100'>
                <MDBCardBody className='swiper-item'>
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faRotateLeft} /></MDBCardTitle>
                    <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </a>
            </Slider.Slide>
            <Slider.Slide>
            <a href="">
            <MDBCard className='swiper-border w-100'>
                <MDBCardBody className='swiper-item'>
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faHandshake} /></MDBCardTitle>
                    <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </a>
            </Slider.Slide>

            <Slider.Slide>
            <a href="">
            <MDBCard className='swiper-border w-100'>
                <MDBCardBody className='swiper-item'>
                    <MDBCardTitle><FontAwesomeIcon className='fa-icon' icon={faInfo} /></MDBCardTitle>
                    <MDBCardText><p className='swiper-text'>30 years of experience in education</p></MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </a>
            </Slider.Slide>
        </Slider>
        </>
    )
}

export default PartnersCarousel22;