import React, { useState } from 'react'
import { Link } from 'react-scroll'
import View from './View'

const Navigation = () => {
    const [nav,setnav]=useState(false)
    
  return (
   <div className="navigation">
    <div className="logo"> <span>&#123;</span>MH<span>&#10101;</span></div>
    <div className={nav?'navbar nav' :' navbar notactive'}>
        <ul className='ul' >

            <li><Link to="Home" onClick={()=>setnav(!nav)}>Home</Link></li>
            <li><Link to="About"onClick={()=>setnav(!nav)}>About</Link></li>
            <li><Link to="Contact"onClick={()=>setnav(!nav)}>Skills</Link></li>
            <li><Link to='Projects'onClick={()=>setnav(!nav)}>Projects</Link></li>
        </ul>
       
    </div>
    <div className="hamburger" onClick={()=>setnav(!nav)}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>
   </div>
  )
}

export default Navigation
