import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";

const skills = [
  {
    skill: "HTML",
    icon: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    skill: "Javascript",
    icon: <FaNodeJs />,
  },
  {
    skill: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    skill: "React",
    icon: <FaCss3Alt />,
  },
  {
    skill: "Node.js",
    icon: <FaNode />,
  },
  {
    skill: "Express.js",
    icon: <SiExpress />,
  },
  {
    skill: "Mongodb",
    icon: <SiMongodb />,
  },
  {
    skill: "SQL",
    icon: <TbSql />,
  },
];

const AboutMe = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-white to-cyan-50 w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-blue-800 text-3xl md:text-5xl font-extrabold tracking-wide text-center md:text-left">
            About Me
          </h1>

          <p className="text-gray-700 leading-relaxed">
            My name is <span className="font-semibold">Muhammad Saad</span>. I’m
            an undergraduate Software Engineering student with expertise in MERN
            stack development. I love building modern, responsive web
            applications using MongoDB, SQL, Express.js, React, and Node.js.
            Currently pursuing my degree while delivering clean, efficient code
            and continuously learning new technologies to solve real-world
            problems. I have completed several full-stack projects to enhance my
            skills and am looking for opportunities to apply my knowledge in
            industry.
          </p>

          <button
            className="
           bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-cyan-400 hover:to-blue-700
            shadow-lg shadow-cyan-800/50
            rounded-full 
            px-6 py-2 text-lg font-semibold text-white
            transition-all duration-300 ease-in-out
            ml-auto md:ml-0 block
          "
          >
            Latest Projects
          </button>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* BACKGROUND SHADOW BOX */}
            <div className="absolute -inset-4 md:-inset-6 bg-cyan-900 opacity-10 rounded-lg blur-xl z-0"></div>

            {/* IMAGE */}
            <img
              className="relative z-10 w-full max-w-xs md:max-w-lg rounded-lg shadow-lg object-cover"
              src="https://media.istockphoto.com/id/2170578930/photo/about-me.jpg?s=612x612&w=0&k=20&c=rLsmKZUGN35N0u6me1QDbVi6q6ewvncCRhEprrXJe98="
              alt="About Me"
            />
          </div>
        </motion.div>
      </div>

      {/* NOTE SECTION */}
      <motion.div
      id="skills"
        className="max-w-4xl mx-auto px-4 py-12 space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-blue-800 text-3xl md:text-4xl font-extrabold tracking-wide text-center md:text-left">
          Skills:
        </h2>
        <p className="text-gray-700 leading-relaxed">
          I not only learn these skills—I’ve mastered them. I’ve built many
          projects using the MERN stack that you can see on my GitHub. Although
          I am a full-stack developer, I especially enjoy working on backend
          logic. In short, I prefer building robust functionality over just the
          UI.
        </p>
      </motion.div>

      <div className="m-auto mx-0 sm:mx-0 md:mx-20 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-6 py-12 px-4">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.2 }}
            className="flex flex-col hover:text-green-700 items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div className="text-5xl ">{item.icon}</div>
            <p className="mt-2 text-sm font-medium">{item.skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
