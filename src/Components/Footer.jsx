import React from "react";
import { FaArrowUp } from "react-icons/fa";
import logon from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#100916] text-white py-8 text-center relative px-4">
      {/* Logo */}
      <div className="flex justify-center">
        <div className="rounded-full p-2">
          <img src={logon} alt="Logo" width={40} height={40} />
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 flex flex-wrap justify-center gap-4 text-lg font-semibold">
        <a href="https://example.com" className="hover:text-purple-400">
          Services
        </a>
        <a href="https://example.com" className="hover:text-purple-400">
          Work
        </a>
        <a href="https://example.com" className="hover:text-purple-400">
          Skills
        </a>
        <a href="https://example.com" className="hover:text-purple-400">
          Experience
        </a>
        <a href="https://example.com" className="hover:text-purple-400">
          Blog
        </a>
      </nav>

      {/* Copyright */}
      <p className="mt-4 text-sm text-purple-400">
        © 2024 All Rights Reserved by <span className="text-purple-500">Jayadeep</span>
      </p>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
