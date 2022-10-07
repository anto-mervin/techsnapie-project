import './App.css';

import p1 from './About/icons/remotly.png';
import p2 from './About/icons/skech.png';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Title from './Title/Title';
import About from './About/About';
import Services from './Services/Services';
import Servicepill from './Services/Servicepill';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import wdl from './Services/web-design.png';
import mdl from './Services/mobile-app-development.png';
import ddl from './Services/desktop-app-development.png';
import uidl from './Services/ui-ux-design.png';




function App() {
  return (
    <div>
   <Navbar/>
   <Home/>
   <Title t1='About' t2=' Us' subtitle='DELIVERING INNOVATIONS' data-aos={"fade-left"}/>
   <About heading={['What We ',<span>Do</span>,' For?']} picture={p1} order='1' />
   <About heading={['How We ',<span>Do</span>,' For?']} picture={p2} order ='2' />
   <div className='yellow--bg'>
   <Title t1='Serv' t2='ices' subtitle='WELL DONE IS OUR TARGET'/>
   <div className='card__container'>
   <Services card_title='Web development' card_desp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi nihil ' img={wdl}/>
   <Services card_title='Mobile app development' card_desp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi nihil ' img={mdl}/>
   <Services card_title='Desktop app development' card_desp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi nihil ' img={ddl}/>
   <Services card_title='Ui/Ux Design' card_desp='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi nihil ' img={uidl}/>
  
   </div>
   <p className="service__pill__title">We Also Do..</p>
   <div className='card__container'>
   <Servicepill pilltitle='SEO'/>
   <Servicepill pilltitle='Digital Marketing'/>
   <Servicepill pilltitle='Poster'/>
   <Servicepill pilltitle='Logo Design'/>
   <Servicepill pilltitle='E-Certification'/>
   <Servicepill pilltitle='Pen-testing'/>
   <Servicepill pilltitle='Digi-Invitations'/>
   <Servicepill pilltitle='Ad Marketing'/>
   <Servicepill pilltitle='Hosting'/>
  
   


   </div>
   
   </div>
   
   <Title t1='Our Portfo' t2='lio ' subtitle='MAKING IDEAS COME ALIVE'/>
   <p className="Portfolio__heading">Lorem ipsum dolor sit, amet <span>consectetur</span> adipisicing elit. Enim consequatur nobis rem quasi. Velit exercitationem, dicta nobis enim odit nihil corporis quasi tenetur? Non <span>commodi </span>recusandae aperiam fuga illo numquam!</p>
   <div className='portfolio__container'>
   <Portfolio/>
   </div>
   <div className="yellow--bg">
  
   <Title t1='Contact' t2=' Us' subtitle='GET TOUCH WITH US'/>
   <Contact details={['Coimbatore, TamilNadu, India.','contact@techsnapie.com','+91 94449-85694']}/>

   </div>
   <Footer/>
  

   </div>
  );
}

export default App;
