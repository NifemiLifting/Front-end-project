import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import { Link } from 'react-router-dom';
import PIC from './images/IMG.JPG'
import SMUEC from './images/pone.png'
import MEM from './images/wheel.png';
import BLACK from './images/carjack.png';
import MICHELIN from './images/michelin.png';
import SMART from './images/smart.png';
import MUNLOGO from './images/munlogo.png';
import COMM from './images/community.png';
import ENG from './images/engineering.png';
import GROWLER from './images/growler.png';
import TypingEffect from './TypingEffect';
import MASTER from './images/master.png';
import INH from './images/inhaler.png';
import DRON from './images/drone.png';




function App() {
const Home =useRef(null);
const About =useRef(null);
const Project =useRef(null);
const Experience =useRef(null);
const Contact =useRef(null);

const scrollToSection =(elementRef)=>{
    window.scrollTo({
      top: elementRef.current.offsetTop - 60,
      behavior: 'smooth',
    })

}
const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
      <div className='App'>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#0B0C10' }}>
        <div className='container' id='navbar'>
          <h3 className='navbar-brand'>Laughter Afolabi's Portfolio</h3>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''} justify-content-end`} id='navbar'>
            <ul className='navbar-nav ml-auto navabr-no-dots'>
              <li className='nav-item'>
                <button className='btn' onClick={() => scrollToSection(Home)}>
                  Home
                </button>
              </li>
              <li className='nav-item'>
                <button className='btn' onClick={() => scrollToSection(About)}>
                  About
                </button>
              </li>
              <li className='nav-item'>
                <button className='btn' onClick={() => scrollToSection(Project)}>
                  Project
                </button>
              </li>
              <li className='nav-item'>
                <button className='btn' onClick={() => scrollToSection(Experience)}>
                  Experience
                </button>
              </li>
              <li className='nav-item'>
                <button className='btn' onClick={() => scrollToSection(Contact)}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
          <div ref={Home} className='Home'>
            
            <div className='about_me'>
              <h1>
              <TypingEffect words={['Hi, ', "I'm ", 'Laughter.']} />
              </h1>
              <p>B.eng Mechanical Engineer, with over 3 years experience.</p>
            </div>
          </div>

          <div ref={About} className='About'>
            <div className="container-fluid cardDetail text-center">
         <div>
          <br/><br/>
         <h1 className="mb-4">A little bit about me</h1><br/>
         <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                  <img src={PIC} alt='' className="mb-4 mx-auto d-block" style={{ height: '250px', width:'250px' }} />
                </div>
                <div className='col-md-6'>
                  <p className="lead">Laughter Afolabi is a Mechanical engineer with interests in product design, project management, and material engineering. With experience in design processes, software, and certifications, I've participated in startups, pitch competitions, engineering design competitions, and hackathons. Through internships, I collaborate with diverse teams ranging in renewable energy, manufacturing, and design industries.</p>
                </div>
              </div>
        </div>
          
        
      </div>
        <br/><br/>
      
        <h2>Skills</h2>
        <div className="row mx-5">
          <div className="col-md-4 my-5">
            <div className="card text-center">
              
              <div className="card-body">
                <h4 className="card-title">PROGRAMMING</h4>
                <p className="card-text">Python, C++, MATLAB</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              
              <div className="card-body">
                <h4 className="card-title">MECHANICAL DESIGN</h4>
                <p className="card-text">SolidWorks, AutoCAD, MasterCam, Fusion 360, AutoDESK Inventor, ABAQUS.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              
              <div className="card-body">
                <h4 className="card-title">TECHNICAL</h4>
                <p className="card-text">3D printing, Laser Cutting, Soldering, Arduino IDE</p>
              </div>
            </div>
          </div>
        </div>
      
    </div>
          </div>
          <div ref={Project} className='Projects'>
            {/* <h2>Projects</h2> */}
            {/* <h3 classname='proj'></h3> */}
           <div className='project_one'>
            <br/>
            <h2>Here are some projects I've worked on in the past.</h2>
           <div className="row mx-5">
             <div className="col-md-4 my-5">
               <div className="card text-center">
                 <img src={SMUEC} alt='' className='card-img-top' style={{ height: '180px' }} />
                <div className="card-body">
                <h4 className="card-title">BELT TIGHTENER</h4>
                <p className="card-text">3D Model and Assembly with Material Specification of a Belt tightener </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              <img src={MEM} alt='' className='card-img-top' style={{ height: '180px' }} />
              <div className="card-body">
                <h4 className="card-title">WHEEL CASTER</h4>
                <p className="card-text">3D Model and Assembly with Material Specification of Wheel Caster</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              <img src={BLACK} alt='' className='card-img-top' style={{ height: '200px' }}  />
              <div className="card-body">
                <h4 className="card-title">CAR JACK</h4>
                <p className="card-text">3D rendering of a car jack</p>
              </div>
            </div>
          </div>
        </div>
           </div>


           <div className='project_two'>
           <div className="row mx-5">
             <div className="col-md-4 my-5">
               <div className="card text-center">
                 <img src={MASTER} alt='' className='card-img-top' style={{ height: '180px' }} />
                <div className="card-body">
                <h4 className="card-title">MASTERCAM PROJECT</h4>
                <p className="card-text">3D Model and Generated Tool Path (Gcode)of a Wooden Maze  for Milling on a Wooden Specimen</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              <img src={INH} alt='' className='card-img-top' style={{ height: '200px' }} />
              <div className="card-body">
                <h4 className="card-title">MECHANICAL DESIGN</h4>
                <p className="card-text">A redesign of a medical Inhaler delivery method</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-5">
            <div className="card text-center">
              <img src={DRON} alt='' className='card-img-top' style={{ height: '150px' }}  />
              <div className="card-body">
                <h4 className="card-title">MECHANICAL DESIGN</h4>
                <p className="card-text">Winning Presentation on the Design of a carrier fitted to drones to deliver automated external defibrillators (AED) to remote locations</p>
              </div>
            </div>
          </div>
        </div>
           </div>
          </div>
          <div ref={Experience} className='Experience'>
            <h1>Work experience</h1><br/><br/>
            <div className='container-fluid'>
              <div className='row'>
               
                <div className='col-md-3 exp' id='exp1'>
                      <img src={MICHELIN} alt='michelin logo'/>
                      <a className='link' href='https://www.michelin.com/en/'>Michelin</a>
                </div>
                <div className='col-md-9' id='exp1'>
                 <h3>Tire Industrialization Engineer</h3>
                   <br/>
                   <h5>June 2023 - Now</h5>
                   <p>The Product Design & Industrialization Engineer prepares tire designs for mass production, balancing technical and industrial competencies. They work collaboratively with a design team to translate innovation into manufacturing specifications.</p>
                </div>
               
                <div className='col-md-3 exp' id='exp2'>
                  
                  <img src={SMART} alt='smartice logo' width="150" height="150"/>
                  <a className='link' href='https://smartice.org/'>Smartice</a>
                </div>
                <div className='col-md-9' id='exp2'>
                <h3>Product and Design Engineer</h3>
                  <br/>
                  <h5>September 2022- December 2022</h5>
                  <p>
                  This role involved redesigning Smartice products, deploying ice sensors in open water and developing a method to test for minute leaks in water-tight containers. Maintaining the tech shops and conducting small-scale assembly line manufacturing.
                  </p>
                </div>
                <div className='col-md-3 exp' id='exp3'>
                  
                  <img src={GROWLER} alt='GROWLER logo' width="150" height="150"/>
                  <a className='link' href='https://www.growlerenergy.com/'>Growler energy</a>
                </div>
                <div className='col-md-9' id='exp3'>
                   <h3>Project Management Engineer</h3>
                   <br/>
                   <h5>January 2022 - April 2022</h5>
                   <p>Worked on a dynamic team of Engineers in a project management role. Developed technical documents on subsea cables and the electrification of the oil and gas sector in Newfoundland and Labrador. </p>
                </div>
                <div className='col-md-3 exp' id='exp4'>
                  
                  <img src={ENG} alt='mun logo' width="150" height="150"/>
                  <a className='link' href='https://www.mun.ca/engineering/#'>Faculty of engineering and applied science</a>
                </div>
                <div className='col-md-9' id='exp4'>
                  <h3>Mechanical Engineer</h3>
                  <br/>
                  <h5>June 2021 - August 2021</h5>
                  <p>This role was primarily to promote interest in engineering amongst the youth in the community of Newfoundland. It involved creating educational modules on programming, circuit design and 3D printing to educate and encourage the pursuit of STEM careers.</p>
                </div>
                <div className='col-md-3 exp' id='exp5'>
                 
                  <img src={COMM} alt='community centre alliance logo' width="150" height="150"/>
                  <a className='link' href='https://ccanl.ca/who-we-are/community-centre-alliance/'>Community Centre Alliance</a>
                </div>
                <div className='col-md-9' id='exp5'>
                  <h3>Mechanical Engineer</h3>
                  <br/>
                  <h5>September 2020 - December 2021</h5>
                  <p>In this role, I investigated the community center building plan against current codes and standards for accessibility and life safety standards. I also provided recommendations for improvements, Drafted floor plans and cost estimates to assist in the preparation of funding applications </p>
                </div>
                <div className='col-md-3 exp' id='exp6'>
                  
                  <img src={MUNLOGO} alt='mun logo' width="150" height="150"/>
                  <a className='link' href='https://www.mun.ca/thecommons/'>Technical Service Department MUN</a>
                </div>
                <div className='col-md-9' id='exp6'>
                  <h3>Mechanical Design Engineer</h3>
                  <br/>
                  <h5>January 2020 - April 2020</h5>
                  <p>Manufactured prototypes of CAD drawings using modelling software, FEA analysis and 3D printers. Conducted workshops on Arduino IDE, circuit design etc. </p>
                </div>

              </div>
            </div>
          </div>
          
          <div ref={Contact} className='Contact'>
            {/* <h2>Contact</h2> */}
            <div className='myresume'>
              <h2>My <span className='resume'>
                
                <a href='https://drive.google.com/file/d/11pBdfzGO0xLYSbQak7NtR72FWKHVx8AV/view'>Resume</a>
                
                </span>
              </h2>

            </div>

            

            <div className='footer'>
            <h2>You can contact me on any of the following</h2>
            <br/><br/>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                <a href='mailto:laughterwork@gmail.com'>
                <i className="fa fa-envelope fa-4x"></i>

                </a>
                </div>

                <div class="col-md-6">
                <a href='https://www.linkedin.com/in/laughter-afolabi/'>
                  <i className="fa fa-linkedin fa-4x"></i>
                </a>
                </div>
                 
              </div>
            </div>
            </div>

            
            
            

          </div>
      </div>
    
  );
}

export default App;
