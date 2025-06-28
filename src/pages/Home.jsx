import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, Users, Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

// Mock images - replace with actual image imports
const heroImages = [
  "/api/placeholder/1200/600",
  "/api/placeholder/1200/600", 
  "/api/placeholder/1200/600"
];

const rides = [
  { 
    img: "/api/placeholder/300/200", 
    name: "Swift Dzire", 
    seats: "4+1", 
    price: 11, 
    features: ["AC", "Music System", "GPS"] 
  },
  { 
    img: "/api/placeholder/300/200", 
    name: "Toyota Etios", 
    seats: "4+1", 
    price: 12, 
    features: ["AC", "Comfortable", "Safe"] 
  },
  { 
    img: "/api/placeholder/300/200", 
    name: "Maruti Ertiga", 
    seats: "6+1", 
    price: 13, 
    features: ["Spacious", "Family Car", "AC"] 
  },
  { 
    img: "/api/placeholder/300/200", 
    name: "Chevrolet Tavera", 
    seats: "8+1", 
    price: 14, 
    features: ["Group Travel", "AC", "Luggage Space"] 
  },
  { 
    img: "/api/placeholder/300/200", 
    name: "Toyota Innova", 
    seats: "7+1", 
    price: 15, 
    features: ["Premium", "Comfortable", "Reliable"] 
  },
  { 
    img: "/api/placeholder/300/200", 
    name: "Innova Crysta", 
    seats: "7+1", 
    price: 18, 
    features: ["Luxury", "Premium Interior", "Smooth Ride"] 
  }
];

const services = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "City Rides",
    description: "Quick and comfortable rides within Indore city limits",
    features: ["24/7 Available", "Real-time Tracking", "Safe Drivers"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Outstation Trips",
    description: "Long-distance travel with experienced drivers",
    features: ["Flexible Timing", "Multiple Stops", "Transparent Pricing"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Airport Transfers",
    description: "Reliable pickups and drops for flights",
    features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance"]
  }
];

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "50,000+", label: "Rides Completed" },
  { number: "24/7", label: "Service Available" },
  { number: "4.9★", label: "Customer Rating" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(prev => ({
          ...prev,
          [entry.target.id]: true
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Premium
                  </span>
                  <br />
                  <span className="text-white">Cab Service</span>
                  <br />
                  <span className="text-2xl lg:text-3xl text-gray-300 font-normal">in Indore</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Experience comfort, safety, and reliability with Naksh Cabs. 
                  Your trusted travel partner for every journey.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/book">
                  <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    Book Now
                    <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:+91-966-961-0726">
                  <button className="flex items-center justify-center space-x-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-3xl rounded-full"></div>
                <img
                  src="/api/placeholder/500/400"
                  alt="Premium Car"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center" data-animate id={`stat-${idx}`}>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="services-header">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-yellow-400/50"
                data-animate
                id={`service-${idx}`}
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Rides Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-animate id="rides-header">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Popular <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Rides</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our fleet of well-maintained, comfortable vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rides.map((ride, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-yellow-400/50"
                data-animate
                id={`ride-${idx}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={ride.img}
                    alt={ride.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    AC Available
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{ride.name}</h3>
                      <p className="text-gray-400">{ride.seats} Seater</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">₹{ride.price}</div>
                      <div className="text-gray-400 text-sm">per km</div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {ride.features.map((feature, featureIdx) => (
                        <span
                          key={featureIdx}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a href="tel:+91-966-961-0726" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call</span>
                      </button>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=919669610726" className="flex-1">
                      <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rides">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                View All Rides
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Ready for Your Next Ride?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Book now and experience the comfort and reliability of Naksh Cabs. 
            Available 24/7 for all your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105">
                Book Your Ride
              </button>
            </Link>
            <a href="tel:+91-966-961-0726">
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-yellow-400 transition-all duration-300">
                Call +91 96696 10726
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;