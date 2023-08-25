import React from 'react'
import Cont from './Cont.css'
import { useState } from 'react'

export default function Contactus() {

const [name,chname]=  useState('') //name state
const [subm,chngsubm]=useState(''); //name state
const [phone,chphone]=  useState('') //phone state
const [subphone,chngphone]=useState(''); //phone state
const [email,chemail]=useState('');
const [subemail,subchemail]=useState('');


const chngname=(e1)=>{  //Name Function

  chname(e1.target.value);
  
}
const changeemail=(e3)=>{ //Email function

  chemail(e3.target.value);
  console.log(e3.target.value);
  
}

const changephone=(e2)=>{ //Email function

  chphone(e2.target.value);
  console.log(e2.target.value);
  
}

const Submit=()=>{   // SUbmit Button Function 

  chngsubm(name);
  chngphone(phone);
  subchemail(email);
  alert(  `My Name is ${name} and Phone Number is ${phone} and Email Address is ${email}` )
  
  chngsubm('');
  chngphone('');
  subchemail('');

}


  return (
<>
<div className="mainabout " id='Contact'>
<h1 data-aos='flip-right'>Contact</h1></div>
<div className="mainmenu">

<form action="https://formspree.io/f/mpzgdjon" method='POST'>

 

<div className="form">
    <label htmlFor="Name"  className='ll2'> Name :</label>
    <input className='input' type="text" placeholder='Enter Your name here' value={name}  onChange={chngname} required name='form'/>
    <br />
    <label htmlFor="Name" className='ll2'> Phone :</label>
    <input className='input' type="text" placeholder='Enter Your Phone Number' value={phone}  onChange={changephone}  required name='form'/>
    <br />
    <label htmlFor="Name" className='ll2'> Email Address :</label>
    <input className='input' type="text"  placeholder='Enter Your Email address' onChange={changeemail} required name='form'/>
    <br />
    <textarea  className='input' name="" id="" cols="30" rows="10" placeholder='Enter Something ' required ></textarea>
    <button onClick={Submit}>Submit</button>
</div>
</form>

</div>
</>
  )
}
