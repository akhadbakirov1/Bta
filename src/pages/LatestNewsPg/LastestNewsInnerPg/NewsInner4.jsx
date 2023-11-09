import Header from '../../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import UsefulLinks from '../../../components/Content/UsefulLinks/UsefulLinks';
import Footer from '../../../components/Footer2/Footer2';
import NewsImg1 from '/public/Images/newsimg/649450f5d4b77.jpeg'
import NewsImg2 from '/public/Images/newsimg/6512e9656d204.jpeg'
import NewsImg3 from '/public/Images/newsimg/650da0b015ab2.jpeg'
import NewsImg4 from '/public/Images/newsimg/650da01342a12.jpeg'
import NewsImg5 from '/public/Images/newsimg/64c796fd72947.jpeg'
import NewsImg6 from '/public/Images/newsimg/64d37963e7069.jpeg'
import './newsinnerstyle.css';

const NewsInner4 = () => {
    return(
        <>
            <Header/>
            <div className="newsinner-main">
                <div className="newsinner-bg-blue">
                    <div className="newsinner-bg-white">
                         <h2 className='newsinner-title'>პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!</h2>
                        <img className='newsinner-img' src={NewsImg4} alt="" />
                        <p className='newsinner-text'>პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრირებულ აპლიკანტთა საყურადღებოდ!
მოტივაციური გასაუბრების და პროფესიული ტესტირების საბოლოო შედეგები გამოცხადდება
17 ოქტომბრიდან</p>
                    </div>
                </div>
            </div>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default NewsInner4;