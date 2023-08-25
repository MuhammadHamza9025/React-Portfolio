import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  useEffect(() => {
    AOS.init();
    
    
  }, []);

  return (
    <div className='Skillspor mainabout'>
     <h1 data-aos='flip-right'>Skills</h1>
     <div className="mainskills">
      <div className="frontend"><h2>Front-End</h2>
      <div className="html" >
        
        <h4>HTML</h4>
        <div className="permain"><div className="colr"></div></div>
      
      </div>
      <div className="html">
        
        <h4>CSS</h4>
        <div className="permain"><div className="colr"></div></div>
      
      </div>
      <div className="js">
        
        <h4>JavaScript</h4>
        <div className="permainjs"><div className="colrjs"></div></div>
      
      </div>
      </div>

      <div className="frontend"><h2>Frameworks</h2>
      <div className="html">
        
        <h4>ReactJs</h4>
        <div className="permain"><div className="colr"></div></div>
      
      </div>
      <div className="html">
        
        <h4>Redux/Redux Toolkit</h4>
        <div className="permain"><div className="colr"></div></div>
      
      </div>
      <div className="js">
        
        <h4>Nextjs</h4>
        <div className="permainjs"><div className="colrjs"></div></div>
      
      </div>
      </div>
     

      </div>     
    </div>
  )
}

