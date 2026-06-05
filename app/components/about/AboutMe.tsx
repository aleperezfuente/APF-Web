'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { about, profile } from '../../lib/data';

export default function AboutMe() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Contenido principal */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-semibold tracking-tight">Sobre mí</h2>
            
            <p className="text-text-secondary leading-relaxed text-lg">
              {about.summary}
            </p>

            {/* Valores / Fortalezas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {about.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glass-card px-5 py-3.5 flex items-center gap-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-text-secondary">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tarjeta de contacto */}
          <motion.div
            className="w-full lg:w-[360px] glass-card p-8 space-y-6 sticky top-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl font-mono">
                APF
              </div>
              <div>
                <p className="font-semibold text-lg">{profile.name}</p>
                <p className="text-accent text-sm">SysAdmin & DevSecOps Engineer</p>
              </div>
            </div>

            <div className="h-px bg-border/50" />

            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span className="text-text-muted">Ubicación</span>
                <span>{profile.location}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-text-muted">Email</span>
                <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
                  {profile.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}