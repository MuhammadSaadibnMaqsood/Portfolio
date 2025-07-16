import { ArrowDownRight, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { link: "About", section: "About me" },
    { link: "Skills", section: "skills" },
    { link: "Projects", section: "project" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <header className="relative">
      {/* Main navbar */}
      <nav className="text-white py-5 px-6 mx-auto border-b border-cyan-100 max-w-[1300px] flex items-center justify-between">
        <h1 className="text-2xl">Muhammad Saad</h1>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5">
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
          className="block md:hidden"
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
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-cyan-100 transform transition-all duration-300 ease-in-out ${
            showMenu
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
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
