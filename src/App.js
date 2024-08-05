import logo from './assets/M&M.png';
import BuildingSketch from './assets/building-sketch.png';
import BuildingSketch2 from './assets/building-sketch2.png';
import LogoIcon from './assets/logo-iconn.png';
import PerforcimeStrukture from './assets/perforcime-strukture.png';
import PerforcimeStrukture2 from './assets/perforcime-strukture-2.png';
import PunimeRifiniture from './assets/punime-rifiniture.png';
import ShteseKati from './assets/shtese-kati.png';
import PunimeBetoni from './assets/punime-beton.png';
import Karabina from './assets/karabina.png';
import Mure from './assets/mure.png';
import Shtese from './assets/Shtese.png';
import NdertimPishine from './assets/ndertim-pishine.png';
import './App.css';
import FooterImg from './assets/footer-image.png';

function App() {
  return (
    <div className='App'>
      <div class='container'>
        <header>
          <div class='logo'>
            <img src={logo} alt='M&M Construction Logo' />
          </div>
          <div class='company-name'>
            <h1>M&M CONSTRUCTION</h1>
          </div>
        </header>
        <main>
          <div class='presentation'>
            <h2>PREZANTIMI</h2>
            <p>KOMPANISE</p>
          </div>
          <div class='year-nipt'>
            <div class='nipt'>
              {' '}
              <h3>2022</h3>
              <h4>NIPT</h4>
              <p>M36807801E</p>
            </div>
          </div>
          <div class='building-sketch'>
            <img src={BuildingSketch} alt='Building Sketch' />
          </div>
        </main>
      </div>
      {/*///////////////////////////////////////// About us ////////////////////////////////////////////////// */}
      <div class='about-container'>
        <header class='about-header'>
          <h1>RRETH M&M CONSTRUCTION</h1>
        </header>
        <main class='about-main'>
          <section class='about-description'>
            <p>
              M&M Construction ndonëse një kompani e re, është e specializuar në
              ndërtimin e vilave, forcimin e godinave të ndryshme të tipit DS3 &
              DS4, ndërtimin e pishinave, sisteme kapote, kapanone, muraturë,
              mure rrethuese/mbajtëse, dhe projekte të tjera sipas nevojës së
              klientit. Ne kemi një histori të pasur në kryerjen e projekteve të
              ndryshme, duke u fokusuar gjithmonë në cilësinë, inovacionin,
              faktorion "kohë" dhe përkushtimin ndaj klientit.
            </p>
          </section>
          <section class='about-sketch'>
            <img src={BuildingSketch2} alt='New Building Sketch' />
          </section>
        </main>
      </div>
      <div class='about-contact'>
        <p>MMCONSTRUCTS2022@GMAIL.COM</p> <div className='line' />
      </div>
      {/*///////////////////////////////////////// Projects ////////////////////////////////////////////////// */}
      <div class='projects-container'>
        <header class='projects-header'>
          <div class='projects-title'>
            <h1>PROJEKTE TË PËRFUNDUARA</h1>
          </div>
          <div class='projects-logo'>
            <img src={LogoIcon} alt='M&M Construction Logo' />
          </div>
        </header>
        <main class='projects-main'>
          <section class='projects-description'>
            <p>• PËRFORCIME STRUKTURE DS4</p>
          </section>
          <section class='projects-gallery'>
            <div class='gallery-row'>
              <img
                src={PerforcimeStrukture}
                alt='Project Image 1'
                className='structure-img'
              />
              <img
                src={PerforcimeStrukture2}
                alt='Project Image 1'
                className='structure-img'
              />
            </div>
          </section>
        </main>
        <div className='projects-line' />
        <div className='projects-row'>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• PUNIME RIFINITURE </p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={PunimeRifiniture} alt='Project Image 1' />
              </div>
            </section>
          </main>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• SHTESE KATI VILE; SOLET MONOLITE ME KULME </p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={ShteseKati} alt='Project Image 1' />
              </div>
            </section>
          </main>
        </div>
        <div className='projects-line' />
        <div className='projects-row'>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• PUNIM BETON-ARME </p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={PunimeBetoni} alt='Project Image 1' />
              </div>
            </section>
          </main>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• KARABINA , VILE DY-KATESHE </p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={Karabina} alt='Project Image 1' />
              </div>
            </section>
          </main>
        </div>
        <div className='projects-line' />
        <main class='projects-main'>
          <section class='projects-description'>
            <p>• MURE RRETHUES</p>
          </section>
          <section class='projects-gallery'>
            <div class='gallery-row'>
              <img src={Mure} alt='Project Image 1' />
            </div>
          </section>
        </main>
        <div className='projects-line' />
        <div className='projects-row'>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• SHTESE KATI</p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={Shtese} alt='Project Image 1' />
              </div>
            </section>
          </main>
          <main class='projects-main'>
            <section class='projects-description'>
              <p>• NDERTIM PISHINE</p>
            </section>
            <section class='projects-gallery'>
              <div class='gallery-row'>
                <img src={NdertimPishine} alt='Project Image 1' />
              </div>
            </section>
          </main>
        </div>
      </div>
      {/*///////////////////////////////////////// Footer ////////////////////////////////////////////////// */}
      <div className='footer-container'>
        <div className='footer-col col-1'>
          <img src={LogoIcon} alt='footer-icon' className='footer-icon' />
          <p className='footer-description'>
            m&M construction është e hapur për bashkëpunimie dhe për të pranuar
            projekte të të reja. Jemi të angazhuar për të përfshirë aftësitë dhe
            ide të reja në punën tonë dhe jemi gati të marrim në shqyrtim çdo
            propozim për bashkëpunim dhe projekte të ndertimit.
          </p>
        </div>
        <div className='footer-col col-2'>
          <div className='footer-contact'>
            <p className='footer-contact-header'>NA KONTAKTONI:</p>
            <div>
              <p className='footer-contact-item'>0686967671</p>
              <p className='footer-contact-item'>0676711147</p>
              <p className='footer-contact-item'>0689303000</p>
              <p className='footer-contact-item'>MMCONSTRUCTS2022@GMAIL.COM</p>
            </div>
          </div>
          <img src={FooterImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
