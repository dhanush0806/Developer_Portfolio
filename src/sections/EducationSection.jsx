import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        <SectionHeader title="Education" icon={<GraduationCap size={26} />} />

        <div className="relative border-l-2 border-slate-800 ml-2 sm:ml-4 md:ml-6 space-y-10 sm:space-y-12 pb-4">

          <TimelineItem
            date="2022 - 2026"
            title="B.E. Computer Science & Engineering"
            subtitle="Gnanamani College of Technology, Namakkal"
            description="Graduated with a CGPA of 7.508."
            isActive={true}
            delay={100}
          />

          <TimelineItem
            date="2020 - 2022"
            title="12th Standard"
            subtitle="Shree Kalaimagal Matric Higher Secondary School"
            description="Completed higher secondary education with 75% marks."
            delay={200}
          />

          <TimelineItem
            date="2019 - 2020"
            title="10th Standard"
            subtitle="Thiru Vi Ka High School"
            description="Completed secondary education with 85% marks."
            delay={300}
          />

        </div>
      </div>
    </section>
  );
};
