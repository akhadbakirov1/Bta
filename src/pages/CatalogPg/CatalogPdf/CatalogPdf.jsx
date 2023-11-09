import Pdf1 from '../CatalogPdf/catalogpdffiles/pdf1.pdf';
import Pdf2 from '../CatalogPdf/catalogpdffiles/pdf2.pdf';
// import Pdf3 from '../CatalogPdf/catalogpdffiles/pdf3.pdf';
// import Pdf4 from '../CatalogPdf/catalogpdffiles/pdf4.pdf';
import Pdf5 from '../CatalogPdf/catalogpdffiles/pdf5.pdf';
import Pdf6 from '../CatalogPdf/catalogpdffiles/pdf6.pdf';
import Pdf7 from '../CatalogPdf/catalogpdffiles/pdf7.pdf';
// import Pdf8 from '../CatalogPdf/catalogpdffiles/pdf8.pdf';
// import Pdf9 from '../CatalogPdf/catalogpdffiles/pdf9.pdf';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';
const CatalogPdf = () => {
    return (
        <>
        <div className="acts-main">
          <div class="one">
        <hr />
        <h1 className='one-h1'>კატალოგების არქივი</h1>
       <hr />
    </div>
            <div className="main-legalacts">
                <div className="legalacts-row">
                <a target="_blank" href={Pdf1}><div className="acts-text"><div></div>კატალოგი 2022-2023<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={Pdf2}><div className="acts-text-2"><div></div>კატალოგი 2021-2022<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href='#'><div className="acts-text"><div></div>კატალოგი 2020-2021<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href='#'><div className="acts-text-2"><div></div>კატალოგი 2020<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={Pdf5}><div className="acts-text"><div></div>კატალოგი 2019-2020 განახლებული რედაქციით<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={Pdf6}><div className="acts-text-2"><div></div>კატალოგი 2019-2020<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={Pdf7}><div className="acts-text"><div></div>კატალოგი 2018-2019<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href='#'><div className="acts-text-2"><div></div>კატალოგი 2017-2018<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href='#'><div className="acts-text"><div></div>ატალოგი 2016-2017<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>

                
                </div>
            </div>
            </div>
        </>
    );
}
export default CatalogPdf;