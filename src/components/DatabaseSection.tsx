import React from 'react';
import { BookOpen, Database, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal, SpotlightCard, usePrefersReducedMotion } from './animations/ScrollReveal';

const DATABASES = [
  {
    name: 'EvOlf',
    description: 'A deep-learning platform for predicting agonist–GPCR interactions across mammalian species.',
    url: 'https://evolf.ahujalab.iiitd.edu.in/',
    paperUrl: 'https://doi.org/10.1016/j.celrep.2026.117003',
  },
];

const DatabaseBackdrop: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full text-brand-teal"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <circle cx="1030" cy="120" r="230" stroke="currentColor" strokeOpacity="0.05" />
        <circle cx="1030" cy="120" r="155" stroke="currentColor" strokeOpacity="0.07" />
        <path
          d="M-80 590C170 420 315 520 500 388C690 252 790 350 1280 116"
          stroke="currentColor"
          strokeOpacity="0.06"
        />

        <motion.g
          initial={false}
          whileInView={prefersReducedMotion ? undefined : { x: [0, 14, 0], y: [0, -10, 0], rotate: [0, 1.5, 0] }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 20, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: '600px 350px' }}
        >
          <g stroke="currentColor" strokeOpacity="0.11">
            <path d="M92 178L238 112L352 226L514 146" />
            <path d="M238 112L286 346L352 226" />
            <path d="M286 346L472 430L602 306L760 382" />
            <path d="M514 146L602 306L782 190L936 274" />
            <path d="M760 382L936 274L1088 410" />
            <path d="M472 430L630 548L824 502L1088 410" />
          </g>

          <g fill="currentColor">
            <circle cx="92" cy="178" r="4" fillOpacity="0.18" />
            <circle cx="238" cy="112" r="6" fillOpacity="0.22" />
            <circle cx="352" cy="226" r="4" fillOpacity="0.16" />
            <circle cx="286" cy="346" r="5" fillOpacity="0.2" />
            <circle cx="514" cy="146" r="7" fillOpacity="0.18" />
            <circle cx="472" cy="430" r="4" fillOpacity="0.18" />
            <circle cx="602" cy="306" r="6" fillOpacity="0.24" />
            <circle cx="760" cy="382" r="4" fillOpacity="0.18" />
            <circle cx="782" cy="190" r="5" fillOpacity="0.2" />
            <circle cx="936" cy="274" r="7" fillOpacity="0.2" />
            <circle cx="1088" cy="410" r="5" fillOpacity="0.18" />
            <circle cx="630" cy="548" r="4" fillOpacity="0.16" />
            <circle cx="824" cy="502" r="6" fillOpacity="0.2" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

export const DatabaseSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-32 min-h-screen relative overflow-hidden" id="database">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <DatabaseBackdrop />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full relative z-10">
        <ScrollReveal variant="fadeUp" delay={0.1} className="max-w-2xl mb-12">
          <h2 className="font-syne font-bold text-4xl sm:text-5xl uppercase tracking-tighter text-brand-text mb-4">
            Databases &amp; Tools<span className="text-brand-teal">.</span>
          </h2>
          <p className="font-instrument text-xl text-brand-text-muted leading-relaxed">
            Explore computational resources developed by the lab.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATABASES.map((database) => (
            <ScrollReveal key={database.name} variant="scaleIn" delay={0.15}>
              <SpotlightCard
                className="border border-brand-border bg-brand-card dark:bg-[#0C0E12] p-6 rounded-[2px] relative shadow-xs h-full"
                glowColor="rgba(20, 184, 166, 0.15)"
              >
                <article className="relative z-10 flex flex-col h-full">
                  <div className="w-11 h-11 rounded-full border border-brand-border bg-brand-dark/30 flex items-center justify-center text-brand-teal mb-6">
                    <Database className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="font-syne font-bold text-2xl uppercase tracking-tight text-brand-text mb-3">
                    {database.name}
                  </h3>
                  <p className="font-mono text-sm text-brand-text-muted leading-relaxed mb-6">
                    {database.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    <a
                      href={database.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 px-4 py-3 inline-flex items-center justify-center gap-2 bg-brand-teal text-brand-text dark:text-brand-btn-text font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 rounded-[2px] transition-colors duration-200 hover:bg-brand-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                    >
                      Open
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href={database.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 px-4 py-3 inline-flex items-center justify-center gap-2 border border-brand-border bg-brand-dark/10 text-brand-text font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 rounded-[2px] transition-colors duration-200 hover:border-brand-teal hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                    >
                      Paper
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
