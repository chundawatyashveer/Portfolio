import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Activity } from 'lucide-react';
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => { setStatus('done'); setForm({ name: '', email: '', subject: '', message: '' }); }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="hr-gradient mb-20" />
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-red-500 font-semibold mb-2">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">Let's Build Together</h2>
        <div className="h-0.5 w-10 bg-red-600 rounded mt-2 mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left info */}
        <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-white/[0.015] border border-white/[0.04] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-lg">Contact Details</h3>
            {[
              { icon: Mail, label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}`, id: 'email' },
              { icon: Phone, label: 'Phone', value: resumeData.phone, href: `tel:${resumeData.phone}`, id: 'phone' },
            ].map(item => (
              <div key={item.id} className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-red-500/15 transition-all group">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] text-white/20 uppercase tracking-wider">{item.label}</p>
                  <a href={item.href} className="text-[13px] font-medium text-white/50 hover:text-red-500 transition-colors truncate block">{item.value}</a>
                </div>
                <button onClick={() => copy(item.value, item.id)} className="text-white/15 hover:text-red-500 transition-colors p-1 cursor-pointer" aria-label={`Copy ${item.label}`}>
                  {copied === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="w-9 h-9 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div>
                <p className="text-[9px] text-white/20 uppercase tracking-wider">Location</p>
                <p className="text-[13px] font-medium text-white/50">{resumeData.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/[0.04] space-y-3">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">Follow</p>
            <div className="flex gap-3">
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[12px] font-medium text-white/30 hover:text-white hover:border-white/10 transition-all">
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[12px] font-medium text-white/30 hover:text-white hover:border-white/10 transition-all">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white/[0.015] border border-white/[0.04]">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="c-name" className="text-[10px] tracking-[0.2em] uppercase text-white/20">Name</label>
                <input id="c-name" type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="John Doe"
                  className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/10 focus:outline-none focus:border-red-500/30" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="c-email" className="text-[10px] tracking-[0.2em] uppercase text-white/20">Email</label>
                <input id="c-email" type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="john@example.com"
                  className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/10 focus:outline-none focus:border-red-500/30" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="c-sub" className="text-[10px] tracking-[0.2em] uppercase text-white/20">Subject</label>
              <input id="c-sub" type="text" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="Internship / Work"
                className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/10 focus:outline-none focus:border-red-500/30" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="c-msg" className="text-[10px] tracking-[0.2em] uppercase text-white/20">Message</label>
              <textarea id="c-msg" required rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Hi Yashveer, I saw your portfolio..."
                className="w-full bg-white/[0.02] border border-white/[0.04] rounded-xl px-4 py-2.5 text-[13px] text-white/70 placeholder-white/10 focus:outline-none focus:border-red-500/30 resize-none" />
            </div>
            <button type="submit" disabled={status === 'sending'}
              className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-500/10">
              {status === 'sending' ? <><Activity className="w-4 h-4 animate-spin" /> Sending...</> : status === 'done' ? <><Check className="w-4 h-4" /> Sent!</> : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
            {status === 'done' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[11px] text-emerald-400 text-center">
                Message sent successfully (simulated).
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
