import React from 'react';
import * as Lucide from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Projects({ projects, style, handleRemoveProject }) {
  // Safely assign icon components from package tree with fallbacks
  const TrashIcon = Lucide.Trash2 || Lucide.Trash || Lucide.Menu;
  const GithubIcon = Lucide.Github || Lucide.GitHub || Lucide.Menu;
  const ExternalLinkIcon = Lucide.ExternalLink || Lucide.Menu;

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 bg-transparent">
      <ScrollReveal direction="up">
        <div className="mb-16 font-sans text-left">
          <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>
            Projects Catalog
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont} mt-3`}>
            Completed Client Workspaces
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-3">
            Every project item below is mapped dynamically to the simulated in-memory collection representing production-grade operations systems.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <ScrollReveal 
            key={proj.id} 
            direction={idx % 3 === 0 ? "left" : idx % 3 === 1 ? "up" : "right"} 
            delay={idx * 150}
          >
            <div className="group bg-zinc-900/80 border border-zinc-800/80 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col h-full relative backdrop-blur-sm">
              <div className={`h-1.5 ${style.primaryBg}`} />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[9px] font-mono uppercase font-bold text-zinc-400 tracking-wider">
                      {proj.type}
                    </span>
                    <button 
                      onClick={() => handleRemoveProject(proj.id)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-zinc-800 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Simulate MongoDB document deletion"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-100 mb-2">{proj.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">{proj.description}</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((techItem, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded bg-zinc-950 text-zinc-400 text-[9px] font-mono border border-zinc-900">
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2 text-xs font-semibold">
                    <a 
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex-1 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                    <a 
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={`flex-1 py-2.5 rounded-xl ${style.buttonPrimary} transition-all flex items-center justify-center gap-1.5`}
                    >
                      Live Demo <ExternalLinkIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}