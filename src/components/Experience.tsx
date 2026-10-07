import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { resumeData } from '../data';

export default function Experience() {
  const [active, setActive] = useState(resumeData.experience[0].company);
  const sel = resumeData.experience.find(e => e.company === active) || resumeData.experience[0];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-white/80" />
            <span>Work & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
            Professional Experience
          </h2>
          <p className="text-white/50 text-sm font-mono mt-1">
            Production software engineering, ERP integration & web application development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Company Selector Column */}
        <div className="lg:col-span-4 space-y-3">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest px-1">Select Role</p>
          {resumeData.experience.map(exp => (
            <button
              key={exp.company}
              onClick={() => setActive(exp.company)}
              className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                active === exp.company
                  ? 'bg-zinc-950 border-white text-white shadow-xl'
                  : 'bg-zinc-950/40 border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              <div>
                <h4 className="font-bold text-sm text-white font-sans">{exp.role}</h4>
                <p className="text-xs font-mono text-white/60 mt-0.5">{exp.company}</p>
                <p className="text-[10px] font-mono text-white/40 mt-1">{exp.period}</p>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${active === exp.company ? 'translate-x-1 text-white' : 'text-white/30'}`} />
            </button>
          ))}
        </div>

        {/* Selected Role Detail Panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 sm:p-8 bg-zinc-950 border border-white/15 space-y-6 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4 gap-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">{sel.role}</h3>
                  <p className="text-white/70 font-mono text-sm font-semibold mt-0.5">{sel.company}</p>
                </div>
                <div className="flex flex-col sm:items-end text-xs font-mono text-white/50 gap-1">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {sel.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {sel.location}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-white/80 leading-relaxed">
                {sel.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2.5">Key Skills & Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {sel.skills.map(s => (
                    <span key={s} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/90">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
