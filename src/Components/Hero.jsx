import React from "react";
import "./Hero.css";

import {  FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import animationData from "../assets/hero.json";
import Lottie from "react-lottie";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
 
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resume/lab.zip"; // Ensures correct path
    link.download = "lab.zip"; // File name
    link.target = "_blank"; // Opens in new tab if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <div className="hero-container px-6 md:px-12 lg:px-16 mt-12">
      <div className="relative flex flex-col  md:flex-row-reverse items-center justify-between h-auto md:h-screen bg-gradient-to-r overflow-hidden py-10 md:py-0">
        
        {/* Text Above Animation on Mobile */}
        <div className="w-full text-center md:hidden pt-20 text-white">
          <span className="block text-3xl font-semibold leading-tight">I am Jayadeep</span>
          <span className="block text-4xl font-bold text-purple-400 mt-2 leading-tight">
            Full Stack Web Developer
          </span>
        </div>

        {/* Right Side Animation (Appears Below on Mobile) */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 gap-x-4">
  {/* Lottie Animation */}
  <Lottie options={defaultOptions} className=" hidden md:block w-[400px] h-[400px] md:w-[400px] md:h-[400px]" />
  
  {/* Image (Visible only on Desktop) */}
 
</div>

        {/* Left Side Content (Only on Desktop) */}
        <div className="relative z-10 text-center md:text-left text-white w-full md:w-1/2 leading-tight mt-6 md:mt-0">
          {/* Only visible on desktop */}
          <div className="hidden md:block">
            <span className="block text-3xl md:text-4xl font-semibold leading-tight">I am Jayadeep</span>
            <span className="block text-4xl md:text-5xl font-bold text-purple-400 mt-2 leading-tight">
              Full Stack Web Developer
            </span>
          </div>
          
          <span className="block text-base md:text-xl mt-4 text-gray-300">
            I break down complex user experience problems to create integrity-focused
            solutions that connect billions of people.
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-5">
            {/* Download CV Button */}
            <button  onClick={handleDownload} className="flex items-center gap-2 border-2 border-purple-500 text-purple-500 px-4 md:px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition">
              Download CV <HiDownload />
            </button>
            {/* Social Icons */}
            <div className="flex gap-3">
              
              <a href="https://www.linkedin.com/in/peddireddy-jayadeep-reddy-a3014124b/" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/JAYADEEPREDDYPEDDIREDDY" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/_deepu________?igsh=dzVtbHA1YTlyY2Y3" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
                <FaInstagram />
              </a>
              {/* <a href="https://example.com" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
                <FaDribbble />
              </a> */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="flex flex-wrap justify-center items-center gap-10 text-white py-10">
        <div className="text-center flex flex-col">
          <span className="text-4xl md:text-6xl font-bold">50+</span>
          <p className="text-lg text-gray-400">Projects Completed</p>
        </div>
        <div className="text-center flex flex-col">
          <span className="text-4xl md:text-6xl font-bold">1.5K</span>
          <p className="text-lg text-gray-400">Happy Clients</p>
        </div>
        <div className="text-center flex flex-col">
          <span className="text-4xl md:text-6xl font-bold">14</span>
          <p className="text-lg text-gray-400">Years of Experience</p>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
