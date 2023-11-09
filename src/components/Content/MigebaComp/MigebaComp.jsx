import './migebacomp.css';
import EmisLogo from '/public/Images/logos/logo2.png';
import { Link } from 'react-router-dom';
const Migeba = () => {
    return(
        <>
        <div className="migeba-main">
            <div className="migeba-bg-blue">
                <div className="migeba-bg-white">
                    <div className="migeba-text-section">


                        <div className="migeba-line"></div>

                        <h2 className='migeba-title'>აპლიკანტების საყურადღებოდ!!!</h2>

                        <div className="migeba-emis-main">
                            <div className="migeba-text-main">
                                <p className='migeba-text-emis'>პროფესიულ საგანმანათლებლო პროგრამებზე რეგისტრაცია იწარმოებს ვებ გვერდზე</p>
                            </div>
                        </div>

                        <p className='migeba-indicator-red'>↓</p>

                        <div className="emis-logo-section">
                            <a target='_blank' href='https://vet.emis.ge/#/' className='migeba-text-emis-blue'>
                                        <img className='emis-logo' src={EmisLogo} alt="" />
                                        vet.emis.ge
                            </a>
                        </div>

                        <div className="migeba-title-red-position">
                            <div className="migeba-title-red-bg">
                                <p className='migeba-title-red'>რეგისტრაცია მიმდინარეობს 20 მაისიდან - 10 სექტემბრის ჩათვლით</p>
                            </div>
                        </div>

                        <div className="migeba-indicator-position">
                            <div className="migeba-indicator-blue-bg">
                                <div className="migeba-indicator-bg">
                                    <p className='migeba-indicator-text'>წინასწარი რეგისტრაცია პროფესიულ საგანმანათლებლო პროგრამებზე მიმდინარეობს აქ</p>
                                    <p className='migeba-indicator'>↓</p>

                                    <div className="migeba-prog-link-main">
                            <div className="migeba-prog-link">
                                <Link to='/programspg' className=''>პროგრამები</Link>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>


                        <h3 className='migeba-title'>მშენებლობის მწარმოებელი</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>მშენებლობის მწარმოებელი (კონსტრუქციების მოწყობა)</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ.თბილისი, ც.დადიანის ქ.28</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა:</p>
                            <p className='migeba-text-blue'>2  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მხოლოდ საბაზო განათლების (9 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'>ფინანსდება სახელმწიფოს მიერ;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ.თბილისი, ც.დადიანის ქ.28</p>
                        </div>

                        <h3 className='migeba-title'>ელექტროობა</h3>


                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა: </p>
                            <p className='migeba-text-blue'>ელექტროობა</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ.თბილისი წერონისის ქ. 208, ც. დადიანის ქ. 28</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'> 1  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ საბაზო განათლების (9 კლასი) მქონე ნებისმიერი ასაკის პირებს.</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური : </p>
                            <p className='migeba-text-blue'>უფასო, სახელმწიფოს დაფინანსებით.</p>
                        </div>

                        <h3 className='migeba-title'>ინფორმაციის ტექნოლოგია</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>ინფორმაციის ტექნოლოგია</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ.თბილისი წერონისის ქ. 208, ქ.საჩხერე ივ.გომართელის 14ვ.</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა:</p>
                            <p className='migeba-text-blue'>1  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა: </p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ საბაზო განათლების (9 კლასი) მქონე ნებისმიერი ასაკის პირებს.</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'>უფასო, სახელმწიფოს დაფინანსებით.</p>
                        </div>

                        <h3 className='migeba-title'>საბაჟო საქმე</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა: </p>
                            <p className='migeba-text-blue'> საბაჟო  საქმე</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი: </p>
                            <p className='migeba-text-blue'>ქ. თბილისი, ც.დადიანის ქ.28; </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'> 2  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს, </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური : </p>
                            <p className='migeba-text-blue'> უფასო,  ფინანსდება სახელმწიფოს მიერ.</p>
                        </div>


                        <h3 className='migeba-title'>საოფისე საქმე</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>საოფისე საქმე  საქმე</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი: </p>
                            <p className='migeba-text-blue'>ქ. თბილისი, ც.დადიანის ქ.28; </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'>1  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს, </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'> 2000 ლარი;</p>
                        </div>




                        <h3 className='migeba-title'>ვებტექნოლოგიები (არაინტეგრირებული)</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>ვებტექნოლოგიები (არაინტეგრირებული);</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი: </p>
                            <p className='migeba-text-blue'>ქ. თბილისი, ც.დადიანის ქ.28; </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა:</p>
                            <p className='migeba-text-blue'>1  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'> პროგრამა სახელმწიფოს მიერ ფინანსდება ღირებულების - 85%, ხოლო პროფესიული სტუდენტი იხდის 500 ლარს.</p>
                        </div>




       





                        <h3 className='migeba-title'>ვებტექნოლოგიები (ინტეგრირებული)</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>ვებტექნოლოგიები (ინტეგრირებული);</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი: </p>
                            <p className='migeba-text-blue'>ქ. თბილისი, ც.დადიანის ქ.28; </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა:</p>
                            <p className='migeba-text-blue'>3  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მხოლოდ საბაზო განათლების (9 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური : </p>
                            <p className='migeba-text-blue'> ფინანსდება სახელმწიფოს მიერ;</p>
                        </div>




                        <h3 className='migeba-title'>საექთნო განათლება</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა: </p>
                            <p className='migeba-text-blue'> საექთნო განათლება;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ. თბილისი, წერონისის ქ. 208;  ქ. საჩხერე ივ.გომართელის 14ვ.</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'>3  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'> ფინანსდება სახელმწიფოს მიერ;</p>
                        </div>




                        <h3 className='migeba-title'>აღმზრდელი</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>აღმზრდელი</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ. თბილისი, წერონისის ქ. 208;  ქ. საჩხერე ივ.გომართელის 14ვ.</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'> 2  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური : </p>
                            <p className='migeba-text-blue'>ფინანსდება სახელმწიფოს მიერ;</p>
                        </div>




                           <h3 className='migeba-title'>შრომის უსაფრთხოებისა და გარემოსდაცვითი ტექნოლოგიები</h3>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროფესიული საგანმანათლებლო პროგრამა:</p>
                            <p className='migeba-text-blue'>შრომის უსაფრთხოებისა და გარემოსდაცვითი ტექნოლოგიები;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>პროგრამის განხორციელების ადგილი:</p>
                            <p className='migeba-text-blue'>ქ. თბილისი, წერონისის ქ. 208;  </p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის ხანგრძლივობა: </p>
                            <p className='migeba-text-blue'> 2  წელი;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის  წინაპირობა:</p>
                            <p className='migeba-text-blue'>პროგრამაზე სწავლების უფლება აქვთ მინიმუმ სრული ზოგადი განათლების (12 კლასი) მქონე ნებისმიერი ასაკის პირებს;</p>
                        </div>

                        <div className="migeba-text-main">
                            <p className='migeba-text-red'>სწავლის საფასური :</p>
                            <p className='migeba-text-blue'>ფინანსდება სახელმწიფოს მიერ;</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Migeba