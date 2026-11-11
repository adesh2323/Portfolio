import { ArrowUp, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '../common/Icons';
import { portfolioConfig } from '../../config/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand & Role */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1.5">
              <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                {portfolioConfig.personal.initials}
              </span>
              <span className="text-white font-bold text-base tracking-tight">
                {portfolioConfig.personal.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-mono">
              Senior Software Engineer · Backend & Full Stack
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#highlights" className="hover:text-cyan-400 transition-colors">
              Architecture
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioConfig.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors"
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              href={portfolioConfig.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors"
            >
              <GitHubIcon size={15} />
            </a>
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              aria-label="Email"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400/50 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-colors ml-2"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>© {currentYear} {portfolioConfig.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered for scalability, reliability & high performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
