import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import Footer from '../../components/Footer2/Footer2';
import CatalogPdf from '../CatalogPg/CatalogPdf/CatalogPdf';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
const CatalogPg = () => {
    return (
        <>
        <Header/>
        <CatalogPdf/>
        <UsefulLinks/>
        <Footer/>
        </>
    );
}

export default CatalogPg;