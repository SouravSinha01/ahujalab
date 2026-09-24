import React, { useRef } from 'react';
import { BookOpen, Database, ExternalLink } from 'lucide-react';
import { useInView } from 'motion/react';
import {
  ScrollReveal,
  SpotlightCard,
  StaggerChild,
  StaggerContainer,
  usePrefersReducedMotion,
} from './animations/ScrollReveal';

const DATABASES = [
  {
    name: 'EvOlf',
    category: 'Mammalian GPCRome',
    description: 'A deep-learning platform for predicting agonist–GPCR interactions across mammalian species.',
    url: 'https://evolf.ahujalab.iiitd.edu.in/',
    paperUrl: 'https://doi.org/10.1016/j.celrep.2026.117003',
  },
  {
    name: 'OdoriFy',
    category: 'Human olfaction',
    description: 'An open-source AI web server for predicting and explaining human olfactory receptor–odorant interactions.',
    url: 'https://odorify.ahujalab.iiitd.edu.in/olfy/',
    paperUrl: 'https://dx.doi.org/10.1016/J.JBC.2021.100956',
  },
];

const NETWORK_PATHS = [
  'M40 100L185 180L340 90L505 220L670 115L835 245L1015 105L1160 205',
  'M75 430L260 535L445 405L620 565L790 440L980 560L1145 405',
  'M75 430L185 180L260 535',
  'M340 90L445 405L505 220L620 565',
  'M670 115L790 440L835 245L980 560',
  'M1015 105L1145 405',
];

const NETWORK_NODES = [
  { cx: 40, cy: 100 },
  { cx: 185, cy: 180 },
  { cx: 340, cy: 90 },
  { cx: 505, cy: 220 },
  { cx: 670, cy: 115 },
  { cx: 835, cy: 245 },
  { cx: 1015, cy: 105 },
  { cx: 1160, cy: 205 },
  { cx: 75, cy: 430 },
  { cx: 260, cy: 535 },
  { cx: 445, cy: 405 },
  { cx: 620, cy: 565 },
  { cx: 790, cy: 440 },
  { cx: 980, cy: 560 },
  { cx: 1145, cy: 405 },
];

const SIGNAL_ROUTES = [
  {
    path: 'M40 100L185 180L340 90L505 220L670 115L835 245L1015 105L1160 205',
    duration: 8,
    delay: 0,
  },
  {
    path: 'M75 430L260 535L445 405L620 565L790 440L980 560L1145 405',
    duration: 9,
    delay: 1.4,
  },
  {
    path: 'M185 180L260 535L445 405L340 90L505 220L620 565',
    duration: 7,
    delay: 2.8,
  },
];
const DatabaseBackdrop: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const backdropRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(backdropRef, { amount: 0.1 });

  return (
    <div
      ref={backdropRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full text-brand-teal"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g
          stroke="currentColor"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {NETWORK_PATHS.map((networkPath) => (
            <path key={networkPath} d={networkPath} />
          ))}
        </g>

        <g fill="currentColor">
          {NETWORK_NODES.map(({ cx, cy }) => (
            <React.Fragment key={cx + '-' + cy}>
              <circle cx={cx} cy={cy} r="8" fillOpacity="0.05" />
              <circle cx={cx} cy={cy} r="3.5" fillOpacity="0.3" />
            </React.Fragment>
          ))}
        </g>

        {isInView && !prefersReducedMotion && SIGNAL_ROUTES.map((route) => {
          const duration = route.duration + 's';
          const begin = route.delay + 's';

          return (
            <React.Fragment key={route.path}>
              <circle r="11" fill="currentColor" opacity="0">
                <animateMotion
                  path={route.path}
                  dur={duration}
                  begin={begin}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.18;0.18;0"
                  keyTimes="0;0.08;0.92;1"
                  dur={duration}
                  begin={begin}
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3.75" fill="currentColor" opacity="0">
                <animateMotion
                  path={route.path}
                  dur={duration}
                  begin={begin}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.08;0.92;1"
                  dur={duration}
                  begin={begin}
                  repeatCount="indefinite"
                />
              </circle>
            </React.Fragment>
          );
        })}
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

        <StaggerContainer
          className="grid sm:grid-cols-2 gap-6 max-w-6xl"
          staggerConfig={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        >
          {DATABASES.map((database) => (
            <StaggerChild key={database.name} variant="fadeUp">
              <SpotlightCard
                className="group/database border border-brand-border bg-brand-card dark:bg-[#0C0E12] p-6 sm:p-7 rounded-[2px] relative shadow-xs h-full"
                glowColor="rgba(20, 184, 166, 0.15)"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-brand-teal origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/database:scale-x-100 group-focus-within/database:scale-x-100" />
                <article className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-5 mb-7">
                    <div className="w-11 h-11 rounded-full border border-brand-border bg-brand-dark/30 flex items-center justify-center text-brand-teal transition-colors duration-300 group-hover/database:border-brand-teal/40">
                      <Database className="w-5 h-5 transition-transform duration-300 ease-out group-hover/database:scale-110" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.14em] text-brand-text-muted text-right leading-relaxed">
                      {database.category}
                    </span>
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
                      className="group/open min-h-11 px-4 py-3 inline-flex items-center justify-center gap-2 bg-brand-teal text-brand-text dark:text-brand-btn-text font-mono text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 rounded-[2px] transition-colors duration-200 hover:bg-brand-teal/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
                    >
                      Open
                      <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/open:translate-x-0.5 group-hover/open:-translate-y-0.5" aria-hidden="true" />
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
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
