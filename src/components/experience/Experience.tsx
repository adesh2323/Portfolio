import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50 relative border-t border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<Briefcase size={20} />}
          title="Professional Experience"
          subtitle="Employment history, technical leadership, and production-tested accomplishments."
        />

        <div className="mt-16 relative">
          {/* Vertical Timeline Spine matching reference */}
          <div className="hidden md:block absolute left-[200px] top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {portfolioConfig.experience.map((exp, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-[200px_1fr] gap-8 items-start group"
              >
                {/* Left Side: Period, Company, Location (Desktop) */}
                <div className="mb-4 md:mb-0 md:text-right md:pr-8">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md border border-cyan-400/20 mb-1.5">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-white font-bold text-base mt-1 flex items-center md:justify-end gap-1.5">
                    <Building2 size={15} className="text-cyan-400 flex-shrink-0" />
                    <span>{exp.company}</span>
                  </p>
                  {exp.location && (
                    <p className="text-slate-400 text-xs flex items-center md:justify-end gap-1 mt-1">
                      <MapPin size={12} className="text-slate-500" />
                      <span>{exp.location}</span>
                    </p>
                  )}
                  {exp.type && (
                    <span className="inline-block text-[11px] font-mono text-slate-500 mt-1">
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Right Side: Timeline Dot & Experience Card */}
                <div className="relative md:pl-8">
                  {/* Glowing Cyan Timeline Node matching reference */}
                  <div className="hidden md:block absolute left-0 top-3 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-slate-950 -translate-x-1/2 shadow-sm shadow-cyan-400/50 group-hover:scale-125 transition-transform duration-200"></div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/30 transition-all duration-300 shadow-xl shadow-black/20 group-hover:-translate-y-0.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
                      <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700/80 self-start sm:self-auto">
                        Backend & Full Stack
                      </span>
                    </div>

                    {/* Accomplishment Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-sm shadow-cyan-400/50"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Stack Tags */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-slate-500 font-mono mr-2">Key Tech:</span>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
