import React from 'react';
import { FaHome, FaCode, FaMoon, FaUser, FaTools, FaLaptopCode, FaBriefcase, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className="
      sticky top-0 z-50 
      mt-0 rounded-xl  {/* Kept your mt-0 change */ }
      p-4 text-white
      bg-slate-900/70 
      backdrop-blur-lg 
      ring-1 ring-white/10
    ">
      
      <div className="flex justify-between items-center">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-2">
          <FaCode size={24} className="text-lime-400" />
          {/* We split "Pradeep Behera" into two spans to apply different colors */}
          <span className="text-xl font-bold text-slate-100">
            Pradeep{" "}
            {/* This span uses an arbitrary value for your specific dark blue */}
            <span className="text-slate-100">
              Behera
            </span>
          </span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center gap-6">

          {/* HERE ARE THE CHANGES:
            1. REMOVED the hard-coded 'active' class from className.
            2. ADDED back spy={true} and activeClass="active".
            3. Changed 'offset' to -100 to match the other sections.
          */}
          <Link 
            to="home" spy={true} smooth={true} offset={-100} duration={500} 
            activeClass="active"
            className="nav-link text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-1 relative group cursor-pointer"
          >
           <FaHome size={20} /> Home
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lime-400 
                             transform scale-x-0 group-hover:scale-x-100 origin-center
                             transition-transform duration-300 ease-out"></span>
          </Link>

          {/* Ensure ALL other links also have spy={true} and activeClass="active" */}
          <Link 
            to="about" spy={true} smooth={true} offset={-100} duration={500} 
            activeClass="active"
            className="nav-link text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-2 relative group cursor-pointer"
          >
            <FaUser size={20} /> About
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lime-400 
                             transform scale-x-0 group-hover:scale-x-100 origin-center
                             transition-transform duration-300 ease-out"></span>
          </Link>

          <Link 
            to="projects" spy={true} smooth={true} offset={-100} duration={500} 
            activeClass="active"
            className="nav-link text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-2 relative group cursor-pointer"
          >
            <FaLaptopCode size={20} /> Projects
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lime-400 
                             transform scale-x-0 group-hover:scale-x-100 origin-center
                             transition-transform duration-300 ease-out"></span>
          </Link>

          <Link 
            to="experience" spy={true} smooth={true} offset={-100} duration={500} 
            activeClass="active"
            className="nav-link text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-2 relative group cursor-pointer"
          >
            <FaBriefcase size={20} /> Experience
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lime-400 
                             transform scale-x-0 group-hover:scale-x-100 origin-center
                             transition-transform duration-300 ease-out"></span>
          </Link>

          <Link 
            to="contact" spy={true} smooth={true} offset={-100} duration={500} 
            activeClass="active"
            className="nav-link text-slate-300 hover:text-lime-400 transition-colors flex items-center gap-2 relative group cursor-pointer"
          >
            <FaRegCommentDots size={20} /> Contact
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-lime-400 
                             transform scale-x-0 group-hover:scale-x-100 origin-center
                             transition-transform duration-300 ease-out"></span>
          </Link>
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