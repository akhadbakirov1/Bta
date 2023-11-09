import GalleryImg1 from '/public/Images/galleryimages/62f68137b2418.jpeg';
import GalleryImg2 from '/public/Images/galleryimages/62f680c9ea8d1.jpeg';
import { Link } from 'react-router-dom';
import './photogallerycomp.css'

const PhotoGalleryComp = () => {
    return(
        <>
         <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>ფოტო გალერეა</h1>
           </div>
        <hr />
      </div>
        <div className="gallery-main">
            <Link to='/photogallery=page1'>
                <div className="overlay-img">
                    <img className='gallery-img' src={GalleryImg2} alt="" />
                    <p className="gallery-text">საქართველოს ადვოკატები დამოუკიდებელი  პროფესიისთვის</p>
                </div>
            </Link>
            <Link to='/photogallery=page1'>
                <div className="overlay-img">
                    <img className='gallery-img' src={GalleryImg1} alt="" />
                    <p className="gallery-text">აკადემიის დაჯილდოვება</p>
                </div>
            </Link>
        </div>
        </>
    );
}

export default PhotoGalleryComp;