import React from 'react';

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div className="inline-flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shadow-sm shadow-cyan-400/10">
          {icon}
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
