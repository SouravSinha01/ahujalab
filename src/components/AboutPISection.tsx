import React from 'react';
import { Mail, Phone, Globe, BookOpen, Star, Briefcase } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerChild, SpotlightCard } from './animations/ScrollReveal';
import { getPiRoles, getPiAwardsWithImages, getPiAwardsWithoutImages } from '../utils/dataLoader';

const ROLES = getPiRoles();

const UNUSED_ROLES = [
  "Associate Professor (Tenured), IIIT-Delhi",
  "EMBO Young Investigator",
  "Core member, Infosys Center for Artificial Intelligence, IIITD"
];

const AWARDS_WITH_IMAGES = getPiAwardsWithImages();

const UNUSED_AWARDS_WITH_IMAGES = [
  {
    year: "2025",
    title: "Merck Scientific Excellence Award",
    org: "Merck KGaA, Darmstadt, Germany",
    desc: "Recognizing outstanding translational research contributions in biological and chemical sciences globally.",
    image: "/award_merck.png"
  },
  {
    year: "2025",
    title: "Humboldt Research Fellowship for Experienced Researchers",
    org: "Alexander von Humboldt Foundation, Germany",
    desc: "Awarded to highly qualified scientists from abroad to carry out long-term research projects in Germany.",
    image: "/award_humboldt.png"
  },
  {
    year: "2024",
    title: "Global 3Rs Awards Program",
    org: "AAALAC International, USA",
    desc: "Honoring outstanding scientific contributions to the 3Rs of animal research globally (Refinement, Replacement, Reduction).",
    image: "/award_3rs.png"
  },
  {
    year: "2024",
    title: "INSA Young Associates",
    org: "Indian National Science Academy",
    desc: "Awarded for exceptional scientific promise, innovation, and high-impact biotechnology contributions.",
    image: "/award_insa.png"
  },
  {
    year: "2024",
    title: "Young Investigator Programme (YIP)",
    org: "European Molecular Biology Organization (EMBO)",
    desc: "Joining a prestigious European network of outstanding life science researchers to advance biomedical discovery.",
    image: "/award_embo.png"
  },
  {
    year: "2022",
    title: "INSA Medal for Young Scientists",
    org: "Indian National Science Academy",
    desc: "The highest recognition for young scientists in India for outstanding contributions to science and technology.",
    image: "/award_insa_medal.png"
  }
];

const AWARDS_WITHOUT_IMAGES = getPiAwardsWithoutImages();

const UNUSED_AWARDS_WITHOUT_IMAGES = [
  {
    year: "2025",
    title: "DIRD Award and Teaching Excellence Award",
    org: "IIIT-Delhi, New Delhi"
  },
  {
    year: "2022",
    title: "Discovery Track Investigator",
    org: "DST Academic Hub"
  },
  {
    year: "2022",
    title: "Research Excellence Award by IIIT-Delhi",
    org: "Indraprastha Institute of Information Technology Delhi"
  },
  {
    year: "2022",
    title: "Ramalingaswami Re-entry Fellowship",
    org: "Department of Biotechnology, Government of India"
  },
  {
    year: "2018",
    title: "Nominated for the Inspire Faculty Award by DST, India (relinquished)",
    org: "Department of Science and Technology (DST), India"
  },
  {
    year: "2018",
    title: "“Summa cum laude” (Excellent grade in Ph.D.)",
    org: "University of Cologne, Cologne, Germany"
  },
  {
    year: "2014",
    title: "Ph.D. scholarship",
    org: "International Graduate School in Development Health and Disease (IGS DHD), University of Cologne, Germany"
  },
  {
    year: "2013",
    title: "UGC-CSIR fellowship (All India rank: 33)",
    org: "University Grants Commission, India"
  },
  {
    year: "2009",
    title: "UGC-CSIR fellowship (All India rank: 222)",
    org: "University Grants Commission, India"
  }
];

