import React from 'react';

export default function Footer({ personalInfo, scrollTo }) {
  return (
    <footer className="py-12 border-t border-zinc-900 relative z-10 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="font-extrabold text-sm tracking-wider uppercase text-white">{personalInfo.name}</div>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
          {['home', 'projects', 'skills', 'languages', 'experience', 'education', 'contact'].map(sec => (
            <button key={sec} className="hover:text-white" onClick={() => scrollTo(sec)}>
              {sec === 'home' ? 'About' : sec.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-zinc-500 font-mono text-center md:text-right">
          © {new Date().getFullYear()} {personalInfo.name}. Designed to CV Specifications with scroll physics.
        </p>
      </div>
    </footer>
  );
}