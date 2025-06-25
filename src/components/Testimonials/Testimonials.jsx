import React from 'react';
import './Testimonials.css';
import user1 from '../../assets/b4.jpg'; // Replace with actual image paths
import user2 from '../../assets/b1.jpg'; // Replace with actual image paths

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <img src={user1} alt="User 1" />
              <div className="user-info">
                <h3>John Doe</h3>
                <p>"Great service! The driver was punctual and the car was clean and comfortable."</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={user2} alt="User 2" />
              <div className="user-info">
                <h3>Jane Smith</h3>
                <p>"I had a wonderful experience with Naksh Cabs. Highly recommended!"</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className="next-btn">Next</button>
      <button className="back-btn">Back</button>
    </div>
  );
}

export default Testimonials;