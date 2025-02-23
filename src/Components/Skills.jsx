import React from "react";
import "./Skills.css";
import jsIcon from "../assets/logo.png";
// Import skill icons (use actual icons or URLs)
// import jsIcon from "../assets/js.png";
// import tsIcon from "../assets/ts.png";
// import reactIcon from "../assets/react.png";
// import nextIcon from "../assets/next.png";
// import nodeIcon from "../assets/node.png";
// import expressIcon from "../assets/express.png";
// import nestIcon from "../assets/nest.png";
// import socketIcon from "../assets/socket.png";
// import postgresIcon from "../assets/postgres.png";
// import mongoIcon from "../assets/mongo.png";
// import sassIcon from "../assets/sass.png";
// import tailwindIcon from "../assets/tailwind.png";
// import figmaIcon from "../assets/figma.png";
// import cypressIcon from "../assets/cypress.png";
// import storybookIcon from "../assets/storybook.png";
// import gitIcon from "../assets/git.png";

// Skill Data
const skills = [
  { name: "Javascript", icon: jsIcon },
  { name: "Typescript", icon: jsIcon },
  { name: "React", icon: jsIcon },
  { name: "Next.js", icon: jsIcon },
  { name: "Node.js", icon: jsIcon },
  { name: "Express.js", icon: jsIcon },
  { name: "Nest.js", icon: jsIcon },
  { name: "Socket.io", icon: jsIcon },
  { name: "PostgreSQL", icon: jsIcon },
  { name: "MongoDB", icon: jsIcon },
  { name: "Sass/Scss", icon: jsIcon },
  { name: "TailwindCSS", icon: jsIcon },

];

export default function Skills() {
  return (
    <div className="skills-section bg-[#0a0a0a] text-white py-20 text-center">
      <h2 className="text-gray-400 text-sm font-semibold tracking-wider uppercase">Skills</h2>
      <p className="text-lg text-gray-300 mt-2">
        The skills, tools, and technologies I am really good at:
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center mt-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 transition-transform duration-300 hover:scale-110"
            />
            <p className="text-gray-300 mt-2 text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
