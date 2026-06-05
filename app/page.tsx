'use client';

import React from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutMe from './components/about/AboutMe';
// import ExperienceTimeline from './components/experience/ExperienceTimeline';
import ProjectsGrid from './components/projects/ProjectsGrid';
import SkillsMatrix from './components/skills/SkillsMatrix';
// import CertificationsGrid from './components/certifications/CertificationsGrid';
// import EducationTimeline from './components/education/EducationTimeline';
import ContactSection from './components/contact/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <AboutMe />
      {/* <ExperienceTimeline /> */}
      <ProjectsGrid />
      <SkillsMatrix />
      {/* <CertificationsGrid /> */}
      {/* <EducationTimeline /> */}
      <ContactSection />
    </main>
  );
}