import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Code2, Cpu, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative w-72 h-80 sm:w-80 sm:h-[360px]">
            <div className="absolute inset-0 rounded-2xl border border-white/[0.04] bg-white/[0.01]" />
            <div className="absolute -top-3 -left-3 p-2 rounded-lg bg-black border border-white/[0.06] animate-float z-10">
              <Code2 className="w-5 h-5 text-red-400" />
            </div>
            <div className="absolute -bottom-3 -right-3 p-2 rounded-lg bg-black border border-white/[0.06] animate-float-delayed z-10">
              <Server className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="absolute top-1/2 -right-4 p-2 rounded-lg bg-black border border-white/[0.06] animate-float z-10">
              <Cpu className="w-5 h-5 text-blue-400" />
            </div>
            <div className="absolute inset-3 rounded-xl bg-[#0a0a0a] border border-white/[0.04] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-3xl font-display tracking-wider text-white shadow-lg shadow-red-500/15">
                YS
              </div>
              <h3 className="font-heading font-bold text-lg mt-4 text-white">Yashveer Singh</h3>
              <p className="text-red-400 text-[11px] font-semibold tracking-[0.15em] uppercase mt-1">MERN Developer</p>
              <p className="text-white/25 text-xs mt-3 flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Rajasthan, India</p>
              <div className="grid grid-cols-2 gap-3 mt-6 w-full">
                <div className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5 text-center">
                  <p className="text-white font-heading text-lg font-bold">100+</p>
                  <p className="text-white/25 text-[9px] tracking-wider uppercase">Endpoints</p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.04] rounded-lg p-2.5 text-center">
                  <p className="text-white font-heading text-lg font-bold">10K+</p>
                  <p className="text-white/25 text-[9px] tracking-wider uppercase">Checks/Day</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-semibold mb-2">Who Am I</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">About Me</h2>
            <div className="h-0.5 w-10 bg-red-600 rounded mt-2" />
          </div>
          <p className="text-white/40 leading-relaxed text-[15px]">
            I am a student-developer pursuing B.Tech in Computer Science and Engineering. I specialize in building end-to-end web architectures — combining clean, intuitive front-ends with resilient backend workflows.
          </p>
          <p className="text-white/40 leading-relaxed text-[15px]">
            My passion lies in automation and integration: I've built SaaS utilities like Uptime Monitors and connected enterprise systems (Oracle ERP, Infor) to modern web interfaces. I thrive using Git/Agile and love algorithmic problem-solving.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-red-500/15 transition-colors">
              <GraduationCap className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">B.Tech — CSE</h4>
                <p className="text-white/25 text-xs mt-0.5">Govt Engg College, Ajmer</p>
                <p className="text-red-400/60 text-[10px] mt-0.5">2022 — Present</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-red-500/15 transition-colors">
              <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm">Rank #428 — CodeVita</h4>
                <p className="text-white/25 text-xs mt-0.5">TCS CodeVita Season 12</p>
                <p className="text-amber-400/60 text-[10px] mt-0.5">Shortlisted • Dec 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
