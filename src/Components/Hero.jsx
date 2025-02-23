
import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
// import heroImage from '/heroImage.svg'
import animationData from "../assets/hero.json"
import Lottie from 'react-lottie';
const Hero = () => {
  // const heroImage = "/hero.json"; // Directly use the public path
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="hero-container">
      
      <div className="relative flex items-center justify-between h-screen bg-gradient-to-r overflow-hidden px-8">
        {/* Animated Background Text (Moved Up) */}
        <motion.div
          className="absolute text-9xl font-bold text-white opacity-10 left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          
        </motion.div>

        {/* Left Side Content */}
        <div className="relative z-10 text-left text-white w-1/2 leading-tight">
  <span className="block text-[3rem] font-semibold leading-tight">I am Jayadeep</span>
  <span className="block text-[4.5rem] font-bold text-purple-400 mt-2 leading-tight">
    Full Stack Web Developer
  </span>
  <span className="block text-xl mt-4 text-gray-300">
    I break down complex user experience problems to create integrity-focused
    solutions that connect billions of people.
  </span>
  <div className="flex items-center gap-4 mt-5">
      {/* Download CV Button */}
      <button className="flex items-center gap-2 border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition">
        Download CV <HiDownload />
      </button>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="https://example.com" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="https://example.com" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
          <FaLinkedinIn />
        </a>
        <a href="https://example.com" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
          <FaDribbble />
        </a>
        <a href="https://example.com" className="border-2 border-purple-500 p-3 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white transition">
          <FaGithub />
        </a>
      </div>
    </div>

</div>


        {/* Right Side Image */}
        <div className="w-1/2 flex justify-center relative z-10">
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 text-white py-10 exp">
  {/* Stat Item */}
  {/* <div className="text-center flex flex-col">
    <span className="text-6xl font-bold">14</span>
    <p className="text-lg text-gray-400">Years of Experience</p>
  </div> */}

  <div className="text-center flex flex-col ml-20">
    <span className="text-6xl font-bold">50+</span>
    <p className="text-lg text-gray-400">Projects Completed</p>
  </div>

  <div className="text-center flex flex-col ml-20">
    <span className="text-6xl font-bold">1.5K</span>
    <p className="text-lg text-gray-400">Happy Clients</p>
  </div>

  <div className="text-center flex flex-col ml-20">
    <span className="text-6xl font-bold">14</span>
    <p className="text-lg text-gray-400">Years of Experience</p>
  </div>
</div>

    </div>
  );
};

export default Hero;
