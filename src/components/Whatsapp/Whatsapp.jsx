import React from 'react'
import whatt from '../../assets/whatt.png'
import calll from '../../assets/phone-call.png'
import './Whatsapp.css'

const Whatsapp = () => {
  return (
    <div>
      <a id='btnn' href="https://api.whatsapp.com/send?phone=919669610726" target='_blank' rel='noopener noreferrer'> <img id='whatt' src={whatt} alt="" /></a>
      <a id='btnn' href="tel:+91-966-961-0726" target='_blank' rel='noopener noreferrer'> <img id='calll' src={calll} alt="" /></a>
    </div>
  )
}

export default Whatsapp
