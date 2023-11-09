import './usefullinks.css';
import logo1 from '/public/Images/logos/logo1.svg.png';
import logo2 from '/public/Images/logos/logo2.png';
import logo3 from '/public/Images/logos/logo3.png';
import logo4 from '/public/Images/logos/logo4.png';
import logo5 from '/public/Images/logos/logo5.png';
import logo6 from '/public/Images/logos/logo6.png';
import logo7 from '/public/Images/logos/logo7.png';
const UsefulLinks = () => { 
    return (
        <>
        <div className="title-container">  
         <hr /> 
             <div className="one">
            <h1 className='one-h1'>სასარგებლო ბმულები</h1>
           </div>
        <hr />
      </div>

      <div className="useful-links-main">

        <div className="logo-container">
            <a href="https://vet.ge/ge">
            <div className="logo-inner">
                <img className='useful-logo' src={logo1} alt="" />
                <div className="logo-text">პროფესიული საგანმანათლებლო დაწესებულებები</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="https://emis.ge/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo2} alt="" />
                <div className="logo-text">განათლების მართვის საინფორმაციო სისტემა</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="https://www.mes.gov.ge/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo1} alt="" />
                <div className="logo-text">საქართველოს განათლებისა და მეცნიერების სამინისტრო</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="http://www.tpdc.ge/geo/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo3} alt="" />
                <div className="logo-text">მასწავლებელთა პროფესიული განვითარების წენტრი</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="https://www.moh.gov.ge/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo7} alt="" />
                <div className="logo-text">საქართველოს ოკუპორებული ტერიტორიებიდან დევნილთა,შრომის, ჯანმრთელობისა და სოციალური დაცვის სამინისტრო</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="http://www.esida.ge/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo4} alt="" />
                <div className="logo-text">სსიპ საგანმანათლებლო და სამეცნიერო ინფრასტრუქტურის განვითარების სააგენტო</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="https://worknet.moh.gov.ge/">
            <div className="logo-inner">
                <img className='useful-logo' src={logo5} alt="" />
                <div className="logo-text">დასაქმების ფორუმი - Worknet</div>
            </div>
            </a>
        </div>
        <div className="logo-container">
            <a href="https://www.eqe.ge/ka">
            <div className="logo-inner">
                <img className='useful-logo' src={logo6} alt="" />
                <div className="logo-text">განათლების ხარისხის განვითარების ეროვნული ცენტრი</div>
            </div>
            </a>
        </div>

      </div>

        </>
    );
}

export default UsefulLinks;