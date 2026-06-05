import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-display text-lg tracking-wider group-hover:scale-105 transition-transform">YS</span>
          <span className="font-heading font-semibold text-sm tracking-[0.15em] text-white/80 uppercase hidden sm:inline">
            Yashveer<span className="text-white/30">.dev</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[11px] font-medium tracking-[0.2em] uppercase text-white/40">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors duration-300">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#ai-assistant" className="hidden md:flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-red-400 border border-red-500/20 bg-red-500/5 px-3 py-1.5 rounded-full hover:bg-red-500/10 transition-all">
            <Sparkles className="w-3 h-3" /> AI Bot
          </a>
          <button className="md:hidden text-white/60 hover:text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/[0.04] px-5 pb-5 space-y-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-white/50 hover:text-white transition-colors">{l.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
