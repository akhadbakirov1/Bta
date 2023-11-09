import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { faFacebook, faInstagram,faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer2.css'
import Logo from '/public/Images/LOGO.png';
import { Link } from 'react-router-dom';
 function Footer2() {
  return (
    <MDBFooter  className='footer-bg text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <br />
          <span className='social-title'>შემოგვიერთდით ჩვენს სოციალურ ქსელებზე:</span>
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
            <MDBCol style={{ maxWidth: '380px' }} md="3" lg="4" xl="4" className='mx-auto mb-4'>
              <p>
              მისამართი - თბილისი, წერონისის ქ. 208
              </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1seng!2sus!4v1696354325411!5m2!1seng!2sus"
                    height={'70'} 
                    width={'340'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>
                    <p>
                      მისამართი - თბილისი, ც. დადიანის ქ. 28
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1seng!2sus!4v1696354325411!5m2!1seng!2sus"
                    height={'70'} 
                    width={'340'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>
                    <p>
                      მისამართი - საჩხერე, გომართელის ქ. N 14ვ
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1seng!2sus!4v1696354325411!5m2!1seng!2sus"
                    height={'70'} 
                    width={'340'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>
  
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>სასარგებლო ბმულები</h6>
              <p>
                <Link to='/aboutacademy' className='text-reset'>
                  აკადემიის შესახებ
                </Link>
              </p>
              <p>
                <Link to='/authorization' className='text-reset'>
                  ავტორიზაცია & აკრედიტაცია
                </Link>
              </p>
              <p>
                <Link to='/missionvision' className='text-reset'>
                  მისია, ხედვა და ღირებულებები
                </Link>
              </p>
              <p>
                <Link to='/studentselfgovernment' className='text-reset'>
                  სტუდენტური თვითმართველობა
                </Link>
              </p>
              <p>
                <Link to='/rectorspg' className='text-reset'>
                  რექტორი
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>სასარგებლო ბმულები</h6>
              <p>
                <Link to='/vacancy' className='text-reset'>
                  ვაკანსია
                </Link>
              </p>
              <p>
                <Link to='/adminstration' className='text-reset'>
                  ადმინსტრაცია
                </Link>
              </p>
              <p>
                <Link to='/photogallery' className='text-reset'>
                 ფოტო გალერეა
                </Link>
              </p>
              <p>
                <Link to='/videogallery' className='text-reset'>
                  ვიდეო გალერეა
                </Link>
              </p>

              <p>
                <Link to='/programspg' className='text-reset'>
                  პროგრამები
                </Link>
              </p>

              <p>
                <Link to='/shortterm' className='text-reset'>
                მოკლე ვადიანი სასერთიფიკატო პროგრამები
                </Link>
              </p>
            </MDBCol>

            {/* <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>კონტაქტი</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 <Link to='/contactspg'> თბილისი,წერონისის ქ. 208</Link>
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 <Link to='/contactspg'>მისამართი - თბილისი, ც. დადიანის ქ. 28</Link>
              </p>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 <Link to='/contactspg'>მისამართი - საჩხერე, გომართელის ქ. N 14ვ</Link>
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
            </MDBCol> */}

            <MDBCol style={{ maxWidth: '600px' }} md="3" lg="4" xl="4" className='cont mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>კონტაქტი</h6>
              <p>
                 <Link to='/contactspg'> თბილისი,წერონისის ქ. 208</Link>
              </p>
              <p>
                 <Link to='/contactspg'>მისამართი - თბილისი, ც. დადიანის ქ. 28</Link>
              </p>
              <p>
                 <Link to='/contactspg'>მისამართი - საჩხერე, გომართელის ქ. N 14ვ</Link>
              </p>
              <p>
                btaedu@yahoo.com
              </p>
              <p className='mdbcol-item'>
                <a href="tel:+995593303211">593 30 32 11</a>
              </p>
              <p className='mdbcol-item'>
                <a href="tel:+995574008080">574 00 80 80</a>
              </p>
  
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ბიზნესისა და ტექნოლოგიების აკადემია © 2023: ყველა უფლება დაცულია
      </div>
    </MDBFooter>
  );
}

export default Footer2;