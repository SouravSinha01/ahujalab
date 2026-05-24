import React from 'react';
import { BrainCircuit, Dna, Microscope, FlaskConical, CornerDownRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerChild, SpotlightCard } from './animations/ScrollReveal';

const METHODOLOGY_PILLARS = [
  {
    num: "01",
    title: "Computational & AI/ML Frameworks",
    desc: "Deploying de novo ligand design models, graph neural networks (GNNs), multimodal deep learning, and biomedical knowledge graphs to identify hidden relationships.",
    icon: BrainCircuit,
    image: "/ai_frameworks.png"
  },
  {
    num: "02",
    title: "Functional Genetics",
    desc: "Utilizing high-throughput yeast genetics screening and engineered biosensing platforms to model compound-biological interaction dynamically.",
    icon: Dna,
    image: "/functional_genetics.png"
  },
  {
    num: "03",
    title: "Molecular & Cell Biology",
    desc: "Rigorous biochemical assays, deep omics profiling, and high-content phenotypic screening to catalog phenotypic outcomes of molecular pertubators.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400"
  },
  {
    num: "04",
    title: "Systems Biology",
    desc: "Integrative mathematical and data-driven analysis to build robust predictive models of complex metabolic regulation pathways across species.",
    icon: FlaskConical,
    image: "/systems_biology.png"
  }
];

const RESEARCH_THEMES = [
  {
    title: "Metabolites as Endogenous Carcinogens",
    platform: "Metabokiller Framework",
    desc: "Predicting oncometabolites and exploring cellular mutation signatures induced by normal biological intermediates.",
    icon: "α"
  },
  {
    title: "Metabolites as Allosteric GPCR Modulators",
    platform: "Gcoupler AI Platform",
    desc: "Pioneering the translation of metabolic signals into GPCR agonists using collaborative yeast-to-human mapping assays.",
    icon: "β"
  },
  {
    title: "Metabolites as Cell-Cell Communicators",
    platform: "OdoriFy & EvOlf",
    desc: "Mapping tumor microenvironment chemical signaling loops and volatile organic signals mediating intra-organ system dialogue.",
    icon: "γ"
  },
  {
    title: "Hunting Geroprotective Metabolites",
    platform: "AgeXtend Pipeline",
    desc: "AI-based platform screens for pro-longevity small molecules and caloric restriction mimetics in clinical-level yeast/mammalian databases.",
    icon: "δ"
  },
  {
    title: "Multimodal Prediction Engine for Cellular Aging",
    platform: "scCamAge Engine",
    desc: "Context-aware deep learning framework maps spatiotemporal morphometrics and multi-omic age scores in single cells.",
    icon: "ε"
  }
];

const ADDITIONAL_DIRECTIONS = [
  { title: "Metabolic Regulation of DNA Repair", desc: "How dynamic concentration shifts in intermediary metabolites impact nucleosome accessibility and base-excision machinery." },
  { title: "Multitarget Metabolites & PPIs", desc: "Elucidating how low-affinity compounds promote or disrupt complex transient protein-protein interactions." },
  { title: "Metabolism and the Epigenetic Landscape", desc: "Investigating key metabolites like acetyl-CoA, SAM, and alpha-ketoglutarate as direct co-factors shaping chromatin architecture." },
  { title: "Knowledge Graphs for Synthetic Biology", desc: "Compiling a graph database of enzymatic capabilities to assist synthetic biologists in constructing non-canonical drug pathways." }
];

