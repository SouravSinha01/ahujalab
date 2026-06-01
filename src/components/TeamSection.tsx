import React from 'react';
import { Mail, Briefcase, Github, Linkedin, GraduationCap, ExternalLink } from 'lucide-react';
import { VideoBackground } from './VideoBackground';
import { ScrollReveal, StaggerContainer, StaggerChild, SpotlightCard } from './animations/ScrollReveal';
import { getTeamMembers, getTeamAlumni } from '../utils/dataLoader';

const GRADUATES = getTeamMembers();

const UNUSED_GRADUATES = [
  
  {
    name: "Saveena Solanki",
    role: "PhD Scholar",
    focus: "Exploring the multivalent-multi-targeting potential of cellular metabolites",
    image: "saveenas.png",
    links: {
      email: "mailto:saveenas@iiitd.ac.in",
      github: "https://github.com/SaveenaSolanki",
      linkedin: "https://www.linkedin.com/in/saveenasolanki/",
      scholar: "https://scholar.google.com/citations?hl=en&tzom=-330&user=5sL2XRYAAAAJ#"
    }
  },
  {
    name: "Subhadeep Duari",
    role: "PhD Scholar",
    focus: "Developing medical and biological computer vision models using Deep Learning",
    image: "subhodeepD.jpg",
    links: {
      email: "mailto:Subhadeepd@iiitd.ac.in",
      github: "https://github.com/SubhadeepDuari",
      linkedin: "https://www.linkedin.com/in/subhadeep-duari-50a570122/",
      scholar: "https://scholar.google.com/citations?user=U4WJ-OoAAAAJ&hl=en"
    }
  },
  {
    name: "Shiva Satija",
    role: "PhD Scholar",
    focus: "Genotoxic research, high-throughput Nanopore sequencing, and generative AI",
    image: "shivasa.png",
    links: {
      email: "mailto:shivasa@iiitd.ac.in",
      github: "https://github.com/shiva-satija",
      linkedin: "https://www.linkedin.com/in/shivasatija/",
      scholar: "https://scholar.google.com/citations?user=K-t5_7IAAAAJ&hl=en"
    }
  },
  {
    name: "Sonam Chauhan",
    role: "PhD Scholar",
    focus: "Systematic exploration of the \"Dark Matter\" of the Chemical World",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
    links: {
      email: "mailto:sonamc@iiitd.ac.in",
      github: "https://github.com/sonam-chauhan",
      linkedin: "https://linkedin.com/in/sonam-chauhan-bio",
      scholar: "https://scholar.google.com/citations?user=test_sonam"
    }
  },
  {
    name: "Suvendu Kumar",
    role: "PhD Scholar",
    focus: "Designing novel computational methods for chemical compound representation",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    links: {
      email: "mailto:suvenduk@iiitd.ac.in",
      github: "https://github.com/suvendu-kumar",
      linkedin: "https://linkedin.com/in/suvendu-kumar-chembio",
      scholar: "https://scholar.google.com/citations?user=test_suvendu"
    }
  },
  {
    name: "Arushi Sharma",
    role: "PhD Scholar",
    focus: "Powering biomedical discovery using knowledge graphs and Large Language Models",
    image: "arushis.png",
    links: {
      email: "mailto:arushis@iiitd.ac.in",
      github: "https://github.com/AruShar",
      linkedin: "https://www.linkedin.com/in/arushi2699/",
      scholar: "https://scholar.google.com/citations?user=AfKrQeIAAAAJ&hl=en"
    }
  },
  {
    name: "Raidhani Shome",
    role: "PhD Scholar",
    focus: "Building clinical-grade genomics platforms and advanced analytical methods",
    image: "raidhanis.jpeg",
    links: {
      email: "mailto:raidhanis@iiitd.ac.in",
      github: "https://github.com/rai134340",
      linkedin: "https://www.linkedin.com/in/raidhani-shome-621b70257/",
      scholar: "https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Raidhani+Shome#"
    }
  },
  {
    name: "Sourav Sinha",
    role: "PhD Student",
    focus: "AI-driven discovery of novel Calorie Restriction Mimetics",
    image: "souravs.png",
    links: {
      email: "mailto:souravs@iiitd.ac.in",
      github: "https://github.com/souravs-iiitd",
      linkedin: "https://linkedin.com/in/sourav-sinha-ai",
      scholar: "https://scholar.google.com/citations?user=test_sourav"
    }
  },
  {
    name: "Adnan Raza",
    role: "PhD Student",
    focus: "Architecting low-level systems frameworks and efficient ML models for bare-metal performance.",
    image: "adnanr.png",
    links: {
      email: "mailto:adnanraza3435@gmail.com",
      github: "https://github.com/woosflex",
      linkedin: "https://linkedin.com/in/woosflex",
      scholar: "https://scholar.google.com/citations?user=fuD1FzcAAAAJ&hl=en"
    }
  },

];

