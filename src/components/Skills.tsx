import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { resumeData } from '../data';

const DynIcon = ({ name, className = "w-4 h-4" }: { name: string; className?: string }) => {
  const C = (Icons as any)[name] || Icons.Code2;
  return <C className={className} />;
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-semibold mb-2">Technical Stack</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">My Tech Matrix</h2>
        <div className="h-0.5 w-10 bg-red-600 rounded mt-2 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {resumeData.skillCategories.map((cat, idx) => (
          <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="rounded-2xl p-5 bg-white/[0.015] border border-white/[0.04] hover:border-red-500/15 transition-all group">
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-red-400 font-semibold mb-4 pb-2 border-b border-white/[0.04]">{cat.title}</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {cat.skills.map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-red-500/10 transition-all">
                  <div className="p-1 rounded bg-red-500/10 text-red-400"><DynIcon name={s.iconName} className="w-3.5 h-3.5" /></div>
                  <span className="text-[12px] font-medium text-white/60 group-hover:text-white/80 transition-colors">{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
