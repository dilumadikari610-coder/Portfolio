import React from 'react';
import * as Lucide from 'lucide-react';

export default function Header({ 
  personalInfo, style, activeSection, scrollY, 
  mobileMenuOpen, setMobileMenuOpen, setIsCustomizerOpen, scrollTo 
}) {
  
  // Safely look up the icon with fallback configurations before rendering
  const GithubIcon = Lucide.Github || Lucide.GitHub || Lucide.Menu; 
  const SettingsIcon = Lucide.Settings || Lucide.Menu;
  const MenuIcon = Lucide.Menu;
  const CloseIcon = Lucide.X || Lucide.Menu;
  const LinkedinIcon = Lucide.Linkedin || Lucide.Menu;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-zinc-950/90 py-3 border-b border-zinc-900 shadow-lg'
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="font-extrabold text-base sm:text-lg tracking-wider text-white uppercase">
            <span>{personalInfo.name}</span>
          </div>
        </div>

        {/* Navigation Link list */}
        <nav className="hidden md:flex items-center gap-8 text-zinc-400">
          {['home', 'projects', 'skills', 'languages', 'experience', 'education', 'contact'].map((sec) => (
            <button 
              key={sec}
              onClick={() => scrollTo(sec)} 
              className={`text-xs uppercase font-medium tracking-widest transition-colors ${activeSection === sec ? style.activeText : 'hover:text-zinc-100'}`}
            >
              {sec === 'home' ? 'About' : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => setIsCustomizerOpen(true)}
            className="p-2.5 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all"
            title="Personalize page info"
          >
            <SettingsIcon className="w-5 h-5 animate-spin-slow" />
          </button>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile trigger icon */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-zinc-900 text-zinc-400"
        >
          {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Slide */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-zinc-950 border-zinc-900 px-6 py-6 space-y-4 shadow-xl text-zinc-300">
          {['home', 'projects', 'skills', 'languages', 'experience', 'education', 'contact'].map((sec) => (
            <button key={sec} onClick={() => scrollTo(sec)} className="block text-sm uppercase tracking-widest font-bold">
              {sec === 'home' ? 'About' : sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
          <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
            <button 
              onClick={() => { setIsCustomizerOpen(true); setMobileMenuOpen(false); }}
              className="text-xs uppercase tracking-widest font-mono text-zinc-400 hover:text-white flex items-center gap-1"
            >
              <SettingsIcon className="w-4 h-4" /> Customizer Mode
            </button>
            <div className="flex gap-2">
              <a href={personalInfo.github} className="p-2 text-zinc-400">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} className="p-2 text-zinc-400">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}