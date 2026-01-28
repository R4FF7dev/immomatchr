import React from 'react';
import { Plus, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    // KORREKTUR: Hier suchen wir jetzt nach 'demo-booking', passend zur MainCTA
    const element = document.getElementById('demo-booking');
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Ziel 'demo-booking' nicht gefunden. Prüfe MainCTA.tsx!");
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh] bg-[#02040a] text-center">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center animate-fade-in-up">
        
        {/* Pill Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_-5px_rgba(14,165,233,0.3)]">
          KI-SOFTWARE FÜR MAKLER
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl text-white tracking-tight leading-[1.1] mb-8">
          In Ihrem CRM liegt <span className="text-brand-400">mehr</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-purple-400">
            Provision als Sie denken
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-4xl mx-auto mb-12">
          Immomatchr verwandelt Ihre schlafenden Kontakte in Termine - <span className="text-purple-400 font-medium">vollautomatisch</span>
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-5 mb-16 items-start sm:items-center">
          <FeatureItem text="Zusätzliche Termine" />
          <FeatureItem text="Smartes KI-Matching" />
          <FeatureItem text="Vertrieb auf Autopilot" />
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToDemo}
          className="group relative inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-400 hover:to-indigo-500 rounded-full font-bold text-white text-lg md:text-xl transition-all shadow-[0_0_30px_-5px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_-10px_rgba(14,165,233,0.6)] hover:-translate-y-1 transform cursor-pointer"
        >
          <span className="text-2xl">👉</span>
          <span>Jetzt ungenutztes Potenzial analysieren</span>
        </button>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-base text-slate-400 font-medium">
           <TrustItem text="Unverbindlich" />
           <div className="hidden sm:block text-slate-700">•</div>
           <TrustItem text="30 Minuten" />
           <div className="hidden sm:block text-slate-700">•</div>
           <TrustItem text="Inkl. Potenzial-Analyse Ihrer Datenbank" />
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4">
    <Plus className="text-brand-500 w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
    <span className="text-xl md:text-2xl font-bold text-white tracking-tight">{text}</span>
  </div>
);

const TrustItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle className="text-brand-500 w-4 h-4" />
    <span>{text}</span>
  </div>
);

export default Hero;