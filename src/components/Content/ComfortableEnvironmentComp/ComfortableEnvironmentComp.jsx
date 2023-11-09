import './comfortableenvironment.css';
import EnvironmentImg1 from '/public/Images/sliderimg/mountain.jpeg'
import EnvironmentImg2 from '/public/Images/sliderimg/nature.jpg'
import EnvironmentImg3 from '/public/Images/sliderimg/vinecia.webp'
import EnvironmentImg4 from '/public/Images/sliderimg/teacher1.jpg'
const ComfortableEnvironmentComp = () => {
    return(
        <>
            <div class="one">
                <hr />
                <h1 className='one-h1'>სასწავლო კორპუსები</h1>
                <hr />
            </div>
            <div className="environment-main">
                <div className="environment-bg-blue">
                    <div className="environment-bg-white">
                        <img className='environment-img' src={EnvironmentImg1} alt="" />
                        <img className='environment-img' src={EnvironmentImg2} alt="" />
                        <img className='environment-img' src={EnvironmentImg3} alt="" />
                        <img className='environment-img' src={EnvironmentImg4} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComfortableEnvironmentComp;