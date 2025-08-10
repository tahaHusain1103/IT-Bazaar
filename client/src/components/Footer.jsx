import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
     <footer className=" bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Customize and Print Your Phone Back Case With Your Choice.
          </h2>
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <p>IT-Bazaar,Kamani Gate,Jaora,Madhya Pradesh,India</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-xl">✉️</span>
            <p>support@IT-Bazaar</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex gap-6 text-2xl mb-4 md:mb-0">
          <Link to="https://www.instagram.com/itbazaarjaora/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaInstagram />
          </Link>
          <Link to="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaWhatsapp />
          </Link>
          <Link to="mailto:" className="hover:text-white">
            <FaEnvelope />
          </Link>
          <Link to="tel:+91-8819995252" className="hover:text-white">
            <FaPhone />
          </Link>
        </div>
        <div>© Copyright 2021, All Rights Reserved</div>
      </div>
    </footer>
   
  );
};

export default Footer;
