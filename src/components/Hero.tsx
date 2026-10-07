import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ExternalLink, ShieldCheck, Sparkles, RefreshCw, Award, Code2 } from 'lucide-react';
import { resumeData } from '../data';

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSubtitle, setActiveSubtitle] = useState("Click 'Play Video Intro' to hear Yashveer's introduction!");

  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const introText = `Hello! I am Yashveer Singh Chundawat, a Full-Stack MERN Developer and B.Tech CSE student at Government Engineering College, Ajmer. I specialize in building high-performance web applications, enterprise ERP integrations, and real-time SaaS platforms. I ranked 428 globally in TCS CodeVita Season 12. Welcome to my portfolio!`;

  const togglePlayIntro = () => {
    if (!('speechSynthesis' in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }

    if (isPlayingVideo) {
      window.speechSynthesis.cancel();
      setIsPlayingVideo(false);
      setActiveSubtitle("Audio paused.");
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(introText);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      utterance.onboundary = (event) => {
        const charIdx = event.charIndex;
        if (charIdx < 70) {
          setActiveSubtitle("🎤 'Hi! I'm Yashveer Singh Chundawat, Full-Stack MERN Developer...'");
        } else if (charIdx < 160) {
          setActiveSubtitle("🚀 'Specializing in React.js, Node.js, Next.js, REST APIs & Enterprise ERP integration...'");
        } else if (charIdx < 230) {
          setActiveSubtitle("🏆 'Ranked #428 Globally in TCS CodeVita Season 12!'");
        } else {
          setActiveSubtitle("✨ 'Explore my work, periodic table of skills, and projects below!'");
        }
      };

      utterance.onend = () => {
        setIsPlayingVideo(false);
        setActiveSubtitle("Introduction complete! Explore skills and achievements below.");
      };

      utterance.onerror = () => {
        setIsPlayingVideo(false);
      };

      synthRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlayingVideo(true);
    }
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-8 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Hero Title & Talking Intro Card */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest uppercase text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Hire & Roles • 2026</span>
          </motion.div>

          {/* Clean Black & White Big Headline */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05] font-sans">
              YASHVEER SINGH <br />
              <span className="text-white/40 font-serif italic font-normal">CHUNDAWAT</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/60 font-mono font-light max-w-xl leading-relaxed">
              Full-Stack Developer (MERN) specializing in React.js, Next.js, REST APIs & Enterprise ERP Integrations.
            </p>
          </motion.div>

          {/* Quick Badges */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-2.5 pt-1">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>TCS CodeVita Rank #428</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>MERN Stack Intern @ JRS Innovation</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Govt. Engg College Ajmer</span>
            </div>
          </motion.div>

          {/* TALKING HERO VIDEO / AVATAR PLAYER */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 rounded-2xl bg-zinc-950 border border-white/15 p-4 sm:p-5 relative overflow-hidden shadow-2xl group">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-semibold tracking-wider text-white uppercase flex items-center gap-1">
                  Talking AI Hero Intro <Sparkles className="w-3 h-3 text-white/60" />
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setIsMuted(!isMuted)} className="p-1.5 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Video / Graphic Canvas Area */}
            <div className="mt-3 relative h-36 sm:h-40 rounded-xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center p-4">
              
              {/* Animated Equalizer Waveform when playing */}
              {isPlayingVideo && (
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-30 pointer-events-none">
                  {[40, 70, 30, 90, 50, 80, 60, 100, 45, 85, 35, 75].map((h, idx) => (
                    <motion.div key={idx} animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse', delay: idx * 0.05 }}
                      className="w-1.5 bg-white rounded-full" />
                  ))}
                </div>
              )}

              {/* Avatar Photo / Visual Circle */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 ${isPlayingVideo ? 'border-white animate-pulse' : 'border-white/20'} bg-zinc-800 flex items-center justify-center overflow-hidden shadow-xl`}>
                    <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-white relative">
                      <span className="text-xl sm:text-2xl font-bold font-mono">YSC</span>
                      <span className="text-[9px] font-mono text-white/50">AJMER</span>
                    </div>
                  </div>
                  {isPlayingVideo && (
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-black p-1 rounded-full text-[10px] font-bold">
                      LIVE
                    </div>
                  )}
                </div>

                <div className="text-left space-y-1">
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">Yashveer Singh Chundawat</h4>
                  <p className="text-xs font-mono text-white/50">Full-Stack MERN Engineer</p>
                  <button onClick={togglePlayIntro}
                    className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all font-medium text-xs shadow-md">
                    {isPlayingVideo ? <><Pause className="w-3.5 h-3.5" /> Pause Audio</> : <><Play className="w-3.5 h-3.5 fill-current" /> Play Intro Video</>}
                  </button>
                </div>
              </div>
            </div>

            {/* Live Subtitle Bar */}
            <div className="mt-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80 text-center truncate">
              {activeSubtitle}
            </div>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg flex items-center gap-2">
              View Work & Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-transparent text-white border border-white/20 font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              Get In Touch
            </a>
          </motion.div>

        </div>

        {/* Right Column: FLIPPING DEVELOPER ID CARD */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          
          <div className="w-full max-w-sm perspective-1200 py-4">
            
            {/* Flip hint label */}
            <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3 px-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-white/70" /> VERIFIED DEVELOPER ID
              </span>
              <button onClick={() => setIsFlipped(!isFlipped)} className="hover:text-white flex items-center gap-1 transition-colors">
                <RefreshCw className="w-3 h-3" /> Flip Card
              </button>
            </div>

            {/* 3D Flippable Container */}
            <motion.div
              onClick={() => setIsFlipped(!isFlipped)}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[460px] preserve-3d cursor-pointer group"
            >
              {/* FRONT SIDE OF ID CARD */}
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-950 border border-white/20 p-6 flex flex-col justify-between shadow-2xl backface-hidden group-hover:border-white/40 transition-colors">
                
                {/* Header Strip */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block">Developer Identification</span>
                      <h3 className="text-lg font-bold font-mono tracking-wider text-white">GOVT ENGG COLLEGE</h3>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs text-white border border-white/20">
                      GECA
                    </div>
                  </div>

                  {/* Photo & Main Details */}
                  <div className="mt-6 flex gap-4 items-center">
                    <div className="w-20 h-24 rounded-xl bg-zinc-900 border border-white/20 flex flex-col items-center justify-center p-2 text-center relative overflow-hidden shadow-inner">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-sm">
                        YSC
                      </div>
                      <span className="text-[9px] font-mono text-white/60 mt-2">B.TECH CSE</span>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <div className="inline-block px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-semibold">
                        STATUS: ACTIVE
                      </div>
                      <h2 className="text-lg font-bold text-white leading-snug">Yashveer Singh</h2>
                      <p className="text-xs font-mono text-white/60">Full-Stack Developer</p>
                      <p className="text-[11px] font-mono text-white/40">ID: {resumeData.studentId}</p>
                    </div>
                  </div>

                  {/* Key Details List */}
                  <div className="mt-6 space-y-2 font-mono text-xs text-white/70">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/40">Specialization:</span>
                      <span className="font-semibold text-white">MERN & Next.js</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/40">CodeVita Rank:</span>
                      <span className="font-semibold text-white">#428 Global</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-white/40">Location:</span>
                      <span className="font-semibold text-white">Ajmer, India</span>
                    </div>
                  </div>
                </div>

                {/* Footer Barcode & Flip Callout */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="space-y-1 text-left">
                    <div className="h-6 w-32 flex gap-0.5 items-center opacity-70">
                      {[3,1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4].map((w, i) => (
                        <div key={i} className="h-full bg-white" style={{ width: `${(w % 3) + 1}px` }} />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">AUTHORIZATION KEY 2026</span>
                  </div>

                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1">
                    Flip 🔄
                  </span>
                </div>
              </div>

              {/* BACK SIDE OF ID CARD */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl bg-zinc-950 border border-white/20 p-6 flex flex-col justify-between shadow-2xl backface-hidden group-hover:border-white/40 transition-colors"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Credentials & Contact
                    </span>
                    <span className="text-[10px] font-mono text-white/40">GECA-2026</span>
                  </div>

                  <div className="mt-5 space-y-3 font-mono text-xs text-left">
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase">Email Contact:</span>
                      <a href={`mailto:${resumeData.email}`} className="text-white hover:underline text-xs">
                        {resumeData.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase">Phone:</span>
                      <a href={`tel:${resumeData.phone}`} className="text-white hover:underline text-xs">
                        {resumeData.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-white/40 block text-[10px] uppercase">Tech Stack:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "C++", "Oracle/Infor ERP"].map(t => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/90">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="mt-5 pt-3 border-t border-white/10 space-y-2">
                    <a href={resumeData.github} target="_blank" rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center justify-between transition-colors">
                      <span>GitHub Profile</span> <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center justify-between transition-colors">
                      <span>LinkedIn Profile</span> <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-center">
                  <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
                    • VERIFIED PORTFOLIO CREDENTIAL •
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