export const ResearchSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 relative overflow-hidden" id="science">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
        
        {/* Editorial Header */}
        <div className="max-w-4xl mb-24">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4">
              [ SCIENCE ]
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="blurReveal" delay={0.2}>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-brand-text mb-6">
              Exploration of the <span className="italic font-instrument text-brand-teal font-normal text-[1.1em]">Chemical Space</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.3}>
            <p className="font-mono text-xs md:text-sm text-brand-text-muted tracking-widest uppercase mb-12">
              Illuminating the Dark Molecules of Life
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <p className="font-instrument text-lg sm:text-xl lg:text-2xl text-brand-text-muted leading-relaxed font-light">
              The Ahuja Laboratory at IIIT-Delhi is dedicated to pioneering the systematic exploration of the vast, uncharted chemical space of life. Our central research mission is the functional elucidation of metabolites — the crucial yet understudied <span className="italic text-brand-text font-medium text-brand-teal">"dark molecules" of biology</span>.
            </p>
          </ScrollReveal>
        </div>

        {/* Section 1: Research Philosophy with DNA helical stairway */}
        <div className="border-t border-brand-border py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <ScrollReveal variant="fadeUp" className="space-y-8">
            <div>
              <span className="font-mono text-xs md:text-sm text-brand-teal font-bold uppercase tracking-widest">[ PHILOSOPHY ]</span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight mt-3 text-brand-text">
                Beyond the <br /> Central Dogma
              </h2>
            </div>

            <p className="font-instrument text-lg md:text-xl text-brand-text-muted leading-relaxed">
              Decoding the regulatory power of metabolites that bypass traditional transcriptomic feedback loops to direct chromatin architecture, allosteric protein switches, and macromolecular assemblies.
            </p>
            
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-brand-teal font-bold pb-1">
                Influence pathways:
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Orthosteric & allosteric protein modulation",
                  "Direct chromatin and chemical landscape alteration",
                  "Interfacial disruption of vital macrocomplexes",
                  "Targeted cell differentiation pathways & fate locks"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-l border-brand-border pl-4">
                    <span className="text-brand-teal font-mono font-bold">0{idx+1}</span>
                    <span className="text-xs sm:text-sm text-brand-text-muted leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-card dark:bg-[#0C0E12] border border-brand-border p-6 rounded-[2px] relative shadow-xs">
              <div className="absolute top-2 right-4 font-mono text-xs text-brand-teal font-bold">INSIGHT</div>
              <p className="font-instrument text-base text-brand-text italic leading-relaxed">
                "Over 99% of known metabolites have obscure non-canonical regulatory functions — these are the 'dark molecules' the lab seeks to illuminate."
              </p>
            </div>
          </ScrollReveal>

          {/* Majestic Interactive Helical Double-Helix Video Imagery */}
          <ScrollReveal variant="blurReveal" delay={0.25} className="w-full">
            <SpotlightCard 
              className="relative border border-brand-border bg-brand-card dark:bg-[#06080B] p-6 rounded-[2px] overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/5] flex items-center justify-center group shadow-md"
              glowColor="rgba(20, 184, 166, 0.15)"
            >
              {/* Fine Tech Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,204,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,204,0.02)_1px,transparent_1px)] bg-[size:20px_20px] z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-transparent to-brand-dark/20 pointer-events-none z-10" />
              
              {/* Glowing neon ambiance */}
              <div className="absolute w-72 h-72 rounded-full bg-brand-teal/15 blur-[90px] pointer-events-none z-0" />

              {/* Looping Double Helix Video */}
              <video
                src="https://res.cloudinary.com/dk6oziswk/video/upload/v1779540443/hailuo-2_3_A_sleek_double_helix_DNA_strand_slowly_rotating_in_a_seamless_loop_viewed_at_a_s-0_pnn8mk.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-65 transition-all duration-1000 scale-102"
              />
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Section 2: Methodology (Pillars enriched with photographic icons) */}
        <div className="border-t border-brand-border py-20">
          <ScrollReveal variant="fadeIn" className="mb-12">
            <span className="font-mono text-xs md:text-sm text-brand-teal font-bold uppercase tracking-widest">[ PILLARS ]</span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl uppercase tracking-tight mt-3 text-brand-text">
              An Interdisciplinary Methodology
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METHODOLOGY_PILLARS.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerChild key={item.num} className="h-full">
                  <SpotlightCard 
                    className="bg-brand-card/30 dark:bg-[#0C0E12]/10 backdrop-blur-xs border border-brand-border p-6 rounded-[2px] hover:border-brand-teal transition-all duration-300 flex flex-col justify-between group shadow-xs hover:bg-brand-card/80 dark:hover:bg-[#0C0E12]/40 h-full"
                    glowColor="rgba(20, 184, 166, 0.12)"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-5">
                          <div className="p-2 border border-brand-border bg-brand-dark/20 text-brand-teal">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-xs text-brand-text-muted opacity-40">{item.num}</span>
                        </div>

                        {/* Small elegant photographic representation in the card, structured nicely */}
                        <div className={`border border-brand-border p-1 rounded-[2px] shadow-xs relative aspect-[16/10] overflow-hidden mb-6 ${item.image.startsWith('/') ? 'bg-[#030507]' : 'bg-brand-dark/20'}`}>
                          <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />
                          <img 
                            src={item.image}
                            referrerPolicy="no-referrer"
                            alt={item.title}
                            className={`w-full h-full transition-all duration-700 hover:scale-105 grayscale group-hover:grayscale-0 ${
                              item.image.startsWith('/') 
                                ? 'object-contain brightness-[0.7] group-hover:brightness-100' 
                                : 'object-cover'
                            }`}
                          />
                        </div>

                        <h3 className="font-syne font-semibold text-base text-brand-text group-hover:text-brand-teal transition-colors mb-3 uppercase tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="font-instrument text-xs sm:text-sm text-brand-text-muted leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </div>
                  </SpotlightCard>
                </StaggerChild>
              );
            })}
          </StaggerContainer>

          {/* Majestic methodology connector text */}
          <ScrollReveal variant="scaleIn" delay={0.25}>
            <div className="mt-12 p-6 border border-brand-border/60 bg-brand-card/10 dark:bg-[#0C0E12]/5 backdrop-blur-xs rounded-[2px] flex items-start gap-4 transition-all duration-300 hover:border-brand-teal/40">
              <div className="p-2 border border-brand-border bg-brand-dark/20 text-brand-teal shrink-0 rounded-[2px] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
              </div>
              <p className="font-syne text-xs sm:text-sm md:text-base text-brand-text/90 uppercase tracking-wide leading-relaxed font-medium">
                This methodology enables a pipeline from <span className="text-brand-teal italic font-semibold font-instrument normal-case">in silico</span> prediction to <span className="text-brand-teal italic font-semibold font-instrument normal-case">in vivo</span> and <span className="text-brand-teal italic font-semibold font-instrument normal-case">in vitro</span> validation.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Section 3: Key Projects (Spotlighting Engine / Platform titles prominently) */}
        <div className="border-t border-brand-border py-20">
          <ScrollReveal variant="fadeIn" className="mb-12">
            <span className="font-mono text-xs md:text-sm text-brand-teal font-bold uppercase tracking-widest">[ PIPELINES ]</span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl uppercase tracking-tight mt-3 text-brand-text">
              Active Engines & Frameworks
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {RESEARCH_THEMES.map((theme, i) => (
              <StaggerChild key={i} className="h-full">
                <SpotlightCard 
                  className="bg-brand-card dark:bg-[#0C0E12] border border-[#1E3A8A]/10 dark:border-brand-border/60 p-6 rounded-[2px] flex flex-col justify-between group cursor-pointer hover:border-brand-teal/80 hover:-translate-y-1 transition-all duration-300 shadow-xs relative overflow-hidden h-full"
                  glowColor="rgba(20, 184, 166, 0.15)"
                >
                  {/* Subtle visual card accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand-teal transition-all duration-300" />
                  
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-8">
                        <span className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center font-mono text-xs text-brand-teal bg-brand-dark/20 font-bold group-hover:bg-brand-teal group-hover:text-brand-btn-text transition-colors">
                          {theme.icon}
                        </span>
                        <span className="font-mono text-xs text-brand-text-muted tracking-widest uppercase font-bold">ENGINE 0{i+1}</span>
                      </div>

                      {/* Engine Highlight Title: Clean layout, large prominence */}
                      <div className="font-syne font-bold text-xl sm:text-2xl text-brand-text group-hover:text-brand-teal transition-colors duration-300 uppercase tracking-tight mb-2 leading-none">
                        {theme.platform}
                      </div>

                      {/* Scientific Target Case Label */}
                      <div className="font-mono text-xs text-brand-text-muted uppercase font-semibold mb-4 tracking-wider border-b border-brand-border/50 pb-3">
                        Target: {theme.title}
                      </div>

                      <p className="font-instrument text-sm sm:text-base text-brand-text-muted leading-relaxed">
                        {theme.desc}
                      </p>
                    </div>

                    <div className="border-t border-brand-border/50 pt-4 mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-mono text-xs text-brand-teal tracking-wide font-bold">DEPLOYED PIPELINE</span>
                      <CornerDownRight className="w-4 h-4 text-brand-teal" />
                    </div>
                  </div>
                </SpotlightCard>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>

        {/* Section 4: Additional Directions */}
        <div className="border-t border-brand-border py-20">
          <ScrollReveal variant="fadeIn" className="mb-12">
            <span className="font-mono text-xs md:text-sm text-brand-teal font-bold uppercase tracking-widest">[ DIRECTIONS ]</span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl uppercase tracking-tight mt-3 text-brand-text">
              Additional Research Directions
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {ADDITIONAL_DIRECTIONS.map((dir, idx) => (
              <StaggerChild 
                key={idx}
                className="border-b border-brand-border/60 pb-8 flex items-start gap-4 hover:border-brand-teal transition-colors"
              >
                <div className="font-mono text-xs sm:text-sm text-brand-teal font-bold pt-1">
                  0{idx + 1}.
                </div>
                <div>
                  <h3 className="font-syne font-semibold text-base text-brand-text mb-2 uppercase tracking-tight">
                    {dir.title}
                  </h3>
                  <p className="font-instrument text-sm text-brand-text-muted leading-relaxed">
                    {dir.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </StaggerContainer>
        </div>

        {/* Highlighted CTA/Collaboration Section (Not overdone, elegant editorial style) */}
        <ScrollReveal variant="scaleIn" className="border-t border-brand-border py-16">
          <div className="bg-[#E8EDF8]/20 dark:bg-[#0C111F]/30 border border-[#1E3A8A]/10 dark:border-brand-teal/20 p-8 md:p-12 rounded-[2px] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
            {/* Glowing blur orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <span className="font-mono text-xs text-[#1E3A8A] dark:text-brand-teal font-semibold uppercase tracking-widest block mb-3">
                [ ENGAGEMENTS ]
              </span>
              <p className="font-instrument text-xl md:text-2xl text-brand-text leading-relaxed">
                For specific publications, software tools, and collaboration inquiries, please explore the subsequent pages or contact the laboratory directly.
              </p>
            </div>
            
            <div className="shrink-0 relative z-10 self-start md:self-center">
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact') || document.querySelector('footer');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-mono text-xs border border-[#1E3A8A]/40 dark:border-brand-teal/40 text-brand-text hover:text-brand-btn-text hover:bg-[#1E3A8A] dark:hover:bg-brand-teal px-6 py-2.5 font-semibold tracking-wider transition-all duration-300 rounded-[2px] inline-block uppercase bg-brand-dark/10"
              >
                Inquire Directly
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
