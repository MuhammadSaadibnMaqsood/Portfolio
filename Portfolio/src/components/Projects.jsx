import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Hotel-Management-System",
    desc: "A full stack web app where you can register hotels, add rooms, book rooms etc.",
    link: "https://hotel-management-system-liard.vercel.app/",
    align: "left",
    image:
      "https://www.bdtask.com/sp/xain/img/xain-best-hotel-management-system-and-hotel-room-booking-software.webp",
  },
  {
    name: "Task Manager",
    desc: "A full stack web app where you can add, delete, edit your tasks and manage your workflow.",
    link: "https://task-manager-frontend20.vercel.app/",
    align: "right",
    image:
      "https://www.ringcentral.com/us/en/blog/wp-content/uploads/2013/07/clickup-task-management-tool.png",
  },
  {
    name: "Chess Game",
    desc: "A full stack web app where you can play chess, supporting multiplayer with spectator mode built with socket.io.",
    link: "https://github.com/MuhammadSaadibnMaqsood/Chess-Game-",
    align: "right",
    image: "https://www.sparkchess.com/res/img/scr16/en/chess-fixed-board.jpg",
  },
  {
    name: "AI Code Reviewer",
    desc: "A full stack web app to identify errors and improvement areas in your code, built using generative AI APIs.",
    link: "https://github.com/MuhammadSaadibnMaqsood/Ai-code-Reviewer",
    align: "right",
    image:
      "https://images.prismic.io/hatica/659f883f7a5e8b1120d56eae_TopAItoolstohelpyouwithcodereviewsin2024-2-.jpg?auto=format%2Ccompress&rect=0%2C0%2C1800%2C1151&w=1200&h=767",
  },
];

const Projects = () => {
  return (
    <div id="projects" className=" text-white w-full">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-12 text-center md:text-left">
          Projects
        </h1>

        <div className="space-y-16">
          {projects.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              key={index}
              className={`flex flex-col md:flex-row ${
                item.align === "right" ? "md:flex-row-reverse" : ""
              } items-center gap-8 md:gap-12 p-4 md:p-6 rounded-xl bg-white/10 border border-blue-800 backdrop-blur-md shadow-md transition hover:scale-[1.02] duration-300`}
            >
              <img
                className="w-full md:w-1/3 h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {item.name}
                </h2>
                <p className="text-gray-300">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition duration-300 shadow-md"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
