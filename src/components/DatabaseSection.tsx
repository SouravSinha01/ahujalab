import React from 'react';
import { BookOpen, Database, ExternalLink } from 'lucide-react';
import { ScrollReveal, SpotlightCard } from './animations/ScrollReveal';

const DATABASES = [
  {
    name: 'EvOlf',
    description: 'A deep-learning platform for predicting agonist–GPCR interactions across mammalian species.',
    url: 'https://evolf.ahujalab.iiitd.edu.in/',
    paperUrl: 'https://doi.org/10.1016/j.celrep.2026.117003',
  },
];

export const DatabaseSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-32 min-h-screen relative overflow-hidden" id="database">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

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
