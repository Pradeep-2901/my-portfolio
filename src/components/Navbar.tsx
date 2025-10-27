import React from 'react';
// We'll add new icons here for the next step!
import { FaCode, FaMoon, FaUser, FaTools, FaLaptopCode, FaBriefcase, FaAward } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 left-0 p-4 bg-slate-900 text-white border-b border-slate-700 z-50">
      <div className="container mx-auto flex justify-between items-center max-w-7xl"> {/* Added max-w-7xl and mx-auto */}
        
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <FaCode size={24} className="text-lime-400" />
          <span className="text-xl font-bold text-slate-100">Pradeep Behera</span>
        </div>

        {/* Center: Links (NOW WITH MORE LINKS & ICONS) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Note: DevPatel's Home is text, others are icons. We'll add icons for the others. */}
          <a href="#home" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            Home
          </a>
          <a href="#about" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaUser size={16} /> About
          </a>
          <a href="#services" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaTools size={16} /> Services
          </a>
          <a href="#projects" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaLaptopCode size={16} /> Projects
          </a>
          <a href="#experience" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaBriefcase size={16} /> Experience
          </a>
          <a href="#achievements" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaAward size={16} /> Achievements
          </a>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          <button className="text-slate-300 hover:text-lime-400 transition-colors">
            <FaMoon size={20} />
          </button>
          <button className="bg-lime-400 text-slate-900 font-bold px-4 py-1 rounded
                             hover:bg-lime-300 transition-colors">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;