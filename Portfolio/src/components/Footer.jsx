import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import {Link} from 'react-scroll'

const Footer = () => {
  const [hovered, setHovered] = useState(null);

  const socialLinks = [
    { name: "Github", icon: Github, href: "https://github.com/MuhammadSaadibnMaqsood" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-saad-198567355/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/your-profile",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50 to-white text-blue-900 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-cyan-600">Muhammad Saad</h2>
          <p className="mt-2 text-sm">
            MERN Full Stack Developer | Undergraduate Software Engineer <br />
            Passionate about crafting scalable and modern web applications.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {["About", "Skills", "Projects", "Contact"].map((item, idx) => (
            <Link
              key={idx}
                to={item.toLocaleLowerCase()}
                smooth={true}
                duration={500}
              className="hover:text-cyan-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center md:justify-end items-center gap-6 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {socialLinks.map(({ name, icon: Icon, href }, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-cyan-500 transition"
              >
                <Icon className="w-6 h-6 cursor-pointer" />
              </a>
              {hovered === name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white border border-cyan-500 text-xs text-black rounded-full shadow"
                >
                  {name}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-600 mt-8">
        &copy; {new Date().getFullYear()} Muhammad Saad. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
