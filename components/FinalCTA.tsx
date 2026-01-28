import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {

  // FIX: Funktion zum Scrollen
  const scrollToDemo = () => {
    const element = document.getElementById('demo-booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Ziel 'demo-booking' nicht gefunden. Prüfe MainCTA.tsx!");
    }
  };

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/[0.05] bg-[#02040a]">
      {/* Equinox Blue Visuals */}
      <div className="absolute inset-0 bg-equinox-streaks opacity-30 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/20 blur-[100px] rounded-t-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal-on-scroll">
        <div className="pill-badge mb-8">
          STARTEN SIE JETZT
        </div>
        <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 text-white tracking-tighter">
          Starten Sie <span className="text-gradient">jetzt.</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Sehen Sie in einer kurzen Demo, wie Sie Ihr ungenutztes Datenpotenzial in <span className="text-white font-medium">Provision</span> verwandeln.
        </p>
        
        {/* BUTTON FIX: onClick hinzugefügt */}
        <button 
          onClick={scrollToDemo}
          className="btn-primary group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 cursor-pointer"
        >
          <span>Kostenloses Erstgespräch vereinbaren</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;