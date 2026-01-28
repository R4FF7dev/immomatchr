
import React from 'react';
import { Database, Clock, TrendingDown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Body Text */}
        <div className="max-w-4xl mx-auto text-center mb-20 reveal-on-scroll">
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl mb-8 tracking-tight text-white leading-tight">
            Ihre wertvollsten Leads liegen <br/>
            <span className="text-gradient">ungenutzt im CRM</span>
          </h2>
          <div className="max-w-2xl mx-auto text-lg text-slate-400 font-light space-y-4">
             <p>Sie sitzen auf kaufbereiten Interessenten. aber langsame Nachfassaktionen und ungenutze Kundendaten fuehren zu massiven Umsatzeinbussen.</p>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProblemCard 
            icon={Database}
            title="Ungenutzte Kundendaten"
            text="Hunderte Anfragen liegen unberührt in Ihrem CRM. Sie wissen, dass dort Umsatz liegt – aber Ihnen fehlt die Übersicht für effektives Matching."
            delay="delay-100"
          />
          <ProblemCard 
            icon={TrendingDown}
            title="Verpasste Provisionen"
            text="Provisionen gehen verloren, weil sich Nachfassaktionen stapeln. Kunden erwarten heute sofortige Reaktion, sonst kaufen sie beim Schnelleren."
            delay="delay-200"
          />
          <ProblemCard 
            icon={Clock}
            title="Verlorene Vertriebszeit"
            text="Ihr Team verliert wertvolle Vertriebszeit mit manuellem Datenabgleich und Terminfindung, statt Abschlüsse zu tätigen."
            delay="delay-300"
          />
        </div>

        {/* Summary */}
        <div className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 reveal-on-scroll delay-500 max-w-3xl mx-auto">
          <div className="bg-[#080808] rounded-xl px-8 py-6 text-center">
            <p className="text-lg text-slate-300">
              <span className="text-white font-bold">Die Realität:</span> Ohne smarte Automatisierung entgeht ihnen wertvoller Umsatz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

const ProblemCard: React.FC<{ icon: any, title: string, text: string, delay: string }> = ({ icon: Icon, title, text, delay }) => (
  <div className={`premium-card p-8 rounded-2xl group reveal-on-scroll ${delay}`}>
    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-slate-400 group-hover:text-white group-hover:bg-brand-500/20 transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-display font-bold text-white mb-4">{title}</h3>
    <p className="text-slate-400 text-base leading-relaxed">
      {text}
    </p>
  </div>
);

export default ProblemSection;
