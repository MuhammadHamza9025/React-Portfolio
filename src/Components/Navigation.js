import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import View from './View'

const Navigation = () => {
    const [color, setcolor] = useState(false)
    const [nav, setnav] = useState(false)
    const [openmenu, setopen] = useState(true)
    const hamb = () => {
        setnav(true);
        setopen(false)
    }
    const closenav = () => {
        setopen(true)
        setnav(false);

    }

    return (
        <div className="navigation">
            <div className="logo"> <span>&#123;</span>MH<span>&#10101;</span></div>
            <div className={nav ? 'navbar nav' : ' navbar notactive'}>
                <ul className='ul' >

                    <li><NavLink><Link to="Home" onClick={closenav}>Home</Link></NavLink></li>
                    <li><Link to="About" onClick={closenav}>About</Link></li>
                    <li><Link to="Contact" onClick={closenav}>Skills</Link></li>
                    <li><Link to='Projects' onClick={closenav}>Projects</Link></li>
                </ul>

            </div>
            <div className={openmenu ? "hamburger" : "notopen"} onClick={hamb}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>
            <div className={openmenu ? "notopen" : "hamburger ham2"} onClick={closenav}><i className="fa fa-close ham2" ></i></div>
        </div>
    )
}

export default Navigation
