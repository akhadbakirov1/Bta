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

const NewsInner3 = () => {
    return(
        <>
            <Header/>
            <div className="newsinner-main">
                <div className="newsinner-bg-blue">
                    <div className="newsinner-bg-white">
                         <h2 className='newsinner-title'>საჩხერეში ახალი პროფესიული საგანმანათლებლო ჰაბის პრეზენტაცია</h2>
                        <img className='newsinner-img' src={NewsImg3} alt="" />
                        <p className='newsinner-text'>მიმდინარე წლის 12 სექტემბერს ბიზნესისა და ტექნოლოგიების აკადემიის რექტორმა ქალბატონმა სოფიო მაჭარაშვილმა ქ. საჩხერეში ახალი პროფესიული საგანმანათლებლო ჰაბის პრეზენტაცია საჩხერის „კინოს სახლში“ ჩაატარა.
პრეზენტაციას მასშტაბური სახე ჰქონდა, რომელსაც საჩხერის მუნიციპალიტეტის მერი - ლევან ივანაშვილი და საჩხერის მუნიციპალიტეტის საკრებულოს თავჯდომარე - გაგა დარბაიძე ესწრებოდნენ, ასევე მოწვეულნი იყვენენ საკრებულოს წევრები და მერიის სამსახურის თანამშრომლები, განათლების რესურს ცენტრის, სკოლებისა და ბაღების ხელმძღვანელები/წარმომადგენლები და სხვა დაინტერესებული პირები.
აღსანიშნავია, რომ პრეზენტაციის სატელევიზიო სივრცეში გასაშუქებლად და მხარდასაჭერად ქ. საჩხერეში ვიზიტით იმყოფებოდა ტელეარხ „პალიტრანიუსის“ შემოქმედებითი გუნდი.
ბიზნესისა და ტექნოლოგიების აკადემია მადლობას უხდის :
გადაცემა „მონეტიზაციის“ წამყვანსა და გადაცემის ავტორს სანდრო ვეფხვაძეს, გადაცემის ბიზნეს რეპორტიორს, პროდიუსერს - ნინა ჯალიაშვილს, გადაცემის რეჟისორსა და თანაწამყვანს - ნიკოლოზ ხომასურიძეს, გადაცემის თანაწამყვანებს - ედიშერ ჯობავას, მარიტა კოჭლამაზიშვილს, ნინო წიკლაურს, სერგო ავსაჯანიშვილს; TV პალიტრანიუსი - TV PalitraNews
საჩხერის მუნიციპალიტეტის საკრებულოსა და მარიას
ბიზნესისა და ტექნოლოგიების აკადემიის საჩხერის განყოფილების ხელმძღვანელობას ბიზნესისა და ტექნოლოგიების აკადემია საჩხერეში
ტელევიზია ივერვიზიას იმერვიზია
ფეისბუქ გვერდს საზოგადოება საჩხერელი საზოგადოება საჩხერელი</p>
                    </div>
                </div>
            </div>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default NewsInner3;