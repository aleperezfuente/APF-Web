'use client';

import React from 'react';
import { projects } from '../../lib/data';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Proyectos destacados</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className="glass-card p-5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="px-2 py-0.5 rounded-md bg-accent/10 border border-border/40 text-[10px] font-mono text-text-muted">
                  {p.status} · {p.year}
                </span>
              </div>

              <p className="text-sm text-text-secondary mb-3">{p.description}</p>

              <div className="mb-2 text-xs text-text-muted">
                <strong>Problema:</strong> {p.problem}
              </div>

              <ul className="mb-3 text-xs text-text-secondary list-disc pl-4 space-y-1 flex-1">
                {p.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
  {p.tech.map((t) => (
    <span
      key={t}
      className="
        px-2 py-0.5 rounded-md
        bg-surface/70
        border border-border/40
        text-[10px] font-mono text-text-muted
        hover:bg-accent/20
        hover:text-accent
        hover:border-accent/30
        transition-all duration-200
        cursor-default
      "
    >
      {t}
    </span>
  ))}
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}