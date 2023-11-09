import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Logo from '/public/Images/LOGO.png';
import Logo2 from '/public/Images/BTA PNG.png';
import FlagGeo from '/public/Images/flagsimg/geo.png';
import FlagEng from '/public/Images/flagsimg/eng.png';
import FixedTop from '../FixedTop/FixedTop';
import './fixedtopanotherpages.css';
import './searchanother.scss';
function OffcanvasExample() {
  const openNavbar = () => {
    const navbarToggle = document.querySelector('.nav-toggle');
      navbarToggle.click();
  };
  return (
    <>  
        <FixedTop/>
        <div className="navbar-img">
          <Link to='/'><img className='navbar-img-another' src={Logo2} alt="" /></Link>
        </div>
        <div className="navbar-another-bg"></div>
        <div className="navlinks-container-another">
            <div className="nav-links-another">
            <div className="search-main-another">
              <div className="search-container-another">
                  <div className="search-box-another">
                    <input type="text" placeholder=''/>
                    <span></span>
                  </div>
             </div>
          </div>
                <Link to='/'><img className='offcanvas-geo' src={FlagGeo} alt="" /></Link>
                <Link to='/'><img className='offcanvas-eng' src={FlagEng} alt="" /></Link>
                <div onClick={openNavbar} className="menu-txt">მენიუ</div>
            </div>
        </div>
  
    </>
  );
}

export default OffcanvasExample;