import { Github, Hexagon, Instagram, Linkedin } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export const Hero = () => {
  const [github, setGithub] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [insta, setInsta] = useState(false);

  // Variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="hero" className="">
      <div className="bg-gradient-to-b from-gray-900 to-blue-900 min-h-[100vh] relative ">
        <div className="z-0 w-52 h-96 bg-gradient-to-b from-gray-950  to-blue-800 absolute top-16 rounded-r-full blur-xl animate-pulse"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-16 text-white flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Side */}
          <motion.div
            className="md:w-1/2 w-full flex flex-col items-start justify-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-cyan-400 text-2xl pt-10 md:pt-24 sm:pt-10 md:text-3xl font-semibold tracking-wide hover:scale-110 transition-all duration-300"
              variants={fadeIn}
            >
              FULL STACK WEB DEVELOPER
            </motion.h2>

            <motion.h2
              className="text-3xl md:text-5xl font-bold hover:scale-110 transition-all duration-300"
              variants={fadeIn}
            >
              Muhammad Saad
            </motion.h2>

            <motion.p
              className="text-gray-300 max-w-md leading-relaxed"
              variants={fadeIn}
            >
              I’m an undergraduate Software Engineering student and passionate
              MERN stack developer. I love building modern, responsive web
              applications using MongoDB, Express.js, React, and Node.js.
              Currently pursuing my degree while delivering clean, efficient
              code and continuously learning new technologies to solve
              real-world problems.
            </motion.p>

            {/* Icons + Tooltips */}
            <motion.div
              className="flex items-center gap-6 relative mt-4"
              variants={fadeIn}
            >
              {/* Github Icon */}
              <div
                onMouseOver={() => setGithub(true)}
                onMouseOut={() => setGithub(false)}
                className="relative group"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/MuhammadSaadibnMaqsood"
                  className="text-white hover:text-cyan-400 transition"
                >
                  <Github className="cursor-pointer w-6 h-6" />
                </a>
                {github && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs rounded-full border border-cyan-500"
                  >
                    Github
                  </motion.div>
                )}
              </div>

              {/* Linkedin Icon */}
              <div
                onMouseOver={() => setLinkedin(true)}
                onMouseOut={() => setLinkedin(false)}
                className="relative group"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/muhammad-saad-198567355/"
                  className="text-white hover:text-cyan-400 transition"
                >
                  <Linkedin className="cursor-pointer w-6 h-6" />
                </a>
                {linkedin && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs rounded-full border border-cyan-500"
                  >
                    Linkedin
                  </motion.div>
                )}
              </div>

              {/* Instagram Icon */}
              <div
                onMouseOver={() => setInsta(true)}
                onMouseOut={() => setInsta(false)}
                className="relative group"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/your-profile"
                  className="text-white hover:text-cyan-400 transition"
                >
                  <Instagram className="cursor-pointer w-6 h-6" />
                </a>
                {insta && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs rounded-full border border-cyan-500"
                  >
                    Instagram
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <div className=" sm:pt-0 md:pt-24 md:w-1/2 w-full flex justify-center items-center relative">
            {/* Animated Hexagon with spin */}
            <motion.div
              className="absolute hidden md:bg-block z-0 opacity-25 blur-md drop-shadow-[0_0_30px_cyan]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
            >
              <Hexagon className="text-cyan-700 h-[300px] w-[300px] md:h-[500px] md:w-[500px]" />
            </motion.div>

            {/* Image card with scale-in */}
            <motion.div
              className="relative hover:scale-110 transition-all duration-300 z-10 md:mt-0 sm:-mt-5 bg-white/10 backdrop-blur-md border border-cyan-400 rounded-xl w-80 h-80 flex items-center justify-center shadow-xl overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
            >
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg"
                alt="Web Developer"
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full h-7 bg-transparent text-white hidden sm:hidden md:flex  items-center justify-center ">
          <div className="text-center  w-full"> Quick Learner</div>
          <div className="text-center w-full">Team work</div>
          <div className="text-center  w-full">Problem solver</div>
        </div>

        <div className="mt-0 hidden sm:-mt-16 md:mt-16 sm:flex items-center justify-center">
          <button
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            className="
    bg-blue-600 hover:bg-blue-500
      hover:from-cyan-400 hover:to-cyan-800
      shadow-lg shadow-cyan-800/50
      rounded-full
     
  
      px-6 py-2
      text-lg font-semibold
      text-white
      animate-pulse
      cursor-pointer
      transition-all duration-300 ease-in-out
    "
          >
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};
