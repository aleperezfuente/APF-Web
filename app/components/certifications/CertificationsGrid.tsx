'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../lib/data';

export default function CertificationsGrid() {
  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Certificaciones
        </motion.h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              className="glass-card p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="w-3 h-3 rounded-full bg-accent/70 shadow-glow" />
              <p className="text-sm text-text-secondary">{c.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
