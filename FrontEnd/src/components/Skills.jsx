import React from 'react';
import { Cpu, Layers, Database, Globe, Terminal, Network, Activity, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Skills({ style }) {
  // Custom Icon Selector Matrix Array
  const skillItems = [
    { icon: <Cpu />, title: 'Full-Stack Web Dev', index: '01 // CODE', desc: 'Designing structured API routes with Express, controller microservices with Node, and single page dashboards in React.', footer: 'React, Node.js, Express, MongoDB' },
    { icon: <Layers />, title: 'ERP & MRP Systems', index: '02 // SYSTEMS', desc: 'Integrating business operations software to monitor structural workflow paths, factory-wide resources, and manufacturing sequences.', footer: 'Operational Automation, Flow Checks' },
    { icon: <Database />, title: 'Inventory & Warehouse', index: '03 // INVENTORY', desc: 'Designing digital FIFO (First In, First Out) barcode structures and style-based validation algorithms to ensure warehouse precision.', footer: 'First In First Out, Style Validation' },
    { icon: <Globe />, title: 'Logistics & Fleet Co.', index: '04 // LOGISTICS', desc: 'Architecting transport schedulers like TransitFlow to monitor vehicle fleet request allocations, driver logs, and logistics workflows.', footer: 'Fleet Dispatch, Transit Tracking' },
    { icon: <Terminal />, title: 'Hardware Diagnostics', index: '05 // INFRASTRUCTURE', desc: 'Diagnosing complex physical hardware bottlenecks, supporting POS thermal ticketing devices, and barcode system peripherals.', footer: 'PC Hardware Repair, POS Terminals' },
    { icon: <Network />, title: 'Network & LAN Admin', index: '06 // NETWORKS', desc: 'Configuring secure, high-uptime Local Area Network (LAN) routing paths for factory production floor workstations and IoT peripherals.', footer: 'LAN Routing, Infrastructure Audit' },
    { icon: <Activity />, title: 'Data Visualization', index: '07 // DATA', desc: 'Designing clean diagnostic reports, charting vehicle request cycles, and parsing telemetry loops into frontend dashboards.', footer: 'MERN Telemetry, Interactive Charts' },
    { icon: <FileText />, title: 'Technical Writing', index: '08 // WRITING', desc: 'Developing operations manuals, documenting REST routing schemas, and managing systems audits alongside senior stakeholders.', footer: 'Documentation, System Audits' },
  ];

  return (
    <section id="skills" className="py-24 border-t border-zinc-900 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-widest" style={{ color: style.primaryColor }}>
              Technical Capabilities
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-white ${style.headingFont}`}>
              Expertise Matrix
            </h2>
            <p className="text-zinc-400 text-sm font-sans">
              A highly comprehensive combination of physical systems optimization, hardware mechanics, and backend database engineering.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillItems.map((item, idx) => (
            <ScrollReveal key={idx} direction="scale" delay={idx * 50}>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-zinc-950/50 rounded-xl text-zinc-300 border border-zinc-800/50">
                      {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase">{item.index}</span>
                  </div>
                  <h3 className="font-extrabold text-white text-base">{item.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-[10px] font-mono font-semibold pt-2 border-t border-zinc-800" style={{ color: style.primaryColor }}>
                  {item.footer}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}