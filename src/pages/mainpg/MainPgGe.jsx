// import Header from "../../components/Header/Header";
// import Slider from "../../components/Content/Slider/Slider1";
// import Footer from "../../components/Footer/Footer";
import Card from "../../components/Content/Card/Card";
// import Progress from "../../components/Content/Progress/Progress";
import Footer2 from "../../components/Footer2/Footer2";
import Card3 from "../../components/Content/NewsMainComp/NewsMainComp"
// import Carousel1 from "../../components/Content/Carousel/Carousel";
// import PartnersCarousel from "../../components/Content/PartnersCarousel/PartnersCarousel";
// import Card2 from "../../components/Content/Card2/Card2";
// import CruveHeader from "../../components/CurveHeader/CruveHeader1";
// import PartnersCarousel2 from "../../components/Content/PartnersCarousel2/PartnersCarousel2";
// import Carousel from '../../components/Content/Carousel/Carousel';
// import WhyUs from "../../components/Content/WhyUs/WhyUs";
// import Carousel2 from "../../components/Content/Carousel2/Carousel2";
// import SlideHeader from "../../components/Content/SlideHeader/SlideHeader";
// import Swiper from  '../../components/Content/Swiper/Swiper1';
// import Sidenav2 from "../../components/Content/Sidenav2/Sidenav2";
// import Header2 from '../../components/Content/Header2/Header2';
import Header2 from '../../components/Content/Header2/Carousel3';
import FixedTop from "../../components/Header/FixedTop/FixedTop";
// import WhyUsSlider from "../../components/Content/WhyUsSlider/WhyUSSlider";
import Row from '../../components/Content/Row/Row';
import Achivment from "../../components/Content/Achivment/Achivment";
import Academyinfo from "../../components/Content/AcademyInfo/Academyinfo";
import UsefulLinks from "../../components/Content/UsefulLinks/UsefulLinks";
// import ToggleMenu from "../../components/Header/Togglemenu";
import CardSlider1 from '../../components/Content/CardSlider/CardSlider';
import Swipercarousel from '../../components/Content/Swiper/Swiper';
import PartnersCarousel3 from "../../components/Content/PartnersCarousel3/PartnersCarousel3";

function MainPg () {
    return (
        <>  
            <Header2 />
            <FixedTop/>
            <Row />
            <Academyinfo/>
            <Swipercarousel/>
            <Achivment/>
            {/* <MainAchivments/> */}
            {/* <Sidenav2 /> */}
            {/* <Header2 /> */}
            {/* <Gtu /> */}
            {/* <Slider/> */}
             {/* <Header/> */}
             {/* <Swiper/> */}
             {/* <Slider/> */}
            {/* <Carousel/> */}
            {/* <Sidenav2/> */}
            {/* <SlideHeader/> */}
            {/* <Carousel1/> */}
            {/* <Card/> */}
            <CardSlider1/>
            {/* <WhyUsSlider/> */}
            <Card3/>
            {/* <PartnersCarousel/> */}
            {/* <Carousel2/> */}
            <PartnersCarousel3/>
            {/* <PartnersCarousel2/> */}
            <UsefulLinks/>
            <Footer2/>
        </>
    )
}

export default MainPg;