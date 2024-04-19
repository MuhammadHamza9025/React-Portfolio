import React ,{useEffect} from 'react'
import pic4 from'./pic4.jpeg'
import pic5 from'./pic5.jpeg'
import pic6 from'./pic6.jpeg'
import pic7 from'./pic7.jpeg'
import Array from './Arraypics'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'

export default function Projects({mouse}) {
    useEffect(() => {
        AOS.init();
        
        
      }, []);

     

     
      
  return (
    <div className='Projects mainabout' id='Projects' data-aos='fade-up' >
       
    <h1 data-aos='flip-up'>Projects</h1>

    <div className='proimages '>{Array.map((val ,index)=>{
return(
     <>
      <div className="imagess"><img src={val.image} alt=""  onClick={()=>mouse(val)} key={val.id} />  
      <div className="info">{val.title}
      
      <div className="git">
     <a href={val.live}><button> <i className="fa fa-eye"> </i>View Live</button></a>
     <a href={val.github}> <button> <i className="fa fa-github"></i>Code</button></a>

      </div>
      </div>
      </div>
      
     
     </>
)

    })}</div>
    </div>
  )
}