export const AboutPISection: React.FC = () => {
  // Data is now loaded from JSON via dataLoader
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 min-h-screen relative overflow-hidden" id="about-pi">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-16">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4" />
          </ScrollReveal>
          
          <ScrollReveal variant="blurReveal" delay={0.25}>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-brand-text mb-6">
              About Me<span className="text-brand-teal">.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.4}>
            <p className="font-syne font-bold text-lg sm:text-xl text-brand-text mb-2 uppercase tracking-tight">
              The Chemical Biology Laboratory
            </p>
            <p className="font-instrument text-lg md:text-xl text-brand-text-muted leading-relaxed font-light italic">
              "An interdisciplinary team of computational biologists, data scientists, and bioinformaticians united by the mission to translate complex, multimodal data — from chemical structures to genomic pathways — into actionable biological insights."
            </p>
          </ScrollReveal>
        </div>

        {/* PI Profile Block - two-column layout */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start border-t border-brand-border pt-16">
          
          {/* Portrait Column */}
          <ScrollReveal variant="fadeUp" className="space-y-6">
            <div className="border border-brand-border bg-brand-card dark:bg-[#0C0E12] p-2 rounded-[2px] shadow-xs relative aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />
              <img 
                src="/gauravAhuja.jpg"
                referrerPolicy="no-referrer"
                alt="Dr. Gaurav Ahuja"
                className="w-full h-full object-cover"
              />
              
            </div>

            <div className="space-y-4 font-mono text-xs md:text-sm border-t border-brand-border/60 pt-6">
              <div className="flex items-center gap-3 text-brand-text-muted">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="mailto:gaurav.ahuja@iiitd.ac.in" className="hover:text-brand-text transition-colors">gaurav.ahuja@iiitd.ac.in</a>
              </div>
              <div className="flex items-center gap-3 text-brand-text-muted">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span>(+91)11-26907475</span>
              </div>
              <div className="flex items-center gap-3 text-brand-text-muted">
                <Globe className="w-4 h-4 text-brand-teal shrink-0" />
                <a href="https://ahuja-lab.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-text transition-colors">ahuja-lab.in</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio & Affiliations Column */}
          <div className="space-y-12">
            <ScrollReveal variant="fadeUp">
              <div>
                <h2 className="font-syne font-bold text-3xl uppercase tracking-tight text-brand-text mb-2">Dr. Gaurav Ahuja</h2>
                <p className="font-mono text-xs md:text-sm text-brand-teal font-semibold uppercase tracking-wide mb-6">
                  Associate Professor (Tenured), Department of Computational Biology, IIIT-Delhi
                </p>
                
                <div className="font-instrument text-base sm:text-lg text-brand-text-muted space-y-4 leading-relaxed font-light">
                  <p>
                    Tenured Associate Professor leading the Chemical Biology Laboratory. Research focuses on uncovering how molecular structure influences life at cellular and systemic levels — believing every chemical compound carries an encoded message about its biological behavior, therapeutic potential, risks, and role in health, disease, and aging.
                  </p>
                  <p>
                    Our lab designs cutting-edge computational technologies powered by artificial intelligence, multimodal data integration, and emerging Large Language Model (LLM) architectures. I am also a core member of the <span className="text-brand-text font-normal font-sans tracking-tight">Infosys Center for Artificial Intelligence</span> at IIITD.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Current Roles */}
            <ScrollReveal variant="fadeUp" className="border-t border-brand-border pt-8">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-brand-teal" />
                <h3 className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold">Current Roles & Affiliations</h3>
              </div>
              <ul className="space-y-3">
                {ROLES.map((role, idx) => (
                  <li key={idx} className="flex gap-3 items-start font-syne text-sm sm:text-base uppercase text-brand-text-muted font-medium">
                    <span className="text-brand-teal font-mono">/</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Honors & Awards Segmented Layout */}
            <div className="border-t border-brand-border pt-16 space-y-16">
              
              {/* Category 1: Featured Laurels & Fellowships */}
              <div>
                <ScrollReveal variant="fadeIn" className="flex items-center gap-2 mb-8">
                  <Star className="w-4 h-4 text-brand-teal" />
                  <h3 className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold">Premier Fellowships & Major Laurels</h3>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {AWARDS_WITH_IMAGES.map((item, idx) => (
                    <StaggerChild key={idx} className="h-full">
                      <SpotlightCard 
                        className="bg-brand-card dark:bg-[#0C0E12] border border-brand-border hover:border-brand-teal/40 rounded-[2px] overflow-hidden transition-all duration-300 flex flex-col h-full group shadow-xs"
                        glowColor="rgba(20, 184, 166, 0.12)"
                      >
                        <div className="w-full h-44 md:h-56 lg:h-64 overflow-hidden relative">
                          <img 
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            className="w-full h-full object-cover object-center select-none"
                          />
                          <div className="absolute top-3 left-3 bg-brand-dark/90 text-brand-teal font-mono text-xs font-bold px-2.5 py-1 border border-brand-teal/30 tracking-wider">
                            {item.year}
                          </div>
                        </div>
                        
                        <div className="p-5 flex-1 flex flex-col justify-start">
                          <h4 className="font-syne font-bold text-sm sm:text-base text-brand-text uppercase tracking-tight leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </SpotlightCard>
                    </StaggerChild>
                  ))}
                </StaggerContainer>
              </div>

              {/* Category 2: Academic & Institutional Achievements */}
              <div className="border-t border-brand-border/40 pt-16">
                <ScrollReveal variant="fadeIn" className="flex items-center gap-2 mb-8">
                  <BookOpen className="w-4 h-4 text-brand-teal" />
                  <h3 className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold">Academic & Institutional Distinctions</h3>
                </ScrollReveal>

                <StaggerContainer className="relative border-l border-brand-border/60 ml-2 pl-6 space-y-6 py-2">
                  {AWARDS_WITHOUT_IMAGES.map((item, idx) => (
                    <StaggerChild key={idx} variant="fadeUp" className="relative group transition-all duration-300">
                      {/* Accent timeline key point */}
                      <span className="absolute -left-[31px] top-1.5 w-[9px] h-[9px] rounded-full bg-brand-teal/80 border border-brand-bg transition-transform duration-300 group-hover:scale-125 shadow-[0_0_8px_rgba(0,229,204,0.4)]" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                        <span className="font-mono text-xs sm:text-sm text-brand-teal font-bold">{item.year}</span>
                        <div>
                          <span className="font-syne text-sm sm:text-base font-semibold text-brand-text uppercase tracking-tight transition-colors group-hover:text-brand-teal block">
                            {item.title}
                          </span>
                          <span className="font-mono text-[10px] text-brand-text-muted/80 uppercase tracking-widest block mt-0.5">
                            {item.org}
                          </span>
                        </div>
                      </div>
                    </StaggerChild>
                  ))}
                </StaggerContainer>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
