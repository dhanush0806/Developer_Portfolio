import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
import heroImage from "../assets/hero.png";

export const HeroSection = ({ heroVisible, scrollTo }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center pt-2 sm:pt-6 pb-12 px-4 sm:px-6 relative -mt-4 sm:-mt-6"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Round Profile Photo + View Work / Contact + Social Icons */}
        <div
          className={`lg:col-span-5 flex flex-col items-center space-y-6 transition-all duration-1000 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Round Profile Picture */}
          <div className="relative group">
            {/* Ambient Cyan Glow */}
            <div className="absolute inset-0 bg-cyan-500/25 rounded-full blur-2xl group-hover:bg-cyan-400/35 transition-all duration-500 animate-pulse pointer-events-none -z-10" />

            {/* Circular Profile Frame */}
            <div className="relative w-60 h-60 sm:w-68 sm:h-68 md:w-76 md:h-76 rounded-full overflow-hidden border-4 border-cyan-500/40 bg-slate-900 shadow-[0_0_35px_rgba(6,182,212,0.25)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400">
              {!imgError ? (
                <img
                  src={heroImage}
                  alt="Dhanush K"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500 text-4xl font-bold font-mono">
                  DK
                </div>
              )}

              {/* Bottom subtle dark vignette */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Name Tag at bottom of circle */}
              <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                <span className="px-3.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800/80 text-xs font-mono text-cyan-400 font-semibold shadow-md">
                  Dhanush K
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons Directly Below Image */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group tracking-wide cursor-pointer text-xs sm:text-sm"
            >
              <span>View Work</span>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 text-xs sm:text-sm tracking-wide cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social Media Icons Directly Below Buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/dhanush0806"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              href="mailto:dhanushskms11@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              aria-label="Email"
            >
              <Email size={19} />
            </a>
          </div>
        </div>

        {/* Right Column: Title, Intro & Core Stack */}
        <div
          className={`lg:col-span-7 space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                Digital Reality.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl leading-[1.8] font-light">
              I'm a Computer Science graduate passionate about building modern web applications, writing clean code, and creating useful digital solutions.
            </p>
          </div>

          {/* Core Stack Strip */}
          <div className="pt-2">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2.5">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React.js", "Node.js", "PostgreSQL", "MySQL", "REST APIs"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
