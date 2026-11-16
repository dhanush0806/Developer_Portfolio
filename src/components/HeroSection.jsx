import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
// PASTE ORIGINAL PROFILE PICTURE IN src/assets/hero.png OR CHANGE PATH
import heroImage from "../assets/hero.png";

export const HeroSection = ({ heroVisible, scrollTo }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Content (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Status Badge */}
          <div
            className={`transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-xs sm:text-sm font-mono text-cyan-400 shadow-lg">
              <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-cyan-500"></span>
              </span>
              Available for internships
            </div>
          </div>

          {/* Title and Intro Paragraph */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm — <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                Dhanush K.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed sm:leading-[1.8] font-light">
              Computer Science graduate passionate about building clean, functional web applications and solving real-world problems. Always curious, adaptable, and eager to learn.
            </p>
          </div>

          {/* Buttons and Socials */}
          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-6 pt-2 sm:pt-4 transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-cyan-500 text-slate-950 text-sm sm:text-base font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group tracking-wide"
            >
              View Work{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            <div className="flex gap-3 sm:gap-5 items-center pl-4 sm:pl-6 border-l border-slate-800">
              <a
                href="https://github.com/dhanush0806"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              {/* PASTE ORIGINAL LINKEDIN LINK HERE */}
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              {/* PASTE ORIGINAL EMAIL LINK HERE */}
              <a
                href="mailto:dhanushskms11@gmail.com"
                className="p-2.5 sm:p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Email size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Elegant Round / Oval Portrait Frame (5 cols on lg) */}
        <div
          className={`lg:col-span-5 flex justify-center items-center transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="relative group">
            
            {/* Ambient Multi-color Glow Ring */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/20 rounded-full blur-2xl group-hover:blur-3xl group-hover:from-cyan-500/45 group-hover:to-blue-500/35 transition-all duration-700"></div>

            {/* Glowing Gradient Border Ring */}
            <div className="relative p-2 rounded-full bg-gradient-to-b from-cyan-500/40 via-slate-800/80 to-slate-900/40 shadow-2xl backdrop-blur-sm">
              
              {/* Circular Photo Container */}
              <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-inner flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={heroImage}
                    alt="Dhanush K - Full-Stack Developer"
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-slate-600 font-mono text-sm">
                    Dhanush K
                  </div>
                )}
              </div>

              {/* Centered Floating Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 shadow-xl flex items-center gap-2.5 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse"></span>
                <span className="text-xs font-mono font-medium text-slate-200">Full-Stack Developer</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
