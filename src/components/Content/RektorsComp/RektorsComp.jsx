import LectorsImg from '/public/Images/sliderimg/rector.jpg';
import './rektorscomp.css';

//style from greeting.jsx greetingpg

const RektorsComp = () => {
    return(
        <>
           <div className="rectors-greeting-main">
         <div class="one">
      <hr />
            <h1 className='one-h1'>რექტორი</h1>
        <hr />
        </div>
            <div className="rector-main">
                <div className="rector-text-section">
                    <div className="rectors-greeting">
                        <div className="rektor-position">
                            <div className="rektor-text-start">
                                <div className="lectors-img-container">
                                    <img className='lectors-img' src={LectorsImg} alt="" />
                                </div>
                                <br />
                                <p className='greeting-text-1'>დაიბადა ქ. თბილისში 1975 წლის 10 აპრილს.</p>

                                <h4 className='greeting-text-title'>განათლება:</h4>
                                
                                <p className='greeting-text-1'>2017 წ.- საქართველოს ტექნიკური უნივერსიტეტი, მინიჭებული ხარისხი: ბიზნესის ადმინისტრირების დოქტორი.</p>

                                <p className='greeting-text-1'>1998 წ.- თბილისის სამედიცინო უნივერსიტეტი, მაგისტრატურასთან გათანაბრებული ხარისხი. მინიჭებული კვალიფიკაცია: ექიმ-პედიატრი.</p>

                                <h4 className='greeting-text-title'>კონფერენციები:</h4>

                                <p className='greeting-text-1'>2017 წ. – საერთაშორისო სამეცნიერო კონფერენცია- „გლობალიზაცია და ბიზნესის თანამედროვე გამომწვევები“, თბილისი, საქართველო.</p>

                                <p className='greeting-text-1'>2015 წ.- Ι საერთაშორისო სამეცნიერო-პრაქტიკული კონფერენცია, ბათუმი, საქართველო.</p>

                                <p className='greeting-text-1'>2013 წ.- საერთაშორისო კონფერენცია თემაზე: „უმაღლესი განათლების სისტემა ისრაელში“, არიელის უნივერსიტეტი, ისრაელი.</p>

                                <h4 className='greeting-text-title'>სამუშაო გამოცდილება:</h4>

                                <p className='greeting-text-1'>2014-იდან დღემდე- შპს „ბიზნესისა და ტექნოლოგიების აკადემია“, რექტორი.</p>

                                <p className='greeting-text-1'>2011-2014 წწ- შპს „ორიენტირი“, დირექტორი.</p>

                                <p className='greeting-text-1'>2000-2011 წწ- შპს „ორიენტირი“, დირექტორის მოადგილე სასწავლო მუშაობაში.</p>

                                <p className='greeting-text-1'>1998-2000 წწ- შპს „ორიენტირი“, პედიატრიის და მედდის პედაგოგი.</p>

                                <h4 className='greeting-text-title'>გამოქვეყნებული პუბლიკაციები:</h4>

                                <p className='greeting-text-1'>2017 წ.- „სტუდენტზე ორიენტირებული საუნივერსიტეტო განათლება მისი დასაქმების გარანტი უნდა გახდეს“, ჟურნალი „ეკონომიკა“.</p>

                                <p className='greeting-text-1'>2016 წ. -„ მისწრაფება უმაღლესი განათლების მიღებისაკენ ყოველთვის არ მთავრდება ცოდნის მიღებით“, ჟურნალი „ეკონომიკა“.</p>

                                <p className='greeting-text-1'>2015 წ.- „განათლება, როგორც ბიზნესი და როგორც ქვეყნის ეკონომიკური ზრდის ფაქტორი“, ჟურნალი „ეკონომიკა“.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default RektorsComp;