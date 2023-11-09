import './registrationcomp.css';
import { faFacebook, faInstagram,faYoutube, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faSquareEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegistrationComp = () => {
    const goBack = () => {
        window.history.back();
      }
    return(
        <>  
        <div className="registration-main">
            <div className="registration-bg-blue">
                <div className="registration-bg-white">
                    <div className="registration-content">
                        <div className="registration-input-container">
                                <h1 className='registration-title'>შეავსეთ ფორმა</h1>
                                    <div className="registration-input-main">
                                        <FontAwesomeIcon className='fa-registration-icon' icon={faUser}/>
                                        <input placeholder='სახელი,გვარი' className='registration-input' type="text" />
                                    </div>

                                    <div className="registration-input-main">
                                        <FontAwesomeIcon className='fa-registration-icon' icon={faPhone}/>
                                        <input placeholder='ტელეფონის ნომერი' className='registration-input' type="text" />
                                    </div>

                                    <div className="registration-input-main">
                                        <FontAwesomeIcon className='fa-registration-icon' icon={faEnvelope}/>
                                        <input placeholder='ელ-ფოსტა' className='registration-input' type="text" />
                                    </div>

                                <div className="registration-button-container">
                                    <button className='registration-button'>გაგზავნა</button>
                                    <button onClick={goBack} className='registration-button-prev'>უკან</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RegistrationComp;