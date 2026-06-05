import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone } from 'lucide-react';

const titles = ["MERN Stack Developer", "Front-End Engineer", "AI Automation Builder"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTitleIdx(i => (i + 1) % titles.length), 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background geometric circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-dashed border-white/[0.04] animate-spin-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white/[0.03] animate-spin-reverse" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-dotted border-red-500/10 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-red-600/[0.04] blur-[120px] animate-pulse-glow" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-red-800/[0.03] blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-5 max-w-6xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-white/30 font-medium mb-6">
          B.Tech CSE &nbsp;•&nbsp; Govt Engineering College, Ajmer &nbsp;•&nbsp; India
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1 initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hero-title text-[clamp(60px,15vw,180px)] text-white text-glow leading-[0.85]">
            YASHVEER
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1 initial={{ y: '100%', opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="hero-title text-[clamp(60px,15vw,180px)] text-white/20 leading-[0.85]">
            SINGH
          </motion.h1>
        </div>

        {/* Flanking labels */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-6 sm:gap-12 mt-8">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">Feb 2025 — Present</span>
          <div className="h-px w-12 bg-white/10" />
          <div className="h-5 overflow-hidden relative w-48">
            <motion.span key={titleIdx} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 text-[11px] tracking-[0.2em] uppercase text-red-500 font-semibold text-center">
              {titles[titleIdx]}
            </motion.span>
          </div>
          <div className="h-px w-12 bg-white/10" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-mono">Rank #428</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <a href="mailto:chundawatyashveer@gmail.com"
            className="flex items-center gap-2 text-[11px] tracking-wide text-white/40 border border-white/[0.06] px-4 py-2 rounded-full hover:text-white hover:border-white/20 transition-all">
            <Mail className="w-3.5 h-3.5" /> chundawatyashveer@gmail.com
          </a>
          <a href="tel:+917976438858"
            className="flex items-center gap-2 text-[11px] tracking-wide text-white/40 border border-white/[0.06] px-4 py-2 rounded-full hover:text-white hover:border-white/20 transition-all">
            <Phone className="w-3.5 h-3.5" /> +91-7976438858
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15">
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
