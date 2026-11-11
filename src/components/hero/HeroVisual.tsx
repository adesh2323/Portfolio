import React from 'react';
import { portfolioConfig } from '../../config/portfolio';

export const HeroVisual: React.FC = () => {
  return (
    <div className="flex-shrink-0">
      <div className="relative">
        {/* Glowing Background Halo matching reference */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-teal-500/10 blur-2xl"></div>

        {/* Circular Profile Photo with Cyan Ring */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-cyan-400/30 shadow-2xl shadow-cyan-500/20 bg-slate-900">
          <img
            src="/profile.jpg"
            alt={portfolioConfig.personal.name}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Floating Experience Badge matching reference */}
        <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-2.5 shadow-xl">
          <span className="text-xs text-slate-400 block font-medium">Experience</span>
          <p className="text-white font-bold text-lg leading-none mt-0.5">
            {portfolioConfig.personal.totalYearsExp}
          </p>
        </div>
      </div>
    </div>
  );
};
