'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { contact } from '../../lib/data';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Aquí se conectaría con tu backend o servicio de email.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Info */}
        <motion.div
          className="flex-1 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-semibold">Contacto</h2>

          <p className="text-text-secondary text-sm leading-relaxed">
            Disponible para roles en SysAdmin, DevSecOps, Cloud y Ciberseguridad. Si buscas perfiles orientados a resultados y seguridad continua, escríbeme.
          </p>

          <ul className="space-y-2 text-sm text-text-muted mt-4">
            <li className="flex items-center gap-2">
              <Mail size={14} /> {contact.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> {contact.location}
            </li>
          </ul>

          {/* Social placeholders */}
          <div className="mt-3 flex gap-3 text-xs font-mono text-text-muted">
            <a href="https://github.com/aleperezfuente" className="hover:text-accent transition-colors">GitHub</a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/alejandro-perez-fuentes/" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="w-full md:w-[420px] glass-card p-5 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="w-full px-3 py-2 rounded-lg bg-surface/70 border border-border/40 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-all"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-3 py-2 rounded-lg bg-surface/70 border border-border/40 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-all"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Mensaje"
              required
              className="w-full px-3 py-2 rounded-lg bg-surface/70 border border-border/40 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-all resize-y"
            />

<button
  type="submit"
  disabled={status !== 'idle'}
  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-accent hover:bg-white text-black font-semibold shadow-lg shadow-accent/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95"
>
  <Send size={18} />
  {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje Enviado ✓' : 'Enviar Mensaje'}
</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
