
import React, { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';
import logon from '../assets/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4  sticky top-0 z-50">
      {/* Left Section: Logo & Email */}
      <div className="flex items-center space-x-4">
        <img src={logon} alt="Logo" width={40} height={40} />
        <span className="hidden md:block text-sm md:text-base">jayadeepreddypeddireddy@gmail.com</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Right Section: Navigation Links */}
      <div
        className={`md:flex md:items-center md:space-x-6 absolute md:static top-16 right-0 w-full md:w-auto md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 text-sm md:text-base p-4 md:p-0">
          <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Services</li>
          <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Works</li>
          <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Resume</li>
          <li className="hover:text-gray-400 cursor-pointer py-2 md:py-0">Skills</li>
        </ul>
        <div className="container-eg-btn-4 p-4 md:p-0">
          <a href="https://example.com" className="button button-3">Contact me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
