import React from 'react';
import { FaCode, FaMoon, FaUser, FaTools, FaLaptopCode, FaBriefcase, FaAward, FaRegCommentDots } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    
    /* I've moved the comments out! The className prop needs to be 
      one continuous string.
    */
    <nav className="
      sticky top-0 z-50 
      mt-8 rounded-xl 
      p-4 text-white
      bg-slate-900/70 
      backdrop-blur-lg 
      ring-1 ring-white/10
    ">
      
      {/* Main container inside nav */}
      <div className="flex justify-between items-center">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <FaCode size={24} className="text-lime-400" />
          <span className="text-xl font-bold text-slate-100">Pradeep Behera</span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-6">
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
          <a href="#contact" className="text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1">
            <FaRegCommentDots size={16} /> Contact
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