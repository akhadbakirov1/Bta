import Header from '../../components/Header/FixedTopAnoterPages/FixedTopAnoterPages';
import StudentLifeComp from '../../components/Content/StudentLifeComp/StudentLifeComp';
import UsefulLinks from '../../components/Content/UsefulLinks/UsefulLinks';
import Footer from '../../components/Footer2/Footer2';

const StudentLife = () => {
    return(
        <>
            <Header/>
            <StudentLifeComp/>
            <UsefulLinks/>
            <Footer/>
        </>
    );
}

export default StudentLife;