import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  download,
  target,
  rel,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs rounded-lg gap-1.5',
    md: 'px-6 py-3 text-sm rounded-xl gap-2',
    lg: 'px-8 py-3.5 text-base rounded-xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold hover:bg-slate-800/50 hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-slate-400 hover:text-cyan-400 font-medium hover:bg-slate-800/40',
  };

  const combinedClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
