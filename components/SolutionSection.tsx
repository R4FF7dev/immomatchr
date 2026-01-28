
import React from 'react';
import { BrainCircuit, Rocket, CalendarCheck } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="vorteile" className="py-32 relative bg-[#02040a] border-t border-white/[0.05] overflow-hidden">
      
      {/* Visual Graphic: Blue Streak Background */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-b from-brand-600/10 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-24 text-center reveal-on-scroll">
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6 text-white tracking-tight leading-tight">
            Immomatchr ist Ihr neuer Vertriebler.<br/>
            <span className="text-white">Smart. Schnell.</span> <span className="text-gradient">24/7.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SolutionCard 
            icon={BrainCircuit}
            title="Smartes KI-Matching"
            text="Immomatchr analysiert Suchprofile, Klickverhalten und E-Mail-Interaktionen - vollständig synchronisiert mit Ihrer Leadliste und CRM. Die KI gleicht automatisch Leads und Daten ab und identifiziert das konkrete Potential. Wer ist bereit jetzt kaufen? Und welche Immobilie könnte wirklich passen?"
            delay="0"
          />
          <SolutionCard 
            icon={Rocket}
            title="Akquise auf Autopilot"
            text="Sobald ein Match erkannt wird, startet die KI eine menschlich klingende, personalisierte Ansprache. Email oder Whatsapp - wir schneiden die Nachrichten passend zur Tonalität ihres Unternehmen zu."
            delay="100"
          />
          <SolutionCard 
            icon={CalendarCheck}
            title="Automatisierte Terminbuchung"
            text="Der Interessent wird vollautomatisch qualifiziert und bucht sich selbstständig in Ihren Kalender. Ihr Team spricht nur mit qualifizierten Interessenten."
            delay="200"
          />
        </div>
      </div>
    </section>
  );
};

const SolutionCard: React.FC<{ icon: any, title: string, text: string, delay: string }> = ({ icon: Icon, title, text, delay }) => (
  <div className={`premium-card p-10 rounded-2xl reveal-on-scroll delay-${delay} group`}>
    <div className="mb-8 relative">
       {/* Icon Glow */}
       <div className="absolute -inset-4 bg-brand-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center text-brand-400 relative z-10 group-hover:scale-110 group-hover:border-brand-500/30 transition-all duration-500">
         <Icon size={32} />
       </div>
    </div>
    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-100 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-base font-light group-hover:text-slate-300 transition-colors">
      {text}
    </p>
  </div>
);

export default SolutionSection;
