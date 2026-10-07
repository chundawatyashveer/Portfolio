import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, User } from 'lucide-react';
import { resumeData } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Stats & Info Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-sm rounded-2xl bg-zinc-950 border border-white/15 p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center font-mono font-bold text-3xl text-white shadow-xl">
                YSC
              </div>
              <h3 className="text-xl font-bold font-sans text-white mt-4">{resumeData.name}</h3>
              <p className="text-xs font-mono text-white/60 mt-1">{resumeData.title}</p>
              
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-white/40">
                <MapPin className="w-3.5 h-3.5 text-white/60" />
                <span>{resumeData.location}</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6 w-full pt-6 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono">
                  <p className="text-xl font-bold text-white">#428</p>
                  <p className="text-[10px] text-white/50 uppercase mt-0.5">CodeVita Rank</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center font-mono">
                  <p className="text-xl font-bold text-white">10K+</p>
                  <p className="text-[10px] text-white/50 uppercase mt-0.5">Checks/Day</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Detail Text */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-3">
              <User className="w-3.5 h-3.5 text-white/80" />
              <span>Background & Summary</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              About Yashveer
            </h2>
          </div>

          <p className="text-white/70 text-sm sm:text-base font-mono leading-relaxed">
            {resumeData.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono">
            
            {/* Education Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Education</span>
              </div>
              <p className="text-xs text-white/90 font-semibold">{resumeData.education[0].degree}</p>
              <p className="text-[11px] text-white/50">{resumeData.education[0].school}</p>
              <p className="text-[10px] text-emerald-400">{resumeData.education[0].period}</p>
            </div>

            {/* Achievement Card */}
            <div className="p-5 rounded-2xl bg-zinc-950 border border-white/15 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Competitive Coding</span>
              </div>
              <p className="text-xs text-white/90 font-semibold">{resumeData.achievements[0].title}</p>
              <p className="text-[11px] text-white/50">{resumeData.achievements[0].detail}</p>
              <p className="text-[10px] text-amber-400">{resumeData.achievements[0].date}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
