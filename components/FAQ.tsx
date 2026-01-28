import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`premium-card rounded-2xl border border-white/[0.08] transition-all duration-300 ${isOpen ? 'bg-white/[0.03]' : 'bg-transparent hover:bg-white/[0.02]'}`}
    >
      <button 
        className="w-full py-6 px-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-display font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-500 border-brand-500 text-white rotate-180' : 'border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'}`}
      >
        <p className="text-slate-400 leading-relaxed text-base font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-32 bg-[#02040a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="pill-badge mb-6 animate-fade-in-up">
            FAQ
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight">
            Häufige Fragen
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col gap-4 mb-12 reveal-on-scroll">
          <FAQItem 
            question="Wie schnell sehe ich Ergebnisse?" 
            answer="Oft innerhalb der ersten 48 Stunden nach Aktivierung. Das System reaktiviert schlafende Kontakte und identifiziert heiße Leads sofort nach Einrichtung." 
          />
          <FAQItem 
            question="Funktioniert das mit meinem CRM?" 
            answer="Ja. Wir unterstützen alle gängigen Immobilien-CRMs wie onOffice, FlowFact, PropStack und sogar CSV-Uploads." 
          />
          <FAQItem 
            question="Wie komplex ist die Einrichtung?" 
            answer="Sehr einfach. Wir übernehmen die gesamte Integration. Sie brauchen keine technischen Kenntnisse. Das Ziel ist: Sie machen weiter Ihren Job." 
          />
          <FAQItem 
            question="Wie sieht es mit Datenschutz (DSGVO) aus?" 
            answer="Höchste Priorität. Unsere Server stehen in Deutschland. Wir verarbeiten Daten streng nach DSGVO-Richtlinien." 
          />
          <FAQItem 
            question="Wirken die Nachrichten roboterhaft?" 
            answer="Nein. Unsere KI ist darauf trainiert, menschlich und persönlich zu klingen." 
          />
          <FAQItem 
            question="Was kostet Immomatchr?" 
            answer="Die Investition ist transparent und skalierbar. Ein einziger reaktivierter Abschluss finanziert die Software oft für das gesamte Jahr. Sie erhalten ein klares Angebot im Erstgespräch." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;