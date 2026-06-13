import React from 'react';
import * as Lucide from 'lucide-react';

// Assets Imports - Images & Custom Social Media Icons
import ProfileImg from '../assets/mybg.png';
import LinkedInCustomIcon from '../assets/linkedin.png';
import GitHubCustomIcon from '../assets/github.png';

export default function Hero({ personalInfo, style, scrollY, scrollTo }) {
  // Safe icon lookups for standard metadata elements
  const MapPinIcon = Lucide.MapPin || Lucide.Menu;
  const BriefcaseIcon = Lucide.Briefcase || Lucide.Menu;
  const GlobeIcon = Lucide.Globe || Lucide.Menu;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Ambient Flare System */}
      <div
        className="absolute top-12 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.02] blur-[150px] pointer-events-none"
        style={{ backgroundColor: style.primaryColor }}
      />

      {/* Split Background Content Panel Grid (Made transparent to show App.jsx animation) */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 w-full h-full pointer-events-none">
        <div className="lg:col-span-7 bg-zinc-900/20 w-full h-full" />
        <div className="lg:col-span-5 bg-transparent w-full h-full" />
      </div>

      {/* Content Container Grid perfectly locked into standard Max Width alignment */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 items-center min-h-[calc(100vh-5rem)] relative z-10 py-12 lg:py-0 gap-8">

        {/* Left Column Content Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 lg:pr-12">
          <div className="space-y-3">
            <div
              className="text-xs tracking-[0.2em] font-mono font-black uppercase transition-colors duration-500"
              style={{ color: style.primaryColor }}
            >
              {personalInfo.title}
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-100 leading-[1.15] ${style.headingFont}`}>
              Hello, My Name is <span className="text-white">{personalInfo.name}</span>
            </h1>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-sans font-medium">
            {personalInfo.bio}
          </p>

          {/* Quick Metrics Metadata List */}
          <div className="text-xs text-zinc-400 font-mono space-y-3 border-t border-zinc-800/80 pt-6 max-w-xl">
            <div className="flex items-start gap-3">
              <MapPinIcon className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-200 transition-colors duration-500 hover:text-white">{personalInfo.location}</span>
                <span className="block text-[11px] text-zinc-500 mt-1">{personalInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BriefcaseIcon className="w-4 h-4 text-zinc-500 shrink-0" />
              <span className="text-zinc-300">BIT Undergraduate (University of Moratuwa)</span>
            </div>
            <div className="flex items-center gap-3">
              <GlobeIcon className="w-4 h-4 text-zinc-500 shrink-0" />
              <span className="font-semibold text-zinc-300">
                Languages: <span style={{ color: style.primaryColor }} className="transition-colors duration-500">{personalInfo.languages.map(l => l.name).join(' & ')}</span>
              </span>
            </div>
          </div>

          {/* Core Interactive Action Buttons & Social Profile Links Grid */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className={`px-8 py-3.5 rounded-xl font-bold transition-all text-xs uppercase tracking-widest border shadow-lg shadow-black/20 ${style.buttonPrimary}`}
            >
              View Projects
            </button>

            {/* LinkedIn Account Anchor Node using Custom Downloaded Image Asset */}
            <a
              href="https://www.linkedin.com/in/dilum-adikari-747960414"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 transition-colors flex items-center justify-center group w-[46px] h-[46px]"
              title="Visit LinkedIn Profile"
            >
              <img 
                src={LinkedInCustomIcon} 
                alt="LinkedIn" 
                className="w-5 h-5 object-contain transition-transform group-hover:scale-110 brightness-90 group-hover:brightness-100"
              />
            </a>

            {/* GitHub Account Anchor Node using Custom Downloaded Image Asset */}
            <a
              href={personalInfo.github || "https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 hover:bg-zinc-900 transition-colors flex items-center justify-center group w-[46px] h-[46px]"
              title="Visit GitHub Profile"
            >
              <img 
                src={GitHubCustomIcon} 
                alt="GitHub" 
                className="w-5 h-5 object-contain transition-transform group-hover:scale-110 invert group-hover:opacity-100 opacity-80"
              />
            </a>
          </div>
        </div>

        {/* Right Column Container - Prominent Profile Photo Section */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative min-h-[450px] lg:min-h-0 w-full pl-0 lg:pl-4">

          <div
            className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] z-20 transition-transform duration-200 ease-out lg:mt-auto flex items-center justify-center"
            style={{ transform: `translateY(${scrollY * 0.06}px)` }}
          >
            {/* Theme Ambient Glow Backing Flare */}
            <div
              className="absolute inset-0 rounded-full opacity-25 blur-2xl transition-all duration-500 scale-95"
              style={{ backgroundColor: style.primaryColor }}
            />

            {/* Expanded SVG Workspace System */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full drop-shadow-[0_30px_30px_rgba(0,0,0,0.7)] overflow-visible"
            >
              <defs>
                <clipPath id="avatar-large-clip">
                  <circle cx="200" cy="200" r="175" />
                </clipPath>
              </defs>

              {/* Dynamic Glow Border Ring */}
              <circle
                cx="200"
                cy="200"
                r="175"
                fill={style.avatarBg}
                stroke={`${style.primaryColor}40`}
                strokeWidth="5"
                className="transition-colors duration-500"
              />

              {/* Profile Image Mapping */}
              <g clipPath="url(#avatar-large-clip)">
                <image
                  href={ProfileImg}
                  x="25"
                  y="25"
                  width="350"
                  height="350"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>

        </div>

      </div>

      {/* Floating Scroll Indicator Hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-300 pointer-events-none z-20"
        style={{ opacity: Math.max(1 - scrollY / 200, 0) }}
      >
        <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-zinc-600 font-bold">Scroll Track</span>
        <div className="w-5 h-8 rounded-full border border-zinc-800 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full animate-bounce" style={{ backgroundColor: style.primaryColor }} />
        </div>
      </div>
    </section>
  );
}