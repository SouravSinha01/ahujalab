import React from 'react';
import { Github, Mail, MapPin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-24 border-t border-brand-border transition-colors duration-500" id="contact">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-syne font-bold uppercase tracking-tighter text-brand-text transition-colors duration-500">
              Ahuja Lab<span className="text-brand-teal">.</span>
            </h2>
            <p className="max-w-md text-brand-text-muted text-sm leading-relaxed">
              Decoding the dark molecules of life through the lens of artificial intelligence and systems biology. Located at the Indraprastha Institute of Information Technology, Delhi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-teal hover:text-brand-btn-text hover:border-brand-teal transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-teal hover:text-brand-btn-text hover:border-brand-teal transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-text hover:bg-brand-teal hover:text-brand-btn-text hover:border-brand-teal transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-xs md:text-sm uppercase text-brand-teal tracking-widest font-bold">Navigation</h4>
            <ul className="space-y-3 font-mono text-xs md:text-sm uppercase tracking-wider text-brand-text-muted font-bold">
              <li><a href="#hero" className="hover:text-brand-teal transition-colors">Home</a></li>
              <li><a href="#science" className="hover:text-brand-teal transition-colors">Science</a></li>
              <li><a href="#team" className="hover:text-brand-teal transition-colors">The Team</a></li>
              <li><a href="#about" className="hover:text-brand-teal transition-colors">Our Story</a></li>
              <li><a href="#publications" className="hover:text-brand-teal transition-colors">Publications</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-xs md:text-sm uppercase text-brand-teal tracking-widest font-bold">Location</h4>
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-brand-teal shrink-0" />
              <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed font-mono">
                Indraprastha Institute of Information Technology (IIIT-Delhi)<br />
                Okhla Phase III, New Delhi, India 110020
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500">
          <p className="text-xs font-mono text-brand-text-muted opacity-40 uppercase tracking-[0.2em]">
            © 2026 AHUJA LAB — IIIT DELHI
          </p>
          <p className="text-xs font-mono text-brand-text-muted opacity-40 uppercase tracking-[0.2em]">
          {'</>'} by Sourav Sinha
          </p>
        </div>
      </div>
    </footer>
  );
};
