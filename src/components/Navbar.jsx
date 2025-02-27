import React from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
      <img className='mx-2 w-14 h-14 rounded-full object-cover' src={logo} alt="logo" />

      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
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
