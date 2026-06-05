import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Alejandro Pérez Fuentes | SysAdmin & DevSecOps Engineer',
  description:
    'Portfolio profesional de Alejandro Pérez Fuentes. Especialista en Cloud (AWS), Ciberseguridad, DevSecOps y automatización.',
  keywords: [
    'SysAdmin',
    'DevSecOps',
    'Cloud',
    'AWS',
    'Ciberseguridad',
    'Red Team',
    'Blue Team',
    'Alejandro Pérez Fuentes'
  ],
  openGraph: {
    title: 'Alejandro Pérez Fuentes | SysAdmin & DevSecOps Engineer',
    description: 'Cloud, Ciberseguridad y Automatización.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary font-sans selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
