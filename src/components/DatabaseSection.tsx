import React from 'react';
import { Database, Terminal } from 'lucide-react';
import { ScrollReveal, SpotlightCard } from './animations/ScrollReveal';

export const DatabaseSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-32 min-h-screen flex items-center justify-center relative overflow-hidden" id="database">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        <ScrollReveal variant="scaleIn" delay={0.1} className="max-w-xl w-full">
          <SpotlightCard 
            className="max-w-xl w-full border border-brand-border bg-brand-card dark:bg-[#0C0E12] p-12 text-center rounded-[2px] relative shadow-xs"
            glowColor="rgba(20, 184, 166, 0.15)"
          >
            {/* Subtle noise and background grid elements */}
            <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 left-12 w-[1px] h-full bg-brand-grid/20 pointer-events-none" />
            <div className="absolute top-0 right-12 w-[1px] h-full bg-brand-grid/20 pointer-events-none" />

            <div className="w-12 h-12 rounded-full border border-brand-border bg-brand-dark/30 flex items-center justify-center text-brand-teal mx-auto mb-8">
              <Database className="w-5 h-5 animate-pulse" />
            </div>

            <span className="font-mono text-xs text-brand-teal font-bold tracking-[0.2em] uppercase mb-4 block">
              [ CLOUD COMPUTATIONAL ASSETS ]
            </span>

            <h2 className="font-syne font-bold text-3xl uppercase tracking-tighter text-brand-text mb-6">
              Lab Database<span className="text-brand-teal">.</span>
            </h2>

            {/* DM Mono styled centered clean text to follow instructions strictly */}
            <div className="border-t border-b border-brand-border py-6 my-6">
              <p className="font-mono text-sm text-brand-text-muted leading-relaxed tracking-wide">
                Database coming soon. Tools, datasets, and computational resources will be listed here.
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 text-brand-text-muted/40 font-mono text-xs tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5" />
              <span>Ahuja Core Sync // Port 3000 Ready</span>
            </div>
          </SpotlightCard>
        </ScrollReveal>

      </div>
    </section>
  );
};
