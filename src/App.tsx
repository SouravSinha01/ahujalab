/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { TeamSection } from './components/TeamSection';
import { AboutPISection } from './components/AboutPISection';
import { TeachingSection } from './components/TeachingSection';
import { PublicationsSection } from './components/PublicationsSection';
import { DatabaseSection } from './components/DatabaseSection';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleFooterNavigation = (tab: string, scrollTarget?: string) => {
    setActiveTab(tab);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (scrollTarget) {
      window.setTimeout(() => {
        document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <HeroSection 
              onExploreResearch={() => {
                setActiveTab('science');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }} 
              onMeetTeam={() => {
                setActiveTab('team');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }} 
            />
            <AboutSection />
          </>
        );
      case 'science':
        return <ResearchSection />;
      case 'team':
        return <TeamSection />;
      case 'about-pi':
        return <AboutPISection />;
      case 'teaching':
        return <TeachingSection />;
      case 'publications':
        return <PublicationsSection />;
      case 'database':
        return <DatabaseSection />;
      default:
        return (
          <>
            <HeroSection 
              onExploreResearch={() => {
                setActiveTab('science');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }} 
              onMeetTeam={() => {
                setActiveTab('team');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }} 
            />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <main className="min-h-screen bg-brand-dark text-brand-text selection:bg-brand-teal selection:text-brand-dark transition-colors duration-500 overflow-x-hidden relative">
      {/* Immersive Theme Switch Sweep Animation */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={theme}
          initial={{ opacity: 0.9, scale: 0.1, x: "40vw", y: "-40vh" }}
          animate={{ opacity: 0, scale: 3.5, x: "-20vw", y: "20vh" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed -top-[20vh] -right-[20vw] w-[100vmax] h-[100vmax] rounded-full pointer-events-none z-[100] blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-brand-teal/20 via-brand-teal/5 to-transparent' 
              : 'bg-gradient-to-br from-amber-400/25 via-amber-200/5 to-transparent'
          }`}
        />
      </AnimatePresence>

      <Navbar theme={theme} toggleTheme={toggleTheme} activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderActiveSection()}
      <Footer onNavigate={handleFooterNavigation} />
    </main>
  );
}
