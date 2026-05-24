import React from 'react';
import { ScrollReveal, SpotlightCard } from './animations/ScrollReveal';

const SECTIONS = [
  {
    num: "01",
    title: "Decoding the Molecular Language of Life",
    desc: "Operating on the principle that every molecule contains a blueprint of its behavior — its therapeutic promise, its toxicity risks, and the cellular programs it can influence. By layering chemistry with multi-omics evidence — genes, pathways, mutations, phenotypes — we reveal the systems-level impact of molecular perturbation.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=800",
    tag: "FUNCTIONAL METABOLOMICS"
  },
  {
    num: "02",
    title: "A Multidimensional View of Molecules",
    desc: "Transcending traditional structure-based analyses by embedding molecules into unified bioactivity–chemical knowledge spaces to strengthen mechanistic insights, enhance predictive power, and surface unknown targets.",
    image: "/multidimensional_molecules.png",
    tag: "CHEMICAL KNOWLEDGE SPACES"
  },
  {
    num: "03",
    title: "Powered by Biological Knowledge at Scale",
    desc: "To build high-fidelity models, we layer chemistry with multi-omics evidence: genes, pathways, mutations, phenotypes, and decades of curated biological knowledge. These datasets together reveal the systems-level impact of molecular perturbation.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
    tag: "INTEGRATIVE SYSTEMS BIOLOGY"
  },
  {
    num: "04",
    title: "AI-Driven Discovery Engine",
    desc: "Designing and deploying cutting-edge computational approaches, multimodal deep learning, graph neural networks, and de novo ligand generation tools to resolve hidden structure-function relationships and accelerate clinical translations.",
    image: "/AI_driveEngine.png",
    tag: "DE NOVO GENERATION"
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 border-t border-brand-border" id="about-home">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Editorial Divider */}
        <ScrollReveal variant="fadeIn" delay={0.1}>
          <div className="flex justify-between items-center border-b border-brand-border pb-6 mb-20">
            <span className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold">[ OUR CORE PARADIGM ]</span>
            <span className="font-mono text-xs text-brand-text-muted opacity-50 uppercase tracking-widest">AHUJA RESEARCH LAB</span>
          </div>
        </ScrollReveal>

        <div className="space-y-40">
          {SECTIONS.map((sec, i) => {
            const isEven = i % 2 === 1;
            return (
              <div 
                key={sec.num} 
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Text Block */}
                <ScrollReveal 
                  variant="fadeUp" 
                  delay={0.1}
                  className={`space-y-6 ${isEven ? 'lg:order-2' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-brand-teal font-bold">{sec.num}</span>
                    <span className="h-[1px] w-8 bg-brand-border" />
                    <span className="font-mono text-xs text-brand-text-muted uppercase tracking-widest">{sec.tag}</span>
                  </div>

                  <h3 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight uppercase text-brand-text transition-colors duration-500">
                    {sec.title}
                  </h3>

                  <p className="font-instrument text-lg md:text-xl lg:text-2xl italic text-brand-text-muted leading-relaxed font-normal">
                    {sec.desc}
                  </p>
                </ScrollReveal>

                {/* Graphic Block - Sharp corners 0px wrapped with SpotlightCard for mouse-reactive glows */}
                <ScrollReveal 
                  variant="blurReveal" 
                  delay={0.25}
                  className={`w-full ${isEven ? 'lg:order-1' : ''}`}
                >
                  <SpotlightCard 
                    className={`relative aspect-[4/3] w-full border border-brand-border overflow-hidden rounded-[2px] shadow-xs group ${sec.image.startsWith('/') ? 'bg-[#030507]' : 'bg-brand-card'}`}
                    glowColor="rgba(20, 184, 166, 0.15)"
                  >
                    <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none z-10" />
                    <img 
                      src={sec.image} 
                      referrerPolicy="no-referrer"
                      alt={sec.title}
                      className={`w-full h-full transition-all duration-1000 grayscale group-hover:grayscale-0 ${
                        sec.image.startsWith('/') 
                          ? 'object-contain p-4 group-hover:scale-103 brightness-[0.7] group-hover:brightness-100' 
                          : 'object-cover brightness-75 group-hover:brightness-95'
                      }`}
                    />
                    {!sec.image.startsWith('/') && (
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent opacity-80 transition-colors duration-500" />
                    )}
                  </SpotlightCard>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
