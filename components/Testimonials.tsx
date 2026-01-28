import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#02040a]">
      {/* Background Streak */}
      <div className="absolute inset-0 bg-equinox-streaks opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
           <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            Was Makler <span className="text-gradient">sagen</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <TestimonialCard 
            quote="Immomatchr hat drei Verkäufe aus Kontakten generiert, die über ein Jahr inaktiv waren. Ich wusste nicht, was für ein ungenutztes Potenzial in meiner Datenbank schlummerte."
            author="Thomas Kator"
            company="Kator Immobilien"
            initials="TK"
            delay="0"
          />

          <TestimonialCard 
            quote="Qualifizierte Termine ohne ständiges manuelles Nachfassen. Ein echter Game-Changer für unsere Effizienz und unser Wachstum."
            author="Sabrina Hellweg"
            company="Immo Hellweg"
            initials="SH"
            delay="100"
          />

        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{quote: string, author: string, company: string, initials: string, delay: string}> = ({quote, author, company, initials, delay}) => (
  <div className={`premium-card p-10 rounded-3xl relative reveal-on-scroll delay-${delay}`}>
    <Quote className="absolute top-10 left-10 text-brand-500/10" size={80} />
    <div className="relative z-10">
      <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-900 to-black border border-brand-500/30 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_10px_rgba(14,165,233,0.2)]">{initials}</div>
        <div>
          <h4 className="font-bold text-white">{author}</h4>
          <p className="text-xs text-brand-400 uppercase tracking-wider font-semibold">{company}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;