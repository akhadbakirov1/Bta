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

const NewsInner5 = () => {
    return(
        <>
            <Header/>
            <div className="newsinner-main">
                <div className="newsinner-bg-blue">
                    <div className="newsinner-bg-white">
                         <h2 className='newsinner-title'>სტრატეგიული და სამოქმედო გეგმების ცვლილებები</h2>
                        <img className='newsinner-img' src={NewsImg6} alt="" />
                        <p className='newsinner-text'>რექტორის ბრძანებით შექმნილი სამუშაო ჯგუფის მიერ დაინტერესებული მხარეების ჩართულობით განხორციელდა სტრატეგიული და სამოქმედო გეგმების ცვლილებები( აღნიშნული გამოიწვია სტრუქტურის ცვლილებამ) , მეტი ჩართულობის და გაზიარების  მიზნით პროექტები განთავსებულია ვებ-გვერდზე, გთხოვთ გაეცნოთ და თქვენი დასაბუთებული  რეკომენდაციები გამოაგზავნოთ არაუგვიანეს 2023 წლის 9 აგვისტოს  18:00 სთ დაწესებულების ელექტრონულ ფოსტაზე: btaedu@yahoo.com, დიდი მადლობა ჩართულობისათვის

დოკუმენტები შეგიძლიათ იხილოთ და ჩამოტვირთოთ ბმულიდან </p>
                    </div>
                </div>
            </div>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default NewsInner5;