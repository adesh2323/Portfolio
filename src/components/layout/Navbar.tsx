import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { portfolioConfig } from '../../config/portfolio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Architecture', href: '#highlights' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'highlights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 font-bold font-mono text-base shadow-sm group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20 group-hover:scale-105 transition-all duration-200">
            {portfolioConfig.personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm tracking-tight group-hover:text-cyan-400 transition-colors">
              {portfolioConfig.personal.name}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Backend & Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-400/10 font-semibold shadow-sm shadow-cyan-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Download Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioConfig.personal.resumePath}
            download="Adesh_Kumar_Vishwakarma_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
          >
            <FileDown size={14} className="text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800/80">
              <a
                href={portfolioConfig.personal.resumePath}
                download="Adesh_Kumar_Vishwakarma_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
