import './contactform.css'

const ContactForm = () => {
    return (
        <>
            <div className="shade">
                <div className="blackboard">
                    <div className="form">
                    <p>
                        <label>სახელი </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>ელ-ფოსტა </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>ტელეფონი </label>
                        <input type="text" />
                    </p>
                    <p>
                        <label>შეტყობინება </label>
                        <textarea className='board-text-area' defaultValue={""} />
                    </p>
                    <p className="wipeout">
                        {/* <input type="submit" defaultValue="Send" />
                        <br /> */}
                        <button className='send-btn'>გაგზავნა</button>
                        
                    </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactForm;