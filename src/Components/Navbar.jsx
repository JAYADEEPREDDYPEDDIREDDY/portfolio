import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logon from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 nav-bg
      ${isScrolled ? "bg-gray-900 shadow-lg py-3" : "bg-transparent py-4"} 
    `}
  >
  

      <div className="flex items-center justify-between px-6">
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none text-white"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4">
          <ul className="flex flex-col items-center text-gray-700 space-y-4">
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">Works</li>
            <li className="hover:text-gray-500 cursor-pointer">Resume</li>
            <li className="hover:text-gray-500 cursor-pointer">Skills</li>
          </ul>
          <a
            href="https://example.com"
            className="mt-6 bg-fuchsia-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-700 transition"
          >
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
