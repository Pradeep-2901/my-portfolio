import React from 'react';
import ClickSpark from './ClickSpark';
// 1. IMPORT THE ANIMATION LIBRARY
import { TypeAnimation } from 'react-type-animation';
// 2. IMPORT SOCIAL ICONS
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// 3. IMPORT THE WORK EXPERIENCE COMPONENT (This was missing!)
import WorkExperience from './WorkExperience';

import ExpertArea from './ExpertArea';

// UNCOMMENT THIS WHEN READY
import profilePic from '../assets/profile.png';

const Hero: React.FC = () => {
  return (
    <section id="home" className="grid md:grid-cols-12 lg:grid-cols-12 gap-8 py-8 items-stretch">
      
      {/* LEFT COLUMN: Profile Card */}
      <div className="md:col-span-5 lg:col-span-5 
                      rounded-3xl p-8 
                      flex flex-col 
                      shadow-2xl 
                      border border-white/5
                      bg-slate-900
                      relative overflow-hidden"
      >
        
        {/* Background Mesh Texture */}
        <div className="absolute inset-0 z-0 
                        opacity-20 pointer-events-none
                        bg-[repeating-linear-gradient(45deg,#ffffff12_0px,#ffffff12_1px,transparent_1px,transparent_12px),repeating-linear-gradient(-45deg,#ffffff12_0px,#ffffff12_1px,transparent_1px,transparent_12px)]
                        [mask-image:linear-gradient(to_bottom,black_0%,transparent_60%)]">
        </div>

        {/* Image Container (Centered) */}
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full z-10 
                        p-[3px] 
                        bg-gradient-to-tr from-lime-400 via-blue-500 to-purple-600 shadow-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
            <img 
              src={profilePic} 
              alt="Pradeep Behera" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Text Content (Left Aligned) */}
        <div className="flex flex-col items-start text-left z-10 w-full">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight">
            Pradeep <span className="text-lime-400">Behera</span>
            </h2>
            <p className="text-xl text-slate-400 mt-2 font-medium">
            Full-stack Developer
            </p>

            {/* Typewriter Effect */}
            <div className="mt-6 min-h-[100px] text-slate-300 leading-relaxed text-lg font-medium">
              <TypeAnimation
                sequence={[
                  "A passionate developer who thrives on crafting robust, high-performance applications. I specialize in building intuitive user interfaces and scalable backend systems.",
                  1000,
                ]}
                wrapper="p"
                speed={60}
                repeat={0}
                cursor={true}
              />
            </div>

            {/* === NEW MERGED ACTION ROW === */}
            <div className="flex items-center gap-3 mt-8 w-full">
              
              {/* 1. Download CV (Primary Action) */}
              {/* Removed <ClickSpark> wrapper from here */}
              <button className="flex-1 bg-lime-400 text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-lime-300 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">
                  Download CV
              </button>

              {/* 2. GitHub Icon */}
              <a 
                href="https://github.com/Pradeep-2901" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-lime-400 hover:border-lime-400 transition-all"
              >
                <FaGithub size={24} />
              </a>

              {/* 3. LinkedIn Icon */}
              <a 
                href="https://linkedin.com/in/pradeepbehera2901" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-lime-400 hover:border-lime-400 transition-all"
              >
                <FaLinkedin size={24} />
              </a>
            </div>

        </div>
      </div>

      {/* RIGHT COLUMN: Work Experience & Expert Area */}
      <div className="md:col-span-7 lg:col-span-7 flex flex-col gap-6 h-full">
        
       {/* Work Experience (Fixed height) */}
        <div className="shrink-0">
            <WorkExperience />
        </div>
        
        {/* 3. Expert Area (Takes remaining height) */}
        {/* flex-1 ensures this card expands to match the Left Column's bottom */}
        <ExpertArea />


      </div>

    </section>
  );
};

export default Hero;