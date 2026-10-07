import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Chatbot from './components/Chatbot';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to the top of the page on refresh/mount
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="grain-overlay">
      <Navbar />
      <Hero />
      <main className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Chatbot />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8 mt-12 font-mono">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/30 tracking-wide">
          <span className="font-medium text-white/50">Yashveer Singh Chundawat &copy; {new Date().getFullYear()}</span>
          <span>Built with React + Tailwind CSS v4</span>
        </div>
      </footer>
    </div>
  );
}
