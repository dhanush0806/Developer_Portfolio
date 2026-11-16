import React from 'react';
import { Code2, Layout, Database, Terminal, Cpu } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCategory } from '../components/SkillCategory';

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <SectionHeader title="Technical Arsenal" icon={<Code2 size={26} />} />
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
    </section>
  );
};
