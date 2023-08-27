import React,{useEffect} from 'react'
import Typical from 'react-typical'
import About from './About';
import Navigation from './Navigation';
import Projects from './Projects';
import Skills from '../Skills';
import { createContext } from 'react';
import SKillsAboutnav from '../SKillsAboutnav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contactus from './ContactUs';
import View from './View';
import { FaBeer } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    AOS.init();
    
    
  }, []);
  
  const mouse=()=>{

  }
  return (
 
 < >
 <div className="Home"><div className="mainhome" >
<div className="leftcont"><div className="container">  <div className="content">
    <div className="smalltitle">Welcome Hi ,I'm </div>
    <div className="name"><span>Muhammad Hamza</span></div>
    <div className="multiple">
        <Typical
        steps={['A Computer Engineer', 500,
      'I am  Front end Developer',500]}
        loop={Infinity}
        wrapper="a"
      />
    </div>
    <div className="para"  data-aos='fade-up'><p>Experienced front-end developer adept at crafting responsive and visually engaging web interfaces, utilizing
   
   HTML, CSS, JavaScript and ReactJs to deliver seamless user experiences. Proficient in translating design
   concepts into functional code, with a strong focus on usability and accessibility.</p> 
   <div className="rightcont2" data-aos='fade-up'>
<a href="https://www.facebook.com/profile.php?id=100074954437529" className="fa fa-facebook"  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" target='blank'></a>
<a href="https://github.com/MuhammadHamza9025" className="fa fa-github" data-aos="flip-up"  target='blank'></a>
<a href="#" className="fa fa-google" data-aos="fade-up"></a>
<a href="https://www.linkedin.com/in/muhammad-hamza-586119226/" className="fa fa-linkedin" data-aos="fade-up" target='blank'></a>
<span></span>
</div></div>
  </div>
 </div></div>
<div className="rightcont">
<a href="https://www.facebook.com/profile.php?id=100074954437529" className="fa fa-facebook"  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" target='blank'></a>
<a href="https://github.com/MuhammadHamza9025" className="fa fa-github" data-aos="fade-up"  target='blank'></a>
<a href="#" className="fa fa-google" data-aos="fade-up"></a>
<a href="https://www.linkedin.com/in/muhammad-hamza-586119226/" className="fa fa-linkedin" data-aos="fade-up" target='blank'></a>
<span></span>
</div>
 </div></div>
 <About></About>
 <SKillsAboutnav></SKillsAboutnav>
<Skills></Skills>
<Projects mouse={mouse}></Projects>
<Contactus></Contactus>
 </>
  )
}

export default Home
