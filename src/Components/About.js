import React, { useContext, useEffect } from 'react'
import pic2 from './pic2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Name } from '../App';
import Home from './Home';

const About = () => {



    useEffect(() => {
        AOS.init();


    }, []);

    const Resume = () => {


        var resumeLink = "file:///G:/My%20Drive/Muhammad%20Hamza.pdf";
        window.open(resumeLink, '_blank');
    }
    return (
        <>


            <div className="mainabout " id="About" >
                <h1 >About Me</h1>
                <div className="aboutinfo" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
                    <ul data-aos='fade-up'>

                        <li>Student  123 of Computer Engineering from University of Engineering and Technology Taxila in 5th Semester.</li>
                        <li>Experienced front-end developer adept at crafting responsive and visually engaging web interfaces, utilizing

                            HTML, CSS, JavaScript and ReactJs to deliver seamless user experiences. Proficient in translating design
                            concepts into functional code, with a strong focus on usability and accessibility.</li>
                        <li> Passioante in learning new Skills and to explore Skills and enhance my Experience and Knowledge</li>
                        <div className="button"><button onClick={Resume}>Resume</button></div>

                    </ul>
                    <div className="pict"  >
                        <div className="back"></div>
                        <img src={pic2} alt="Muhammad Hamza" /></div>

                </div>

            </div>
        </>
    )
}

export default About
