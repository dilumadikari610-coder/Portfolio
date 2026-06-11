import React from 'react';
import * as Lucide from 'lucide-react';

export default function CustomizerModal({ 
  activeTheme, setActiveTheme, setIsCustomizerOpen 
}) {
  const SlidersIcon = Lucide.Sliders || Lucide.Menu;
  const CloseIcon = Lucide.X || Lucide.Menu;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex justify-end animate-fadeIn">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCustomizerOpen(false)} />
      
      {/* Panel Body */}
      <div className="relative w-full max-w-md bg-zinc-900 text-zinc-100 h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 border-l border-zinc-800">
        <div className="space-y-6 flex-1 text-left">
          
          {/* Header Section */}
          <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
            <div className="flex items-center gap-2">
              <SlidersIcon className="w-5 h-5 text-indigo-400" />
              <div>
                <h3 className="font-extrabold text-white text-sm uppercase tracking-wider">Interface Settings</h3>
                <p className="text-[9px] text-zinc-500 font-mono font-bold uppercase">Customize Live View UI Matrix</p>
              </div>
            </div>
            <button 
              onClick={() => setIsCustomizerOpen(false)} 
              className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
            >
              <CloseIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Theme Preset Selection Grid */}
          <div className="space-y-3 pt-2">
            <label className="text-[10px] font-mono font-extrabold text-zinc-400 uppercase tracking-widest block">
              Choose Interface Theme Preset
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'midnight', label: 'Midnight Blue', bg: 'bg-indigo-600' },
                { id: 'emerald', label: 'Emerald Wave', bg: 'bg-emerald-500' },
                { id: 'cyan', label: 'Cyber Cyan', bg: 'bg-cyan-500' },
                { id: 'terracotta', label: 'Terracotta', bg: 'bg-rose-600' }
              ].map(themeItem => (
                <button
                  key={themeItem.id}
                  onClick={() => setActiveTheme(themeItem.id)}
                  className={`py-3 px-3 rounded-xl border text-xs font-mono flex items-center gap-3 transition-all ${
                    activeTheme === themeItem.id 
                      ? 'bg-zinc-950 border-zinc-700 text-white font-extrabold shadow-lg shadow-black/30' 
                      : 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full shrink-0 ${themeItem.bg}`} />
                  {themeItem.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Strip */}
        <div className="pt-4 border-t border-zinc-800 text-[9px] text-zinc-500 font-mono text-center">
          Theme mutations apply instantly to active client-side components.
        </div>
      </div>
    </div>
  );
}