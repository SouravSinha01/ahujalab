import React from 'react';
import { BookOpen, Database, ExternalLink, Network } from 'lucide-react';
import { ScrollReveal, SpotlightCard } from './animations/ScrollReveal';

export const DatabaseSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-32 min-h-screen flex items-center justify-center relative overflow-hidden" id="database">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full flex flex-col items-center">
        
        <ScrollReveal variant="scaleIn" delay={0.1} className="max-w-5xl w-full">
          <SpotlightCard 
            className="max-w-5xl w-full border border-brand-border bg-brand-card dark:bg-[#0C0E12] p-6 sm:p-8 lg:p-12 rounded-[2px] relative shadow-xs"
            glowColor="rgba(20, 184, 166, 0.15)"
          >
            <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 left-12 w-[1px] h-full bg-brand-grid/20 pointer-events-none" />
            <div className="absolute top-0 right-12 w-[1px] h-full bg-brand-grid/20 pointer-events-none" />

            <article className="relative z-10">
              <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(17rem,0.75fr)] gap-10 lg:gap-14 items-start">
                <div>
                  <div className="w-12 h-12 rounded-full border border-brand-border bg-brand-dark/30 flex items-center justify-center text-brand-teal mb-8">
                    <Database className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h2 className="font-syne font-bold text-4xl sm:text-5xl uppercase tracking-tighter text-brand-text mb-5">
                    EvOlf<span className="text-brand-teal">.</span>
                  </h2>

                  <p className="font-instrument text-xl sm:text-2xl text-brand-text leading-relaxed mb-5">
                    Evolutionary-guided intelligence for mammalian GPCR–ligand discovery.
                  </p>

                  <p className="font-mono text-sm text-brand-text-muted leading-relaxed max-w-2xl">
                    EvOlf is a curated GPCR interaction database and deep-learning platform for predicting agonist–receptor binding. It unifies odorant and non-odorant receptors across mammalian species to support receptor deorphanization and the discovery of potential ligands.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <a
                      href="https://evolf.ahujalab.iiitd.edu.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 px-5 py-3 inline-flex items-center justify-center gap-2 bg-brand-teal text-brand-text dark:text-brand-btn-text font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 rounded-[2px] transition-colors duration-200 hover:bg-brand-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                    >
                      Open EvOlf
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href="https://doi.org/10.1016/j.celrep.2026.117003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-11 px-5 py-3 inline-flex items-center justify-center gap-2 border border-brand-border bg-brand-dark/10 text-brand-text font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 rounded-[2px] transition-colors duration-200 hover:border-brand-teal hover:text-brand-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                    >
                      Read the paper
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <aside className="border-t lg:border-t-0 lg:border-l border-brand-border pt-8 lg:pt-0 lg:pl-10" aria-label="EvOlf research highlights">
                  <div className="flex items-center gap-3 mb-6">
                    <Network className="w-5 h-5 text-brand-teal shrink-0" aria-hidden="true" />
                    <h3 className="font-syne font-bold text-lg uppercase tracking-tight text-brand-text">
                      Research highlights
                    </h3>
                  </div>

                  <dl className="space-y-6">
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-1">Evidence base</dt>
                      <dd className="font-syne font-bold text-xl text-brand-text">105,235 validated interactions</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-1">Evolutionary coverage</dt>
                      <dd className="font-syne font-bold text-xl text-brand-text">24 mammalian species</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widest text-brand-text-muted mb-1">Reported performance</dt>
                      <dd className="font-syne font-bold text-xl text-brand-text">AUC 0.97</dd>
                    </div>
                  </dl>
                </aside>
              </div>

              <div className="border-t border-brand-border mt-10 pt-6">
                <p className="font-mono text-xs text-brand-text-muted leading-relaxed">
                  Associated article: <span className="text-brand-text">“Evolutionary-guided advanced deep-learning architecture powers mammalian GPCRome agonist predictions”</span> · Cell Reports (2026)
                </p>
              </div>
            </article>
          </SpotlightCard>
        </ScrollReveal>

      </div>
    </section>
  );
};
