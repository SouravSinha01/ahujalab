import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Twitter, X } from 'lucide-react';

function MapPinButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const mapsUrl = 'https://www.google.com/maps?q=Indraprastha+Institute+of+Information+Technology+Delhi&z=15&output=embed';

  return (
      <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open IIIT-Delhi on Google Maps"
        className="p-0.5 text-brand-teal hover:text-brand-cobalt focus:outline-none"
      >
        <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-1 motion-safe:animate-pulse" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <div className="relative bg-brand-card w-[90%] md:w-[70%] lg:w-[60%] h-[60%] rounded-md overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-2 border-b border-brand-border">
              <div className="px-2 text-sm font-mono text-brand-text-muted">IIIT-Delhi — Map</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close map"
                className="p-2 text-brand-text-muted hover:text-brand-text"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <iframe
              title="IIIT-Delhi map"
              src={mapsUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}

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
            <h4 className="font-mono text-xs  uppercase text-brand-teal tracking-widest font-bold">Navigation</h4>
            <ul className="space-y-3 font-mono text-[11px] uppercase tracking-wider text-brand-text-muted font-bold">
              <li><a href="#hero" className="hover:text-brand-teal transition-colors">Home</a></li>
              <li><a href="#science" className="hover:text-brand-teal transition-colors">Science</a></li>
              <li><a href="#team" className="hover:text-brand-teal transition-colors">The Team</a></li>
              <li><a href="#about" className="hover:text-brand-teal transition-colors">Our Story</a></li>
              <li><a href="#publications" className="hover:text-brand-teal transition-colors">Publications</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono text-xs  uppercase text-brand-teal tracking-widest font-bold">Location</h4>
            <div className="flex gap-4 items-center">
              <img src="/iiitd.jpg" alt="IIIT-Delhi campus" className="w-20 h-auto rounded-sm object-cover shrink-0" />
              <div className="flex items-start gap-3">
                <MapPinButton />
                <p className="text-brand-text-muted text-xs leading-relaxed font-mono">
                  Indraprastha Institute of Information Technology (IIIT-Delhi)<br />
                  Okhla Phase III, New Delhi, India 110020
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-500">
          <p className="text-[10px] font-mono text-brand-text-muted opacity-40 uppercase tracking-[0.2em]">
            © 2026 AHUJA LABORATORY — IIIT DELHI
          </p>
          <p className="text-[10px] font-mono text-brand-text-muted opacity-40 uppercase tracking-[0.2em]">
            {'</>'} by Sourav Sinha
          </p>
        </div>
      </div>
    </footer>
  );
};
