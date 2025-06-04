import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { ProjectExploration } from '@/components/sections/ProjectExploration';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <ProjectExploration />
      <Contact />
      <Footer />
      
      {/* Circle decorations */}
      <div className="fixed pointer-events-none z-[-1]">
        <svg width="509" height="1068" viewBox="0 0 509 1068" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.06" cx="-97.9832" cy="606.017" r="493.017" stroke="#123293" strokeWidth="226"/>
        </svg>
      </div>
      <div className="fixed pointer-events-none z-[-1] right-0">
        <svg width="395" height="1213" viewBox="0 0 395 1213" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.06" cx="606.017" cy="606.017" r="493.017" stroke="#123293" strokeWidth="226"/>
        </svg>
      </div>
    </main>
  );
}
