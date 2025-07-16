import { ArrowDownRight, Menu } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { link: "About", section: "About me" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "project" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Main navbar */}
      <nav
        className={`py-4 px-6 mx-autow-full flex items-center justify-between sm:justify-around md:justify-around border-b border-cyan-100 transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 backdrop-blur-md shadow-md text-black"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl text-white">Muhammad Saad</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5 text-white">
          {links.map((link, index) => (
            <li key={index} className="text-sm group">
              <a href="#" className="hover:text-cyan-300 transition">
                {link.link}
              </a>
              <div className="w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full"></div>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="block md:hidden text-white"
        >
          <Menu size={28} />
        </button>

        {/* Desktop 'Hire me' button */}
        <button className="hidden md:flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 cursor-pointer hover:shadow-[0_4px_6px_rgba(0,0,0,0.5)] hover:scale-105 transition">
          Hire me <ArrowDownRight className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {showMenu && (
        <div
          className="md:hidden absolute z-30 top-full left-0 w-full bg-white border-t border-cyan-100 transition-all duration-300 ease-in-out"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {links.map((link, index) => (
              <li key={index} className="text-sm group">
                <a href="#" className="hover:text-cyan-300 transition">
                  {link.link}
                </a>
                <div className="w-0 h-0.5 bg-cyan-600 transition-all duration-200 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
