import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, MessageSquare } from 'lucide-react';
import { resumeData } from '../data';
import type { ChatMessage } from '../data';

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'bot', text: resumeData.chatbotQA.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, typing]);

  const ask = (q: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: q }]);
    setTyping(true);
    setTimeout(() => {
      const qa = resumeData.chatbotQA.questions.find(x => x.question === q);
      let ans = "I didn't quite catch that. Try one of the suggested prompts below!";
      if (qa) {
        ans = qa.answer;
      } else {
        const lc = q.toLowerCase();
        if (lc.includes('codevita') || lc.includes('rank') || lc.includes('tcs')) {
          ans = resumeData.chatbotQA.questions[0].answer;
        } else if (lc.includes('skill') || lc.includes('tech') || lc.includes('stack')) {
          ans = resumeData.chatbotQA.questions[1].answer;
        } else if (lc.includes('experience') || lc.includes('intern') || lc.includes('jrs') || lc.includes('work')) {
          ans = resumeData.chatbotQA.questions[2].answer;
        } else if (lc.includes('project') || lc.includes('uptime') || lc.includes('saas') || lc.includes('rcm')) {
          ans = resumeData.chatbotQA.questions[3].answer;
        } else {
          ans = "Yashveer is a Full-Stack MERN Developer specializing in React.js, Node.js, Next.js, and REST APIs. He achieved Global Rank 428 in TCS CodeVita Season 12. Feel free to contact him at chundawatyashveer@gmail.com!";
        }
      }
      setMessages(prev => [...prev, { sender: 'bot', text: ans }]);
      setTyping(false);
    }, 600);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    ask(input);
    setInput('');
  };

  return (
    <section id="ai-assistant" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left font-mono">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-semibold text-white/80 border border-white/20 bg-white/5 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Interactive Agent
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white tracking-tight">
              Ask AI Assistant
            </h2>
          </div>
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            Get instant answers about Yashveer's skills, competitive achievements, internship experience, and full-stack projects.
          </p>
          <div className="space-y-2">
            <p className="text-[10px] uppercase text-white/40 tracking-widest">Suggested Queries:</p>
            <div className="flex flex-wrap gap-2">
              {resumeData.chatbotQA.questions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => ask(q.question)}
                  className="text-xs text-white/70 bg-zinc-950 border border-white/10 px-3 py-2 rounded-xl hover:border-white hover:text-white transition-all text-left cursor-pointer"
                >
                  {q.question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Chat Window */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/15 bg-zinc-950 h-[460px] flex flex-col overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center text-xs">
                  AI
                </div>
                <div>
                  <p className="text-xs font-bold text-white font-sans">Yashveer's Assistant</p>
                  <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online • Ready
                  </p>
                </div>
              </div>
              <MessageSquare className="w-4 h-4 text-white/40" />
            </div>

            {/* Message Area - Container Scoped Scroll */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start gap-2 max-w-[85%] ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold ${
                      m.sender === 'user' ? 'bg-white text-black' : 'bg-zinc-800 text-white border border-white/20'
                    }`}>
                      {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-white text-black font-medium rounded-tr-none'
                        : 'bg-zinc-900 border border-white/10 text-white/90 rounded-tl-none'
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 bg-zinc-900 border border-white/10 p-3 rounded-2xl text-xs text-white/50">
                    <Sparkles className="w-3.5 h-3.5 animate-spin text-amber-400" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={submit} className="px-4 py-3 border-t border-white/10 flex gap-2 bg-zinc-900/30">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask anything about Yashveer..."
                className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="p-2.5 bg-white text-black hover:bg-zinc-200 rounded-xl transition-all cursor-pointer font-bold"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
