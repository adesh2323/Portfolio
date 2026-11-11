import { Compass, CheckCircle2 } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';

export const EngineeringHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-24 bg-slate-900/50 relative border-t border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<Compass size={20} />}
          title="Engineering Philosophy & Architecture"
          subtitle="Concrete principles for evaluating trade-offs, designing resilient APIs, and safeguarding production data."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.engineeringHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/35 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-400/10 border border-cyan-400/20">
                    {highlight.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {highlight.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
                  {highlight.summary}
                </p>
              </div>

              {/* Concrete Principles / Guardrails */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                  Key Practices:
                </span>
                {highlight.principles.map((principle, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={13} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-snug">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
