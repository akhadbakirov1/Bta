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

const NewsInner1 = () => {
    return(
        <>
            <Header/>
            <div className="newsinner-main">
                <div className="newsinner-bg-blue">
                    <div className="newsinner-bg-white">
                         <h2 className='newsinner-title'>ორქშოპი „სამუშაოზე დაფუძნებული სწავლების მასშტაბის გაფართოება და კერძო სექტორთან თანამშრომლობა“</h2>
                        <img className='newsinner-img' src={NewsImg1} alt="" />
                        <p className='newsinner-text'>2023 წლის 19 ივნისს, პროფესიული უნარების სააგენტოს ორგანიზებით გაიმართება ვორქშოპი „სამუშაოზე დაფუძნებული სწავლების მასშტაბის გაფართოება და კერძო სექტორთან თანამშრომლობა“.

ვორქშოპზე განხილულ იქნა:

დუალური / კოოპერაციული სწავლება და

სასწავლო საწარმოს სტატუსი;

პარტნიორი ორგანიზაციის შერჩევა კოოპერაციული

სწავლებისთვის

პროფესიული სტუდენტის ჩანაწერების ჟურნალის

ადმინისტრირება

შეხვედრაზე მონაწილეებმა შეასრულეს პრაქტიკული სავარჯიშო სექტორთან

თანამშრომლობასთან დაკავშირებული გამოწვევები და მათი

გადაჭრის გზები

აღნიშნულ ვორქშოფს აკადემიის ხარისხის უზრუნველყოფის სამსახურის უფროსი ალინა კუპრავა დაესწრო</p>
                    </div>
                </div>
            </div>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default NewsInner1;