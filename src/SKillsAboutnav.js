import React, { useState,useEffect } from 'react'
import {  BrowserRouter,  Routes,Route, NavLink} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './Skills';


export default function SKillsAboutnav() {
    useEffect(() => {
        AOS.init();
        
        
      }, []);
    const [edu,setedu]=useState(true); 
    const [skills,setskills]=useState(false); 
    

    const education=()=>{
setedu(false)
setskills(true)
setcol(educol);



    }
    const Experience=()=>{
setedu(true)
setskills(false)


    }

    const [educol, setcol]=useState({

        color :'red',
        borderBottom:'Orange'}
    )
  return (
<>



<div className="skillsnav">
    <div className="leftskills">
        <ul>

            <li onClick={education} style={educol} >
                <NavLink  >Education</NavLink></li>
            <li  onClick={Experience}><NavLink >Certification</NavLink></li>
            
        </ul>
    </div>
    <div className="rightskils" data-aos='flip-up'>
       <div className={edu?"education":"hideedu"}>
       <div className="heading"><h1>Computer Engineering</h1></div>
        <div className="university"><h4>University of Engineering and Technonoly Taxila</h4></div>
        <div className="eduinfo">
            <ul>
                <li>I am Student of Computer Engineering and Currently in %th Semester. </li>
                <li>Computer Engineer responsibilities include designing, testing, and inspecting all software used within an organization's computer system. Ultimately, you will be responsible for upgrading various types of hardware like routers and motherboards as needed.</li>
                <li>Studied Major Courses related to Programming i-e C++ , Data Structures ,
                    Object Oriented Programming (OOP)
                </li>
            </ul>
        </div>
       </div>

       <div className={skills?"skills":"hideedu"} >
       <div className="heading" data-aos='flip-down'><h1>Experience & Certification</h1></div>
       <div className="eduinfo" data-aos='flip-up'>
            <ul>
                <li>Work as a Front-end Developer in Fiverr.</li>
                <li>Certified Freelancer From DigiSkills.pk</li>
                <li>Certified Graphic Designer From DigiSkills.pk</li>
                <li>Studied Major Courses related to Programming i-e C++ , Data Structures ,                    Object Oriented Programming (OOP)
                </li>
            </ul>
        </div>
       </div>
        </div>
</div>

</>
  )
}
