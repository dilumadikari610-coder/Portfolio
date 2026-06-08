import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact({ personalInfo, style }) {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900 relative bg-zinc-950">
      <div className="relative z-10 flex flex-col items-center text-center space-y-10">
        <ScrollReveal direction="up">
          <div className="space-y-4 flex flex-col items-center">
            <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>Secure Gateway</div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont}`}>Contact Me</h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-xl">
              Looking to optimize industrial workflows, design streamlined Express API routes, or discuss full stack integrations? Reach out securely.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl font-sans text-left">
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-black/40 transition-shadow duration-300">
              <div className="p-3 bg-zinc-950 rounded-xl text-zinc-300 border border-zinc-800 shrink-0"><Mail className="w-5 h-5" /></div>
              <div>
                <span className="block text-[9px] text-zinc-500 font-mono uppercase font-bold">Mailbox Direct</span>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">{personalInfo.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-black/40 transition-shadow duration-300">
              <div className="p-3 bg-zinc-950 rounded-xl text-zinc-300 border border-zinc-800 shrink-0"><Phone className="w-5 h-5" /></div>
              <div>
                <span className="block text-[9px] text-zinc-500 font-mono uppercase font-bold">Phone Connection</span>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-white hover:text-indigo-400 transition-colors">{personalInfo.phone}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg hover:shadow-black/40 transition-shadow duration-300 sm:col-span-2">
              <div className="p-3 bg-zinc-950 rounded-xl text-zinc-300 border border-zinc-800 shrink-0"><MapPin className="w-5 h-5" /></div>
              <div>
                <span className="block text-[9px] text-zinc-500 font-mono uppercase font-bold">Physical Coordinates</span>
                <p className="text-sm font-bold text-white">{personalInfo.address}, {personalInfo.location}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}