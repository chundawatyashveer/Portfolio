import { motion } from 'framer-motion';
import { Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { resumeData } from '../data';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-semibold mb-2">Featured Work</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">Key Projects</h2>
        <div className="h-0.5 w-10 bg-red-600 rounded mt-2 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {resumeData.projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl p-6 sm:p-8 bg-white/[0.015] border border-white/[0.04] hover:border-red-500/15 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 opacity-60" />

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-red-300 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.stack.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.04] text-white/40">{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-white/30 text-sm leading-relaxed">{project.description}</p>

              {/* Metrics */}
              <div className="p-4 rounded-xl bg-red-500/[0.03] border border-red-500/[0.08]">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-red-400 font-semibold flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3 h-3" /> Impact Metrics
                </h4>
                <ul className="space-y-1.5 text-[12px] text-white/40">
                  {project.metrics.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-white/[0.04] pt-5 mt-6">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] text-white/25 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" /> Source Code
              </a>
              <a href={project.demo} className="flex items-center gap-1.5 text-[12px] font-semibold text-red-400 hover:text-red-300 transition-colors">
                Live Preview <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
