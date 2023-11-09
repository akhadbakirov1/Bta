import './location.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuildingColumns, faBus, faEnvelope, faGlobe, faHandshake, faIdCard, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faMailBulk, faMoneyBillTransfer, faNetworkWired, faPhone, faTaxi, faTrain, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
    return (
        <>
          <div class="one">
             <hr />

                <h1 className='one-h1'>ფილიალები</h1>
            <hr />
            </div>
        <div className="main-contact">
            <div className="adress-title">
            <div className="map-responsive">

            <div className="border-for-contact">
                    <h2>1 სასწავლო კორპუსი</h2>
      
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1sru!2sus!4v1696354325411!5m2!1sru!2sus"
                    height={'400'} 
                    width={'465'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerpolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>

                    <div className="border-for-contact">
                    <h3>1 სასწავლო კორპუსი</h3>
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faLocationDot}/>
                    <div className='contact-text'>მისამართი - თბილისი, წერონისის ქ. 208</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 593 30 32 11</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 574 00 80 80</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 032 2 24 95 57</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faEnvelope}/>
                    <div className='contact-text'>ელექტრონული ფოსტა - btaedu@yahoo.com</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faGlobe}/>
                    <div className='contact-text'>ვებ-გვერდი - bta.edu.ge</div>
                    </div>
                    </div>

                </div>


                <div className="map-responsive">
                <div className="border-for-contact">
                    <h2>2 სასწავლო კორპუსი</h2>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1sru!2sus!4v1696354325411!5m2!1sru!2sus"
                    height={'400'} 
                    width={'465'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerpolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>

                    <div className="border-for-contact">
                    <h3>2 სასწავლო კორპუსი</h3>
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faLocationDot}/>
                    <div className='contact-text'>მისამართი - თბილისი, ც. დადიანის ქ. 28</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 593 30 32 11</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 032 2 24 95 57</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 574 00 80 80</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faEnvelope}/>
                    <div className='contact-text'>ელექტრონული ფოსტა - btaedu@yahoo.com</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faGlobe}/>
                    <div className='contact-text'>ვებ-გვერდი - bta.edu.ge</div>
                    </div>
                    </div>

                </div>
                
                    <div className="map-responsive">
                    <div className="border-for-contact">
                    <h2>ქ. საჩხერე</h2>
                    </div>
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11909.637149223505!2d44.82866!3d41.733264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440d55b5eda87d%3A0x9219acbfd8de3158!2sAcademy%20of%20Business%20and%20Technologies!5e0!3m2!1sru!2sus!4v1696354325411!5m2!1sru!2sus"
                    height={'400'} 
                    width={'465'} 
                    className="location-1" 
                    allowFullScreen
                    loading='lazy'
                    referrerpolicy="no-referrer-when-downgrade"
                    title='responsive-google-maps'
                    >
                    </iframe>

                    <div className="border-for-contact">
                    <h3>ქ. საჩხერე</h3>
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faLocationDot}/>
                    <div className='contact-text'>მისამართი - საჩხერე, გომართელის ქ. N 14ვ</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 593 30 32 11</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 574 00 80 80</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faPhone}/>
                    <div className='contact-text'>ტელეფონი - 032 2 24 95 57</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faEnvelope}/>
                    <div className='contact-text'>ელექტრონული ფოსტა - btaedu@yahoo.com</div>
                    </div>
                    <hr />
                    <div className="contact-text-icon">
                    <FontAwesomeIcon  className='icon-contact' icon={faGlobe}/>
                    <div className='contact-text'>ვებ-გვერდი - bta.edu.ge</div>
                    </div>
                    </div>

                </div>
                
            </div>
            <div class="one">
                <hr />
                     <h1 className='one-h1'>ბანკის რეკვიზიტები</h1>
                 <hr />
            </div>
            <div className="adress-title">
                <div className="border-for-contact">
                        <div className="contact-text-icon">
                        <FontAwesomeIcon  className='icon-contact-sec' icon={faMoneyBillTransfer}/>
                        <div className='contact-text'>ანგარიშის N: GE20TB7298636020100004</div>
                        </div>
                        <hr />
                        <div className="contact-text-icon">
                        <FontAwesomeIcon  className='icon-contact-sec' icon={faMoneyBillTransfer}/>
                        <div className='contact-text'> ანგარიშის N: GE20TB7298636020100004</div>
                        </div>
                        <hr />
                        <div className="contact-text-icon">
                        <FontAwesomeIcon  className='icon-contact-sec' icon={faIdCard}/>
                        <div className='contact-text'>საიდენტიფიკაციო კოდი – 406056173</div>
                        </div>
                </div>
                </div>

                <div class="one">
                    <hr />
                        <h1 className='one-h1'>ტრანსპორტირება შესაძლებელია</h1>
                    <hr />
                </div>
                <div className="adress-title">
                    <div className="border-for-contact-bus">
                            <div className="contact-text-icon">
                            <FontAwesomeIcon  className='icon-contact-sec' icon={faTrain}/>
                            <div className='contact-text'>ტრანსპორტი: მეტრო“სადგურის მოდნიდან“ გადასასვლელი ხიდიან, ავტობუსი: N 336; სამარშრუტო მიკროავტობუსი: N 542</div>
                            </div>

                            

                    </div>
                </div>
        </div>
        
        </>
    );
}

export default Location;