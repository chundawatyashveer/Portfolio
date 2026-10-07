import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Periodic Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects & Ranks', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between font-mono">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="h-9 w-9 rounded-xl bg-white text-black font-extrabold flex items-center justify-center text-sm tracking-wider shadow-lg">
            YSC
          </span>
          <span className="font-bold text-sm tracking-widest text-white uppercase hidden sm:inline font-sans">
            Yashveer<span className="text-white/40 font-mono">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#ai-assistant"
            className="hidden md:flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-white border border-white/20 bg-white/5 px-3.5 py-1.5 rounded-xl hover:bg-white hover:text-black transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Ask AI
          </a>
          <button className="md:hidden text-white/80 hover:text-white p-1" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-t border-white/10 px-5 py-4 space-y-2 font-mono text-xs uppercase tracking-widest"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
