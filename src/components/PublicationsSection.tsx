import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ExternalLink, Search } from 'lucide-react';
import { ScrollReveal } from './animations/ScrollReveal';

const PUBLICATIONS_LIST = [
  {
    year: "2026",
    title: "Mechanism-Aware Deep Learning Maps the Redox Landscape of Cancer-Relevant Antioxidants",
    journal: "Chemistry-Methods 2026, 6, e202500160",
    authors: "Satija S, Solanki S, Ahuja G.",
    doi: "10.1002/cmtd.202500160",
    tag: "AI & Redox"
  },
  {
    year: "2026",
    title: "Evolutionary-guided advanced deep-learning architecture powers mammalian GPCRome agonist predictions",
    journal: "Cell Rep. 2026 Feb 18;45(3):117003",
    authors: "Mittal A, Gupta M, Mohanty SK, Gaur A, Solanki S, Ali SY, Raza A, Sharma P, Kumar S, Gautam V, Satija S, Katyayan N, Tiwari K, Sharma AK, Kaur D, Sengupta D, Gupta SK, Ahuja G.",
    doi: "10.1016/j.celrep.2026.117003",
    tag: "Deep Learning"
  },
  {
    year: "2025",
    title: "Network-based simultaneous embedding of cells and marker genes from scRNA-seq studies",
    journal: "Brief Bioinform. 2025;26(5):bbaf537",
    authors: "Bhattacharya N, Chakraborti S, Kumari S, Mathew B, Halder A, Gujral S, Gupta K, Mittal A, Sinha D, Nelson C, Chakraborty T, Ahuja G, Sengupta D.",
    doi: "10.1093/bib/bbaf537",
    tag: "Network Embedding"
  },
  {
    year: "2025",
    title: "Protocol for cellular age prediction in yeast and human single cells using transfer learning",
    journal: "STAR Protoc. 2025;6(3):104023",
    authors: "Duari S, Gautam V, Ahuja G.",
    doi: "10.1016/j.xpro.2025.104023",
    tag: "Transfer Learning"
  },
  {
    year: "2025",
    title: "Deep learning reveals endogenous sterols as allosteric modulators of the GPCR–Gα interface",
    journal: "eLife. 2025;14:RP106397",
    authors: "Mohanty SK, Mittal A, Namra, Gaur A, Duari S, Solanki S, Sharma AK, Arora S, Kumar S, Gautam V, Dixit NK, Subramanian K, Ghosh TS, Sengupta D, Gupta SK, Murugan NA, Sharma D, Ahuja G.",
    doi: "10.7554/eLife.106397.1",
    tag: "Deep Learning"
  },
  {
    year: "2025",
    title: "scCamAge: A context-aware prediction engine for cellular age, aging-associated bioactivities, and morphometrics",
    journal: "Cell Rep. 2025;44(2):115270",
    authors: "Gautam V, Duari S, Solanki S, Gupta M, Mittal A, Arora S, Aggarwal A, Sharma AK, Tyagi S, Pankajbhai RK, Sharma A, Chauhan S, Satija S, Kumar S, Mohanty SK, Tayal J, Dixit NK, Sengupta D, Mehta A, Ahuja G.",
    doi: "10.1016/j.celrep.2025.115270",
    tag: "Cellular Age"
  },
  {
    year: "2025",
    title: "Discovering geroprotectors through the explainable artificial intelligence-based platform AgeXtend",
    journal: "Nat Aging. 2025;5(1):144–161",
    authors: "Arora S, Mittal A, Duari S, Chauhan S, Dixit NK, Mohanty SK, Sharma A, Solanki S, Sharma AK, Gautam V, Gahlot PS, Satija S, Nanshi J, Kapoor N, Cb L, Sengupta D, Mehrotra P, Ghosh TS, Ahuja G.",
    doi: "10.1038/s43587-024-00763-4",
    tag: "AI & Aging"
  },
  {
    year: "2024",
    title: "Pseudo-grading of tumor subpopulations from single-cell transcriptomic data using phenotype algebra",
    journal: "eLife. 2024;13:RP98469",
    authors: "Bhattacharya N, Rockstroh A, Deshpande SS, Thomas SK, Yadav A, Goswami C, Chawla S, Solomon P, Fourgeux C, Ahuja G, Hollier BG, Kumar H, Roquilly A, Poschmann J, Lehman M, Nelson CC, Sengupta D.",
    doi: "10.7554/eLife.98469.1",
    tag: "Single Cell"
  },
  {
    year: "2024",
    title: "Literature mining discerns latent disease–gene relationships",
    journal: "Bioinformatics. 2024;40(4):btae185",
    authors: "Rai P, Jain A, Kumar S, Sharma D, Jha N, Chawla S, Raj A, Gupta A, Poonia S, Majumdar A, Chakraborty T, Ahuja G, Sengupta D.",
    doi: "10.1093/bioinformatics/btae185",
    tag: "Literature Mining"
  },
  {
    year: "2024",
    title: "Unlocking the mysteries of DNA adducts with artificial intelligence",
    journal: "ChemBioChem. 2024;25(1):e202300577",
    authors: "Arora S, Satija S, Mittal A, Solanki S, Mohanty SK, Srivastava V, Sengupta D, Rout D, Arul Murugan N, Borkar RM, Ahuja G.",
    doi: "10.1002/cbic.202300577",
    tag: "AI & DNA"
  },
  {
    year: "2023",
    title: "Advancing chemical carcinogenicity prediction modeling: opportunities and challenges",
    journal: "Trends Pharmacol Sci. 2023;44:400–410",
    authors: "Mittal A, Ahuja G.",
    doi: "10.1016/j.tips.2023.04.002",
    tag: "Carcinogenicity"
  },
  {
    year: "2023",
    title: "Marker-free characterization of full-length transcriptomes of single live circulating tumor cells",
    journal: "Genome Res. 2023;33:80–95",
    authors: "Poonia S, Goel A, Chawla S, Bhattacharya N, Rai P, Lee YF, Yap YS, West J, Bhagat AA, Tayal J, Mehta A, Ahuja G, Majumdar A, Ramalingam N, Sengupta D.",
    doi: "10.1101/gr.276600.122",
    tag: "Genomics"
  },
  {
    year: "2023",
    title: "mRNA translational specialization by RBPMS presets the competence for cardiac commitment in hESCs",
    journal: "Sci Adv. 2023;9:eade1792",
    authors: "Bartsch D, Kalamkar K, Ahuja G, Lackmann JW, Hescheler J, Weber T, Bazzi H, Clamer M, Mendjan S, Papantonis A, Kurian L.",
    doi: "10.1126/sciadv.ade1792",
    tag: "Stem Cells"
  },
  {
    year: "2023",
    title: "Transcriptional advantage influences odorant receptor gene choice",
    journal: "Brief Funct Genomics. 2023;22(3):281–290",
    authors: "Mohanty SK, Maryam S, Gautam V, Mittal A, Gupta K, Arora R, Bhadra W, Mishra T, Sengupta D, Ahuja G.",
    doi: "10.1093/bfgp/elac052",
    tag: "Odorant Receptors"
  },
  {
    year: "2023",
    title: "MiR-330-5p and miR-1270 target essential components of RNA polymerase I transcription and exhibit a novel tumor suppressor role in lung adenocarcinoma",
    journal: "Cancer Gene Ther. 2023;30(2):288–301",
    authors: "Saproo S, Sarkar SS, Gupta E, Chattopadhyay S, Charaya A, Kalra S, Ahuja G, Naidu S.",
    doi: "10.1038/s41417-022-00544-4",
    tag: "Cancer Biology"
  },
  {
    year: "2022",
    title: "Salivary protein kinase C alpha and novel microRNAs as diagnostic and therapeutic resistance markers for oral squamous cell carcinoma in Indian cohorts",
    journal: "Front Mol Biosci. 2022;9:1106963",
    authors: "Saproo S, Sarkar SS, Gautam V, Konyak CW, Dass G, Karmakar A, Sharma M, Ahuja G, Gupta A, Tayal J, Mehta A, Naidu S.",
    doi: "10.3389/fmolb.2022.1106963",
    tag: "Oncology Markers"
  },
  {
    year: "2022",
    title: "Gene expression-based inference of cancer drug sensitivity",
    journal: "Nat Commun. 2022;13:5680",
    authors: "Chawla S, Rockstroh A, Lehman M, Ratther E, Jain A, Anand A, Gupta A, Bhattacharya N, Poonia S, Rai P, Das N, Majumdar A, Jayadeva, Ahuja G, Hollier BG, Nelson CC, Sengupta D.",
    doi: "10.1038/s41467-022-33291-z",
    tag: "Drug Sensitivity"
  },
  {
    year: "2022",
    title: "Artificial intelligence uncovers carcinogenic human metabolites",
    journal: "Nat Chem Biol. 2022;18(11):1204–1213",
    authors: "Mittal A, Mohanty SK, Gautam V, Arora S, Saproo S, Gupta R, Sivakumar R, Garg P, Aggarwal A, Raghavachary P, Dixit NK, Singh VP, Mehta A, Tayal J, Naidu S, Sengupta D, Ahuja G.",
    doi: "10.1038/s41589-022-01110-7",
    tag: "AI & Metabolites"
  },
  {
    year: "2022",
    title: "deepGraphh: AI-driven web service for graph-based quantitative structure–activity relationship analysis",
    journal: "Brief Bioinform. 2022;23(5):bbac288",
    authors: "Gautam V, Gupta R, Gupta D, Ruhela A, Mittal A, Mohanty SK, Arora S, Gupta R, Saini C, Sengupta D, Murugan NA, Ahuja G.",
    doi: "10.1093/bib/bbac288",
    tag: "Graph Networks"
  },
  {
    year: "2022",
    title: "A new deep learning technique reveals the exclusive functional contributions of individual cancer mutations",
    journal: "J Biol Chem. 2022;298(8):102177",
    authors: "Gupta P, Jindal A, Ahuja G, Jayadeva, Sengupta D.",
    doi: "10.1016/j.jbc.2022.102177",
    tag: "Deep Learning"
  },
  {
    year: "2022",
    title: "A unified computational framework for robust identification of novel miRNAs from RNA sequencing data",
    journal: "Front Bioinform. 2022;2:842051",
    authors: "Ruhela V, Gupta A, Sriram K, Ahuja G, Kaur G, Gupta R.",
    doi: "10.3389/fbinf.2022.842051",
    tag: "microRNA Framework"
  },
  {
    year: "2021",
    title: "Quantification of age-related decline in transcriptional homeostasis",
    journal: "J Mol Biol. 2021;433(19):167179",
    authors: "Gupta K, Yadav P, Maryam S, Ahuja G, Sengupta D.",
    doi: "10.1016/j.jmb.2021.167179",
    tag: "Transcription"
  },
  {
    year: "2021",
    title: "OdoriFy: A conglomerate of artificial intelligence-driven prediction engines for olfactory decoding",
    journal: "J Biol Chem. 2021;297(2):100956",
    authors: "Gupta R, Mittal A, Agrawal V, Gupta S, Gupta K, Jain RR, Garg P, Mohanty SK, Sogani R, Chhabra HS, Gautam V, Mishra T, Sengupta D, Ahuja G.",
    doi: "10.1016/j.jbc.2021.100956",
    tag: "Olfaction"
  },
  {
    year: "2021",
    title: "EcTracker: Tracking and elucidating ectopic expression leveraging large-scale scRNA-seq studies",
    journal: "Brief Bioinform. 2021;22:bbab237",
    authors: "Gautam V, Mittal A, Kalra S, Mohanty SK, Gupta K, Rani K, Naidu S, Mishra T, Sengupta D, Ahuja G.",
    doi: "10.1093/bib/bbab237",
    tag: "Single Cell"
  },
  {
    year: "2021",
    title: "Big data analytics in single-cell transcriptomics: five grand opportunities",
    journal: "Wiley Interdiscip Rev Data Min Knowl Discov. 2021;11:e1414",
    authors: "Bhattacharya N, Nelson CC, Ahuja G, Sengupta D.",
    doi: "10.1002/widm.1414",
    tag: "Transcriptomics"
  },
  {
    year: "2021",
    title: "Modeling expression ranks for noise-tolerant differential expression analysis of scRNA-seq data",
    journal: "Genome Res. 2021;31:689–697",
    authors: "Gupta K, Lalit M, Biswas A, Sanada CD, Greene C, Hukari K, Maulik U, Bandyopadhyay S, Ramalingam N, Ahuja G, Ghosh A, Sengupta D.",
    doi: "10.1101/gr.267070.120",
    tag: "Noise-Tolerance"
  },
  {
    year: "2021",
    title: "Machine-Olf-Action: A unified framework for developing and interpreting machine-learning models for chemosensory research",
    journal: "Bioinformatics. 2021;37(12):1769–1771",
    authors: "Gupta A, Choudhary M, Mohanty SK, Mittal A, Gupta K, Arya A, Kumar S, Katyayan N, Dixit NK, Kalra S, Goel M, Sahni M, Singhal V, Mishra T, Sengupta D, Ahuja G.",
    doi: "10.1093/bioinformatics/btaa1104",
    tag: "Machine Olfaction"
  },
  {
    year: "2021",
    title: "Recent smell loss is the best predictor of COVID-19 among individuals with recent respiratory symptoms",
    journal: "Chem Senses. 2021;46:bjaa081",
    authors: "Gerkin RC, Ohla K, Ahuja G, Parma V, GCCR Group.",
    doi: "10.1093/chemse/bjaa081",
    tag: "Smell Loss"
  },
  {
    year: "2021",
    title: "Challenges and possible solutions for decoding extranasal olfactory receptors",
    journal: "FEBS J. 2021;288(14):4230–4241",
    authors: "Kalra S, Mittal A, Bajoria M, Mishra T, Maryam S, Sengupta D, Ahuja G.",
    doi: "10.1111/febs.15606",
    tag: "Receptor Decoding"
  },
  {
    year: "2021",
    title: "The cellular basis of loss of smell in 2019-nCoV-infected individuals",
    journal: "Brief Bioinform. 2021;22(2):873–881",
    authors: "Gupta K, Mohanty SK, Mittal A, Kalra S, Kumar S, Mishra T, Ahuja J, Sengupta D, Ahuja G.",
    doi: "10.1093/bib/bbaa168",
    tag: "smell pathology"
  },
  {
    year: "2020",
    title: "Molecular signature comprising 11 platelet genes enables accurate blood-based diagnosis of NSCLC",
    journal: "BMC Genomics. 2020;21:744",
    authors: "Goswami C, Chawla S, Thakral D, Pant H, Verma P, Malik PS, Jayadeva, Gupta R, Ahuja G, Sengupta D.",
    doi: "10.1186/s12864-020-07147-z",
    tag: "Liquid Biopsy"
  },
  {
    year: "2020",
    title: "Analysis of single-cell transcriptomes links enrichment of olfactory receptors with cancer cell differentiation status and prognosis",
    journal: "Commun Biol. 2020;3:506",
    authors: "Kalra S, Mittal A, Gupta K, Singhal V, Gupta A, Mishra T, Naidu S, Sengupta D, Ahuja G.",
    doi: "10.1038/s42003-020-01232-5",
    tag: "Single Cell"
  },
  {
    year: "2019",
    title: "Loss of genomic integrity induced by lysosphingolipid imbalance drives ageing in the heart",
    journal: "EMBO Rep. 2019;20(4):e47407",
    authors: "Ahuja G, Bartsch D, Yao W, Geissen S, Frank S, Aguirre A, Russ N, Messling JE, Dodzian J, Lagerborg KA, Vargas NE, Muck JS, Brodesser S, Baldus S, Sachinidis A, Hescheler J, Dieterich C, Trifunovic A, Papantonis A, Petrascheck M, Klinke A, Jain M, Valenzano DR, Kurian L.",
    doi: "10.15252/embr.201847407",
    tag: "Cardiac Aging"
  },
  {
    year: "2019",
    title: "Detection of RNA–DNA binding sites in long noncoding RNAs",
    journal: "Nucleic Acids Res. 2019;47(6):e32",
    authors: "Kuo CC, Hänzelmann S, Sentürk Cetin N, Frank S, Zajzon B, Derks JP, Akhade VS, Ahuja G, Kanduri C, Grummt I, Kurian L, Costa IG.",
    doi: "10.1093/nar/gkz037",
    tag: "lncRNA mapping"
  },
  {
    year: "2019",
    title: "yylncT defines a class of divergently transcribed lncRNAs and safeguards T-mediated mesodermal commitment of human PSCs",
    journal: "Cell Stem Cell. 2019;24:318–327.e8",
    authors: "Frank S, Ahuja G, Bartsch D, Russ N, Yao W, Kuo JCC, Derks JP, Akhade VS, Kargapolova Y, Georgomanolis T, Messling JE, Gramm M, Brant L, Rehimi R, Vargas NE, Kuroczik A, Yang TP, Sahito RGA, Franzen J, Hescheler J, Sachinidis A, Peifer M, Rada-Iglesias A, Kanduri M, Costa IG, Kanduri C, Papantonis A, Kurian L.",
    doi: "10.1016/j.stem.2018.11.005",
    tag: "Stem Cells"
  },
  {
    year: "2018",
    title: "Overlapping but distinct topology for zebrafish V2R-like olfactory receptors reminiscent of odorant receptor spatial expression zones",
    journal: "BMC Genomics. 2018;19:383",
    authors: "Ahuja G, Reichel V, Kowatschew D, Syed AS, Kotagiri AK, Oka Y, Weth F, Korsching SI.",
    doi: "10.1186/s12864-018-4740-8",
    tag: "Zebrafish Olfaction"
  },
  {
    year: "2017",
    title: "A post-transcriptional program coordinated by CSDE1 prevents intrinsic neural differentiation of human embryonic stem cells",
    journal: "Nat Commun. 2017;8:1456",
    authors: "Ju Lee H, Bartsch D, Xiao C, Guerrero S, Ahuja G, Schindler C, Moresco JJ, Yates JR III, Gebauer F, Bazzi H, Dieterich C, Kurian L, Vilchez D.",
    doi: "10.1038/s41467-017-01744-5",
    tag: "Stem Cells"
  },
  {
    year: "2017",
    title: "A single identified glomerulus in the zebrafish olfactory bulb carries the high-affinity response to death-associated odor cadaverine",
    journal: "Sci Rep. 2017;7:40892",
    authors: "Dieris M, Ahuja G, Krishna V, Korsching SI.",
    doi: "10.1038/srep40892",
    tag: "Olfaction GLomerulus"
  },
  {
    year: "2016",
    title: "Elimination of a ligand gating site generates a supersensitive olfactory receptor",
    journal: "Sci Rep. 2016;6:28359",
    authors: "Sharma K, Ahuja G, Hussain A, Balfanz S, Baumann A, Korsching SI.",
    doi: "10.1038/srep28359",
    tag: "Olfactory Receptor"
  },
  {
    year: "2015",
    title: "Molecular and neuronal homology between the olfactory systems of zebrafish and mouse",
    journal: "Sci Rep. 2015;5:11487",
    authors: "Saraiva LR, Ahuja G, Ivandic I, Syed AS, Marioni JC, Korsching SI, Logan DW.",
    doi: "10.1038/srep11487",
    tag: "Neural Homology"
  },
  {
    year: "2014",
    title: "Kappe neurons, a novel population of olfactory sensory neurons",
    journal: "Sci Rep. 2014;4:4037",
    authors: "Ahuja G, Bozorg Nia S, Zapilko V, Shiriagin V, Kowatschew D, Oka Y, Korsching SI.",
    doi: "10.1038/srep04037",
    tag: "Kappe Neurons"
  },
  {
    year: "2014",
    title: "Zebrafish olfactory receptor ORA1 recognizes a putative reproductive pheromone",
    journal: "Commun Integr Biol. 2014;7(5):e970501",
    authors: "Ahuja G, Korsching S.",
    doi: "10.4161/19420889.2014.970501",
    tag: "Olfactory Pheromone"
  },
  {
    year: "2014",
    title: "ORA1, a zebrafish olfactory receptor ancestral to all mammalian V1R genes, recognizes 4-hydroxyphenylacetic acid, a putative reproductive pheromone",
    journal: "J Biol Chem. 2014;289:19778–19788",
    authors: "Behrens M, Frank O, Rawel H, Ahuja G, Potting C, Hofmann T, Meyerhof W, Korsching S.",
    doi: "10.1074/jbc.M114.573162",
    tag: "Olfactory Receptor"
  },
  {
    year: "2013",
    title: "High-affinity olfactory receptor for the death-associated odor cadaverine",
    journal: "Proc Natl Acad Sci USA. 2013;110:19579–19584",
    authors: "Hussain A, Saraiva LR, Ferrero DM, Ahuja G, Krishna VS, Liberles SD, Korsching SI.",
    doi: "10.1073/pnas.1318596110",
    tag: "Cadaverine Rec"
  },
  {
    year: "2013",
    title: "Zebrafish crypt neurons project to a single, identified mediodorsal glomerulus",
    journal: "Sci Rep. 2013;3:2063",
    authors: "Ahuja G, Ivandic I, Saltürk M, Oka Y, Nadler W, Korsching SI.",
    doi: "10.1038/srep02063",
    tag: "Crypt Neurons"
  }
];

