import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { faFacebook, faInstagram,faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footereng.css'
import Logo from '/public/Images/LOGO.png';
import { Link } from 'react-router-dom';
 function Footer2() {
  return (
    <MDBFooter  style={{backgroundColor: '#316BF4', }} className='footer-bg text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <br />
          <span>Join us on social networks</span>
        </div>

        <div  className='socialmedia'>
            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
            <ul className='socialmedia-ul'>
                <li className='socialmedia-li'><a href='https://www.youtube.com/channel/UCc5G4u-7FP10hifvUdlxuXQ'><FontAwesomeIcon className='instagram_class' icon={faYoutube}/></a></li>
                <li className='socialmedia-li'><a href="https://www.instagram.com/bta_2014/"><FontAwesomeIcon className='instagram_class' icon={faInstagram}/></a></li>
                <li className='socialmedia-li'><a href="https://www.facebook.com/bta.edu.ge/"><FontAwesomeIcon className='instagram_class' icon={faFacebook}/></a></li>
            </ul>
        </div>
      </section>

      <section className=''>
        <MDBContainer  style={{color: '#ffffff'}} className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol style={{ width: '300px' }} md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-5'>
                <MDBIcon  icon="gem" className="me-" />
               <Link to='/'><img src={Logo} className='footer-logo' alt="" /></Link> 
              </h6>
  
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                About the Academy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Authorization & accreditation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Mission, vision and values
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Pratnior
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Vacancy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Adminstration
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 <Link to='/photogallery'> Photo gallery</Link>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Video gallery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                  Tbilisi,Tseronisi street. 208
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                btaedu@yahoo.com
              </p>
              <p className='mdbcol-item'>
                <MDBIcon icon="phone" className="me-3" /><a href="tel:+995593303211">593 30 32 11</a>
              </p>
              <p className='mdbcol-item'>
                <MDBIcon icon="print" className="me-3" /><a href="tel:+995574008080">574 00 80 80</a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        Academy of business and technology © 2023: All rights reserved
      </div>
    </MDBFooter>
  );
}

export default Footer2;