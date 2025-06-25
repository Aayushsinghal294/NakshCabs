import React, { useEffect } from 'react'
import './About.css'
import taxii from '../assets/taax.png'
import shipping from '../assets/shipping.jpg'
import shopping from '../assets/shopping.jpg'
import money from '../assets/money.jpg'
import promotion from '../assets/promotion.jpg'
import sale from '../assets/Sale.jpg'
import support from '../assets/support.jpg'
import star from '../assets/star.png'
import Testimonials from '../components/Testimonials/Testimonials'
import ind55 from '../assets/ind55.png'

const About = () => {

    
  useEffect(() => {
    document.title = "About | Naksh Cab Service";
},[]);

  return (
    <>

<section className="about-header">
    <h2>ABOUT<span> US</span></h2>
    <p>Know About our Services ...</p>
</section>

<section id="about-head" className="section-p1">
    <img src={taxii} alt=""/>
    <div>
        <h2>Who <span>we are</span> ?</h2>
        <p> Indore's trusted taxi service is dedicated to providing exceptional travel experiences with a focus on safety and convenience. With a diverse fleet of vehicles ranging from economical options to luxury rides, the service caters to all types of customers. Punctuality is a hallmark, ensuring that passengers reach their destinations on time, while the friendly and professional drivers add to the overall pleasant journey. Whether it's a late-night ride or an early morning airport transfer, this taxi service prioritizes customer satisfaction, making it a preferred choice for residents and visitors alike.</p>
       
        <br /><br />
        <marquee bgcolor="#cbcbcb" loop="1" scrollamount="15" width="100%">You will get the best Customer Experience from our Taxi Services, We always Take Care that our cars are clean.</marquee>

    </div>
</section>
<div className="feat">
<h1 id='key1'>Key Features...</h1>
<section id="feature" className="section-p1">
    <div className="card">
        <img className="fetu" src={shipping} alt=""/>
        <h6>Instant Taxi</h6>
    </div>
    <div className="card">
        <img className="fetu" src={shopping} alt=""/>
        <h6>Online Booking</h6>
    </div>
    <div className="card">
        <img className="fetu" src={money} alt=""/>
        <h6>Save money</h6>
    </div>
    <div className="card">
        <img className="fetu" src={promotion} alt=""/>
        <h6>Professionalism</h6>
    </div>
    <div className="card">
        <img className="fetu" src={sale} alt=""/>
        <h6>Happy Customers</h6>
    </div>
    <div className="card">
        <img className="fetu" src={support} alt=""/>
        <h6>24/7 Service</h6>
    </div>
    </section>
   
    </div>
    <section id='ttt'>
    <div className="test-head"> <h2 className='test'>Testimonials</h2>
    <h3  className='test1'>What our Customers say about our services ...</h3>
    </div>
    <Testimonials/>
    </section>
    </>
  )
}

export default About
