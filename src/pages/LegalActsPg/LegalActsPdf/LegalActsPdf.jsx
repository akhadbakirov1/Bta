import './legalactspdf.css';
import legalpdf1 from '../legalactspdffiles/pdf1.pdf';
import legalpdf2 from '../legalactspdffiles/pdf2.pdf';
import legalpdf3 from '../legalactspdffiles/pdf3.pdf';
import legalpdf4 from '../legalactspdffiles/pdf4.pdf';
import legalpdf5 from '../legalactspdffiles/pdf5.pdf';
import legalpdf6 from '../legalactspdffiles/pdf6.pdf';
import legalpdf7 from '../legalactspdffiles/pdf7.pdf';
import legalpdf8 from '../legalactspdffiles/pdf8.pdf';
import legalpdf9 from '../legalactspdffiles/pdf9.pdf';
import legalpdf10 from '../legalactspdffiles/pdf10.pdf';
import legalpdf11 from '../legalactspdffiles/pdf11.pdf';
import legalpdf12 from '../legalactspdffiles/pdf12.pdf';
import legalpdf13 from '../legalactspdffiles/pdf13.pdf';
import legalpdf14 from '../legalactspdffiles/pdf14.pdf';
import legalpdf15 from '../legalactspdffiles/pdf15.pdf';
import legalpdf16 from '../legalactspdffiles/pdf16.pdf';
import legalpdf17 from '../legalactspdffiles/pdf17.pdf';
import legalpdf18 from '../legalactspdffiles/pdf18.pdf';
import legalpdf19 from '../legalactspdffiles/pdf19.pdf';
import legalpdf20 from '../legalactspdffiles/pdf20.pdf';
import legalpdf21 from '../legalactspdffiles/pdf21.pdf';
import legalpdf22 from '../legalactspdffiles/pdf22.pdf';
import legalpdf23 from '../legalactspdffiles/pdf23.pdf';
import legalpdf24 from '../legalactspdffiles/pdf24.pdf';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
const LegalActsPdf = () => {
    return (
        <>
        <div className="acts-main">
          <div class="one">
        <hr />
        <h1 className='one-h1'>სამართლებრივი აქტები</h1>
       <hr />
    </div>
            <div className="main-legalacts">
                <div className="legalacts-row">
                <a target="_blank" href={legalpdf1}><div className="acts-text"><div></div>ელექტრონული სწავლების წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf2}><div className="acts-text-2"><div></div> მატერიალური რესურსების გამოყენების წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf3}><div className="acts-text"><div></div>საქმისწარმოების წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf4}><div className="acts-text-2"><div></div>რაფორმალური განათლების აღიარების პროცედურა<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf5}><div className="acts-text"><div></div>პერსონალის მართვის წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf6}><div className="acts-text-2"><div></div>პირველადი გადაუდებელი დახმარების მექანიზმები<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf7}><div className="acts-text"><div></div>ხარისხის უზრუნველყოფის მექანიზმები<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf8}><div className="acts-text-2"><div></div>შინაგანაწესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf9}><div className="acts-text"><div></div>პროფესიულ სტუდენტთა მხარდაჭერის სტრატეგია<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf10}><div className="acts-text-2"><div></div>ეთიკის კოდექსი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf11}><div className="acts-text"><div></div>სასწავლო პროცესის მარეგულირებელი წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf12}><div className="acts-text-2"><div></div>საგანმანათლებლო პროგრამის დაგეგმვის, განხორციელებისა და შეფასების მეთოდოლოგია<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf13}><div className="acts-text"><div></div>სამუშაო გარემოს ჯამრთელობის და უსაფრთხოების  პოლიტიკა<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf14}><div className="acts-text-2"><div></div>სახანძრო უსაფრთხოების ზომები<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf15}><div className="acts-text"><div></div>წესრიგის დაცვის უზრუნველყოფის მექანიზმები<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf16}><div className="acts-text-2"><div></div>თანამდებობრივი ინსტრუქცია (დებულება)<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf17}><div className="acts-text"><div></div>პროფესიული მომზადების და პროფესიული გადამზადების პროგრამებიBTA<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf18}><div className="acts-text-2"><div></div>საქართველოს სახელმწიფო სიმბოლოების გამოყენების წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf19}><div className="acts-text"><div></div>შუალედური შეფასების, საკვალიფიკაციო გამოცდის ჩატარების და პარტნიორ<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf20}><div className="acts-text-2"><div></div>ორგანიზაციებთან ურთიერთობის წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf21}><div className="acts-text"><div></div>სასწავლო - საწარმოს დაბულება<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf22}><div className="acts-text-2"><div></div>საგანგებო მართვის გეგმა <FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf23}><div className="acts-text"><div></div>საზოგადოებასთან ურთიერთობის წესი<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={legalpdf24}><div className="acts-text-2"><div></div>წესრიგის დაცვის უზრუნველყოფის მექანიზმები<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                
                </div>
            </div>
            </div>
        </>
    );
}
export default LegalActsPdf;