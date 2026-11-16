import React from 'react';
import { Terminal, Code2, Layout, Database, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCategory } from '../components/SkillCategory';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RevealText = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(delay);
  return (
    <p ref={ref} className={`reveal-smooth text-slate-300 text-base sm:text-lg leading-relaxed sm:leading-[1.8] font-light max-w-3xl ${isVisible ? 'visible' : ''}`}>
      {children}
    </p>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-slate-900/30 border-y border-slate-800/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-20">
          
          {/* Left Column: About Paragraphs */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <SectionHeader title="About Me" icon={<Terminal size={26} />} />
            
            <div className="space-y-5 sm:space-y-6">
              <RevealText delay={100}>
                I'm a Computer Science graduate with a keen interest in full-stack development. I enjoy building responsive web applications, developing efficient solutions, and applying my technical knowledge to real-world challenges.
              </RevealText>
              <RevealText delay={200}>
                As an aspiring developer, I'm eager to begin my professional journey, contribute to meaningful projects, and grow through continuous learning. I'm committed to improving my skills and delivering quality solutions as part of a team.
              </RevealText>
            </div>
          </div>

          {/* Right Column: Skills Grid */}
          <div id="skills" className="lg:col-span-3 space-y-8 sm:space-y-10">
            <SectionHeader title="Technical Arsenal" icon={<Code2 size={26} />} delay={200} />
            
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <SkillCategory 
                title="Frontend" 
                icon={<Layout size={22} className="text-blue-400"/>}
                skills={['HTML','CSS','JavaScript','TypeScript','React.js', 'Angular']}
                delay={100}
              />
              <SkillCategory 
                title="Backend" 
                icon={<Database size={22} className="text-emerald-400"/>}
                skills={['Node.js', 'Express.js','Java', 'Spring Boot', 'Python', 'REST APIs']}
                delay={200}
              />
              <SkillCategory 
                title="Database" 
                icon={<Terminal size={22} className="text-purple-400"/>}
                skills={['PostgreSQL', 'MySQL', 'MongoDB']}
                delay={300}
              />
              <SkillCategory 
                title="Development Tools" 
                icon={<Cpu size={22} className="text-amber-400"/>}
                skills={['Git & GitHub', 'VS Code', 'Postman', 'pgAdmin', 'MySQL Workbench']}
                delay={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
