import React, { useEffect } from 'react'
import './Contact.css'
import location from '../assets/location.png'
import mail from '../assets/mail.png'
import call from '../assets/call.png'
import user_2 from '../assets/user_2.png'
import swift from '../assets/swift.png'
import Etios from '../assets/Etios.png'
import instagram from '../assets/instagram-logo.png'
import whatsapp from '../assets/whatsapp.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'

const Contact = () => {

    
  useEffect(() => {
    document.title = "Contact | Naksh Cab Service";
},[]);

  return (
    <>
      
<section className="contact-header">
    <h2>CONTACT US</h2>
    <p>We are always there for your help ...</p>
</section>

<section id="contact-details" className="section-p1">
    <div className="details">
        <span>GET IN TOUCH</span>  
        <h2>Visit us or contact us today</h2> 
        <h3>Head Office</h3>
        <div className="cc">
            <li>
            <img className="icon" src={location} alt=""/>
        <p>315, Pink City , Vijay Nagar , Indore (452010)</p>
    </li>
    <li>
        <img className="icon" src={mail} alt=""/>
   <a href="shubhamkumrawat86@gmail.com?body=My custom mail body"><p>shubhamkumrawat86@gmail.com</p></a> 
</li>
<li>
    <img className="icon" src={call} alt=""/>
    <a href="tel:+91-966-961-0726"><p>+91 96696 10726</p></a>
</li>
</div>
<div className="follow">
                <h3>Follow Us</h3>
                <ul className="lll">
                    <li><a href="/"><img  className='icong' src={instagram} alt="" /></a></li>
                    <li><a href="/"><img className='icong' src={whatsapp} alt="" /></a></li>
                    <li><a href="/"><img className='icong' src={linkedin} alt="" /></a></li>
                    <li><a href="/"><img className='icong' src={youtube} alt="" /></a></li>
                </ul>
            </div>
     </div>
<div className="map">
<iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1839.3098720107141!2d75.88708453860752!3d22.77948889483624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m5!1s0x396302cf719936cd%3A0xf8c9b28d50ccb81d!2sPink%20City%2C%20Indore%2C%20Madhya%20Pradesh%20453771!3m2!1d22.780704999999998!2d75.8895603!4m0!5e0!3m2!1sen!2sin!4v1720089771090!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </div>
</section>

<section id="form-details">
    <form action="">
        <span>LEAVE A MESSAGE</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="E-mail"/>
        <textarea name="" id="" cols="30" rows="6" placeholder="Your Feedback"></textarea>
        <button className="btn">Submit</button>
    </form>
    <div className="people">
    <img id='tav' src={swift} alt=""/>
<div>
    <img src={user_2} alt=""/>
    <p><span>Shubham Kumrawat</span>Owner @ Naksh Cab Service<br/> Phone : +91 96696 10726<br/> Email : shubhamkumarawat86@gmail.com</p>
</div>
    <img id='et' src={Etios} alt=""/>

    </div>
</section>

    </>
  )
}

export default Contact
