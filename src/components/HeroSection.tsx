import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { VideoBackground } from './VideoBackground';

interface HeroSectionProps {
  onExploreResearch: () => void;
  onMeetTeam: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreResearch, onMeetTeam }) => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], [0, 150]);
  const contentY = useTransform(scrollY, [0, 1000], [0, -40]);
  const opacityFade = useTransform(scrollY, [0, 600], [1, 0]);

  const premiumTransition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1], // expo-out style
  };

  return (
    <div id="hero" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-500 pt-16">
      <motion.div style={{ y: bgY, opacity: opacityFade }} className="absolute inset-0 z-0">
        <VideoBackground url="https://res.cloudinary.com/dk6oziswk/video/upload/v1779185799/mp__el2hns.mp4" />
      </motion.div>

      {/* Grid Lines - Desktop Only */}
      {/* Grid Lines - Desktop Only */}
      <motion.div
        style={{ y: bgY }}
        className="hidden lg:block absolute inset-0 z-10 pointer-events-none opacity-40"
      >
        {[25, 50, 75].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pos}%`,
              background:
                'linear-gradient(to bottom, transparent, var(--brand-grid), transparent)',
            }}
          />
        ))}
      </motion.div>

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] flex items-center justify-center pointer-events-none z-10">
        <svg
          viewBox="0 0 800 400"
          className="w-[120%] lg:w-[800px] opacity-15 lg:opacity-35 blur-[35px]"
        >
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--brand-teal)" />
              <stop offset="100%" stopColor="var(--brand-cobalt)" stopOpacity={0.4} />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="200" rx="400" ry="150" fill="url(#glowGradient)" />
        </svg>
      </div>

      <motion.div 
        style={{ y: contentY }}
        className="relative z-20 max-w-[1600px] mx-auto w-full px-6 md:px-12 pt-16 md:pt-24 pb-12"
      >
        <div className="flex flex-col items-start gap-0">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...premiumTransition, delay: 0.1 }}
            className="font-mono font-bold text-xs md:text-sm text-brand-teal uppercase tracking-widest mb-4"
          >
            Chemical Biology · AI · Aging · Drug Discovery
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...premiumTransition, delay: 0.2 }}
            className="font-syne font-[800] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[0.95] tracking-tight max-w-[1000px] uppercase mb-8 text-brand-text transition-colors duration-500"
          >
            Laboratory where <br className="hidden md:block" />
            AI meets Chemistry & Biology <span className="text-brand-teal">.</span>
          </motion.h1>

          {/* Description - DM Mono as requested */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...premiumTransition, delay: 0.35 }}
            className="font-mono text-sm md:text-base leading-relaxed text-brand-text-muted max-w-[700px] mb-12"
          >
            Decoding the molecular language of life — where every compound encodes its therapeutic promise, toxicity risk, and the cellular programs it can influence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ ...premiumTransition, delay: 0.45 }}
            className="flex flex-wrap items-center gap-6 mb-16"
          >
            <button 
              onClick={onExploreResearch} 
              className="h-14 px-8 rounded-none bg-brand-teal text-brand-btn-text font-mono font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-brand-teal/90 hover:scale-[1.02] active:scale-95 transition-all shadow-xs"
            >
              Explore Our Research
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={onMeetTeam} 
              className="h-14 px-8 rounded-none border border-brand-border text-brand-text font-mono font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-brand-text/[0.05] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center"
            >
              Meet the Team
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ ...premiumTransition, delay: 0.6 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-brand-text-muted/60 uppercase tracking-widest transition-colors duration-500"
          >
            
            <span className="text-brand-border">•</span>
            <span>Est. 2019</span>
            <span className="text-brand-border">•</span>
            <span>IIIT-Delhi</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
