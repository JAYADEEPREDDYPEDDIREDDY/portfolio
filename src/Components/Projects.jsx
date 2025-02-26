import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";
import project1 from "../assets/project1.png";
import DCME from '../assets/DCME.png'
import { FiArrowUpRight } from "react-icons/fi";
import Restaurant from '../assets/image.png'

const categories = ["All", "Websites","Apps"];

const servicesData = [
 
  {
    image: Restaurant,
    title: "Restaurant",
    description: "A full-stack restaurant website built with React and Node.js, offering seamless online ordering and management.",
    category: "Websites",
  },
  {
    image: DCME,
    title: "Student Data base management App",
    description: "A seamless Flutter-based student database management app for efficient student record tracking and administration.",
    category: "Apps",
  },
  {
    image: project1,
    title: "Project 3",
    description: "This is a description for project 3.",
    category: "Websites",
  },
];

export default function Services() {
  const [active, setActive] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredServices =
    active === "All" ? servicesData : servicesData.filter((s) => s.category === active);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-10 Services-container">
      <h2 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 text-center">
        My Recent Works
      </h2>

      {/* Category Tabs with Animation */}
      <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-4 bg-black p-2 rounded-full w-fit">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActive(category)}
            className={`relative px-4 py-2 text-sm md:text-base rounded-full transition-all text-white 
              ${active === category ? "bg-gradient-to-r from-purple-500 to-purple-700" : "bg-gray-800"}
            `}
          >
            {category}
            {active === category && (
              <motion.div
                
                className="absolute bottom-0 left-0 right-0 h-[2px]  rounded-full"
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Services Grid with Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <AnimatePresence mode="wait">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative bg-black text-white p-4 w-auto h-auto rounded-lg group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg">
  <img
    src={service.image}
    alt={service.title}
    className="w-[900px] h-[350px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
  />
</div>


              {/* Pop-up Box */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-purple-600 p-4 rounded-xl text-white shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{service.title}</h3>
                    <FiArrowUpRight className="text-xl" />
                  </div>
                  <p className="text-sm opacity-90">{service.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
