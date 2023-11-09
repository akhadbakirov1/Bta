import './achivment.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBuildingColumns, faClipboardCheck, faHandshake, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Card from 'react-bootstrap/Card';
const Achivment = () => {
    return (
        <>
        <div className="main-achiv-bg">
         <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>მთავარი მიღწევები</h1>
           </div>
        <hr />
      </div>
        <div className="achivment-main">
            <div className="achivment-item-display">
                    <div className="achivment-item1">
                    <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faUserGraduate}/></Card.Title>
                                <Card.Subtitle className="icon-value">245</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                 სტუდენტი
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faClipboardCheck}/></Card.Title>
                                <Card.Subtitle className="icon-value">440</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                კურსდამთავრებული
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="achivment-item2">
                    <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faBook}/></Card.Title>
                                <Card.Subtitle className="icon-value">12</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                    პროგრამები
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faHandshake}/></Card.Title>
                                <Card.Subtitle className="icon-value">30</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                პარტნიორი
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                </div>

                <div className="achivment-item2">
                    <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faBook}/></Card.Title>
                                <Card.Subtitle className="icon-value">150</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                სათაური
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                        <Card className='achivment-card' >
                            <Card.Body className='achivment-card-body'>
                                <Card.Title><FontAwesomeIcon className='fa-achivment' icon={faHandshake}/></Card.Title>
                                <Card.Subtitle className="icon-value">43</Card.Subtitle>
                                <Card.Text className='icon-text'>
                                სათაური
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                        </Card>
                </div>
            </div>
            <div className="achivment-item3">
            <div className="menu-achivments1">
                    <div className="flex-achivments1">
                        <div className="flex-items1">
                            <h1>გახდი კოლეჯის სტუდენტი</h1>
                            <hr />
                            <div className="text-achiv-0">
                            <p >გაიგე რა საბუთები დაგჭირდება ბიზნესისა და ტექნოლოგიების აკადემიის სასწავლო პროგრამაზე დასარეგისტრირებლად</p>
                            </div>
                        </div>
                        <div className="btn-achivments1"><Link>იხილეთ ვრცლად</Link></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Achivment;