import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const SkillCategory = ({ title, icon, skills, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  return (
    <div 
      ref={ref}
      className={`reveal-smooth p-5 sm:p-7 md:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="p-2 sm:p-2.5 rounded-lg bg-slate-800/50 border border-slate-700 shrink-0">
          {icon}
        </div>
        <h3 className="font-bold text-white text-lg sm:text-xl tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-2.5">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg bg-slate-950 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-sm tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
