import './strategicdevcomp.css';
//samokmedo

import samokmedo2023x2024 from './strategicdevpdf/samokmedo/სამოქმედო გეგმა 2023-2024 წწ..pdf';
import stg1 from './strategicdevpdf/samokmedo/stg1.pdf';

//gegma(plan)

import gegma2022x2029 from './strategicdevpdf/gegmebi/სტრატეგიული განვითარების შვიდწლიანი(2022-29 წწ) გეგმა.pdf';



//angarishebi
import ang1 from './strategicdevpdf/angarishebi/ang1.pdf';
import ang2 from './strategicdevpdf/angarishebi/ang2.pdf';
import ang3 from './strategicdevpdf/angarishebi/ang3.pdf';
import ang4 from './strategicdevpdf/angarishebi/ang4.pdf';
import ang5 from './strategicdevpdf/angarishebi/ang5.pdf';
import ang6 from './strategicdevpdf/angarishebi/ang6.pdf';
import ang7 from './strategicdevpdf/angarishebi/ang7.pdf';
import ang8 from './strategicdevpdf/angarishebi/ang8.pdf';
import ang9 from './strategicdevpdf/angarishebi/ang9.pdf';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
const StrategicDevComp = () => {
    return (
        <>
        <div className="acts-main">
             <div class="one">
                 <hr />
                    <h1 className='one-h1'>განვითარების გეგმები</h1>
                 <hr />
            </div>
            <div className="main-strategicdev">

                <div className="strategicdev-row">
                    <div className="strategic-section-1">
                       <h4 className='st-section-title-1'>სამოქმედო გეგმა</h4>
                     <a target="_blank" href={samokmedo2023x2024}><div className="st-item-1">ერთწლიანი (2023-24 წწ) სამოქმედო გეგმა<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                     <a target="_blank" href={stg1}><div className="st-item-2">ერთწლიანი (2022-23 წწ) სამოქმედო გეგმა<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                    </div>
                    <div className="strategic-section-2">
                       <h4 className='st-section-title-1'>სტრატეგიული განვითარების გეგმა</h4>
                       <a target="_blank" href={gegma2022x2029}><div className="st-item-1">სტრატეგიული განვითარების შვიდწლიანი(2022-29 წწ) გეგმა<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       {/* <a target="_blank" href={gegma2021x2022}><div className="st-item-2">2021-22 წლის სამოქმედო გეგმის  შუალედური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a> */}

                    </div>
                    <div className="strategic-section-3">
                       <h4 className='st-section-title-1'>ანგარიშები</h4>
                       <a target="_blank" href={ang1}><div className="st-item-1">2022-23 წლის სამოქმედო გეგმის წლიური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang2}><div className="st-item-2">2022-23 წლის სამოქმედო გეგმის  შუალედური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang3}><div className="st-item-1">2021-22 წლის სამოქმედო გეგმის წლიური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang4}><div className="st-item-2">2021-22 წლის სამოქმედო გეგმის შუალედური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang5}><div className="st-item-1">2021-22 წლის სამოქმედო გეგმის შუალედური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang6}><div className="st-item-2">2020-21 წლის ერთწლიანი გეგმის შუალედური ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang7}><div className="st-item-1">2019-20 წწ სამოქმედო გეგმის ანგარიში <FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang8}><div className="st-item-2">ბიზნესისა და ტექნოლოგიების აკადემიის 2018-19 წწ სამოქმედო გეგმის ანგარიში<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                       <a target="_blank" href={ang9}><div className="st-item-1">შპს ბიზნესისა და ტექნოლოგიების აკადემიის 2017 წლის სამოქმედო გეგმის ანგარიში <FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                         
                    </div>
                {/* <a target="_blank" href={Pdf1}><div className="acts-text"><Spinner animation="grow" />კატალოგი 2022-2023<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target="_blank" href={Pdf2}><div className="acts-text"><Spinner animation="grow" />კატალოგი 2021-2022<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>
                <a target='blank' href={Pdf1}><div className="acts-text"><Spinner animation="grow" />კატალოგი 2021-2022<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a> */}
                
                </div>
            </div>
            </div>
        </>
    );
}
export default StrategicDevComp;