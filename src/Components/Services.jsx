
import { useState } from "react";

import "./Services.css";
const categories = ["All", "Apps", "Branding", "Content", "UX/UI"];


export default function Services() {
  // const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState("All");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 Services-container">
      <h2 className="text-6xl font-bold text-purple-400">My Recent Works</h2>
      <div className="flex items-center space-x-4 bg-black p-2 rounded-full w-fit">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`relative px-4 py-2 rounded-full transition-all text-white 
            ${active === category ? "bg-gradient-to-r from-purple-500 to-purple-700" : ""}
          `}
        >
          {category}
        </button>
      ))}
    </div>
         </div>
  );
}
