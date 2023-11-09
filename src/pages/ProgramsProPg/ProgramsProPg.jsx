import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import Footer from '../../components/Footer2/Footer2';
import CardBook from '../../components/Content/ProgramsComp/ProgramsComp';
// import Card from '../../components/Content/ProgramsComp/ProgramsComp';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';

const ProgramsPropg = () => {
    return (
        <>
        <Header/>
        {/* <Card/> */}
        <CardBook/>
        <UsefulLinks/>
        <Footer/>
        </>
    ); 
}

export default ProgramsPropg;