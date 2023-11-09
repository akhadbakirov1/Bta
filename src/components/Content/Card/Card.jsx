import myPic from '../../../../public/Images/myimg.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

function Card1() {

 
  return (
   <>
   <div className="card1-main">
   <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>პროგრამები</h1>
           </div>
        <hr />
      </div>
      

      <div className='card-content1'>
      <Card className="card1" style={{ width: '28rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '28rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '28rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>

      </div>

      <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>პროგრამები</h1>
           </div>
        <hr />
      </div>

      <div className="card-content2">


      <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>

        <Card className="card1" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={myPic} />
          <Card.Body className='card-body'>
            <Card.Title>Card Title</Card.Title>
            <div className="card-container">
            <Link><Button className='reg-button' variant="success">რეგისტრაცია</Button></Link>
           <a href='#' target="_blank"><Button className='pdf-button' variant="danger"><FontAwesomeIcon className='fa-icon-book' icon={faFilePdf} /></Button></a> 
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
   </>
  );
}

export default Card1;