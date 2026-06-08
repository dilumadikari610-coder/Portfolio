import React from 'react';
import { Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Experience({ experience, style }) {
  return (
    <section id="experience" className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>
              Employment History
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont}`}>
              Work Experience
            </h2>
            <p className="text-zinc-400 text-sm font-sans max-w-md mx-auto">
              Detailed accomplishments and infrastructure pipelines managed in professional IT operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <ScrollReveal key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
              <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/60 space-y-6 relative group">
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl ${style.primaryBg}`} />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-zinc-950 text-zinc-400 text-[10px] font-mono border border-zinc-800 uppercase tracking-widest font-extrabold">{exp.type}</span>
                    <h3 className="font-black text-white text-xl sm:text-2xl mt-2 tracking-tight">{exp.role}</h3>
                    <p className="text-sm font-mono font-bold flex items-center gap-1.5 mt-0.5" style={{ color: style.primaryColor }}>
                      <Briefcase className="w-4 h-4" /> {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 rounded-lg bg-zinc-950 text-zinc-400 text-xs font-mono">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-3.5 pt-2">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex items-start gap-3">
                      <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: style.primaryColor }} />
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}