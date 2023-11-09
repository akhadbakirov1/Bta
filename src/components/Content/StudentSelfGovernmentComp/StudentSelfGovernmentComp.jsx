import './studentselfgovernmentcomp.css';

import gov1 from './governmentimg/gov1.jpeg';
import gov2 from './governmentimg/gov2.jpeg';
import gov3 from './governmentimg/gov3.jpeg';
import gov4 from './governmentimg/gov4.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const StudentSelfGovernmentComp = () => {
    return(
        <>
          <div class="one">
            <hr />
            <h1 className='one-h1'>სტუდენტური თვითმართველობა</h1>
            <hr />
        </div>
        <div className="student-self-main">
            <div className="student-self-bg-blue">
                <div className="student-self-bg-white">

                    <div className="student-self-content">
                        <a target="_blank" href=''><div className="acts-text-3"><div></div>თვითმმართველობის დებულება<FontAwesomeIcon className='fa-icon-acts' icon={faFilePdf}/></div></a>

                        <p className='student-self-title'>ბიზნესისა და ტექნოლოგიების აკადემიაში აქტიურად მოქმედებს სტუდენტური თვითმმართველობა, რომელიც ხელს უწყობს სტუდენტური ინიციატივების განხორციელებას და ღონისძიებების ორგანიზებას მრავალფეროვანი, საინტერესო და დაუვიწყარი სტუდენტური ცხოვრების უზრუნველყოფის მიზნით.</p>

                        <p className='gov-text-1'>ქ. საჩხერის განყოფილებაში გაიმართება სტუდენტური თვითმმართველობის ვიცეპრეზიდენტის არჩევნები 2023</p>

                        <img className='gov-img' src={gov1} alt="" />

                        <p className='gov-text-1'>ბიზნესისა და ტექნოლოგიების აკადემიაში სტუდენტური თვითმმართველობის საპრეზიდენტო არჩევნები გაიმართა</p>

                        <p className='gov-text-1'>პრეზიდენტობის კანდიდატებმა სიტყვით მიმართეს სტუდენტებს და გააცნეს მათი სამოქმედო გეგმები.</p>

                        <p className='gov-text-1'>სტუდენტებმა ხმათა უმრავლესობით, 1 წლის ვადით აირჩიეს გიორგი იაკობაშვილი</p>

                        <p className='gov-text-1'>აკადემიის ადმინისტრაციული პერსონალი ვულოცავთ გამარჯვებას,</p>

                        <p className='gov-text-1'>ვიმედოვნებთ ხელს შეუწყობს სტუდენტური ინიციატივების განხორციელებას</p>

                        <p className='gov-text-1'>გისურვებთ საინტერესო და დაუვიწყარ სტუდენტურ ცხოვრებას</p>

                        <img className='gov-img' src={gov2} alt="" />

                        <h3 className='student-self-title-h'>2022-2023 წლის სტუდენტური თვითმმართველობის საპრეზიდენტო კანდიდატები</h3>

                        <img className='gov-img' src={gov3} alt="" />
                        
                        <p className='student-self-title'>12 დეკემბერს</p>

                        <p className='student-self-title'>18:00 საათზე</p>

                        <p className='student-self-title'>გაიმართება</p>

                        <p className='student-self-title'>სტუდენტური თვითმმართველობის საპრეზიდენტო არჩევნები 2022-2023</p>

                        <p className='student-self-title'>თვითმმართველობის პრეზიდენტს პროფესიული სტუდენტები</p>

                        <p className='student-self-title'>ხმათა უმრავლესობით აირჩევენ</p>

                        <p className='student-self-title'>არჩევნებში მონაწილეობა ნებაყოფლობითია</p>

                        <p className='student-self-title'>მისამართი: წერონისის N208, აუდიტორია N1</p>

                        <img className='gov-img' src={gov4} alt="" />

                        <p className='student-self-title'>სტუდენტური თვითმმართველობის საპრეზიდენტო კანდიდატების საპროგრამო სიტყვა - იხილეთ ვიდეოები</p>

                        <p className='student-self-title'>სალომე ქადარია - ვებ ინტერფეისის დიზაინერის პროფესიული სტუდენტი</p>

                        <iframe className='video-gov'src="https://www.youtube.com/embed/Nmx8cDVJpik?si=kwQs0VE2s3yNhCR1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <p className='student-self-title'>ლუკა მჭედლიშვილი - ინფორმაციული ტექნოლოგის პროფესიული სტუდენტი</p>

                        <iframe className='video-gov' src="https://www.youtube.com/embed/p01KKkWYEaQ?si=4yVGgim60e62kJr1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <p className='student-self-title'>ვანო დოხნაძე - ტუროპერატორის პროფესიული სტუდენტი</p>

                        <iframe className='video-gov' src="https://www.youtube.com/embed/4y6VcQV0JoY?si=ZBuzbytCJaXGPLnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                        <p className='student-self-title'>ხატია ფიფია - შრომის უსაფრთხოებისა და გარემოს დაცვითი ტექნოლოგიების პროფესიული სტუდენტი</p>

                        <iframe className='video-gov' src="https://www.youtube.com/embed/uIAsqjsR0TA?si=LzFT0GZMgRx_IK3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default StudentSelfGovernmentComp;