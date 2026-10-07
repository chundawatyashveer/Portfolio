import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Terminal, Atom, Layers, Code2, Server, DatabaseZap, Webhook, ShieldCheck, Cpu, Boxes, Workflow, ScanLine, GitBranch, Activity, Flame, CreditCard, Palette, FileJson, Database } from 'lucide-react';
import { resumeData } from '../data';
import type { PeriodicSkill } from '../data';

const categoryColors: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  frontend: { border: 'border-blue-500/40', bg: 'bg-blue-950/20', text: 'text-blue-400', badge: 'Frontend' },
  backend: { border: 'border-emerald-500/40', bg: 'bg-emerald-950/20', text: 'text-emerald-400', badge: 'Backend' },
  database: { border: 'border-amber-500/40', bg: 'bg-amber-950/20', text: 'text-amber-400', badge: 'Database' },
  erp: { border: 'border-purple-500/40', bg: 'bg-purple-950/20', text: 'text-purple-400', badge: 'ERP & AI' },
  devops: { border: 'border-rose-500/40', bg: 'bg-rose-950/20', text: 'text-rose-400', badge: 'DevOps & Tools' }
};

const iconMap: Record<string, any> = {
  FileJson, Code2, Atom, Layers, Palette, Terminal, Server, Webhook, ShieldCheck, DatabaseZap, Database, Cpu, Boxes, Workflow, ScanLine, GitBranch, Activity, Flame, CreditCard
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<PeriodicSkill | null>(null);

  const skills = resumeData.periodicSkills;

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Periodic Table of Tech</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
            Technical Stack Element Matrix
          </h2>
          <p className="text-white/50 text-sm font-mono mt-2">
            Click any skill element block to inspect details, usage & experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {[
            { id: 'all', label: 'All Elements' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend' },
            { id: 'database', label: 'Databases' },
            { id: 'erp', label: 'ERP & AI' },
            { id: 'devops', label: 'DevOps & Tools' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                activeCategory === tab.id
                  ? 'bg-white text-black border-white font-semibold shadow-md'
                  : 'bg-zinc-950 text-white/60 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* PERIODIC TABLE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3.5">
        {filteredSkills.map((skill, index) => {
          const theme = categoryColors[skill.category] || categoryColors.frontend;
          const IconComponent = iconMap[skill.iconName] || Code2;

          return (
            <motion.div
              key={skill.symbol}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              onClick={() => setSelectedSkill(skill)}
              className={`relative group cursor-pointer p-4 rounded-xl bg-zinc-950 border ${theme.border} ${theme.bg} hover:border-white hover:scale-[1.03] transition-all shadow-xl flex flex-col justify-between h-36`}
            >
              {/* Top row: Atomic number & Category */}
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40">
                <span>{skill.number}</span>
                <span className={`uppercase font-semibold ${theme.text}`}>{skill.category.substring(0, 3)}</span>
              </div>

              {/* Symbol */}
              <div className="my-1 text-center">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider group-hover:text-white transition-colors">
                  {skill.symbol}
                </div>
                <div className="text-[11px] font-sans font-medium text-white/80 truncate mt-0.5">
                  {skill.name}
                </div>
              </div>

              {/* Bottom row: Atomic Weight / Rating */}
              <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[9px] text-white/50">
                <span>W: {skill.weight}</span>
                <IconComponent className={`w-3.5 h-3.5 ${theme.text}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ELEMENT DETAIL MODAL */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-zinc-950 border border-white/20 p-6 shadow-2xl text-left font-sans"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/20 flex flex-col items-center justify-center font-mono">
                  <span className="text-[10px] text-white/40">{selectedSkill.number}</span>
                  <span className="text-xl font-bold text-white">{selectedSkill.symbol}</span>
                </div>
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/10 text-white/80 border border-white/10">
                    Category: {selectedSkill.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedSkill.name}</h3>
                  <p className="text-xs font-mono text-white/50">Atomic Weight Rating: {selectedSkill.weight}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase">Overview & Application:</h4>
                  <p className="text-sm text-white/80 mt-1 leading-relaxed">{selectedSkill.description}</p>
                </div>

                <div className="pt-3 border-t border-white/10 font-mono text-xs text-white/70 space-y-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">Used in Projects:</span>
                    <span className="text-white">API SaaS, RCM Portal, Digital Twin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Proficiency:</span>
                    <span className="text-emerald-400 font-semibold">Production Ready</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
