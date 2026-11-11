import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '../common/Icons';
import { portfolioConfig } from '../../config/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'mailto-opened' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare mailto fallback URL with encoded parameters
    const subjectLine = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${portfolioConfig.personal.email}?subject=${subjectLine}&body=${bodyContent}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionStatus('mailto-opened');
      // Trigger user's email client
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          icon={<Mail size={20} />}
          title={portfolioConfig.contact.heading}
          subtitle={portfolioConfig.contact.subheading}
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              I am open to senior engineering roles, high-scale backend challenges, and cloud-native consulting. Reach out via email, connect on LinkedIn, or inspect my repositories.
            </p>

            {/* Email Card */}
            <a
              href={`mailto:${portfolioConfig.personal.email}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group shadow-lg shadow-black/10"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-mono">Email Address</span>
                <p className="text-white font-medium text-sm truncate group-hover:text-cyan-400 transition-colors">
                  {portfolioConfig.personal.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${portfolioConfig.personal.phone}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group shadow-lg shadow-black/10"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                <Phone size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-mono">Phone / WhatsApp</span>
                <p className="text-white font-medium text-sm truncate group-hover:text-cyan-400 transition-colors">
                  {portfolioConfig.personal.phone}
                </p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioConfig.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group shadow-lg shadow-black/10"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                <LinkedInIcon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs text-slate-400 font-mono">Professional Network</span>
                <p className="text-white font-medium text-sm truncate group-hover:text-cyan-400 transition-colors">
                  linkedin.com/in/adesh-vishwakarma
                </p>
              </div>
              <ExternalLink size={15} className="text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioConfig.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 group shadow-lg shadow-black/10"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                <GitHubIcon size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs text-slate-400 font-mono">Source Code & Projects</span>
                <p className="text-white font-medium text-sm truncate group-hover:text-cyan-400 transition-colors">
                  github.com/adesh2323
                </p>
              </div>
              <ExternalLink size={15} className="text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-xs text-slate-400 font-mono">Current Location</span>
                <p className="text-white font-medium text-sm">
                  Indore, Madhya Pradesh, India
                </p>
                <span className="text-[11px] text-cyan-400/80 font-mono">Open across India & Remote</span>
              </div>
            </div>

            {/* Download Resume Featured Banner matching reference */}
            <a
              href={portfolioConfig.personal.resumePath}
              download="Adesh_Kumar_Vishwakarma_Resume.pdf"
              className="flex items-center gap-4 p-5 bg-cyan-500 hover:bg-cyan-400 rounded-2xl transition-all duration-200 group hover:-translate-y-0.5 shadow-lg shadow-cyan-500/25 cursor-pointer block"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-950/20 flex items-center justify-center flex-shrink-0 text-slate-950">
                <FileDown size={20} />
              </div>
              <div>
                <p className="text-slate-950 font-bold text-sm">Download Verified Resume</p>
                <p className="text-slate-900/70 text-xs font-mono mt-0.5">PDF · Updated 2026 Edition</p>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-cyan-400" />
                <h3 className="text-white font-bold text-base sm:text-lg">Send a Direct Message</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Response within 24h</span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.name ? 'border-red-500/80 ring-1 ring-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="rahul@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.email ? 'border-red-500/80 ring-1 ring-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Backend Architecture / Senior Role / Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Tell me about your system requirements, architecture goals, or open engineering roles..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors resize-none ${
                    errors.message ? 'border-red-500/80 ring-1 ring-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Notice & Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                  icon={isSubmitting ? undefined : <Send size={16} />}
                >
                  {isSubmitting ? 'Opening Mail Client...' : 'Dispatch Message (mailto fallback)'}
                </Button>
              </div>

              {/* Status Feedback Banner */}
              {submissionStatus === 'mailto-opened' && (
                <div className="mt-4 p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/30 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                    <span>Mail Client Dispatched</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    A pre-filled email draft has been generated in your default mail application to{' '}
                    <strong className="text-white">{portfolioConfig.personal.email}</strong>.
                  </p>
                  <p className="text-slate-400 text-[11px] border-t border-slate-800 pt-2 font-mono">
                    Note: To enable background serverless submission without opening a local mail client, configure an API endpoint via AWS SES, Resend, or EmailJS.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
