import '../src/components/ResetCss/reset.css';
import './App.css';
import './titlestyle.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollTop/ScrollToTop';

import NotFound from './NotFound';
import MainpgGe from './pages/mainpg/MainPgGe';
import MainPgEng from './pages/mainpg/MainPgEng';
import ContactsPg from './pages/mainpg/ContactsPg';
import LegalActsPg from './pages/LegalActsPg/LegalActsPg';
import CatalogPg from './pages/CatalogPg/Catalogpg';
import ProgramsPropg from './pages/ProgramsProPg/ProgramsProPg';
import Greeting from './pages/GreetingPg/Greeting';
import AboutAcademyPg from './pages/AboutAcademyPg/AboutAcademyPg';
import StrategicDevPg from './pages/StrategicDevPg/StrategicDevPg';
import LatestNewsPg from './pages/LatestNewspg/LatestNewsPg';
// import LatestNewsPost from './pages/LatestNewsPg/LatestNewsPost/LatestNewsPost';
import RektrosPg from './pages/RektorsPg/RektorsPg';
import VacancyPg from './pages/VacancyPg/VacancyPg';
import AdminstrationPg from './pages/AdminstrationPg/AdminstrationPg';
import TeachersPg from './pages/TeachersPg/TeachersPg';
import MisionVisionValuesPg from './pages/MissionVisionValuesPG/MissionVisionValuesPg';
import PartnersPg from './pages/PartnersPg/PartnersPg';
import Authorization from './pages/AuthorizationPg/AuthorizationPg';
import StudentSelfGovernmentPg from './pages/StudentSelfGovernmentPg/StudentSelfGovernmentPg';
import StudentLife from './pages/StudentLifePg/StudentLifePg';
import PhotoGalleryPg from './pages/PhotogalleryPg/PhotoGalleryPg';
import RegistrationPg from './pages/RegistrationPg/RegistrationPg';
import Iso9001Pg from './pages/Iso9001Pg/Iso9001Pg';
import ComfortableEnvironmentPg from './pages/ComfortableEnvironmentPg/ComfortableEnvironmentPg';
import ShortTermPg from './pages/ShortTermPg/ShortTermPg';
import MigebaPg from './pages/MigebaPg/MigebaPg';

//news pages
import NewsInner1 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner1';
import NewsInner2 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner2';
import NewsInner3 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner3';
import NewsInner4 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner4';
import NewsInner5 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner5';
import NewsInner6 from './pages/LatestNewsPg/LastestNewsInnerPg/NewsInner6';
const App = () => {
  return (
    <>
     <BrowserRouter>
     <ScrollToTop/>
      <Routes>
          <Route index path='/' element={<MainpgGe/>}></Route>
          <Route path='/mainpgeng' element={<MainPgEng/>}></Route>
          <Route path='/contactspg' element={<ContactsPg/>}></Route>
          <Route path='/legalactspg' element={<LegalActsPg/>}></Route>
          <Route path='/catalogpg' element={<CatalogPg/>}></Route>
          <Route path='/programspg' element={<ProgramsPropg/>}></Route>
          <Route path='/greeting' element={<Greeting/>}></Route>
          <Route path='/aboutacademy' element={<AboutAcademyPg/>}></Route>
          <Route path='strategicdevpg' element={<StrategicDevPg/>}></Route>
     
          <Route path='/rectorspg' element={<RektrosPg/>}></Route>
          <Route path='/vacancy' element={<VacancyPg/>}></Route>
          <Route path='/adminstration' element={<AdminstrationPg/>}></Route>
          <Route path='/teachers' element={<TeachersPg/>}></Route>
          <Route path='/missionvision' element={<MisionVisionValuesPg/>}></Route>
          <Route path='/partners' element={<PartnersPg/>}></Route>
          <Route path='/authorization' element={<Authorization/>}></Route>
          <Route path='/latestnewspg' element={<LatestNewsPg/>}></Route>
          <Route path='/studentselfgovernment' element={<StudentSelfGovernmentPg/>}></Route>
          <Route path='/studentlife' element={<StudentLife/>}></Route>
          <Route path='/photogallery' element={<PhotoGalleryPg/>}></Route>
          <Route path='/registration' element={<RegistrationPg/>}></Route>
          <Route path='/iso9001' element={<Iso9001Pg/>}></Route>
          <Route path='/comfortableenvironment' element={<ComfortableEnvironmentPg/>}></Route>
          <Route path='/shortterm' element={<ShortTermPg/>}></Route>
          <Route path='/migeba' element={<MigebaPg/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          {/* <Route path='/latestnews' element={<LatestNewsPost/>}></Route> */}


          <Route path='newspage=1' element={<NewsInner1/>}></Route>
          <Route path='newspage=2' element={<NewsInner2/>}></Route>
          <Route path='newspage=3' element={<NewsInner3/>}></Route>
          <Route path='newspage=4' element={<NewsInner4/>}></Route>
          <Route path='newspage=5' element={<NewsInner5/>}></Route>
          <Route path='newspage=6' element={<NewsInner6/>}></Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;