const ALUMNI = getTeamAlumni();

const UNUSED_ALUMNI = [
  {
    name: "Aayushi Mittal",
    role: "Alumnus",
    focus: "Former Graduate Student",
    image: "/aayushi.png",
    links: {
      email: "mailto:ayushi@example.com",
      linkedin: "",
      github: "",
      scholar: ""
    }
  },
  {
    name: "Vishakha Gautam",
    role: "Alumnus",
    focus: "Former Graduate Student",
    image: "vishakhag.png",
    links: {
      email: "mailto:vishakhag@iiitd.ac.in",
      linkedin: "https://in.linkedin.com/in/vishakha-gautam-663b63114",
      github: "https://github.com/vishakha-gautam11041997",
      scholar: "https://scholar.google.com/citations?user=RnQzRdoAAAAJ&hl=en"
    }
  },
  {
    name: "Sanjay Mohanty",
    role: "Alumnus",
    focus: "Former Graduate Student",
    image: "/sanjaym.png",
    links: {
      email: "mailto:kumeres741@gmail.com",
      linkedin: "https://www.linkedin.com/in/sanjay-741mohanty/",
      github: "https://github.com/SanjayISHIGAMI",
      scholar: "https://scholar.google.com/citations?user=FzzOfpIAAAAJ&hl=en"
    }
  },
  {
    name: "Sakshi Arora",
    role: "Alumnus",
    focus: "Former Graduate Student",
    image: "sakshiA.png",
    links: {
      email: "mailto:sakshia@iiitd.ac.in",
      linkedin: "",
      github: "",
      scholar: ""
    }
  }
];