// Helper to bold 'Ahuja G' in author names
const formatAuthors = (authors: string) => {
  const target = "Ahuja G";
  const parts = authors.split(target);
  if (parts.length > 1) {
    return (
      <span>
        {parts[0]}
        <strong>{target}</strong>
        {parts[1]}
      </span>
    );
  }
  return <span>{authors}</span>;
};

export const PublicationsSection: React.FC = () => {
  const [hoveredDoi, setHoveredDoi] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = PUBLICATIONS_LIST.filter(pub => 
    pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pub.year.includes(searchQuery)
  );

  return (
    <section className="bg-brand-dark transition-colors duration-500 py-24 min-h-screen relative overflow-hidden" id="publications">
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8 mb-20 border-b border-brand-border pb-12">
          <ScrollReveal variant="fadeUp" className="max-w-2xl">
            <div className="font-mono text-xs md:text-sm text-brand-teal uppercase tracking-widest font-bold mb-4">
              [ ACADEMIC RECORD ]
            </div>
            <h1 className="font-syne font-bold text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-tight uppercase text-brand-text mb-6">
              Publications<span className="text-brand-teal">.</span>
            </h1>
            <p className="font-instrument text-lg md:text-xl text-brand-text-muted font-light leading-relaxed">
              Peer-reviewed contributions grouped by year from 2026 to 2013. Reflecting rigorous research across deep learning, functional metabolomics, systems biology, and structural interactions.
            </p>
          </ScrollReveal>

          {/* Search bar designed professionally */}
          <ScrollReveal variant="blurReveal" delay={0.2} className="relative w-full lg:w-96 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted" />
            <input 
              type="text" 
              placeholder="Filter publications (e.g. Science, 2024)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-brand-card dark:bg-[#0C0E12] border border-brand-border rounded-[2px] font-mono text-xs sm:text-sm text-brand-text placeholder-brand-text-muted/50 focus:outline-hidden focus:border-brand-teal transition-colors"
            />
          </ScrollReveal>
        </div>

        {/* Bibliography Timeline - editorial full-width rows */}
        <div className="space-y-0">
          <AnimatePresence>
            {filteredPublications.map((pub, idx) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.4) }}
                onMouseEnter={() => setHoveredDoi(pub.doi)}
                onMouseLeave={() => setHoveredDoi(null)}
                className="group border-b border-brand-border py-10 flex flex-col md:grid md:grid-cols-[100px_1fr_250px] gap-6 md:gap-12 items-start hover:bg-brand-text/[0.01] -mx-4 px-4 transition-colors duration-300 relative"
              >
                {/* Year Indicator with Calendar icon */}
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm text-brand-teal font-bold">{pub.year}</span>
                </div>

                {/* Main publication citation */}
                <div className="space-y-3 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs border border-brand-teal/30 px-2 py-0.5 text-brand-teal font-bold tracking-widest uppercase">
                      {pub.tag}
                    </span>
                  </div>

                  <h3 className="font-syne font-semibold text-lg sm:text-lg text-brand-text leading-snug group-hover:text-brand-teal transition-colors duration-300 uppercase tracking-tight">
                    {pub.title}
                  </h3>

                  <p className="font-instrument text-sm sm:text-base text-brand-text-muted leading-relaxed">
                    {formatAuthors(pub.authors)} — <span className="italic font-medium text-brand-text/80">{pub.journal}</span>
                  </p>
                </div>

                {/* DOI Interaction Block */}
                <div className="md:text-right w-full flex md:flex-col justify-between md:justify-center items-center md:items-end gap-2 h-full">
                  <a 
                    href={`https://doi.org/${pub.doi}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-mono text-xs text-brand-text-muted hover:text-brand-teal flex items-center gap-1.5 border border-brand-border px-3.5 py-1.5 rounded-[2px] transition-all bg-brand-dark/20 hover:border-brand-teal"
                  >
                    <span>DOI Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  {hoveredDoi === pub.doi && (
                    <motion.div 
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="hidden md:block font-mono text-[11px] text-brand-teal font-bold"
                    >
                      doi.org/{pub.doi}
                    </motion.div>
                  )}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPublications.length === 0 && (
            <div className="py-20 text-center border-b border-brand-border">
              <BookOpen className="w-8 h-8 text-brand-text-muted/30 mx-auto mb-4" />
              <p className="font-mono text-xs sm:text-sm text-brand-text-muted">No publications match your search query.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
