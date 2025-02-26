import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 nav-bg ${
        isScrolled ? "bg-gray-900 shadow-lg py-3" : "bg-transparent py-4"
      }`}
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
            <li className="hover:text-gray-500 cursor-pointer">
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
          </ul>

          {/* Contact Me Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group cursor-pointer"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Contact Me
            </span>
            <span className="relative invisible">Contact Me</span>
          </Link>
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
            <li className="hover:text-gray-500 cursor-pointer">
              <Link
                to="hero"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <Link
                to="education"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
            </li>
          </ul>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-fuchsia-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-fuchsia-700 transition cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
