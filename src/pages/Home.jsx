import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import b4 from "../assets/b4.jpg";
import star from "../assets/star.png";
import swift from "../assets/swift.png";
import ertiga from "../assets/ertiga.png";
import Etios from "../assets/Etios.png";
import innova from "../assets/innova.png";
import tavera from "../assets/tavera.png";
import tempotravel from "../assets/tempotravel.png";
import crysta from "../assets/crysta.png";
import toofan from "../assets/toofan.png";

const Home = () => {
  return (
    <div>
      <div className="imgSlider">
        <div className="slider-content">
          <h1>Welcome to Naksh Cabs</h1>
          <p>Your reliable cab service in Indore</p>
          <Link to="/rides"><button className="btn1">Explore Rides</button></Link>
        </div>
      </div>
      <section id="about">
        <h2>About Us</h2>
        <p>We provide the best cab services in the city. Our drivers are professional and our cars are well-maintained.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <div className="service">
          <h3>City Rides</h3>
          <p>Comfortable and affordable rides within the city.</p>
        </div>
        <div className="service">
          <h3>Outstation Rides</h3>
          <p>Reliable and safe rides to outstation destinations.</p>
        </div>
        <div className="service">
          <h3>Airport Transfers</h3>
          <p>On-time pickups and drop-offs to and from the airport.</p>
        </div>
      </section>
      <section id="product-1" className="section-p1">
        <h2 id="feee">Explore Our Rides ...</h2>
        <div className="pro-container">
          <div className="pro">
            <div className="shop1">
              <img src={swift} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Swift Dzire (4+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 11 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>

          <div className="pro">
            <div className="shop1">
              <img id="etios" src={Etios} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Toyota Etios (4+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 12 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>
          <div className="pro">
            <div className="shop1">
              <img id="ertiga" src={ertiga} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Maruti Ertiga (6+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 13 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>
          <div className="pro">
            <div className="shop1">
              <img id="tavera" src={tavera} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Chevrolet Tavera (8+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 14 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>
          <div className="pro">
            <div className="shop1">
              <img id="innova" src={innova} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Toyota Innova (7+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 15 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>

          <div className="pro">
            <div className="shop1">
              <img id="toofan" src={toofan} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Force Toofan (12+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 15 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>


          <div className="pro">
            <div className="shop1">
              <img id="crysta" src={crysta} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Innova Crysta (7+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 18 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>

          <div className="pro">
            <div className="shop1">
              <img src={tempotravel} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Tempo Traveller (17+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 24 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>


          <div className="pro">
            <div className="shop1">
              <img src={tempotravel} alt="" />
            </div>
            <div className="des">
              <span>Ac/NonAc</span>
              <h5>Tempo Traveller (26+1)</h5>
              <div className="star">
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
                <img src={star} className="icon" alt="" />
              </div>
              <ul>
                <li>Pricing: ₹ 32 Per KM</li>
                <li> 250 Km Per Day</li>
              </ul>
              <br />
              <div className="btn2">
              <a href="tel:+91-966-961-0726"><button className='btn3'>Call Now</button></a>  
                <a href="https://api.whatsapp.com/send?phone=919669610726" target='_blank'>  <button className='btn4'>Whatsapp</button></a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;