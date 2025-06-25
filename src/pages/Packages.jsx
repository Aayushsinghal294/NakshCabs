import React, { useEffect } from 'react'
import './Packages.css'
import taxibg from '../assets/viiw.png'
import star1 from "../assets/star.png";
import ujjain from "../assets/ujjain.png";
import bhopal from "../assets/bhopal.png";
import maheshwar from "../assets/maheshwar.png";
import mandav from "../assets/mandav.png";
import omkareshwar from "../assets/omkareshwar.png";

const Packages = () => {

  
  useEffect(() => {
    document.title = "Packages | Naksh Cab Service";
},[]);

  return (
    <>
       <section>
        <img src={taxibg} className='taxibg'  alt="" />
       </section>
<section id="hero11">
    <h2>OUR PACKAGES ...</h2>
    <p>Choose the best package for your Flawless Ride</p>
</section>

<section id="packages-1" >
        <h2 id="fee"><span> Explore</span> Our Rides ...</h2>
        <div className="pp1">
          <div className="p2">
            <div className="shop1">
              <img className='ujjain' src={ujjain} alt="" />
            </div>
            <div className="descrip">
            <div className="desi">
              <h5>Indore to Ujjain</h5>
              <div className="star1">
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
              </div>
              <ul>
                <p>Round Trip :- ₹ 3000/- </p>
                <p>One Round :- ₹ 1500/- </p>
                <p>Only 300 km Perday </p>
              </ul>
              <br />
             
            </div>
            </div>
          </div>

          <div className="p2">
          
            <div className="desi descrip1">
              
              <h5>Indore to Bhopal</h5>
              <div className="star1">
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
              </div>
              <ul>
              <p>Round Trip :- ₹ 5000/- </p>
                <p>One Round :- ₹ 3500/- </p>
                <p>Only 300 km Perday </p>
              </ul>
              <br />
             
            </div>
            <div className="shop1">
              <img id="bhopal" src={bhopal} alt="" />
            </div>
          </div>


          <div className="p2">
            <div className="shop1">
              <img id="maheshwar" src={maheshwar} alt="" />
            </div>
            <div className="desi descrip">
              <h5>Indore to Maheshwar</h5>
              <div className="star1">
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
              </div>
              <ul>
              <p>Round Trip :- ₹ 3000/- </p>
                <p>One Round :- ₹ 2500/- </p>
                <p>Only 300 km Perday </p>
              </ul>
              <br />
             
            </div>
          </div>

          <div className="p2">
           
            <div className="desi descrip1">
              <h5>Indore to Omkareshwar</h5>
              <div className="star1">
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
              </div>
              <ul>
              <p>Round Trip :- ₹ 3000/- </p>
                <p>One Round :- ₹ 2500/- </p>
                <p>Only 300 km Perday </p>
              </ul>
              <br />
             
            </div>
            <div className="shop1">
              <img id='omkareshwar' src={omkareshwar} alt="" />
            </div>
          </div>


          <div className="p2">
            <div className="shop1">
              <img id='mandav' src={mandav} alt="" />
            </div>
            <div className="desi descrip">
              <h5>Indore to Mandav</h5>
              <div className="star1">
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
                <img src={star1} className="icon" alt="" />
              </div>
              <ul>
              <p>Round Trip :- ₹ 3500/- </p>
                <p>One Round :- ₹ 3000/- </p>
                <p>Only 300 km Perday </p>
              </ul>
              <br />
            
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Packages
