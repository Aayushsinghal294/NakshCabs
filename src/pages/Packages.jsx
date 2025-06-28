import React from 'react';

const packages = [
  {
    name: "Indore to Ujjain",
    desc: "Round trip cab package with sightseeing.",
    price: "₹1800",
  },
  {
    name: "Indore to Omkareshwar",
    desc: "Comfortable cab for pilgrimage and return.",
    price: "₹2500",
  },
  {
    name: "Indore to Mandav",
    desc: "Heritage tour package with experienced driver.",
    price: "₹3200",
  },
  {
    name: "Indore to Bhopal",
    desc: "Day trip to Bhopal with flexible timings.",
    price: "₹4000",
  },
];

const Packages = () => (
  <div className="min-h-screen bg-black text-white py-12 px-4 md:px-20">
    <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-8 text-center">Cab Packages</h1>
    <div className="flex flex-wrap justify-center gap-8">
      {packages.map((pkg) => (
        <div key={pkg.name} className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-xs p-6 flex flex-col items-center">
          <h2 className="text-xl font-bold text-yellow-300 mb-2">{pkg.name}</h2>
          <p className="text-gray-200 mb-4 text-center">{pkg.desc}</p>
          <div className="text-2xl font-bold text-yellow-400 mb-4">{pkg.price}</div>
          <a href="tel:+91-966-961-0726">
            <button className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition">Book Now</button>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Packages;