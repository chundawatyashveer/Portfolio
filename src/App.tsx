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
      <footer className="border-t border-white/[0.04] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/15 tracking-wide">
          <span className="font-medium text-white/25">Yashveer Singh Chundawat &copy; {new Date().getFullYear()}</span>
          <span>Built with React + Tailwind CSS v4</span>
        </div>
      </footer>
    </div>
  );
}
