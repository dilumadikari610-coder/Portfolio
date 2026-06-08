import React from 'react';
import { Activity, BookOpen, MessageSquare, Edit3, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Languages({ personalInfo, style, selectedLanguageIndex, setSelectedLanguageIndex }) {
  return (
    <section id="languages" className="py-24 border-t border-zinc-900 bg-zinc-950 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>
              Linguistic Versatility
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont}`}>
              Language Telemetry
            </h2>
            <p className="text-zinc-400 text-sm font-sans">
              Explore bilingual communication performance indexes. Click on each gauge disk to load detailed operational metrics.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <div className="space-y-4 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold" style={{ color: style.primaryColor }}>Dual-Engine Communication</span>
                <h3 className="font-extrabold text-white text-xl sm:text-2xl font-serif">Global-Scale Operations Readiness</h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  Nadr operates seamlessly between localized Sinhala production environments and high-level international system documentation standardizing in English.
                </p>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <p className="text-xs text-zinc-500 font-medium">
                    💡 <strong>Did you know?</strong> Moratuwa BIT programs are taught in English, enabling Nadr to conduct deep structural operations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/80 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 flex flex-col sm:flex-row items-center justify-around gap-6">
                  {personalInfo.languages.map((lang, index) => {
                    const circ = 314.15;
                    const strokeOffset = circ - (lang.percentage / 100) * circ;
                    const isSelected = selectedLanguageIndex === index;

                    return (
                      <div 
                        key={index}
                        onClick={() => setSelectedLanguageIndex(index)}
                        className={`flex flex-col items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                          isSelected ? 'bg-zinc-950 border border-zinc-800 scale-105 shadow-md' : 'hover:bg-zinc-950/30 border border-transparent hover:scale-102'
                        }`}
                      >
                        <div className="relative w-28 h-28 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle cx="56" cy="56" r="50" fill="none" stroke="#18181b" strokeWidth="8" />
                            <circle 
                              cx="56" cy="56" r="50" fill="none" 
                              stroke={isSelected ? style.primaryColor : '#3f3f46'} 
                              strokeWidth="8" strokeDasharray={circ} strokeDashoffset={strokeOffset} strokeLinecap="round"
                              className="transition-all duration-1000 ease-out"
                              style={{ filter: isSelected ? `drop-shadow(0 0 4px ${style.primaryColor}80)` : 'none' }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                            <span className="text-xl font-black text-white leading-none">{lang.percentage}%</span>
                            <span className="text-[8px] text-zinc-400 mt-1 uppercase font-bold tracking-widest">{lang.name}</span>
                          </div>
                        </div>
                        <div className="text-center mt-3">
                          <h4 className="font-extrabold text-xs text-zinc-200">{lang.name}</h4>
                          <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">{lang.level}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-6 space-y-4">
                  <div className="flex items-center gap-2 border-b border-zinc-850 pb-3">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <div>
                      <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest leading-none">Telemetry output</h4>
                      <span className="font-black text-sm text-white mt-1 block">
                        {personalInfo.languages[selectedLanguageIndex].name} Metrics
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {[
                      { label: 'Technical Reading', value: personalInfo.languages[selectedLanguageIndex].subMetrics.reading, icon: <BookOpen className="text-indigo-400" /> },
                      { label: 'Conversational', value: personalInfo.languages[selectedLanguageIndex].subMetrics.speaking, icon: <MessageSquare className="text-cyan-400" /> },
                      { label: 'Essay & Scripting', value: personalInfo.languages[selectedLanguageIndex].subMetrics.writing, icon: <Edit3 className="text-violet-400" /> },
                      { label: 'IT System Doc', value: personalInfo.languages[selectedLanguageIndex].subMetrics.doc, icon: <FileText className="text-rose-400" /> }
                    ].map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                          <span className="flex items-center gap-1.5">{React.cloneElement(metric.icon, { className: "w-3 h-3" })} {metric.label}</span>
                          <span className="font-bold text-zinc-200">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                          <div className="h-full transition-all duration-700 ease-out" style={{ width: `${metric.value}%`, backgroundColor: style.primaryColor }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}