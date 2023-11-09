import './autorizationcomp.css';
import pdf1 from './authorizationpdf/usafrtxoeba.pdf';
import pdf2 from './authorizationpdf/usafrtxoeba2.pdf';
import PdfWebtechnologies from './authorizationpdf/vebteqnologiebi.pdf';
import PdfWebtechnologies2 from './authorizationpdf/vebteqnologiebi2.pdf';
import agmzrdeli from './authorizationpdf/agmzrdeli.pdf';
import agmzrdeli2 from './authorizationpdf/agmzrdeli2.pdf';
import N190 from './authorizationpdf/N19017.09.2019.pdf'
import N189 from './authorizationpdf/N18917.09.2019.pdf';
import N168 from './authorizationpdf/N16812.09.2018.pdf';
import No3 from './authorizationpdf/3.pdf';
import No27 from './authorizationpdf/27.pdf';
import No28 from './authorizationpdf/28.pdf';
import No29 from './authorizationpdf/29.pdf';
import No34 from './authorizationpdf/34.pdf';
import No36 from './authorizationpdf/36.pdf';



const AutorizationComp = () => {
    return(
        <>
            <hr /> 
            <div className="one">
                <h1 className='one-h1'>ავტორიზაცია / აკრედიტაცია</h1>
            </div>
            <hr />
            <div className="autorization-main-position">
                <div className="autorization-main">
                    <div className="autorization-container">
                        <div className="autorization-pdf">
                            
                            <a className='autorization-download' href={pdf1} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={pdf1}  allowFullScreen={true} ></iframe>

                            {/* <h2 className='autorization-title'>უსაფრთხოება 2</h2> */}
                            <a className='autorization-download' href={pdf2} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={pdf2} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>ვებ ტექნოლოგიები</h2> */}
                            <a className='autorization-download' href={PdfWebtechnologies} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={PdfWebtechnologies} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>ვებ ტექნოლოგიები 2</h2> */}
                            <a className='autorization-download' href={PdfWebtechnologies2} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={PdfWebtechnologies2} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>აღმზრდელი</h2> */}
                            <a className='autorization-download' href={agmzrdeli} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={agmzrdeli} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>აღმზრდელი2 </h2> */}
                            <a className='autorization-download' href={agmzrdeli2} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={agmzrdeli2} allowFullScreen={true} frameborder="1"></iframe>

                            <h5 className='autorization-text-1'>განათლების ხარისხის განვითარების ეროვნული ცენტრის პროფესიული საგანმანათლებლო დაწესებულებების საბჭოს 17.09.2019 წ  №190 გადაწყვეტილებით, შპს ბიზნესისა და ტექნოლოგიების აკადემიამ დაიმატა შემდეგი პროფესიული საგანმანათლებლო პროგრამები</h5>
                            <ol className='autorization-text-2'>
                                <li>საოფისე საქმე (ქ. თბილისი, ქ. საჩხერე)</li>
                                <li>აღმზრდელი (ქ. საჩხერე)</li>
                                <li>ელექტროობა (ქ. თბილისი)</li>
                                <li>მშენებლობის მწარმოებელი (ქ. თბილისი)</li>
                                <li>საბაჟო საქმე (ქ. თბილისი)</li>
                            </ol>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={N190} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={N190} allowFullScreen={true} frameborder="1"></iframe>

                            <h5 className='autorization-text-1'>განათლების ხარისხის განვითარების ეროვნული ცენტრის პროფესიული საგანმანათლებლო დაწესებულებების საბჭოს 17.09.2019 წ  №189 გადაწყვეტილებით, შპს ბიზნესისა და ტექნოლოგიების აკადემიის ჩარჩო დოკუმენტის საფუძველზე შექმნილი “ინფორმაციის ტექნოლოგიის” საგანმანათლებლო პროგრამაზე გაეზარდა ზღვრული რაოდენობა და მიეცა უფლება პროგრამა განახორციელოს  ქ. საჩხერეში</h5>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={N189} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={N189} allowFullScreen={true} frameborder="1"></iframe>

                            <h5 className='autorization-text-1'>განათლების ხარისხის განვითარების ეროვნული ცენტრის პროფესიული საგანმანათლებლო დაწესებულებების საბჭოს 12.09.2018 წ გადაწყვეტილება №168 შპს ბიზნესისა და ტექნოლოგიების აკადემიას მიენიჭა 6 წლით ავტორიზაცია შემდეგ პროფესიულ საგანმანათლებლო პროგრამებზე:</h5>
                            <ol className='autorization-text-2'>
                                <li>შრომის უსაფრთხოებისა და გარემოსდაცვითი ტექნოლოგიები,</li>
                                <li>ბაგა-ბაღის აღმზრდელი პედაგოგი,</li>
                                <li>ბუღალტრული აღრიცხვა,</li>
                                <li>ინფორმაციის ტექნოლოგია,</li>
                                <li>ვებ ინტერფეისის დიზაინერი,</li>
                                <li>პრაქტიკოსი ექთანი,</li>
                                <li>ტუროპერატორი,</li>
                            </ol>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={N168} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={N168} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No3} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No3} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No27} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No27} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No28} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No28} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No29} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No29} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No34} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No34} allowFullScreen={true} frameborder="1"></iframe>

                            {/* <h2 className='autorization-title'>სათაური </h2> */}
                            <a className='autorization-download' href={No36} download>გადმოწერა</a>
                            <iframe className='autorization-pdf-file' src={No36} allowFullScreen={true} frameborder="1"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AutorizationComp;