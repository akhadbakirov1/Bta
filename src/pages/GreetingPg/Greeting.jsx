import GreetingComp from '../../components/Content/GreetingComp/GreetingComp';
import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import Footer from '../../components/Footer2/Footer2';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
const Greeting = () => {
    return(
        <>
            <Header/>
            <GreetingComp/>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default Greeting;