import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Github, Linkedin, Email } from "./BrandIcons";
import heroImage from "../assets/hero.png";

export const HeroSection = ({ heroVisible, scrollTo, photoProgress = 0 }) => {
  const [imgError, setImgError] = useState(false);
  const [delta, setDelta] = useState({ x: 0, y: 0, isMeasured: false });

  // Dynamically calculate the EXACT center-to-center distance between Hero photo and About circle
  useEffect(() => {
    const measure = () => {
      const heroSlot = document.getElementById("hero-photo-slot");
      const aboutTarget = document.getElementById("about-photo-target");
      if (!heroSlot || !aboutTarget) return;

      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutTarget.getBoundingClientRect();

      // Absolute center coordinates in the page
      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + window.scrollY + heroRect.height / 2;

      const aboutCenterX = aboutRect.left + aboutRect.width / 2;
      const aboutCenterY = aboutRect.top + window.scrollY + aboutRect.height / 2;

      setDelta({
        x: aboutCenterX - heroCenterX,
        y: aboutCenterY - heroCenterY,
        isMeasured: true,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 800);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Ultra-smooth cubic easing curve
  const ease =
    photoProgress < 0.5
      ? 2 * photoProgress * photoProgress
      : 1 - Math.pow(-2 * photoProgress + 2, 2) / 2;

  // Since both are on the left side, the glide is a natural vertical path!
  const translateX = delta.isMeasured ? delta.x * ease : 0;
  const translateY = delta.isMeasured ? delta.y * ease : 0;
  const scale = 1 - ease * 0.32;
  const borderRadius = `${24 + ease * 120}px`;

  // Hide the flying element once landed (AboutSection takes over seamlessly)
  const isLanded = photoProgress >= 0.92;
  const flyingOpacity = isLanded ? 0 : 1;
  const badgeOpacity = Math.max(0, 1 - photoProgress * 2.5);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 relative"
    >
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Photo (Swapped to Left as requested) */}
        <div
          className={`lg:col-span-5 flex justify-center lg:justify-start transition-all duration-1000 delay-200 ${
            heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Static Slot in Hero to anchor initial position */}
          <div
            id="hero-photo-slot"
            className="relative w-full max-w-[340px] sm:max-w-[380px] h-[380px] sm:h-[430px] md:h-[460px]"
          >
            {/* The Animated Flying / Morphing Photo Element */}
            <div
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                borderRadius: borderRadius,
                opacity: flyingOpacity,
                willChange: "transform, border-radius, opacity",
                transition: "opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
              }}
              className="relative w-full h-full p-2.5 bg-slate-900/85 backdrop-blur-xl border-2 border-cyan-500/40 shadow-2xl shadow-cyan-500/15 group z-30 overflow-hidden"
            >
              {/* Inner Picture */}
              <div
                style={{ borderRadius: borderRadius }}
                className="relative w-full h-full overflow-hidden bg-slate-950"
              >
                {!imgError ? (
                  <img
                    src={heroImage}
                    alt="Dhanush K"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-500">
                    <span className="text-4xl font-bold">DK</span>
                  </div>
                )}

                {/* Bottom Vignette */}
                <div
                  style={{ opacity: badgeOpacity }}
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none transition-opacity duration-300"
                ></div>

                {/* Floating Micro Badge on Hero photo (fades out as it morphs into About circle) */}
                <div
                  style={{ opacity: badgeOpacity }}
                  className="absolute bottom-3.5 inset-x-3.5 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/90 shadow-xl flex items-center justify-between pointer-events-none transition-opacity duration-300"
                >
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">Dhanush K</h4>
                    <p className="text-[11px] font-mono text-cyan-400">Full-Stack Developer</p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>B.E. CSE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Background Glow in Hero Slot */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>

          </div>
        </div>

        {/* Right Column: Text & Content (Swapped to Right as requested) */}
        <div
          className={`lg:col-span-7 space-y-6 sm:space-y-7 transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-xs sm:text-sm font-mono text-cyan-400 shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for opportunities
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 animate-gradient-x">
                Dhanush K.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 font-semibold tracking-tight">
              Full-Stack Developer crafting reliable, scalable web systems.
            </p>
          </div>

          {/* Bio text */}
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
            Computer Science graduate passionate about building modern web applications, writing clean code, and creating useful digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group tracking-wide cursor-pointer text-sm sm:text-base"
            >
              <span>View Projects</span>
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-300 text-sm sm:text-base tracking-wide cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="pt-2 flex items-center gap-4">
            <a
              href="https://github.com/dhanush0806"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_PROFILE"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dhanushskms11@gmail.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
              aria-label="Email"
            >
              <Email size={20} />
            </a>
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
                  className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300"
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
