import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Trophy, ExternalLink, Code2, CheckCircle2, Award, Zap } from 'lucide-react';
import { resumeData } from '../data';

export default function Projects() {
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollTrackRef.current) {
      scrollTrackRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left relative overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Sideways Reel Carousel</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
            Projects & Achievements
          </h2>
          <p className="text-white/50 text-sm font-mono mt-1">
            Horizontal scrolling showcase of key engineering projects & competitive ranks.
          </p>
        </div>

        {/* Carousel Navigation Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="p-3 rounded-xl bg-zinc-950 border border-white/15 text-white hover:bg-white hover:text-black transition-all shadow-md group"
            title="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 rounded-xl bg-zinc-950 border border-white/15 text-white hover:bg-white hover:text-black transition-all shadow-md group"
            title="Scroll Right"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* SIDEWAYS SCROLLING HORIZONTAL TRACK */}
      <div
        ref={scrollTrackRef}
        className="flex gap-6 overflow-x-auto scrollbar-none pb-6 snap-x snap-mandatory pt-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        
        {/* HIGHLIGHTED ACHIEVEMENT CARD: TCS CodeVita Rank #428 */}
        <div className="snap-start flex-none w-[340px] sm:w-[400px] rounded-2xl bg-zinc-950 border border-amber-500/30 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-amber-400 transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3 h-3" /> Competitive Rank
              </span>
              <span className="text-xs font-mono text-white/40">Dec 2024</span>
            </div>

            <div className="mt-4">
              <span className="text-4xl font-extrabold font-mono text-white block">RANK #428</span>
              <h3 className="text-lg font-bold text-white mt-1">TCS CodeVita Season 12</h3>
              <p className="text-xs text-white/60 font-mono mt-2 leading-relaxed">
                Shortlisted candidate out of 100,000+ competitive programmers globally in TCS CodeVita Season 12.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs font-mono text-amber-200/90 space-y-1">
              <div className="flex justify-between">
                <span>Global Participation:</span>
                <span className="font-bold text-white">100,000+ Coders</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className="font-bold text-emerald-400">Shortlisted</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-left">
            <span className="text-[10px] font-mono text-white/40 uppercase">Top 0.4% Global Coding Benchmark</span>
          </div>
        </div>

        {/* PROJECT CARDS */}
        {resumeData.projects.map((proj) => (
          <div
            key={proj.title}
            className="snap-start flex-none w-[340px] sm:w-[420px] rounded-2xl bg-zinc-950 border border-white/15 p-6 flex flex-col justify-between shadow-2xl relative group hover:border-white/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                  {proj.category}
                </span>
                <span className="text-xs font-mono text-white/40">Production SaaS</span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">{proj.title}</h3>
                <p className="text-xs text-white/60 font-mono mt-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {proj.stack.map(tech => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/80">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics bullet list */}
              <div className="mt-5 p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5 font-mono text-xs text-white/70">
                {proj.metrics.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-6">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-white/60 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Code2 className="w-4 h-4" /> Source Code
              </a>
              <a
                href={proj.demo}
                className="px-3 py-1.5 rounded-lg bg-white text-black font-semibold text-xs flex items-center gap-1 hover:bg-zinc-200 transition-colors"
              >
                Live Preview <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}

        {/* ENTERPRISE ERP INTEGRATION HIGHLIGHT CARD */}
        <div className="snap-start flex-none w-[340px] sm:w-[400px] rounded-2xl bg-zinc-950 border border-purple-500/30 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-purple-400 transition-all">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Zap className="w-3 h-3" /> Enterprise Feature
              </span>
              <span className="text-xs font-mono text-white/40">2025</span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-white">Oracle & Infor ERP Integrations</h3>
              <p className="text-xs text-white/60 font-mono mt-2 leading-relaxed">
                Integrated enterprise Oracle ERP and Infor systems to enable secure automated data synchronization and workflow automation for enterprise clients at JRS Innovation.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs font-mono text-purple-200/90 space-y-1">
              <div className="flex justify-between">
                <span>Security:</span>
                <span className="font-bold text-white">JWT + RBAC</span>
              </div>
              <div className="flex justify-between">
                <span>Systems:</span>
                <span className="font-bold text-white">Oracle & Infor ERP</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-left">
            <span className="text-[10px] font-mono text-white/40 uppercase">Production Enterprise Sync</span>
          </div>
        </div>

      </div>

      {/* Sideways Scroll Indicator Hint */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs font-mono text-white/30">
        <span>👈 Drag or click arrows to scroll achievements & projects sideways 👉</span>
      </div>

    </section>
  );
}
