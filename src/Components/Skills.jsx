import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const AnimatedSkillsList = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f19] text-white px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-purple-400 mb-10 text-center">
        Skills
      </h2>

      <motion.ul 
        className="flex flex-wrap justify-center gap-6 max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.li 
            key={index}
            className="flex flex-col items-center justify-center bg-[#6c3fc6] w-24 h-24 md:w-28 md:h-28 rounded-lg shadow-lg transition-transform hover:scale-110 hover:bg-purple-500"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img src={skill.img} alt={skill.name} className="w-10 h-10 md:w-14 md:h-14 object-contain mb-2" />
            <span className="text-xs md:text-sm uppercase font-semibold">{skill.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default AnimatedSkillsList;
