import { User, CheckCircle2, Server, Database, Cloud, Cpu } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 relative border-t border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<User size={20} />}
          title="About Me"
          subtitle="Engineering philosophy, backend focus, and full-stack development journey."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="space-y-5 text-slate-400 text-base leading-relaxed">
            {portfolioConfig.about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300/90">
                {p}
              </p>
            ))}

            {/* Core Competency Highlights */}
            <div className="pt-4">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Primary Areas of Practice
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {portfolioConfig.about.focusAreas.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/70 border border-slate-800/80 rounded-xl p-3 hover:border-cyan-500/30 transition-colors"
                  >
                    <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 2x2 Highlight Metric Cards matching reference */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {portfolioConfig.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20 group"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-cyan-400 font-mono tracking-tight group-hover:scale-105 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-white font-semibold text-sm mt-2">{stat.label}</p>
                  {stat.description && (
                    <p className="text-slate-400 text-xs mt-1 leading-snug">{stat.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Architecture Focus Callout Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <h4 className="text-white font-semibold text-sm mb-2 flex items-center justify-between">
                <span>Production Mindset</span>
                <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded-md bg-cyan-400/10 border border-cyan-400/20">
                  Reliability First
                </span>
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                "Writing code is only 30% of engineering; the other 70% is designing for idempotency, handling network partition failures, query plan optimization, and clean observability."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                  <Server size={11} className="text-cyan-400" /> Scalable APIs
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                  <Cloud size={11} className="text-cyan-400" /> AWS Serverless
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                  <Database size={11} className="text-cyan-400" /> PostgreSQL
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                  <Cpu size={11} className="text-cyan-400" /> TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
