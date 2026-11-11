import { ArrowDown, FileDown, Layers, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '../common/Icons';
import { portfolioConfig } from '../../config/portfolio';
import { HeroVisual } from './HeroVisual';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Text & Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow badge matching reference */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              {portfolioConfig.personal.eyebrow}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
                Scalable Backend Systems
              </span>{' '}
              & Modern Applications.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 mx-auto lg:mx-0">
              {portfolioConfig.personal.heroParagraph}
            </p>

            {/* Location & Availability Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400 mb-8">
              <MapPin size={14} className="text-cyan-400" />
              <span>{portfolioConfig.personal.availability}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button
                variant="primary"
                size="md"
                icon={<Layers size={16} />}
                onClick={() => scrollTo('projects')}
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                size="md"
                asLink
                href={portfolioConfig.personal.resumePath}
                download="Adesh_Kumar_Vishwakarma_Resume.pdf"
                icon={<FileDown size={16} className="text-cyan-400" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Social & Contact Links matching reference */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-2 border-t border-slate-900">
              <a
                href={portfolioConfig.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors group"
              >
                <LinkedInIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioConfig.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors group"
              >
                <GitHubIcon size={16} className="group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="truncate max-w-[220px]">{portfolioConfig.personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual */}
          <div className="lg:w-auto">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Bounce Arrow to #about matching reference */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('about');
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce p-2"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};
