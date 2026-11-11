import React, { useState } from 'react';
import { Layers, Sparkles } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { CaseStudyModal } from './CaseStudyModal';
import type { ProjectCaseStudy } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects', count: portfolioConfig.projects.length },
    { id: 'saas', label: 'SaaS & Cloud', match: ['Cloud & Backend SaaS', 'Real-time Dispatch & Fleet'] },
    { id: 'ecommerce', label: 'Shopify & eCommerce', match: ['E-commerce & Shopify App', 'Full Stack eCommerce'] },
    { id: 'ai', label: 'Agentic AI & RAG', match: ['Agentic AI & Search', 'GenAI & LLM Workflows'] },
  ];

  const filteredProjects = portfolioConfig.projects.filter((p) => {
    if (filter === 'all') return true;
    const opt = filterOptions.find((o) => o.id === filter);
    return opt?.match ? opt.match.includes(p.category) : true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            icon={<Layers size={20} />}
            title="Featured Projects & Case Studies"
            subtitle="Production SaaS backends, Shopify App Store application, eCommerce systems, and personal Agentic AI projects."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === opt.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Micro tip banner */}
        <div className="mb-8 flex items-center justify-between text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800/80 px-4 py-2.5 rounded-xl">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Showing {filteredProjects.length} of {portfolioConfig.projects.length} verified projects from resume</span>
          </div>
          <span className="text-cyan-400/80 hidden sm:inline">Click any card to inspect full architecture</span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
