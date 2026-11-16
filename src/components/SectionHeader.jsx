import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const SectionHeader = ({ title, icon, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  return (
    <div 
      ref={ref} 
      className={`reveal-smooth flex items-center gap-3.5 sm:gap-5 ${isVisible ? 'visible' : ''}`}
    >
      <div className="p-2.5 sm:p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] shrink-0">
        {icon}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  );
};
