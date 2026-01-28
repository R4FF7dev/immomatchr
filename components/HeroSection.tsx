import React from 'react';
import { MessageCircle } from 'lucide-react';
import ImmoFlow from './ImmoFlow';

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center bg-[#0B0F19] overflow-hidden">
      
      {/* Ambient Background Effects - Scoped to this section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center py-12 md:py-20">
        
        {/* The Sales Header */}
        <header className="mb-12 md:mb-16 text-center max-w-4xl mx-auto mt-4 md:mt-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center text-white mb-4">
            Vom Lead zum Termin in{" "} 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500 whitespace-nowrap">
              &lt; 60 Sekunden
            </span>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-base md:text-lg text-slate-400">
            <span>Automatische Qualifizierung & Buchung via</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500 fill-green-500/10" />
              <span className="text-green-500 font-medium">WhatsApp AI</span>
            </div>
          </div>
        </header>

        {/* The Visualization Component */}
        <ImmoFlow />
      </div>
    </section>
  );
};

export default HeroSection;