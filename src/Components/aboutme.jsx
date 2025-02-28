import React from "react";
import animationData from "../assets/about.json";
import Lottie from "react-lottie";

const AboutMe = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-[#0b0f19]">
      {/* Lottie Animation */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Lottie
          options={defaultOptions}
          className="hidden md:block w-[400px] h-[400px] md:w-[400px] md:h-[400px]"
        />
      </div>

      {/* About Me Content */}
      <div className="w-full md:w-2/3 mt-8 md:mt-0 text-left  ml-10">
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-sky-400">Me</span>
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          I'm Jayadeep, a full-stack web developer specializing in MERN stack and real-time applications**.  
          I love building scalable applications, optimizing performance, and crafting seamless user experiences. 
          I focus on writing clean, efficient, and maintainable code to solve complex problems.
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          With a strong foundation in React.js, Node.js, MongoDB, and Express.js, I have worked on projects involving real-time chat apps using Socket.IO, role-based admin dashboards, and AI-powered assistants.  
          I also have experience integrating third-party APIs, handling authentication systems, and deploying applications.
        </p>

        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Currently, I'm expanding my expertise in Next.js, TypeScript, Nest.js, and cloud technologies.  
          When I'm not coding, I'm exploring new AI advancements, cybersecurity trends, and open-source contribution.  
          Feel free to connect with me on  
          <a href="mailto:jayadeepreddypeddireddy@gmail.com" className="text-sky-400 hover:underline"> Email</a> or check out my work on  
          <a href="https://github.com/JAYADEEPREDDYPEDDIREDDY" className="text-sky-400 hover:underline"> GitHub</a>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
