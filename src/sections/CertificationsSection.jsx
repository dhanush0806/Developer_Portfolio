import React, { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { SpotlightCard } from "../components/SpotlightCard";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";

// PASTE ORIGINAL CERTIFICATE FILES IN public/certificates/ OR PASTE EXTERNAL LINKS
const certifications = [
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "September 2026",
    type: "Technical Certification",
    // ORIGINAL HACKERRANK LINK
    link: "https://www.hackerrank.com/certificates/22e2298eae22",
  },
  {
    title: "Python Programming",
    // PASTE ORIGINAL ISSUER (e.g. Coursera / Udemy / Infosys Springboard)
    issuer: "Issuing Organization",
    date: "April 2025",
    type: "Image",
    // PASTE ORIGINAL FILE IN public/certificates/python-certificate.jpg OR PASTE LINK
    link: "/certificates/python-certificate.jpg",
  },
  {
    title: "Web Development",
    // PASTE ORIGINAL ISSUER
    issuer: "Issuing Organization",
    date: "June 2025",
    type: "PDF",
    // PASTE ORIGINAL FILE IN public/certificates/web-certificate.pdf OR PASTE LINK
    link: "/certificates/web-certificate.pdf",
  },
  {
    title: "Full Stack Development",
    // PASTE ORIGINAL ISSUER
    issuer: "Issuing Organization",
    date: "October 2025",
    type: "Image",
    // PASTE ORIGINAL FILE IN public/certificates/fullstack-certificate.jpg OR PASTE LINK
    link: "/certificates/fullstack-certificate.jpg",
  },
];

export const CertificationsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const cardsPerPage = 4;
  const totalPages = Math.ceil(certifications.length / cardsPerPage);

  const visibleCertifications = certifications.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section id="certifications" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Certifications"
          icon={<Award size={28} />}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {visibleCertifications.map((cert, index) => (
            <SpotlightCard key={cert.title} delay={index * 100}>
              <div className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Award size={17} />
                  </div>

                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-400">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-xs mt-1.5">
                  {cert.issuer}
                </p>

                <p className="text-[11px] text-slate-500 mt-1">
                  {cert.date}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Certificate →
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-slate-700 text-cyan-400 hover:bg-cyan-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm text-slate-400">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-slate-700 text-cyan-400 hover:bg-cyan-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
