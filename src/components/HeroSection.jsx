import React from "react";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
import { CodeEditor } from "./CodeEditor";

export const HeroSection = ({ heroVisible, scrollTo, typedCode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pb-12 px-6"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Profile Picture & Status Badge */}
          <div
            className={`flex flex-col sm:flex-row sm:items-center gap-6 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group cursor-pointer shrink-0">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl group-hover:bg-cyan-400/50 transition-all duration-500 animate-pulse"></div>

              <div className="relative h-24 w-24 rounded-full border-2 border-cyan-500/50 overflow-hidden bg-slate-900 flex items-center justify-center transform group-hover:scale-105 transition-all duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <svg
                  className="h-16 w-16 text-slate-400 mt-4 group-hover:text-cyan-300 transition-colors duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>

              <div className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-[3px] border-slate-950 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            </div>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-sm font-mono text-cyan-400 self-start sm:self-center shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              Available for internships
            </div>
          </div>

          {/* Title and Intro Paragraph */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                Digital Reality.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-[1.8] font-light">
              I'm a Computer Science graduate passionate about building modern
              web applications, writing clean code, and creating useful digital
              solutions.
            </p>
          </div>

          {/* Buttons and Socials */}
          <div
            className={`flex flex-wrap gap-8 pt-4 items-center transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group tracking-wide"
            >
              View Work{" "}
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            <div className="flex gap-5 items-center pl-6 border-l border-slate-800">
              <a
                href="https://github.com/dhanush0806"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Email size={22} />
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
