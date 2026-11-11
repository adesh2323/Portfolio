import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'pill';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const variantClasses = {
    default:
      'bg-slate-800 text-slate-300 border border-slate-700/80 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-200',
    accent:
      'bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 font-medium',
    outline:
      'bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200 transition-colors',
    pill:
      'rounded-full bg-slate-900 text-cyan-400 border border-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg select-none cursor-default font-mono ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
