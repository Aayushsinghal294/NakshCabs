import React, { useState } from 'react';
import user1 from '/assets/user1.png';
import user2 from '/assets/user2.png';

const testimonials = [
  {
    img: user1,
    name: 'John Doe',
    text: 'Great service! The driver was punctual and the car was clean and comfortable.',
  },
  {
    img: user2,
    name: 'Jane Smith',
    text: 'I had a wonderful experience with Naksh Cabs. Highly recommended!',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="my-20 px-4 md:px-32 relative">
      <div className="overflow-hidden max-w-2xl mx-auto">
        <ul className="flex transition-all duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((t, i) => (
            <li key={i} className="w-full flex-shrink-0 px-2">
              <div className="bg-gray-700 text-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full border-4 border-yellow-400 mb-4" />
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{t.name}</h3>
                <p className="text-center text-gray-200">{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        onClick={prev}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        onClick={next}
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Testimonials;