import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import TeachersComp from "../../components/TeachersComp/TeachersComp";
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
import Footer from '../../components/Footer2/Footer2';


const TeachersPg = () => {
    return(
        <>
            <Header/>
            <TeachersComp/>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default TeachersPg;