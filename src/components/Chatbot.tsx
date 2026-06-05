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
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  const ask = (q: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: q }]);
    setTyping(true);
    setTimeout(() => {
      const qa = resumeData.chatbotQA.questions.find(x => x.question === q);
      let ans = "I didn't quite catch that. Try one of the suggested queries!";
      if (qa) { ans = qa.answer; }
      else {
        const lc = q.toLowerCase();
        if (lc.includes('skill') || lc.includes('tech')) ans = resumeData.chatbotQA.questions[0].answer;
        else if (lc.includes('experience') || lc.includes('jrs') || lc.includes('work')) ans = resumeData.chatbotQA.questions[1].answer;
        else if (lc.includes('project') || lc.includes('uptime') || lc.includes('monitor')) ans = resumeData.chatbotQA.questions[2].answer;
        else if (lc.includes('hire') || lc.includes('open') || lc.includes('contact') || lc.includes('opportunity')) ans = resumeData.chatbotQA.questions[3].answer;
      }
      setMessages(prev => [...prev, { sender: 'bot', text: ans }]);
      setTyping(false);
    }, 700);
  };

  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!input.trim()) return; ask(input); setInput(''); };

  return (
    <section id="ai-assistant" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

        {/* Left info */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold text-red-400 border border-red-500/20 bg-red-500/5 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3 animate-pulse" /> Interactive Agent
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">Ask My AI Agent</h2>
            <div className="h-0.5 w-10 bg-red-600 rounded mt-2" />
          </div>
          <p className="text-white/30 text-sm leading-relaxed">
            I integrate AI services (OpenAI API & N8N) in my workflows. This automated agent answers your questions about my skills, experience, and projects.
          </p>
          <div className="space-y-2.5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">Suggested</p>
            <div className="flex flex-wrap gap-2">
              {resumeData.chatbotQA.questions.map((q, i) => (
                <button key={i} onClick={() => ask(q.question)}
                  className="text-[11px] text-white/30 border border-white/[0.05] px-3 py-2 rounded-xl hover:border-red-500/20 hover:text-red-400 hover:bg-red-500/[0.03] transition-all text-left cursor-pointer">
                  {q.question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right chat */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-white/[0.06] bg-[#060606] h-[440px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-white/[0.04] flex items-center justify-between bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white/80">Yashveer's Assistant</p>
                  <p className="text-[9px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" /> Online
                  </p>
                </div>
              </div>
              <MessageSquare className="w-4 h-4 text-white/15" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start gap-2 max-w-[85%] ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] ${
                      m.sender === 'user' ? 'bg-red-600 text-white' : 'bg-white/[0.04] border border-white/[0.06] text-red-500'
                    }`}>
                      {m.sender === 'user' ? <User className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-[13px] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-red-600 text-white rounded-tr-sm'
                        : 'bg-white/[0.03] border border-white/[0.04] text-white/50 rounded-tl-sm'
                    }`}>{m.text}</div>
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[85%]">
                    <div className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/[0.06] text-red-500 flex items-center justify-center">
                      <Sparkles className="w-3 h-3 animate-spin" />
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.04] p-3 rounded-2xl rounded-tl-sm flex gap-1">
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form onSubmit={submit} className="px-3.5 py-3 border-t border-white/[0.04] flex gap-2 bg-white/[0.01]">
              <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about skills, projects..."
                className="flex-1 bg-white/[0.03] border border-white/[0.04] rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/15 focus:outline-none focus:border-red-500/30" />
              <button type="submit" className="p-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl transition-all cursor-pointer" aria-label="Send">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
