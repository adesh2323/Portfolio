import { Fragment } from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';
import type { ProjectCaseStudy } from '../../types';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <div
      onClick={() => onOpenCaseStudy(project)}
      className="group flex flex-col h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/20 cursor-pointer relative overflow-hidden"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none"></div>

      {/* Top Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60">
              {project.statusBadge}
            </span>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[10px] font-mono text-cyan-300 hover:text-white px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 flex items-center gap-1 hover:border-cyan-400 transition-colors"
              >
                <span>{project.liveDemoUrl.replace('https://', '').replace('http://', '').replace('apps.shopify.com/', '')}</span>
                <span className="text-cyan-400">↗</span>
              </a>
            )}
          </div>
          <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-cyan-400 transition-colors tracking-tight">
            {project.name}
          </h3>
          <p className="text-cyan-400/80 text-xs font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-all flex-shrink-0 mt-1">
          <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Mini Architecture Flow Preview Snippet */}
      {project.architectureSteps && project.architectureSteps.length > 0 && (
        <div className="mb-5 bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
            <span className="text-cyan-400 flex items-center gap-1">
              <Activity size={10} /> Architecture Topology
            </span>
            <span>4 Nodes</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono text-slate-300">
            {project.architectureSteps.slice(0, 4).map((s, idx) => (
              <Fragment key={idx}>
                <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 whitespace-nowrap text-slate-300 group-hover:border-cyan-500/20">
                  {s.title}
                </span>
                {idx < Math.min(3, project.architectureSteps!.length - 1) && (
                  <span className="text-slate-600 text-xs">→</span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Tech Badges matching reference */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700 group-hover:border-cyan-400/30 group-hover:text-slate-300 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
        <span className="text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
          View Case Study & Architecture →
        </span>
        <span className="text-slate-500 font-mono text-[11px]">Click to inspect</span>
      </div>
    </div>
  );
};
