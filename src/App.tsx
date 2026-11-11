import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Experience } from './components/experience/Experience';
import { Projects } from './components/projects/Projects';
import { Education } from './components/education/Education';
import { EngineeringHighlights } from './components/highlights/EngineeringHighlights';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Professional Experience Timeline Section */}
        <Experience />

        {/* Featured Case Studies Section */}
        <Projects />

        {/* Education & Certifications Section */}
        <Education />

        {/* Architectural Principles & System Design Section */}
        <EngineeringHighlights />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
