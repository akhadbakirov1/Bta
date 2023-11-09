import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './fixedtop.css';
import Logo from '/public/Images/LOGO.png';
import { Link } from 'react-router-dom';

import Structure from '/public/pdfpages/სტრუქტურა.pdf';
import StudentServices from '/public/pdfpages/სტუდენტური-სერვისები.pdf';
import Gzamklevi from '/public/pdfpages/პროფესიული-სტუდენტის-გზამკვლევი-1.pdf';
import DiplomForm from '/public/pdfpages/diplomform.jpeg';
import AplikantebisGzamklevi from '/public/pdfpages/აპლიკანტების-გზამკვლევი.pdf';
import Araformaluri from '/public/pdfpages/არაფორმალური განათლების აღიარება (1).pdf';

import React, { useState } from 'react';



function FixedTop() {
  // const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsNavbarOpen(!isNavbarOpen);
  // }
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand}  className="fixed-top">
          <Container fluid>
            <Navbar.Toggle className='nav-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <div className="offcanvas-main">
            <Navbar.Offcanvas  className='offcanvas-bg'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              scroll='true'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to='/'><img className='offcanvas-logo' src={Logo} alt="" /></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to='/'><Nav.Link className='navlink-item' href="/">მთავარი</Nav.Link></Link>

                  <NavDropdown className='navlink-item'
                    title="ჩვენ შესახებ" 
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                      <div className="a-color">
                     <Link to='/aboutacademy'><NavDropdown.Item className='navlink-item-inner' href="/aboutacademy">აკადემიის შესახებ</NavDropdown.Item></Link>
                     <Link to='/authorization'><NavDropdown.Item className='navlink-item-inner' href="#action4">ავტორიზაცია / აკრედიტაცია</NavDropdown.Item></Link>
                      <Link to='/missionvision'><NavDropdown.Item className='navlink-item-inner' href="#action4">მისია, ხედვა და ღირებულებები</NavDropdown.Item></Link>
                      {/* <Link to='/partners'><NavDropdown.Item className='navlink-item-inner' href="#action3">პარტნიორები</NavDropdown.Item></Link> */}
                    </div>
                  </NavDropdown>
                  
                  <NavDropdown className='navlink-item'
                    title="ჩვენი გუნდი"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  > 
                    <div className="a-color">
                    <Link to='/rectorspg'><NavDropdown.Item className='navlink-item-inner'  href="/rectorspg">რექტორი</NavDropdown.Item></Link>  
                    <Link to='/greeting'><NavDropdown.Item className='navlink-item-inner'  href="/greeting">რექტორის მისალმება</NavDropdown.Item></Link>
                      <NavDropdown.Item className='navlink-item-inner' target='_blank' href={Structure}>სტრუქტურა</NavDropdown.Item>
                     <Link to='/adminstration'><NavDropdown.Item className='navlink-item-inner' href="#action3">ადმინსტრაცია</NavDropdown.Item></Link>
                      <Link to='/teachers'><NavDropdown.Item className='navlink-item-inner' href="#action3">მასწავლებლები</NavDropdown.Item></Link>
                      <Link to='/vacancy'><NavDropdown.Item className='navlink-item-inner' href="/vacancy">ვაკანსია</NavDropdown.Item></Link>
                    </div>
                  </NavDropdown>

                  <NavDropdown className='navlink-item'
                    title="სტუდენტებს"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="a-color">
                     <Link to='/studentselfgovernment'><NavDropdown.Item className='navlink-item-inner' href="#action3">სტუდენტური თვითმართველობა</NavDropdown.Item></Link>
                      <Link to='/studentlife'><NavDropdown.Item className='navlink-item-inner' href="#action4">სტუდენტური ცხოვრება</NavDropdown.Item></Link>
                      <NavDropdown.Item className='navlink-item-inner' target='_blank' href={Gzamklevi}>გზამკვლევი</NavDropdown.Item>
                      <NavDropdown.Item className='navlink-item-inner'target='_blank' href={DiplomForm}>დიპლომის ფორმა</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                 

                  <NavDropdown className='navlink-item'
                    title="აბიტურიენტებს"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="a-color">
                      <a target='_blank' href={AplikantebisGzamklevi}><NavDropdown.Item className='navlink-item-inner' target='_blank' href={AplikantebisGzamklevi}>აპლიკანტების გზამკვლევი</NavDropdown.Item></a>
                      <Link to='/migeba'><NavDropdown.Item className='navlink-item-inner' href="#action3">მიღება</NavDropdown.Item></Link>
                      {/* <NavDropdown.Item className='navlink-item-inner' href="#action4">რეგისტრაციის ფორმები</NavDropdown.Item> */}

                      {/* <NavDropdown className='navlink-item-2'
                    title="სერვისები"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="a-color-2">
                      <NavDropdown.Item className='navlink-item-inner-2' target='_blank' href={StudentServices}>სტუდენტური სერვისები</NavDropdown.Item>
                      <NavDropdown.Item className='navlink-item-inner-2 navlink-overfolow-scroll' target='_blank' href={Araformaluri}>არაფორმალური განათლების აღიარება</NavDropdown.Item>
                    </div>
                  </NavDropdown> */}
                    </div>
                  </NavDropdown>

                  <NavDropdown className='navlink-item'
                    title="სერვისები"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="a-color">
                      <NavDropdown.Item className='navlink-item-inner' target='_blank' href={StudentServices}>სტუდენტური სერვისები</NavDropdown.Item>
                      <NavDropdown.Item className='navlink-item-inner navlink-overfolow-scroll' target='_blank' href={Araformaluri}>არაფორმალური განათლების აღიარება</NavDropdown.Item>
                    </div>
                  </NavDropdown>

                 


                  <NavDropdown className='navlink-item'
                    title="გალერეა"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <div className="a-color">
                    <Link to='/photogallery'><NavDropdown.Item  className='navlink-item-inner' href="#photogallery">ფოტო გალერეა</NavDropdown.Item></Link>
                      <NavDropdown.Item className='navlink-item-inner' href="#action4">ვიდეო გალერეა</NavDropdown.Item>
                    </div>
                  </NavDropdown>

                 
                  <Nav.Link className='navlink-item' href="#">საგამოცდო სივრცე</Nav.Link>

                  <Nav.Link className='navlink-item' ><Link className='contacts-btn' to='/contactspg'>კონტაქტი</Link></Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default FixedTop;
