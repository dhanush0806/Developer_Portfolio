import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const TimelineItem = ({ date, title, subtitle, description, isActive = false, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  return (
    <div 
      ref={ref}
      className={`reveal-smooth relative pl-8 md:pl-12 transition-all duration-700 group ${isVisible ? 'visible' : ''}`}
    >
      <div className={`absolute left-[-11px] top-1.5 h-5 w-5 rounded-full border-4 bg-slate-950 transition-all duration-500 ${
        isActive 
          ? 'border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse' 
          : 'border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-400/20 group-hover:scale-125'
      }`}></div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 self-start">
          {date}
        </span>
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>
      <h4 className="text-sm font-medium text-slate-400 mb-3">{subtitle}</h4>
      <p className="text-slate-300 text-sm leading-relaxed font-light">{description}</p>
    </div>
  );
};