import React from 'react';

const LOGOS = [
  "onOffice", "FlowFact", "PropStack", "Immowelt", 
  "Makler.io", "FIO", "Stein Software", "Justimmo", "Excel"
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/[0.05] bg-[#02040a] relative overflow-hidden">
      {/* Background Tint */}
      <div className="absolute inset-0 bg-brand-950/10"></div>

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
        <p className="text-xs font-bold text-brand-400/80 uppercase tracking-[0.3em] font-display">
          Kompatibel mit führenden Makler-Systemen
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group z-10">
        <div className="flex animate-scroll gap-24 items-center whitespace-nowrap px-8">
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default">
              <span className="font-display font-bold text-2xl text-white tracking-tight hover:text-brand-200 transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
        
        {/* Sharp fades to match dark background */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#02040a] via-[#02040a]/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#02040a] via-[#02040a]/80 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;