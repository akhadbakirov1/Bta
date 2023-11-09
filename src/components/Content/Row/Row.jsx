import React from 'react';
import './Row.css';
import { Link } from 'react-router-dom';
import Icon1 from '/public/Images/rowimg/law.png';
import Icon2 from '/public/Images/rowimg/success.png';
import Icon3 from '/public/Images/rowimg/building.png';
import Icon4 from '/public/Images/rowimg/library.png';
import Icon5 from '/public/Images/rowimg/catalogue.png';

const Row = () => {
    return (
        <div className="row-content">
        <div className="row-main">
        <div className="all">
        
            <div className="lefter">
            <Link className='row-position' to='/strategicdevpg'>
                <img className='row-img' src={Icon2} alt="" />          
                <p className="text">სტრატეგიული განვითარება</p>
            </Link>
            </div>
            

           
        <div className="left">
            <Link className='row-position' to='/catalogpg'>
                <img className='row-img' src={Icon3} alt="" />          
                <p className="text">საჩხერეს განყოფილება</p>
            </Link>
        </div>
      

        
        <div className="center">
        <Link  to='/legalactspg'>
        {/* <img className='row-img-center' src={Icon1} alt="" /> */}
            <div className="explainer">
            <span>ვრცლად</span>
            </div>
            <div  className="text">სამართლებრივი აქტები</div>
            </Link>
        </div>
       
       
        <div className="right">
            <Link className='row-position' to='/catalogpg'>
                <img className='row-img' src={Icon4} alt="" />          
                <p className="text">ბიბლიოთეკა</p>
            </Link>
        </div>
       
        
        <div className="righter">
            <Link className='row-position' to='/catalogpg'>
            <img className='row-img' src={Icon5} alt="" />          
            <p className="text">კატალოგი</p>
            </Link>
        </div>

    </div>
    </div>
    </div>
    )
}

export default Row;