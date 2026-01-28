
import React from 'react';
import { Settings, Search, MessageSquare } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section id="so-funktionierts" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-4">
            Schnell eingerichtet. <br />
            <span className="text-gradient">Kontinuierlich mehr Termine.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center group reveal-on-scroll">
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center z-10 mb-8 group-hover:border-brand-500 transition-colors shadow-xl">
                <span className="font-display font-bold text-4xl text-slate-700 group-hover:text-brand-500 transition-colors">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Einmalige Einrichtung</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Wir verbinden Immomatchr sicher und datenschutzkonform mit Ihrem CRM/Datenquelle. Keine technischen Kenntnisse erforderlich – wir erledigen das für Sie.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center group reveal-on-scroll delay-100">
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center z-10 mb-8 group-hover:border-brand-500 transition-colors shadow-xl">
                <span className="font-display font-bold text-4xl text-slate-700 group-hover:text-brand-500 transition-colors">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">KI-Analyse & Matching</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Unsere KI scannt und verknüpft Kontakthistorie und Immobilienbestand intelligent. Es läuft ohne manuellen Aufwand und findet die heißen Leads in Ihrer Datenbank.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center group reveal-on-scroll delay-200">
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center z-10 mb-8 group-hover:border-brand-500 transition-colors shadow-xl">
                <span className="font-display font-bold text-4xl text-slate-700 group-hover:text-brand-500 transition-colors">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Automatischer Termin-Flow</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Immomatchr kontaktiert passende Interessenten und führt sie zur eigenständigen Terminbuchung. Sie erhalten eine Benachrichtigung. Fertig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
