import React from 'react';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <SectionHeader title="Featured Projects" icon={<Briefcase size={26} />} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. AssetTrack */}
          {/* PASTE ORIGINAL GITHUB & DEMO LINKS HERE */}
          <ProjectCard 
            title="AssetTrack"
            description="An enterprise asset management system for tracking IT equipment, managing employee assignments, monitoring maintenance, and maintaining asset lifecycle records."
            tags={['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL']}
            github="https://github.com/dhanush0806/AssetTrack"
            demo="#" 
            delay={100}
          />
          
          {/* 2. BillFlow */}
          {/* PASTE ORIGINAL GITHUB & DEMO LINKS HERE */}
          <ProjectCard 
            title="BillFlow"
            description="A grocery retail billing and inventory management system for handling product sales, generating invoices, managing stock, and monitoring store performance."
            tags={['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL']}
            github="https://github.com/dhanush0806/BillFlow"
            demo="#" 
            delay={200}
          />
          
          {/* 3. E-Commerce */}
          {/* PASTE ORIGINAL GITHUB & DEMO LINKS HERE */}
          <ProjectCard 
            title="E-Commerce"
            description="A full-stack e-commerce platform that provides an online shopping experience with product browsing, shopping cart management, and order processing."
            tags={['React', 'TypeScript', 'Node.js', 'Express.js', 'MySQL']}
            github="https://github.com/dhanush0806/E-Commerce"
            demo="#" 
            delay={300}
          />

          {/* 4. SpendWise */}
          {/* PASTE ORIGINAL GITHUB & DEMO LINKS HERE */}
          <ProjectCard 
            title="SpendWise"
            description="A personal expense management system for tracking income, monitoring daily expenses, managing budgets, and visualizing financial spending patterns."
            tags={['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL']}
            github="https://github.com/dhanush0806/SpendWise"
            demo="#" 
            delay={400}
          />

          {/* 5. Developer Portfolio */}
          {/* PASTE ORIGINAL GITHUB & DEMO LINKS HERE */}
          <ProjectCard 
            title="Developer Portfolio"
            description="A personal developer portfolio showcasing my projects, technical skills, and background through an interactive and responsive web experience."
            tags={['React', 'JavaScript', 'Tailwind CSS']}
            github="https://github.com/dhanush0806/Developer_Portfolio"
            demo="#" 
            delay={500}
          />

        </div>
      </div>
    </section>
  );
};
