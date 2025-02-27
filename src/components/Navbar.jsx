import React from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between px-6 sm:px-8 lg:px-18 py-4 sm:py-6'>
      {/* Logo Section */}
      <div className='flex items-center'>
        <img className='w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover' src={logo} alt="logo" />
      </div>

      {/* Social Links Section */}
      <div className='flex items-center gap-4 text-xl sm:text-2xl'>
        <a href="https://www.linkedin.com/in/sonukumar7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-all duration-200" />
        </a>
        <a href="https://github.com/sonuk-07" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-all duration-200" />
        </a>
        <a href="https://www.instagram.com/sonu._.jaiswal/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-all duration-200" />
        </a>
        <a href="https://x.com/SonuKjais" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="hover:text-blue-400 transition-all duration-200" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
