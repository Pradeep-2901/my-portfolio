import React from 'react';
import { FaLaptopCode, FaLeaf } from 'react-icons/fa'; // Icons for the logos

// Your Data
const experiences = [
  {
    id: 1,
    company: "VISTAS Coding Club",
    role: "Coding Club Co-ordinator",
    period: "Jul 2025 - Present",
    logo: <FaLaptopCode size={24} className="text-lime-400" />,
    bg: "bg-slate-800"
  },
  {
    id: 2,
    company: "CGS Green Sustainergy",
    role: "Software Developer Intern",
    period: "Jul 2025 - Present",
    logo: <FaLeaf size={24} className="text-green-500" />,
    bg: "bg-slate-800"
  },
];

// We duplicate the data 3 times to ensure smooth scrolling for the infinite loop
const infiniteExperiences = [...experiences, ...experiences, ...experiences];

const WorkExperience: React.FC = () => {
  return (
    <a href="#experience" className="block group">
      <div className="bg-slate-900 rounded-3xl p-8 h-64 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col">
        
        {/* Header */}
        <h3 className="text-2xl font-bold text-slate-100 mb-6 z-10 bg-slate-900 relative">
          Work Experience
        </h3>

        {/* Scroll Mask (Fades out top and bottom for smooth look) */}
        <div className="absolute inset-x-0 top-[80px] bottom-0 z-0
                        [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          
          {/* Scrolling Container */}
          <div className="animate-vertical-scroll group-hover:paused flex flex-col gap-4">
            {infiniteExperiences.map((exp, index) => (
              <div 
                key={`${exp.id}-${index}`} 
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                {/* 1. Logo Box */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${exp.bg} border border-white/10`}>
                  {exp.logo}
                </div>

                {/* 2. Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-200 truncate pr-2">
                      {exp.company}
                    </h4>
                    {/* 4. Timeline (Right aligned) */}
                    <span className="text-xs text-slate-500 whitespace-nowrap mt-1">
                      {exp.period}
                    </span>
                  </div>
                  {/* 3. Role */}
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