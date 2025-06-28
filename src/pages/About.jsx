import React, { useEffect } from 'react'
import taxii from '../assets/taax.png'
import shipping from '../assets/shipping.jpg'
import shopping from '../assets/shopping.jpg'
import money from '../assets/money.jpg'
import promotion from '../assets/promotion.jpg'
import sale from '../assets/Sale.jpg'
import support from '../assets/support.jpg'
import star from '../assets/star.png'
import Testimonials from '../components/Testimonials'
import ind55 from '../assets/ind55.png'

const About = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
    <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">About Naksh Cabs</h1>
    <div className="max-w-2xl bg-gray-900 rounded-2xl shadow-lg p-8 text-center">
      <p className="text-lg text-gray-200 mb-4">
        Naksh Cabs is Indore’s most trusted cab service, offering safe, comfortable, and affordable rides for all your travel needs.
      </p>
      <p className="text-gray-400 mb-4">
        Whether you need a ride within the city, an outstation trip, or an airport transfer, our professional drivers and well-maintained fleet ensure a smooth journey every time.
      </p>
      <p className="text-gray-400">
        We pride ourselves on punctuality, transparent pricing, and customer satisfaction. Book with us for a hassle-free experience!
      </p>
    </div>
  </div>
);

export default About;