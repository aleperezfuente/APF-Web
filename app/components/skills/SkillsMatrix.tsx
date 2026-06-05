'use client';

import React from 'react';
import { skills } from '../../lib/data';

export default function SkillsMatrix() {
  const categories = [
    { label: 'Cloud & DevOps', items: [...skills.cloudDevOps, ...skills.devOpsTools] },
    { label: 'Blue Team', items: skills.blueTeam },
    { label: 'Red Team', items: skills.redTeam },
    { label: 'Programación y BD', items: [...skills.programming, ...skills.databases] },
    { label: 'Sistemas Operativos y Redes', items: skills.osNetworks }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Habilidades técnicas</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="glass-card p-4 flex flex-col"
            >
              <h3 className="text-sm font-semibold mb-2">{cat.label}</h3>

              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-2 py-0.5 rounded-md bg-accent/10 border border-border/40 text-[10px] font-mono text-text-muted 
                               hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all duration-200"
                  >
                    {item}
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