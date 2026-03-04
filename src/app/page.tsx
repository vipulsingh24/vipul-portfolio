"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '@/components/SplashScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import resumeData from '@/data/resume.json';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-blue-500/40 scroll-smooth">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
            <AnimatedBackground />

            <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
              <span className="font-bold tracking-tighter text-xl">VS.</span>
              <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest opacity-60">
                <a href="#experience" className="hover:text-blue-400">Experience</a>
                <a href="#skills" className="hover:text-blue-400">Skills</a>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
              </div>
            </nav>

            <Hero data={resumeData.basics} metrics={resumeData.metrics} />

            <section id="experience" className="container mx-auto px-6 py-24">
              <h2 className="text-4xl md:text-6xl font-bold mb-16">PROVEN <br/><span className="text-blue-500">EXPERIENCE</span></h2>
              <Experience items={resumeData.experience} />
            </section>

            <section id="skills">
              <Skills categories={resumeData.skills} />
            </section>

            <section id="contact" className="container mx-auto px-6 py-24 border-t border-white/5">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <Mail /> {resumeData.basics.email}
                  </a>
                  {resumeData.basics.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" className="flex items-center gap-2 hover:text-blue-400">
                      <ExternalLink size={18} /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}