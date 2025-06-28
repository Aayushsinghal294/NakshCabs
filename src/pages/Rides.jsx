import React from 'react';
import star from '../assets/star.png';
import swift from '../assets/swift.png';
import ertiga from '../assets/ertiga.png';
import Etios from '../assets/Etios.png';
import innova from '../assets/innova.png';
import tavera from '../assets/tavera.png';
import tempotravel from '../assets/tempotravel.png';
import crysta from '../assets/crysta.png';
import toofan from '../assets/toofan.png';

const rides = [
  { img: swift, name: "Swift Dzire (4+1)", price: 11 },
  { img: Etios, name: "Toyota Etios (4+1)", price: 12 },
  { img: ertiga, name: "Maruti Ertiga (6+1)", price: 13 },
  { img: tavera, name: "Chevrolet Tavera (8+1)", price: 14 },
  { img: innova, name: "Toyota Innova (7+1)", price: 15 },
  { img: toofan, name: "Force Toofan (12+1)", price: 15 },
  { img: crysta, name: "Innova Crysta (7+1)", price: 18 },
  { img: tempotravel, name: "Tempo Traveller (17+1)", price: 24 },
  { img: tempotravel, name: "Tempo Traveller (26+1)", price: 32 },
];

const Rides = () => (
  <div className="bg-black text-white min-h-screen py-12 px-2 md:px-10">
    <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-400 mb-8">Our Rides</h1>
    <div className="flex flex-wrap justify-center gap-8">
      {rides.map((ride) => (
        <div key={ride.name} className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-xs flex flex-col items-center p-6">
          <img src={ride.img} alt={ride.name} className="w-full h-40 object-cover rounded-xl mb-4" />
          <span className="text-yellow-400 font-semibold mb-1">Ac/NonAc</span>
          <h5 className="text-xl font-bold mb-2">{ride.name}</h5>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-5 h-5" />
            ))}
          </div>
          <ul className="text-gray-300 text-sm mb-3">
            <li>Pricing: ₹ {ride.price} Per KM</li>
            <li>250 Km Per Day</li>
          </ul>
          <div className="flex gap-2 mt-auto">
            <a href="tel:+91-966-961-0726">
              <button className="border-2 border-red-600 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-600 hover:text-white transition">Call Now</button>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919669610726" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-bold hover:bg-green-600 hover:text-white transition">Whatsapp</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Rides;