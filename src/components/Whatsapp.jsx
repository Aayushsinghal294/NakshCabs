import React from 'react';
import whatt from '../../assets/whatt.png';
import calll from '../../assets/phone-call.png';

const Whatsapp = () => (
  <>
    <a
      href="https://api.whatsapp.com/send?phone=919669610726"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <img src={whatt} alt="WhatsApp" className="w-16 h-16" />
    </a>
    <a
      href="tel:+91-966-961-0726"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50"
    >
      <img src={calll} alt="Call" className="w-16 h-16" />
    </a>
  </>
);

export default Whatsapp;