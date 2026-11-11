import React, { useState } from 'react';
import {
  Code2,
  Server,
  Cloud,
  Database,
  Layers,
  Layout,
  Cpu,
  Terminal,
  Bot,
} from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server size={18} className="text-cyan-400" />;
      case 'cloud':
        return <Cloud size={18} className="text-cyan-400" />;
      case 'databases':
        return <Database size={18} className="text-cyan-400" />;
      case 'messaging':
        return <Layers size={18} className="text-cyan-400" />;
      case 'frontend':
        return <Layout size={18} className="text-cyan-400" />;
      case 'devops':
        return <Cpu size={18} className="text-cyan-400" />;
      case 'ai-tools':
        return <Bot size={18} className="text-cyan-400" />;
      default:
        return <Terminal size={18} className="text-cyan-400" />;
    }
  };

  const filteredCategories =
    activeFilter === 'all'
      ? portfolioConfig.skills
      : portfolioConfig.skills.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            icon={<Code2 size={20} />}
            title="Core Skills & Technologies"
            subtitle="Architectural capabilities, cloud platforms, database engines, and full-stack development tools."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills ({portfolioConfig.skills.reduce((acc, cat) => acc + cat.items.length, 0)})
            </button>
            {portfolioConfig.skills.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.id}
              className="h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/35 transition-all duration-300 group shadow-lg shadow-black/20 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/70">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-colors">
                    {getCategoryIcon(group.id)}
                  </div>
                  <h3 className="text-slate-200 font-semibold text-sm uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Badges matching reference */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs sm:text-sm border border-slate-700/80 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-200 cursor-default font-mono select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Micro-tag */}
              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{group.items.length} competencies</span>
                <span className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                  Production ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
