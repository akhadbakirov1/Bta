import './programscomp.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import ProgPdf1 from './progpdf/აღმზრდელი  პროგრამა (1) (1).pdf';
import ProgPdf2 from './progpdf/ელექტროობა პროგრამა (1).pdf';
import ProgPdf3 from './progpdf/ვებტექნოლოგიების პროგრამა.pdf';
import ProgPdf4 from './progpdf/ინფორმაციის  ტექნოოლოგის პროგრამა PDF.pdf';
import ProgPdf5 from './progpdf/მშენებლობის მწარმოებელი  პროგრამა (1).pdf';
import ProgPdf6 from './progpdf/საბაჟო საქმე პროგრამა.pdf';
import ProgPdf7 from './progpdf/საექთნო პროფესიული საგანმანათლებლო  პროგრამა.pdf';
import ProgPdf8 from './progpdf/საოფისე საქმე პროგრამა.pdf';
import ProgPdf9 from './progpdf/შრომა და  გარემოსდაცვა  პროგრამა.pdf';
import ProgPdf10 from './progpdf/ვებტექნოლოგიების პროგრამა (ინტეგრირებული).pdf';


import ProgImg1 from '/public/Images/programsimg/usafrtxoeba.jpg';
import ProgImg2 from '/public/Images/programsimg/web.jpg';
import ProgImg3 from '/public/Images/programsimg/informationtechnologies.jpg';
import ProgImg4 from '/public/Images/programsimg/ektani.jpg';
import ProgImg5 from '/public/Images/programsimg/office.jpg';
import ProgImg6 from '/public/Images/programsimg/building.jpg';
import ProgImg7 from '/public/Images/programsimg/electrician.jpg';
import ProgImg8 from '/public/Images/programsimg/sabajosakme.jpg';
import ProgImg9 from '/public/Images/programsimg/agmzrdeli.jpg';
import ProgImg10 from '/public/Images/programsimg/webinteg.jpg';
const CardBook = () => {
    return (
        <>
          <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>პროგრამები</h1>
           </div>
        <hr />
      </div>
      <div className="container-book-main">
       <div className="container-book">


            <div className="card-book-bg">
            <div className="card-book-title">
              <h1>ვებტექნოლოგიები</h1>
              <div className="card-book">
                  <div className="Box-book">
                    <img src={ProgImg2} />
                    <h3 className='vrclad'>ვრცლად</h3>
                  </div>
                  <div className="details">
                      <div className="book-buttons-main">
                      <a target="_blank" href={ProgPdf3} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                      <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-book-bg">
            <div className="card-book-title">
              <h1>ვებტექნოლოგიები (ინტეგრირებული)</h1>
              <div className="card-book">
                  <div className="Box-book">
                    <img src={ProgImg10} />
                    <h3 className='vrclad'>ვრცლად</h3>
                  </div>
                  <div className="details">
                      <div className="book-buttons-main">
                      <a target="_blank" href={ProgPdf10} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                      <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>ინფორმაციის ტექნოლოგია</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg3} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf4} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>საექთნო განათლება</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg4} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf7} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>საოფისე საქმე</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg5} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf8} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
            <div className="card-book-title">
              <h1>შრომის უსაფრთხოებისა და გარემოსდაცვითი ტექნოლოგიები</h1>
              <div className="card-book">
                  <div className="Box-book">
                    <img src={ProgImg1} />
                    <h3 className='vrclad'>ვრცლად</h3>
                  </div>
                  <div className="details">
                      <div className="book-buttons-main">
                      <a target="_blank" href={ProgPdf9} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                      <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                    </div>
                </div>
              </div>
            </div>
          </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>მშენებლობის მწარმოებელი</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg6} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank"  href={ProgPdf5} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>ელექტროობა</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg7} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf2} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>საბაჟო საქმე</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg8} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf6} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-book-bg">
              <div className="card-book-title">
                <h1>აღმზრდელი</h1>
                <div className="card-book">
                    <div className="Box-book">
                      <img src={ProgImg9} />
                      <h3 className='vrclad'>ვრცლად</h3>
                    </div>
                    <div className="details">
                        <div className="book-buttons-main">
                        <a target="_blank" href={ProgPdf1} className='book-btn2'>პროგრამა<FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></a>
                        <Link to='/registration' className='book-btn1'>წინასწარი რეგისტრაცია<FontAwesomeIcon className='fa-icon-book' icon={faPaperPlane} /></Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
  

  



  </div>
</div>






        </>
    );
}
export default CardBook;