import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [github, setGithub] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [insta, setInsta] = useState(false);

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
    <div className="bg-gradient-to-b from-white to-cyan-50 py-10 px-4 text-blue-800 grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
      <div className="mx-10">
        <h2 className="text-2xl">Muhammad Saad</h2>
        <p className="">
          A MERN Full stack developer undergraduate in software enginnering
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <a className="pb-3" href="">About</a>
        <a className="pb-3" href="">Skills</a>
        <a className="pb-3" href="">Project</a>
        <a className="pb-3" href="">Contact</a>
      </div>

      <div>
        <motion.div
          className="flex flex-col items-center gap-6 relative mt-4"
          variants={fadeIn}
        >
          {/* Github Icon */}
          <div
            onMouseOver={() => setGithub(true)}
            onMouseOut={() => setGithub(false)}
            className="relative group"
          >
            <a href="#" className="text-black hover:text-cyan-400 transition">
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
            <a href="#" className="text-black  hover:text-cyan-400 transition">
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
            <a href="#" className="text-black hover:text-cyan-400 transition">
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
      </div>
    </div>
  );
};

export default Footer;
