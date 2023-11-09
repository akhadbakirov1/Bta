import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import Footer from '../../components/Footer2/Footer2';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
import NewsComp from './NewsComp';


const LatestNewsPg = () => {
    return (
        <>
        <Header/>
        <NewsComp/>
        <UsefulLinks/>
        <Footer/>
        </>
    );
}

export default LatestNewsPg;