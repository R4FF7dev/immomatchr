import React, { useEffect } from 'react';
import { CheckCircle, Clock, Video } from 'lucide-react';

const MainCTA: React.FC = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', 'true');
    head?.appendChild(script);

    return () => {
      if (head && script.parentNode === head) {
        head.removeChild(script);
      }
    };
  }, []);

  return (
    // WICHTIG: Hier habe ich die ID auf "demo-booking" geändert, damit die Navbar sie findet!
    <section className="py-32 relative overflow-hidden bg-[#02040a]" id="demo-booking">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-gradient-to-b from-brand-900/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Card Container with Blue Streak Background */}
        <div className="relative rounded-3xl border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2 reveal-on-scroll shadow-2xl shadow-black/80 group">
          
          {/* Background Visual for the whole card */}
          <div className="absolute inset-0 bg-equinox-streaks opacity-20 pointer-events-none"></div>

          {/* Left Side: Copy & Value Prop */}
          <div className="p-10 md:p-14 flex flex-col justify-center relative bg-[#05070e]/80 backdrop-blur-sm">
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 text-white tracking-tight leading-tight">
                Bereit für Termine auf <span className="text-gradient block mt-1">Auto-Pilot?</span>
              </h2>
              
              <div className="flex items-center gap-4 text-slate-400 mb-8 text-base font-medium">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Clock size={14} className="text-brand-400" /> 30 Min.
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Video size={14} className="text-brand-400" /> Zoom Call
                </div>
              </div>

              <p className="text-lg font-medium text-white mb-6">
                In 30 Minuten zeigen wir Ihnen:
              </p>
              
              <div className="space-y-5 mb-10">
                <CheckItem text="Welches ungeschöpfte Umsatzpotenzial konkret in Ihrer Datenbank liegt." />
                <CheckItem text="Wie Immomatchr in den nächsten 14 Tagen qualifizierte Termine buchen würde." />
                <CheckItem text="Wie die nahtlose, nicht-technische Integration in Ihren Workflow aussieht." />
              </div>

              <div className="p-6 rounded-2xl bg-brand-950/20 border border-brand-500/20 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500/10 blur-xl rounded-full"></div>
                 <div className="flex items-start gap-4 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg shadow-brand-500/20">I</div>
                   <div>
                     <p className="text-base text-slate-300 italic mb-2 font-light">
                       "Im Erstgespräch finden wir heraus, ob unsere KI für Ihr Maklerbüro geeignet ist. Keine Verkaufspräsentation, sondern eine ehrliche Potenzialanalyse."
                     </p>
                     <p className="text-sm font-bold text-brand-400 uppercase tracking-wider">Immomatchr Team</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side: Calendly Embed */}
          <div className="bg-[#02040a] border-t lg:border-t-0 lg:border-l border-white/10 p-4 md:p-6 flex flex-col relative">
            <div className="flex-grow w-full h-[650px] md:h-[700px] relative rounded-2xl overflow-hidden bg-[#02040a]">
              {/* Calendly Inline Widget 
                Equinox Dark Theme Config
              */}
              <div 
                className="calendly-inline-widget w-full h-full" 
                data-url="https://calendly.com/u1293674756?hide_event_type_details=1&hide_gdpr_banner=1&background_color=02040a&text_color=ffffff&primary_color=0ea5e9" 
                style={{ minWidth: '320px', height: '100%' }} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const CheckItem: React.FC<{text: string}> = ({text}) => (
  <div className="flex items-start gap-4 group">
    <div className="mt-1 bg-brand-500/10 p-1 rounded-full flex-shrink-0 border border-brand-500/20 group-hover:border-brand-500/50 transition-colors">
      <CheckCircle className="text-brand-400 w-4 h-4" />
    </div>
    <span className="text-slate-300 text-base leading-relaxed font-light group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default MainCTA;