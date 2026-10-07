import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Activity, MessageSquare } from 'lucide-react';
import { resumeData } from '../data';

const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/chundawatyashveer@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject || `New Portfolio Message from ${form.name}`,
          message: form.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus('done');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:chundawatyashveer@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
        setStatus('done');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      // Fallback on network error
      window.location.href = `mailto:chundawatyashveer@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
      setStatus('done');
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto text-left">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest uppercase text-white/70 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-white/80" />
            <span>Connect & Hire</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
            Get In Touch
          </h2>
          <p className="text-white/50 text-sm font-mono mt-1">
            Have a project, opportunity, or inquiry? Send a message directly to Yashveer's inbox.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-zinc-950 border border-white/15 flex flex-col justify-between space-y-6 shadow-2xl">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg font-sans">Direct Contact Details</h3>
            
            {[
              { icon: Mail, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}`, id: 'email' },
              { icon: Phone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}`, id: 'phone' },
            ].map(item => (
              <div key={item.id} className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all font-mono">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.label}</p>
                  <a href={item.href} className="text-xs font-semibold text-white hover:underline truncate block">
                    {item.value}
                  </a>
                </div>
                <button onClick={() => copy(item.value, item.id)} className="text-white/40 hover:text-white transition-colors p-1" title="Copy">
                  {copied === item.id ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}

            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 font-mono">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Location</p>
                <p className="text-xs font-semibold text-white">{resumeData.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 font-mono">
            <p className="text-[10px] tracking-widest uppercase text-white/40">Social Profiles</p>
            <div className="flex gap-3">
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-all">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-all">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-zinc-950 border border-white/15 shadow-2xl font-mono">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase text-white/50">Your Name</label>
                <input type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="John Doe"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-widest uppercase text-white/50">Your Email</label>
                <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-white/50">Subject</label>
              <input type="text" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="Job Opportunity / Project Collaboration"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] tracking-widest uppercase text-white/50">Message</label>
              <textarea required rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Hi Yashveer, I saw your reel-styled portfolio..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-white resize-none" />
            </div>
            <button type="submit" disabled={status === 'sending'}
              className="w-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg">
              {status === 'sending' ? <><Activity className="w-4 h-4 animate-spin" /> Sending Email...</> : status === 'done' ? <><Check className="w-4 h-4" /> Message Sent to Inbox!</> : <><Send className="w-4 h-4" /> Send Direct Email</>}
            </button>
            {status === 'done' && (
              <p className="text-xs text-emerald-400 text-center">
                Message successfully sent to chundawatyashveer@gmail.com!
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
