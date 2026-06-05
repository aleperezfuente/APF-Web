'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { profile } from '../../lib/data';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left content */}
        <div className="flex-1 text-left space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-accent/80 font-mono">
              SysAdmin & DevSecOps Engineer
            </p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-text-primary">{profile.name}</span>
          </motion.h1>

          <motion.p
            className="text-lg text-text-secondary max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
  className="flex flex-wrap gap-3 mt-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.25 }}
>
  <a
    href="#projects"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-accent text-black font-semibold shadow-lg shadow-accent/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
  >
    Ver proyectos
    <ArrowRight size={18} />
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/50 hover:border-accent text-text-secondary hover:text-accent transition-all duration-300"
  >
    <Mail size={18} />
    Contactar
  </a>
</motion.div>

          {/* Subtle stats */}
          <motion.div
            className="mt-8 flex gap-4 text-xs text-text-muted font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <span>AWS & Linux</span>
            <span>·</span>
            <span>DevSecOps</span>
            <span>·</span>
            <span>Red/Blue Team</span>
          </motion.div>
        </div>

        {/* Right visual */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <motion.div
            className="relative w-[260px] h-[340px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-indigo-500/40 blur-xl opacity-60" />
            <div className="relative w-full h-full glass-card flex items-center justify-center">
              {/* Placeholder for avatar */}
              <div className="flex flex-col items-center gap-2 text-text-secondary">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-border/50 flex items-center justify-center">
                  <span className="text-xs font-mono">APF</span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-text-muted">
                  SysAdmin & DevSecOps
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

            {/* Scroll Indicator Mejorado */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[2px] text-accent/50 font-mono">
          SCROLL
        </span>
        
        <div className="w-8 h-12 rounded-full border border-border/40 flex items-center justify-center p-1">
          <motion.div
            className="w-1.5 h-3 bg-accent rounded-full"
            animate={{ 
              y: [0, 18, 0] 
            }}
            transition={{ 
              duration: 2.2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </section>
  );
}
