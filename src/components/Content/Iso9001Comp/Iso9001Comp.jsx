import './iso9001comp.css';

import IsoLogo from './isofiles/isologo.gif';
import IsoSertificate1 from './isofiles/sertificate1.jpeg';
import IsoSertificate2 from './isofiles/sertificate2.jpeg';
import IsoSertificate3 from './isofiles/sertificate3.jpeg';
import IsoSertificate4 from './isofiles/sertificate4.jpeg';
import IsoSertificate5 from './isofiles/sertificate5.jpeg';
import IsoSertificate6 from './isofiles/sertificate6.jpeg';
import IsoSertificate7 from './isofiles/sertificate7.jpeg';
import IsoSertificate8 from './isofiles/sertificate8.jpeg';
const Iso9001Comp = () => {
    return(
        <>
        <div className="iso-main">
            <div className="iso-bg-blue">
                <div className="iso-bg-white">
                    <img className='iso-logo' src={IsoLogo} alt="" />
                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate2} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate3} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />

                    <img className='iso-sertificate' src={IsoSertificate1} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Iso9001Comp;