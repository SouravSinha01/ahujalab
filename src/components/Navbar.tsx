import React, { useState, useEffect } from 'react';
import { Menu, X, FlaskConical, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { id: 'home', name: 'Home' },
  { id: 'science', name: 'Science' },
  { id: 'team', name: 'Team' },
  { id: 'about-pi', name: 'About PI' },
  { id: 'teaching', name: 'Teaching' },
  { id: 'publications', name: 'Publications' },
  { id: 'database', name: 'Lab Database' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 h-16 border-b transition-all duration-300 flex items-center px-6 md:px-12 ${
        isScrolled
          ? 'bg-brand-nav-bg border-brand-nav-border shadow-xs backdrop-blur-md'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between">
        {/* Lab Wordmark */}
        <div 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
            <FlaskConical className="w-4 h-4 text-brand-teal animate-pulse" />
          </div>
          <span className="font-syne font-bold text-base tracking-tight uppercase text-brand-text">
            Chemical Biology Lab
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative font-mono text-xs sm:text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-brand-teal font-semibold' : 'text-brand-text-muted hover:text-brand-text'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-teal"
                  />
                )}
              </button>
            );
          })}

          {/* Aesthetic Theme Switch (Desktop) */}
          <div className="ml-4 flex items-center">
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 bg-brand-dark/20 dark:bg-brand-teal/10 border border-brand-border hover:border-brand-teal/50 rounded-full flex items-center p-0.5 cursor-pointer transition-all select-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,229,204,0.15)] overflow-hidden"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle theme"
            >
              {/* Animated state background gradient */}
              <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-20 bg-gradient-to-r ${theme === 'light' ? 'from-amber-400 to-orange-400' : 'from-brand-teal to-brand-cobalt'}`} />
              
              {/* Subtle background icons indicator */}
              <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none text-brand-text-muted/30 z-0">
                <Sun className="w-3.5 h-3.5" />
                <Moon className="w-3.5 h-3.5" />
              </div>

              {/* Sliding glowing handle with spring animation */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`w-[22px] h-[22px] rounded-full flex items-center justify-center relative z-10 shadow-md transition-colors ${
                  theme === 'light' 
                    ? 'bg-amber-400 text-brand-dark shadow-amber-300/40 ml-0' 
                    : 'bg-brand-teal text-brand-dark shadow-[0_0_12px_#00E5CC] ml-auto'
                }`}
              >
                {theme === 'light' ? (
                  <Sun className="w-3 h-3 animate-pulse" />
                ) : (
                  <Moon className="w-3 h-3" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Aesthetic Theme Switch (Mobile) */}
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 bg-brand-dark/20 dark:bg-brand-teal/10 border border-brand-border hover:border-brand-teal/50 rounded-full flex items-center p-0.5 cursor-pointer transition-all select-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(0,229,204,0.15)] overflow-hidden"
            aria-label="Toggle theme"
          >
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none opacity-20 bg-gradient-to-r ${theme === 'light' ? 'from-amber-400 to-orange-400' : 'from-brand-teal to-brand-cobalt'}`} />
            
            <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none text-brand-text-muted/30 z-0">
              <Sun className="w-3.5 h-3.5" />
              <Moon className="w-3.5 h-3.5" />
            </div>

            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`w-[22px] h-[22px] rounded-full flex items-center justify-center relative z-10 shadow-md transition-colors ${
                theme === 'light' 
                  ? 'bg-amber-400 text-brand-dark shadow-amber-300/40 ml-0' 
                  : 'bg-brand-teal text-brand-dark shadow-[0_0_12px_#00E5CC] ml-auto'
              }`}
            >
              {theme === 'light' ? (
                <Sun className="w-3 h-3 animate-pulse" />
              ) : (
                <Moon className="w-3 h-3" />
              )}
            </motion.div>
          </button>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="p-1.5 text-brand-text hover:text-brand-teal transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="fixed inset-0 bg-brand-dark z-[100] flex flex-col p-6 md:p-12 transition-colors duration-500"
          >
            <div className="flex justify-between items-center h-16">
              <span className="font-syne font-bold text-base tracking-tight uppercase text-brand-text">
                Chemical Biology Lab
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-brand-text hover:text-brand-teal transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-6">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeTab === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`font-syne font-bold text-3xl md:text-5xl uppercase tracking-tighter text-left py-2 ${
                      isActive ? 'text-brand-teal' : 'text-brand-text-muted hover:text-brand-text'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
