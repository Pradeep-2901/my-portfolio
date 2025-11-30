import React from 'react';
// 1. REMOVE the old icon imports
// import { FaLaptopCode, FaLeaf } from 'react-icons/fa'; 

// 2. IMPORT YOUR NEW LOGOS
import codingClubLogo from '../assets/coding_club_logo.jpg';
import cgsLogo from '../assets/cgs_logo.jpg';

// Your Data
const experiences = [
  {
    id: 1,
    company: "VISTAS Coding Club",
    role: "Coding Club Co-ordinator",
    period: "Jul 2025 - Present",
    // 3. REPLACE ICON WITH IMAGE TAG
    logo: (
      <img 
        src={codingClubLogo} 
        alt="VISTAS Coding Club" 
        className="w-full h-full object-cover rounded-lg" 
      />
    ),
    bg: "bg-slate-800"
  },
  {
    id: 2,
    company: "CGS Green Sustainergy",
    role: "Software Developer Intern",
    period: "Jul 2025 - Present",
    // 3. REPLACE ICON WITH IMAGE TAG
    logo: (
      <img 
        src={cgsLogo} 
        alt="CGS Green Sustainergy" 
        className="w-full h-full object-cover rounded-lg" 
      />
    ),
    bg: "bg-white" // Changed to white because the logo likely has a white background
  },
];

const infiniteExperiences = [...experiences, ...experiences, ...experiences];

const WorkExperience: React.FC = () => {
  return (
    <a href="#experience" className="block">
      <div className="group bg-slate-900 rounded-3xl p-6 h-64 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col">
        
        {/* Header */}
        <h3 className="text-2xl font-bold text-slate-100 mb-4 z-10 bg-slate-900 relative">
          Work Experience
        </h3>

        {/* Scroll Mask */}
        <div className="absolute inset-x-0 top-[60px] bottom-0 z-0
                        [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          
          {/* Scrolling Container */}
          <div className="animate-vertical-scroll group-hover:[animation-play-state:paused] flex flex-col gap-4">
            {infiniteExperiences.map((exp, index) => (
              <div 
                key={`${exp.id}-${index}`} 
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                {/* Logo Box */}
                {/* overflow-hidden ensures the image doesn't bleed out of the corners */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${exp.bg} border border-white/10 overflow-hidden`}>
                  {exp.logo}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-200 truncate pr-2">
                      {exp.company}
                    </h4>
                    <span className="text-xs text-slate-500 whitespace-nowrap mt-1">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 truncate">
                    {exp.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorkExperience;