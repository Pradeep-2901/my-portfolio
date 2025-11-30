import React from 'react';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiTypescript, 
  SiPostman, SiC, SiHtml5, SiCss3, SiJavascript, SiMysql, SiPostgresql, 
  SiCplusplus, SiGithub, SiDocker 
} from 'react-icons/si';
import { FaJava, FaPython, FaGitAlt } from 'react-icons/fa';
// CHANGED: Importing VS Code icon from 'vsc' pack instead of 'si' to fix the error
import { VscVscode } from 'react-icons/vsc';

// ROW 1: Full Stack Web (Scrolls Left)
const webStack = [
  { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
];

// ROW 2: Languages & Tools (Scrolls Right)
const toolsStack = [
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
  { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  // CHANGED: Using the new icon component here
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
];

// Duplicate lists for seamless infinite scrolling
const infiniteWeb = [...webStack, ...webStack];
const infiniteTools = [...toolsStack, ...toolsStack];

const ExpertArea: React.FC = () => {
  return (
    <div className="h-full flex-1 bg-slate-900 rounded-3xl p-6 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col justify-center">
      
      {/* Header */}
      <h3 className="text-2xl font-bold text-slate-100 mb-8 relative z-10">
        My Expert Area
      </h3>

      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[size:20px_20px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>

      {/* === SCROLLING CONTENT === */}
      <div className="flex flex-col gap-8 relative z-10">
        
        {/* ROW 1: Scrolling Left */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 w-max animate-scroll-left hover:[animation-play-state:paused]">
            {infiniteWeb.map((tech, index) => (
              <div key={`web-${index}`} className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 shrink-0 min-w-[100px]">
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-semibold text-slate-300 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 w-max animate-scroll-right hover:[animation-play-state:paused]">
            {infiniteTools.map((tech, index) => (
              <div key={`tool-${index}`} className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 shrink-0 min-w-[100px]">
                <span className="text-3xl">{tech.icon}</span>
                <span className="font-semibold text-slate-300 text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExpertArea;