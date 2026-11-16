import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-900/30 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <SectionHeader title="Work Experience" icon={<Briefcase size={26} />} />
        
        <div className="relative border-l-2 border-slate-800 ml-2 sm:ml-4 md:ml-6 space-y-10 sm:space-y-12 pb-4">
          <TimelineItem
            date="Jul 2025 – Aug 2025"
            title="Java Fullstack Developer Intern"
            subtitle="Media Wave Technologies"
            description="Gained practical exposure to Java full-stack development and strengthened my understanding of backend development concepts."
            isActive={true}
            delay={100}
          />
          <TimelineItem
            date="Jan 2025 – Apr 2025"
            title="Python Developer Intern"
            subtitle="Cybernaut Edu-Tech"
            description="Practiced Python programming, explored core programming concepts, and strengthened problem-solving skills through practical tasks."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};
