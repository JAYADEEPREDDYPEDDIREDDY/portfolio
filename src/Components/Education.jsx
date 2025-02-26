import React from "react";
import { motion } from "framer-motion";
import animationData from "../assets/education.json";
import Lottie from "react-lottie";
const educationData = [
  {
    year: "2023 - Present",
    degree: "BACHELOR DEGREE",
    institution: "Sri Venkateshwara University College of Engineering",
  },
  {
    year: "2019 - 2022",
    degree: "Diploma",
    institution: "Sri Venkateswara Government Polytechnic Tirupathi",
  },
  {
    year: "2008 - 2018",
    degree: "SECONDARY SCHOOL CERTIFICATE",
    institution: "Santiniketan High School",
  },
];
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
const EducationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f19] text-white p-6">
      <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
        Education Timeline
      </h2>

      {/* Container for Image & Timeline */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-4xl">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          
  {/* Lottie Animation */}
  <Lottie options={defaultOptions} className=" hidden md:block w-[400px] h-[400px] md:w-[400px] md:h-[400px]" />
  
  {/* Image (Visible only on Desktop) */}
 

        </motion.div>

        {/* Right Side - Timeline */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1f2b] border-l-4 border-teal-400 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <span className="text-teal-400 font-bold">{edu.year}</span>
              <h3 className="text-lg font-semibold mt-1">{edu.degree}</h3>
              <p className="text-sm opacity-80">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