export const TeamSection: React.FC = () => {
  // Data is now loaded from JSON via dataLoader
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 min-h-screen relative overflow-hidden" id="team">
      <VideoBackground url="https://res.cloudinary.com/dk6oziswk/video/upload/v1779194226/80645-572367655_medium_je8nkr.mp4" interactive={true} />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12 relative z-10">
        
        {/* Header Block Page Title: The Chemical Biology Laboratory */}
        <div className="max-w-4xl mb-20">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4">
              [ TEAM MEMBERS ]
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="blurReveal" delay={0.25}>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-brand-text mb-6">
              The Chemical Biology Laboratory<span className="text-brand-teal">.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.4}>
            <p className="font-instrument text-lg md:text-xl lg:text-2xl text-brand-text-muted leading-relaxed font-light italic">
              "Meet the graduate students driving our mission forward. Each member is tackling a unique, high-impact challenge at the intersection of AI, chemistry, and biology."
            </p>
          </ScrollReveal>
        </div>

        {/* Team grid: 4 columns structure */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-brand-border pt-16">
          {GRADUATES.map((member, idx) => (
            <StaggerChild key={member.name} className="h-full">
              <SpotlightCard 
                className="bg-brand-card dark:bg-[#0C0E12] border border-brand-border p-6 rounded-[2px] shadow-xs flex flex-col justify-between min-h-[460px] relative transition-all duration-300 hover:border-l-4 hover:border-l-brand-teal hover:bg-[#E8EDF8]/40 dark:hover:bg-[#131B2E]/40 group h-full"
                glowColor="rgba(20, 184, 166, 0.12)"
              >
                <div className="absolute top-4 right-4 text-xs font-mono text-brand-text-muted opacity-40 group-hover:opacity-100 transition-opacity z-20">
                  0{idx + 1}
                </div>

                <div className="space-y-4">
                  {/* Sharp cornered Grayscale Portrait matching AboutPISection */}
                  <div className="border border-brand-border bg-brand-dark/20 p-1 rounded-[2px] shadow-xs relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />
                    <img 
                      src={member.image}
                      referrerPolicy="no-referrer"
                      alt={member.name}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 font-mono text-[10px] text-brand-teal bg-brand-dark/80 px-2 py-0.5 border border-brand-teal/30 font-bold tracking-widest uppercase">
                      PhD
                    </div>
                  </div>

                  <div>
                    <h3 className="font-syne font-bold text-lg text-brand-text group-hover:text-brand-teal transition-colors duration-300 uppercase tracking-tight mb-1">
                      {member.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-3">
                      <Briefcase className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span className="font-mono text-xs text-brand-text-muted uppercase tracking-wider font-semibold">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Research Focus Statement */}
                <div className="border-t border-brand-border pt-3 mt-4 flex-1">
                  <p className="font-instrument text-sm sm:text-base text-brand-text-muted leading-relaxed italic group-hover:text-brand-text transition-colors duration-300">
                    "{member.focus}"
                  </p>
                </div>

                {/* Social links block - fully interactive with proper icons */}
                <div className="border-t border-brand-border/60 pt-4 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a 
                      href={member.links.email} 
                      title="Send Email"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.scholar} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Google Scholar"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                </div>

              </SpotlightCard>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Alumni Section: Passed-out members */}
        <div className="max-w-4xl mt-12 mb-8">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4">[ ALUMNI ]</div>
          </ScrollReveal>
          <ScrollReveal variant="fadeIn" delay={0.2}>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl leading-[0.95] tracking-tight uppercase text-brand-text mb-4">Former Members<span className="text-brand-teal">.</span></h2>
            <p className="font-instrument text-base text-brand-text-muted leading-relaxed font-light italic">Once part of the lab, always part of the journey ❤️.</p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-brand-border pt-10">
          {ALUMNI.map((member, idx) => (
            <StaggerChild key={member.name} className="h-full">
              <SpotlightCard 
                className="bg-brand-card dark:bg-[#0C0E12] border border-brand-border p-6 rounded-[2px] shadow-xs flex flex-col justify-between min-h-[460px] relative transition-all duration-300 hover:border-l-4 hover:border-l-brand-teal hover:bg-[#E8EDF8]/40 dark:hover:bg-[#131B2E]/40 group h-full"
                glowColor="rgba(20, 184, 166, 0.12)"
              >
                

                <div className="space-y-4">
                  <div className="border border-brand-border bg-brand-dark/20 p-1 rounded-[2px] shadow-xs relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none z-10" />
                    <img 
                      src={member.image}
                      referrerPolicy="no-referrer"
                      alt={member.name}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 font-mono text-[10px] text-brand-teal bg-brand-dark/80 px-2 py-0.5 border border-brand-teal/30 font-bold tracking-widest uppercase">
                      ALUMNI
                    </div>
                  </div>

                  <div>
                    <h3 className="font-syne font-bold text-lg text-brand-text group-hover:text-brand-teal transition-colors duration-300 uppercase tracking-tight mb-1">
                      {member.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mb-3">
                      <Briefcase className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                      <span className="font-mono text-xs text-brand-text-muted uppercase tracking-wider font-semibold">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-border pt-3 mt-4 flex-1">
                  <p className="font-instrument text-sm sm:text-base text-brand-text-muted leading-relaxed italic group-hover:text-brand-text transition-colors duration-300">
                    "{member.focus}"
                  </p>
                </div>

                <div className="border-t border-brand-border/60 pt-4 mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a 
                      href={member.links.email} 
                      title="Send Email"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.github || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.linkedin || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a 
                      href={member.links.scholar || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Google Scholar"
                      className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center text-brand-text-muted hover:text-brand-teal hover:border-brand-teal transition-all bg-brand-dark/10"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                </div>

              </SpotlightCard>
            </StaggerChild>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
