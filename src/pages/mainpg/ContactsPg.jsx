import FixedTopAnoterPages from  '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import CruveHeader from '../../components/Content/SlideITems/SliderITem2/SliderItem2';
import Location from '../../components/Content/Location/Location';
import Footer2 from '../../components/Footer2/Footer2';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
import ContactForm from '../../components/Content/ContactForm/ContactForm';
import ContactForm2 from '../../components/Content/ContactForm2/ContactForm2';

const ContactsPg = () => {
    return (
        <>
            <FixedTopAnoterPages/>
            <ContactForm2/>
            {/* <ContactForm/> */}
            <Location/>
            <UsefulLinks/>
            <Footer2/>
        </>
    )
}

export default ContactsPg;