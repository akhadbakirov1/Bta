import './contactform2.css';
import smartBoard from '/public/Images/whiteboard1.png';

const ContactForm2 = () => {
    return(
        <>
        <div className="smartboard-flex">
        <div className="smartboard-main">
             <h3 className="smartboard-title">მოგვწერეთ წერილი</h3>
            <img className='smartboard-img' src={smartBoard} alt="" />
            
            <div className="form-smartboard">
                    <p>
                        <label>სახელი: </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>ელ-ფოსტა: </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>ტელეფონი: </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>შეტყობინება: </label>
                        <textarea className='board-text-area' defaultValue={""} />
                    </p>
                    <p>
                    <button className='send-btn'>გაგზავნა</button>
                    </p>
                    {/* <p className="wipeout">
                        <input type="submit" defaultValue="Send" />
                        <br />
                        <button className='send-btn'>გაგზავნა</button>
                        
                    </p> */}
                    </div>
        </div>
        </div>
        </>
    );
}

export default ContactForm2;