import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { Footer } from './components/Footer';
import { CertificationsSection } from './sections/CertificationsSection';
import { useTypewriter } from './hooks/useTypewriter';
import{ContactSection} from './sections/ContactSection';
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 150);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const codeString = `const developer = {
  name            : "Dhanush K",
  qualification   : "B.E. CSE",
  role            : "Full-Stack Developer",
  experienceLevel : "Fresher",
  workPreference  : "On-Site / Hybrid / Remote",
  employmentType  : "Internship / Full-Time",
  availability    : "Open to Opportunities"
};

developer.initialize();`;

  const typedCode = useTypewriter(codeString, 35, 800);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 font-sans overflow-hidden">
      
      {/* INJECTED CUSTOM CSS FOR ANIMATIONS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite 3s; }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        .reveal-smooth {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-smooth.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />

      {/* Advanced Interactive Background Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.05), transparent 40%)`,
        }}
      />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Animated Ambient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] z-0 h-[40rem] w-[40rem] rounded-full bg-cyan-600/10 blur-[130px] pointer-events-none animate-float"></div>
      <div className="fixed bottom-[-10%] right-[-10%] z-0 h-[40rem] w-[40rem] rounded-full bg-blue-700/10 blur-[130px] pointer-events-none animate-float-delayed"></div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />

      {/* Main Content Sections */}
      <main className="relative z-10 pt-20">
        <HeroSection heroVisible={heroVisible} scrollTo={scrollTo} typedCode={typedCode} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}