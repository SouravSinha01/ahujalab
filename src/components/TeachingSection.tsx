import React from 'react';
import { Award, Layers, Compass } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerChild } from './animations/ScrollReveal';

const COURSES = [
  {
    code: "BIO545",
    title: "Biostatistics",
    type: "Elective Course",
    desc: "Gateway to quantitative biology. Equips students with statistical reasoning and practical programming skills to design experiments, analyze complex biological data, and rigorously interpret results.",
    highlights: "Real-world case studies from genomics, clinical research, and systems biology.",
    icon: Compass
  },
  {
    code: "BIO2GMB",
    title: "Genetics and Molecular Biology",
    type: "Core Course",
    desc: "Explores the \"operating system\" of life. Mechanisms of heredity, gene expression, and genome regulation. From DNA replication to complex genetic pathways involved in disease.",
    highlights: "Essential for students building computational models to understand health, drug action, and evolution.",
    icon: Layers
  },
  {
    code: "PG Diploma Courses",
    title: "Probability and Statistics",
    type: "Specialized Course",
    desc: "Tailored for postgraduate students in Data Science & AI (PGDDSAI) and Digital & Sustainable HCS (PGD-DSHCS). Mathematical framework for building, understanding, and critically evaluating modern ML and AI models.",
    highlights: "Focus on probabilistic reasoning and statistical inference — the bedrock of data-driven discovery from computational biology to digital health.",
    icon: Award
  }
];

export const TeachingSection: React.FC = () => {
  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 min-h-screen relative overflow-hidden" id="teaching">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-24">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4">
              [ ACADEMICS & PEDAGOGY ]
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="blurReveal" delay={0.25}>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-brand-text mb-6">
              Teaching<span className="text-brand-teal">.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <p className="font-instrument text-lg md:text-xl lg:text-2xl text-brand-text-muted leading-relaxed font-light">
              My teaching philosophy is to equip the next generation of scientists with the quantitative and biological skills needed to work at the interface of data science and life science. We focus on building a strong foundation in statistics, genetics, and molecular biology — the essential pillars for decoding complex biological systems and understanding bio-activity data.
            </p>
          </ScrollReveal>
        </div>

        {/* Course Cards - full-width editorial style */}
        <StaggerContainer className="space-y-0 border-t border-brand-border">
          {COURSES.map((course) => {
            return (
              <StaggerChild
                key={course.code}
                variant="fadeUp"
                className="group border-b border-brand-border py-16 flex flex-col lg:grid lg:grid-cols-[200px_1fr_300px] gap-8 lg:gap-16 items-start hover:bg-brand-text/[0.01] -mx-4 px-4 transition-colors duration-300"
              >
                {/* Course identity column */}
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs md:text-sm text-brand-teal font-bold tracking-widest uppercase mb-2">
                    <span>{course.code}</span>
                  </div>
                  <span className="font-mono text-xs text-brand-text-muted/60 uppercase tracking-widest font-bold">{course.type}</span>
                </div>

                {/* Main details column */}
                <div className="space-y-4">
                  <h3 className="font-syne font-bold text-2xl lg:text-3xl uppercase tracking-tight text-brand-text group-hover:text-brand-teal transition-colors duration-300">
                    {course.title}
                  </h3>
                  
                  <p className="font-instrument text-base md:text-lg text-brand-text-muted leading-relaxed font-light">
                    {course.desc}
                  </p>
                </div>

                {/* Highlights column */}
                <div className="border-l border-brand-border pl-6 lg:h-full flex flex-col justify-center">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-brand-teal font-bold tracking-widest uppercase">SYLLABUS FOCUS</span>
                    <p className="font-instrument text-sm sm:text-base leading-relaxed italic text-brand-text-muted/80">
                      "{course.highlights}"
                    </p>
                  </div>
                </div>

              </StaggerChild>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
