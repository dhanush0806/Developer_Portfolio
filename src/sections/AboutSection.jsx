import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImage from '../assets/hero.png';

export const AboutSection = ({ photoProgress = 0 }) => {
  const [imgError, setImgError] = useState(false);
  const [headerRef, headerVisible] = useScrollReveal(100);
  const [contentRef, contentVisible] = useScrollReveal(200);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // The photo in About section ONLY becomes visible once the flight from Hero has arrived (progress >= 0.92)
  const isPhotoLanded = photoProgress >= 0.92;

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-950/60 border-y border-slate-800/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Header (Matching Reference Image 2) */}
        <div 
          ref={headerRef}
          className={`space-y-3 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-slate-400 uppercase">
            DISCOVER MY STORY
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight uppercase">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-4"></div>
        </div>

        {/* 2-Column Content */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          
          {/* Left Column: Round Photo Target + Name + Role */}
          <div className="lg:col-span-5 text-center flex flex-col items-center">
            <div id="about-photo-target" className="relative group">
              {/* Soft Ambient Glow */}
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-500"></div>

              {/* Circular Avatar Target (Stays empty until the hero photo lands) */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-cyan-500/40 bg-slate-900/80 shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400">
                {/* Photo only appears here once the flight finishes */}
                {!imgError ? (
                  <img
                    src={heroImage}
                    alt="Dhanush K"
                    style={{
                      opacity: isPhotoLanded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500 text-4xl font-bold">
                    DK
                  </div>
                )}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-6 tracking-tight">
              Dhanush K
            </h3>
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-400 uppercase mt-1.5 font-medium">
              COMPUTER SCIENCE GRADUATE
            </p>
          </div>

          {/* Right Column: Sparkle + Bio + 2 Action Pill Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-block p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Sparkles size={24} />
            </div>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-[1.9] font-light">
              I'm a Computer Science graduate passionate about building clean, functional web applications and modern software systems. Focused on robust backend architectures, responsive user interfaces, and writing readable, production-grade code from day one.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Eager to collaborate on impactful engineering projects, solve real-world problems, and continuously grow alongside experienced developers.
            </p>

            {/* 2 CTA Pill Buttons (Matching Reference Image 2) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-full bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group tracking-wide text-xs sm:text-sm uppercase cursor-pointer"
              >
                <span>COLLABORATE</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900/60 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 text-xs sm:text-sm tracking-wide uppercase cursor-pointer"
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
