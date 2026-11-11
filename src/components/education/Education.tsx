import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/50 relative border-t border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<GraduationCap size={20} />}
          title="Education & Certifications"
          subtitle="Formal academic foundations in Computer Science and ongoing cloud architecture certifications."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {portfolioConfig.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-7 hover:border-cyan-500/35 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                  {edu.isCertification ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      <Award size={12} />
                      Certification
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500">Degree</span>
                  )}
                </div>

                <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-cyan-300 transition-colors tracking-tight">
                  {edu.degree}
                </h3>

                <p className="text-cyan-400/90 text-sm font-medium mt-1.5">
                  {edu.institution}
                </p>

                {edu.location && (
                  <p className="text-slate-400 text-xs flex items-center gap-1.5 mt-1 font-mono">
                    <MapPin size={12} className="text-slate-500" />
                    <span>{edu.location}</span>
                  </p>
                )}

                {edu.description && (
                  <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed pt-3 border-t border-slate-800/80">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

