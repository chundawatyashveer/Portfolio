import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data';

export default function Experience() {
  const [active, setActive] = useState(resumeData.experience[0].company);
  const sel = resumeData.experience.find(e => e.company === active) || resumeData.experience[0];

  return (
    <section id="experience" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-5">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-semibold mb-2">Career Timeline</p>
            <h2 className="text-3xl font-heading font-bold text-white">Experience</h2>
            <div className="h-0.5 w-10 bg-red-600 rounded mt-2" />
          </div>
          <p className="text-white/30 text-sm leading-relaxed">My engineering journey across front-end and full-stack environments.</p>
          <div className="flex flex-col gap-3 pt-4">
            {resumeData.experience.map(exp => (
              <button key={exp.company} onClick={() => setActive(exp.company)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  active === exp.company
                    ? 'bg-red-500/[0.06] border-red-500/25 text-red-300'
                    : 'bg-white/[0.015] border-white/[0.04] text-white/30 hover:text-white/50 hover:bg-white/[0.03]'
                }`}>
                <div>
                  <h4 className="font-semibold text-sm">{exp.company}</h4>
                  <p className="text-[10px] text-white/20 mt-0.5">{exp.period}</p>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${active === exp.company ? 'translate-x-0.5 text-red-400' : ''}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 sm:p-8 bg-white/[0.015] border border-white/[0.04] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.04] pb-4 gap-3">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">{sel.role}</h3>
                  <p className="text-red-400 text-sm font-semibold mt-0.5">{sel.company}</p>
                </div>
                <div className="flex flex-col sm:items-end text-[11px] text-white/25 gap-0.5">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {sel.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {sel.location}</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-white/40">
                {sel.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/[0.04]">
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-3">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {sel.skills.map(s => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-md bg-red-500/[0.06] border border-red-500/15 text-red-300">{s}</span>
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
