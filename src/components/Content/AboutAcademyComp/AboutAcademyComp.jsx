import LectorsImg from '/public/Images/sliderimg/vinecia.webp';


import './aboutacademycomp.css';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileText, faTextHeight } from '@fortawesome/free-solid-svg-icons';

//style from greetingcom.css
//one-h1 style from card3eng.css

const AboutAcademyComp = () => {
    return(
        <>
            <hr /> 
            <div className="one">
                <h1 className='one-h1'>აკადემიის შესახებ</h1>
            </div>
            <hr />
          <div className="aboutacademy-main">
            <div className="aboutacademy-bg-blue">
            <div className="aboutacademy-bg-white">
            <div className="academy-image-container">
                    <img className='academy-image' src={LectorsImg} alt="" /> 
                </div> 
                <div className="aboutacademy-bg-position">


                    <br />
                    <p className='aboutacademy-text-title'>შპს ბიზნესისა და ტექნოლოგიების აკადემია დაფუძნებულია 30 წლიანი საგანმანათლებლო გამოცდილების საფუძველზე, რომელსაც 2014 წელს მიენიჭა ავტორიზებული პროფესიული საგანმანათლებლო დაწესებულების სტატუსი, დღეისათვის ახორციელებს პრიორიტეტული მიმართულების საგანმანათლებლო პროგრამებს.</p>
                    <div className="academy-text2-bg">
                    <ul>
                        <li className='aboutacademy-text-2'>დღეისათვის აკადემია ერთ-ერთი პროფესიული საგანმანათლებლო დაწესებულებაა, რომელიც 2019 წლის დეკემბერში გახდა ISO 9001:2015 სერთიფიკატის მფლობელი. </li>
                    </ul>
                    </div>

                    <div className="academy-text2-bg">
                    <ul>
                        <li className='aboutacademy-text-2'>2018 წლის სოციალური მომსახურების სააგენტოს მიერ მიენიჭა წლის საუკეთესო პარტნიორის ტიტული.</li>
                     </ul>

                     </div>
                     <div className="academy-text2-bg">
                    <ul>
                     <li className='aboutacademy-text-2'>კოლეჯების ბრენდირების ფარგლებში 2016-17 წლებში 2-ჯერ დაჯილდოვდა უმაღლესი შეფასებით 5 ვარსკვლავით.</li>
                     </ul>
                     </div>
                    

                    <p className='aboutacademy-text-1'>2019 წელს ბიზნესისა და დექნოლოგიების აკადემიამ ერთ-ერთმა პირველმა დანერგა „მშენებლობის მწარმოებლის“ დუალური პროგრამა.</p>

                    <p className='aboutacademy-text-1'>პირველად კერძო საგანმანათლებლო დაწესებულებების სივრცეში, აკადემიის ელექტროობის პროფესიული საგანმანათლებლო პროგრამის პროფესიული სტუდენტი გახდა სს „ენერგო-პრო ჯორჯია“-ს სტიპენდიანტი.</p>
                    <div className="academy-text2-bg">
                    <ul>
                        <li className='aboutacademy-text-2'>ჩვენი ორგანიზაციისთვის სტრატეგიულად მნიშვნელოვანია სხვადასხვა პარტნიორების მოძიება, მათთან თანამშრომლობის დამყარება, რაც ხელს უწყობს სტუდენტების დასაქმებას.</li>
                    </ul>
                    </div>

                    <p className='aboutacademy-text-1'>ბიზნესისა და ტექნოლოგიების აკადემია არის საქართველოს სავაჭრო-სამრეწველო პალატისა და კერძო კოლეჯების ასოციაციის წევრი, ასევე 2019 წლის 14 თებერვალს BTA საქართველოს პროფესიული კონსულტირების ასოციაცის პარტნიორი ორგანიზაცია გახდა, რომლიც აკადემიის რექტორი ქალბატონი სოფიო მაჭარაშვილია.</p>
        
                    <p className='aboutacademy-text-title'>BTA აქტიურად ახორციელებს სხვადასხვა საგანმანათლებლო პროექტებს:</p>
               
                    <div className="academy-text2-bg">
                        <ul>
                            <li className='aboutacademy-text-2'>„სამუშაოს მაძიებელთა პროფესიული მომზადება-გადამზადებისა და კვალიფიკაციის ამაღლების სახელმწიფო პროგრამა“;</li>
                        </ul>
                    </div>
                    
                    <div className="academy-text2-bg">
                        <ul>
                        <li className='aboutacademy-text-2'>„სკოლის მოსწავლეებში პროფესიული უნარებისგანვითარების ქვეპროგრამა“;</li>
                        </ul>
                    </div>
                    
                    <div className="academy-text2-bg">
                        <ul>
                            <li className='aboutacademy-text-2'>საქართველოს ოკუპირებული ტერიტორიებიდან დევნილთა, შრომის, ჯანმრთელობისა და სოციალური დაცვის მიერ შემუშავებული „შრომის უსაფრთხოების სპეცილისტის აკრედიტებული პროგრამა“.</li>
                        </ul>
                    </div>
                        <div className="aboutacademy-ulli-position">
                            <div className="aboutacademy-text-start">
                                <ul>
                                        <br />
                                        <h2 className='greeting-text-title'>ჩვენთან დაგხვდებათ!</h2>
                                        <br />

                                        <li className='aboutacademy-text-2'>ISO საერთაშორისო ხარისხი</li>
                                        <br />

                                
                                        <li className='aboutacademy-text-2'>30 წლიანი საგანმანათლებლო გამოცდილება</li>

                                        <br />
                                    
                                        <li className='aboutacademy-text-2'>2 საკუთარი შენობა, რომელიც აღჭურვილია უახლესი ტექნიკითა და ინფრასტრუქტურით</li>

                                        <br />
                                        

                            
                                        <li className='aboutacademy-text-2'>საწარმოო პრაქტიკები წარმატებულ კომპანიებში დასაქმების შესაძლებლობით</li>

                                        <br />
                                    

                                
                                        <li className='aboutacademy-text-2'>პროფესიონალი და კეთილგანწყობილი პერსონალი</li>

                                        <br />
                                        

                                        <li className='aboutacademy-text-2'>საინტერესო სტუდენტური პროექტები</li>

                                        <br />
                                    

                                
                                        <li className='aboutacademy-text-2'>სასწავლო გრანტი, სახელმწიფო დაფინანსება</li>

                                        <br />
                                    

                                
                                        <li className='aboutacademy-text-2'>თვეებზე გადანაწილებული სწავლის საფასური</li>

                                        <br />
                                

                        
                                        <li className='aboutacademy-text-2'>მრავალფეროვანი სასერტიფიკატო პროგრამები</li>

                                        
                                </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
  
        </>
    );
}

export default AboutAcademyComp;