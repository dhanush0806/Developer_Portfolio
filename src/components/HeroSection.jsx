import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
import { CodeEditor } from "./CodeEditor";
// PASTE ORIGINAL PROFILE PICTURE IN src/assets/hero.png OR CHANGE PATH
import heroImage from "../assets/hero.png";

export const HeroSection = ({ heroVisible, scrollTo, typedCode }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Picture & Status Badge */}
          <div
            className={`flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group cursor-pointer shrink-0">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl group-hover:bg-cyan-400/50 transition-all duration-500 animate-pulse"></div>

              <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-cyan-500/50 overflow-hidden bg-slate-900 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                {!imgError ? (
                  <img
                    src={heroImage}
                    alt="Dhanush K"
                    className="h-full w-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <svg
                    className="h-14 w-14 sm:h-16 sm:w-16 text-slate-400 mt-3 sm:mt-4 group-hover:text-cyan-300 transition-colors duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </div>

              <div className="absolute bottom-1 right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-[3px] border-slate-950 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>

            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-xs sm:text-sm font-mono text-cyan-400 self-start sm:self-center shadow-lg">
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

        {/* Code Editor */}
        <div
          className={`transition-all duration-1000 delay-400 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <CodeEditor typedCode={typedCode} />
        </div>
      </div>
    </section>
  );
};
