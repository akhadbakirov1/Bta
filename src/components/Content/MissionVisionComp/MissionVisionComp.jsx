//style from lektorComp
//style from greetengs
import './missionvisioncomp.css';
import Logo from '/public/Images/LOGO.png';

const MisionVisionComp = () => {
    return(
        <>
            <div className="rectors-greeting-main">
                <div div class="one">
                    <hr />
                    <h1 className='one-h1'>მისია, ხედვა და ღირებულებები</h1>
                    <hr />
                </div>

                <div className="mission-main">
                <div className="mission-bg-blue">
                    <div className="mission-bg-white">
                                        <img className='mission-logo' src={Logo} alt="" />
                                        <br />
                                        <p className='mission-title-first'>შპს ბიზნესისა და ტექნოლოგიების აკადემიის მისია, ხედვა და ღირებულებები</p>

                                        <h3 className="mission-text-title">მისია</h3>
                                        
                                        <p className='mission-text'>შპს ბიზნესისა და ტექნოლოგიების აკადემიის მისიაა  მრავალპროფილური  საგანმანათლებლო საქმიანობა,  მომხმარებლებისათვის  ინოვაციური მიდგომებით მაღალი ხარისხის სასწავლო-სამუშაო პირობების შეთავაზება.     აკადემიის მისწრაფებაა პროფესიული განათლების ხარისხის უზრუნველყოფა, ადამიანური კაპიტალის უწყვეტი განვითარება,  რაც განსაზღვრავს მის როლს ეროვნულ და საერთაშორისო   სივრცეში.</p>

                                        <h3  className="mission-text-title">ხედვა</h3>

                                        <p className='mission-text'>2025 წელს აღიარებულ იქნას  ხარისხთან ასოცირებულ პროფესიულ საგანმანათლებლო დაწესებულებად, რასაც დაწესებულების წარმატებაზე და პროფესიონალიზმზე ორიენტირებული მტკიცე გუნდი და მრავალფეროვანი პარტნიორობა განაპირობებს.</p>

                                        <h3  className="mission-text-title">ღირებულებები</h3>

                                        <p className='mission-text-list'> განათლების ხელმისაწვდომობა;</p>

                                        <p className='mission-text-list'>განვითარებისკენ სწრაფვა;</p>

                                        <p className='mission-text-list'>სამართლიანობა;</p>

                                        <p className='mission-text-list'> პიროვნებაზე ორიენტირებულობა;</p>

                                        <p className='mission-text-list'> პროფესიონალიზმი და რეპუტაციაზე ზრუნვა</p>
                                    </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default MisionVisionComp;