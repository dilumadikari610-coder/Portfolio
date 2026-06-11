import React from 'react';
import * as Lucide from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Education({ educationList, style }) {
  // Safe wildcard lookups for fallback states
  const GraduationCapIcon = Lucide.GraduationCap || Lucide.Menu;
  const AwardIcon = Lucide.Award || Lucide.Menu;

  return (
    <section id="education" className="py-24 border-t border-zinc-900 bg-transparent relative overflow-hidden">
      {/* Background Ambient Flare System */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-[120px] pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: style.primaryColor }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-20 space-y-3">
            <div 
              className="text-xs uppercase font-mono font-black tracking-[0.25em] transition-colors duration-500" 
              style={{ color: style.primaryColor }}
            >
              Academic Foundations
            </div>
            <h2 className={`text-4xl sm:text-5xl font-black tracking-tight text-white ${style.headingFont}`}>
              Education & Credentials
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto my-4 transition-all duration-500" style={{ backgroundColor: style.primaryColor }} />
            <p className="text-zinc-400 text-sm font-sans max-w-md mx-auto leading-relaxed">
              Qualifications, degree paths, and technical specializations.
            </p>
          </div>
        </ScrollReveal>

        {/* High-Fidelity Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationList.map((edu, idx) => (
            <ScrollReveal key={idx} direction="scale" delay={idx * 150}>
              <div 
                className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-[2rem] p-8 shadow-xl shadow-black/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full relative group overflow-hidden cursor-default"
                style={{
                  '--hover-glow': `${style.primaryColor}15`
                }}
              >
                {/* Dynamic Inline Border Hover System via Tailwind Arbitrary Modifiers */}
                <div 
                  className="absolute inset-0 border border-transparent group-hover:border-zinc-700/50 rounded-[2rem] transition-all duration-500 pointer-events-none z-20"
                />

                {/* Subtle Interactive Radial Mesh Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                  style={{ 
                    background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${style.primaryColor}0d, transparent 40%)` 
                  }}
                />

                <div className="space-y-6 text-left relative z-10">
                  {/* Top Row Indicators */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="p-3 bg-zinc-950 rounded-2xl text-zinc-400 border border-zinc-800/80 group-hover:text-white transition-all duration-500 shadow-inner"
                      style={{ 
                        borderColor: edu.isHighlighted ? `${style.primaryColor}30` : ''
                      }}
                    >
                      {idx === 0 ? <GraduationCapIcon className="w-6 h-6" /> : <AwardIcon className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest bg-zinc-950/60 px-3 py-1 rounded-full border border-zinc-900">
                      {edu.period}
                    </span>
                  </div>

                  {/* Header Block */}
                  <div>
                    <h3 
                      className={`text-xl font-extrabold leading-snug transition-colors duration-500 font-sans ${
                        edu.isHighlighted ? '' : 'text-zinc-100 group-hover:text-white'
                      }`}
                      style={{ 
                        color: edu.isHighlighted || idx === 0 ? style.primaryColor : '' 
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-2 font-medium tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: style.primaryColor }} />
                      {edu.institution}
                    </p>
                  </div>

                  {/* Clean Minimalist Divider */}
                  <div className="w-full h-px bg-zinc-800/40 group-hover:bg-zinc-700/30 transition-colors duration-500" />

                  {/* Accomplishment Details */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-normal group-hover:text-zinc-300 transition-colors duration-500">
                    {edu.highlights}
                  </p>
                </div>

                {/* Subtle Neon Underglow Flare on Card Hover */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"
                  style={{ backgroundColor: style.primaryColor }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}