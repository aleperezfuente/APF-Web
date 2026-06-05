'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../lib/data';

export default function EducationTimeline() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Formación académica
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 via-sky-500 to-accent opacity-30" />

          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative pl-12 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-indigo-500/90 shadow-glow" />

              <div className="glass-card p-4 flex flex-col sm:flex-row gap-3 items-start">
                <div className="flex-1 space-y-1.5">
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <p className="text-xs text-text-muted font-mono">{edu.institution} · {edu.period}</p>
                  {edu.note && (
                    <p className="text-xs text-accent/90 mt-1">{edu.note}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
