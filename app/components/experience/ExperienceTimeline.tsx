'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../lib/data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Experiencia profesional
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/60 via-sky-500 to-indigo-500 opacity-30" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-12 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Node */}
              <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-accent/90 shadow-glow" />

              <div className="glass-card p-4 flex flex-col sm:flex-row gap-3 items-start">
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-xs text-text-muted font-mono">{exp.company} · {exp.period}</p>
                  <p className="text-sm text-text-secondary mt-2">{exp.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-accent/10 border border-border/40 text-[10px] font-mono text-text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
