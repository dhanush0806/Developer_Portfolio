import React from "react";
import { ArrowRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";

export const HeroSection = ({ heroVisible, scrollTo }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative text-center"
    >
      <div
        className={`max-w-4xl mx-auto space-y-6 sm:space-y-8 transition-all duration-1000 ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Giant Centered Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase select-none">
          DHANUSH K
        </h1>

        {/* Roles / Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-medium tracking-wide">
          Full-Stack Developer • Software Engineer • Problem Solver
        </p>

        {/* Status Line */}
        <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-cyan-400/90 uppercase font-semibold">
          OPEN TO OPPORTUNITIES & INTERNSHIPS
        </p>

        {/* CTA Button */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 rounded-full bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group tracking-wide text-sm sm:text-base cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </button>
        </div>

        {/* Minimal Social Links */}
        <div className="pt-6 flex justify-center items-center gap-5">
          <a
            href="https://github.com/dhanush0806"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:dhanushskms11@gmail.com"
            className="p-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Email size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
