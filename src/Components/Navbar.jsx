import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logon from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 sticky top-0 z-50 shadow-md nav-bg">
      {/* Left Section: Logo & Email */}
      <div className="flex items-center space-x-4">
        <img src={logon} alt="Logo" width={40} height={40} />
        <span className="hidden md:block text-sm md:text-base text-white">
          jayadeepreddypeddireddy@gmail.com
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-fuchsia-50">
          <li className="hover:text-gray-500 cursor-pointer">Services</li>
          <li className="hover:text-gray-500 cursor-pointer">Works</li>
          <li className="hover:text-gray-500 cursor-pointer">Resume</li>
          <li className="hover:text-gray-500 cursor-pointer">Skills</li>
        </ul>
        <a href="https://example.com" className="button button-3">
          Contact Me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center p-4 text-gray-700">
            <li className="hover:text-gray-500 cursor-pointer py-2">Services</li>
            <li className="hover:text-gray-500 cursor-pointer py-2">Works</li>
            <li className="hover:text-gray-500 cursor-pointer py-2">Resume</li>
            <li className="hover:text-gray-500 cursor-pointer py-2">Skills</li>
          </ul>
          <div className="flex justify-center p-4">
            <a href="https://example.com" className="button button-3">
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
