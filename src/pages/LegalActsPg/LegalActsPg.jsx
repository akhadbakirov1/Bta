import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import Footer2 from '../../components/Footer2/Footer2';
import LegalActsPdf from './LegalActsPdf/LegalActsPdf';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';

const LegalActsPg = () => {
    return (
        <>
        <Header/>
        <LegalActsPdf/>
        <UsefulLinks/>
        <Footer2/>
        </>
    );
}

export default LegalActsPg;