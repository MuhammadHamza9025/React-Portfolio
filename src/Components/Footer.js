import React from 'react'

export default function Footer() {

    const a= new Date().getFullYear();
  return (
    <div className='footer'>
      Copyright © {a} MuhammadHamza Portfolio
    </div>
  )
}
