import React, { useEffect } from 'react'
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

const Contact = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-16">
    <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Contact Us</h1>
    <p className="text-lg text-gray-300 mb-8 max-w-xl text-center">
      Have questions or want to book a ride? Reach out to us!
    </p>
    <div className="bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-md">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold py-3 rounded-full hover:bg-yellow-300 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <div>Email: <a href="mailto:info@nakshcabs.com" className="text-yellow-400">info@nakshcabs.com</a></div>
        <div>Phone: <a href="tel:+1234567890" className="text-yellow-400">+123 456 7890</a></div>
        <div>WhatsApp: <a href="https://wa.me/919669610726" className="text-yellow-400">+91 96696 10726</a></div>
      </div>
    </div>
  </div>
);

export default Contact;