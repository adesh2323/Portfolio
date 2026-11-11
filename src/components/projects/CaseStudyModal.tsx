import { useEffect, useRef, Fragment } from 'react';
import {
  X,
  ExternalLink,
  Shield,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Activity,
  Terminal,
  Zap,
} from 'lucide-react';
import type { ProjectCaseStudy } from '../../types';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Body */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 my-8 overflow-hidden z-10 max-h-[90vh] flex flex-col text-slate-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Sticky Modal Header */}
        <div className="flex items-start justify-between p-6 sm:p-7 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                {project.statusBadge}
              </span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">{project.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-sm shadow-cyan-500/20"
              >
                <ExternalLink size={13} />
                <span>Visit Live System</span>
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
              <Terminal size={14} /> Project Overview
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              {project.description}
            </p>
          </div>

          {/* Interactive Architecture Flow Diagram */}
          {project.architectureSteps && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider font-mono flex items-center gap-2">
                  <Layers size={14} /> System Architecture Flow
                </h3>
                <span className="text-[11px] font-mono text-slate-500">
                  Simplified Architectural Representation
                </span>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 overflow-x-auto">
                <div className="flex items-center justify-between gap-3 min-w-[620px]">
                  {project.architectureSteps.map((step, idx) => (
                    <Fragment key={idx}>
                      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-center relative group hover:border-cyan-400/40 transition-colors">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                          <Cpu size={16} />
                        </div>
                        <h4 className="text-white font-semibold text-xs mb-1 font-mono">{step.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight">{step.description}</p>
                      </div>
                      {idx < (project.architectureSteps?.length ?? 0) - 1 && (
                        <div className="text-slate-600 flex-shrink-0 flex items-center">
                          <ArrowRight size={18} className="text-cyan-400/60" />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Problem Statement & Architectural Tradeoffs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Shield size={16} className="text-amber-400" />
                The Engineering Problem
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <Layers size={16} className="text-cyan-400" />
                Constraints & Key Trade-Offs
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                {project.constraintsAndTradeoffs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Decisions */}
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3 font-mono flex items-center gap-2">
              <Zap size={14} /> Key Technical Decisions
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.technologyDecisions.map((decision, idx) => (
                <div key={idx} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-white font-semibold text-xs sm:text-sm mb-1.5 text-cyan-300 font-mono">
                    {decision.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{decision.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Reliability & Performance Considerations */}
          <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Activity size={16} className="text-emerald-400" />
              Reliability, Performance & Idempotency
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.reliabilityAndPerformance.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Individual Contribution */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Terminal size={16} className="text-cyan-400" />
              My Individual Engineering Contribution
            </h3>
            <ul className="space-y-2">
              {project.individualContribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-800/80"
                >
                  <span className="text-cyan-400 font-mono font-bold">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measured Outcomes */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-slate-900 to-slate-900 border border-cyan-500/20">
            <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2 font-mono">
              Key Engineering Outcomes
            </h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {project.outcomes.map((outcome, idx) => (
                <div key={idx} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                  <p className="text-xs text-slate-300 leading-snug">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">Press Esc to close</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};
