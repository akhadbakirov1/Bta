import Card from 'react-bootstrap/Card';
import './academyinfo.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import migeba from '../../../../public/pdfpages/მიღება.pdf';

import { faArrowUpWideShort,faAward,faBookOpenReader,faGraduationCap,faListCheck,faPersonChalkboard, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Academyinfo() {
  return (
    <>
    <div className="academy-info-bg">
     
         <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>ჩვენ გთავაზობთ</h1>
           </div>
        <hr />
      </div>
    <div className="main-academyinfo">
      
    <Card className='card-academy-bg'>
      <Card.Body className='card-flex-academy'>
        <Card.Title className='academyinfo-logo'><FontAwesomeIcon className='fa-academyinfo' icon={faUserGraduate}/></Card.Title>
        <Card.Subtitle className="title-academy">პროფესიული საგანმანათლებლო პროგრამები</Card.Subtitle>
        <Card.Text className='academyinfo-text'>
        </Card.Text>
        <p className="card-flex"></p>
        <div className="btn-info">
        <Link to='/programspg'><Button className='academyinfo-btn' variant="light">დაწვრილებით</Button></Link>
        </div>

      </Card.Body>
    </Card>

    <Card className='card-academy-bg-white'>
      <Card.Body className='card-flex-academy'>
        <Card.Title className='academyinfo-logo'><FontAwesomeIcon className='fa-academyinfo-2' icon={faBookOpenReader}/></Card.Title>
        <Card.Subtitle className=" title-academyz">მიღება</Card.Subtitle>
        <Card.Text className='academyinfo-textz'>
        </Card.Text>
        <p className="card-flex"></p>
        <div className="btn-info">
            <Link to='/migeba'><Button className='academyinfo-btn' variant="dark">დაწვრილებით</Button></Link>
        </div>
      </Card.Body>
    </Card>

    <Card className='card-academy-bg-white-1' >
      <Card.Body className='card-flex-academy'>
        <Card.Title className='academyinfo-logo'><FontAwesomeIcon className='fa-academyinfo' icon={faAward}/></Card.Title>
        <Card.Subtitle className=" title-academy">მოკლე ვადიანი სასერთიფიკატო პროგრამები</Card.Subtitle>
        <Card.Text className='academyinfo-text'>
        </Card.Text>
        <p className="card-flex"></p>
        <div className="btn-info">
        <Link to='/shortterm'><Button className='academyinfo-btn' variant="light">დაწვრილებით</Button></Link>
        </div>
      </Card.Body>
    </Card>

    <Card className='card-academy-bg-1'>
      <Card.Body className='card-flex-academy'>
        <Card.Title className='academyinfo-logo'><FontAwesomeIcon className='fa-academyinfo-2' icon={faListCheck}/></Card.Title>
        <Card.Subtitle className="title-academyz">განხორციელებული პროექტები</Card.Subtitle>
        <Card.Text className='academyinfo-textz'>
        </Card.Text>
        <p className="card-flex"></p>
        <div className="btn-info">
        <Button className='academyinfo-btn' variant="dark">დაწვრილებით</Button>
        </div>
      </Card.Body>
    </Card>

    </div>
    </div>
    </>

  );
}

export default Academyinfo;