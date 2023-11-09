import './shorttermcomp.css';
import './shorttermcomp.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import ShorttermPdf1 from './shorttermsfiles/ადრეული განათლების სპეციალისტი.pdf';

import ShorttermPdf2 from './shorttermsfiles/არგონრაკალური შედუღება.pdf';

import ShorttermPdf3 from './shorttermsfiles/გერიატრიული ასისტენტი.pdf';

import ShorttermPdf4 from './shorttermsfiles/გრაფიკული დიზაინი.pdf';

import ShorttermPdf5 from './shorttermsfiles/ელექტრო ტექნოლოგია და უსაფრთოხება (1).pdf';

import ShorttermPdf6 from './shorttermsfiles/ელექტრორკალური შედუღება.pdf';

import ShorttermPdf7 from './shorttermsfiles/ვებგვერდის შექმნა და მართვა.pdf';

import ShorttermPdf8 from './shorttermsfiles/ნარჩენების მართვა.pdf';

import ShorttermPdf9 from './shorttermsfiles/სააღმზრდელო პროცესის წარმართვა სკოლამდელი აღზრდის დაწესებულებებში (1).pdf';

import ShorttermPdf10 from './shorttermsfiles/საბაჟო დეკლარირება.pdf';

import ShorttermPdf12 from './shorttermsfiles/საინჟინრო ნახაზების შექმნა CAD -ის სისტემებით.pdf';

import ShorttermPdf13 from './shorttermsfiles/სასზაღვრო საკარანტინო კონტორილი.pdf';

import ShorttermPdf14 from './shorttermsfiles/სისტემური ადმინისტრირება.pdf';


import ShorttermPdf15 from './shorttermsfiles/სსსმ ბავშვებთან მუშაობა.pdf';




import ProgImg1 from '/public/Images/shorttermimg/adreuli-ganatleba.jpg';

import ProgImg2 from '/public/Images/shorttermimg/shedugeba.jpg';

import ProgImg3 from '/public/Images/shorttermimg/geriatriuli.jpg';

import ProgImg4 from '/public/Images/shorttermimg/graphic.jpg';

import ProgImg5 from '/public/Images/shorttermimg/elektro.jpg';

import ProgImg6 from '/public/Images/shorttermimg/elektro-shedugeba.jpg';

import ProgImg7 from '/public/Images/shorttermimg/web.jpg';

import ProgImg8 from '/public/Images/shorttermimg/narcheni.jpg';

import ProgImg9 from '/public/Images/shorttermimg/saagmzrdelo.jpg';

import ProgImg10 from '/public/Images/shorttermimg/sabajo.jpg';

import ProgImg12 from '/public/Images/shorttermimg/injineria.jpg';

import ProgImg13 from '/public/Images/shorttermimg/karantini.jpg';

import ProgImg14 from '/public/Images/shorttermimg/sistemuri.jpg';

import ProgImg15 from '/public/Images/shorttermimg/sssm.jpg';
const ShortTermComp = () => {
    return(
        <>
        <div className="shortterm-main">
            <div className="shortterm-position">
                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg1}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>ადრეული განათლების სპეციალისტი</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf1} to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg2}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>არგონრაკალური შედუღება</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf2}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg3}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>გერიატრიული ასისტენტი</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf3}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg4}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>გრაფიკული დიზაინი</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf4}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg5}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>ელექტრო ტექნოლოგია და უსაფრთოხება</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf5}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg6}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>ელექტრორკალური შედუღება</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf6}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg7}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>ვებგვერდის შექმნა და მართვა</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf7}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg8}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>ნარჩენების მართვა</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf8}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg9}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>სააღმზრდელო პროცესის წარმართვა სკოლამდელი აღზრდის დაწესებულებებში</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf9}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg10}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>საბაჟო დეკლარირება</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf10}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg12}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>საინჟინრო ნახაზების შექმნა CAD -ის სისტემებით</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf12}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg13}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>სასაზაღვრო საკარანტინო კონტორილი</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf13}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg14}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>სისტემური ადმინისტრირება</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf14}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>


                <div className="short-term-bg">
                    <div className="shortterm-card">
                        <div className="imgBox">
                            <img
                            src={ProgImg15}
                            alt="mouse corsair"
                            className="mouse"
                            />
                        </div>
                        <div className="contentBox">
                            <h3 className='shortterm-card-title'>სსსმ ბავშვებთან მუშაობა</h3>
                            {/* <a href="#" className="buy"> */}
                            <a target='_blank' href={ShorttermPdf15}  to='/registration' className='buy'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                            {/* </a> */}
                            <Link to='/registration' className='buy2'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ShortTermComp;