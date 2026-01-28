import React from 'react';
import HeroSection from './components/HeroSection';

const Workflow: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0F19] text-white">
      {/* Example: Your Existing Website Navbar */}
      <nav className="w-full h-16 border-b border-slate-800 flex items-center justify-between px-8 bg-[#0B0F19]/90 backdrop-blur-md fixed top-0 z-50">
        <div className="font-bold text-xl tracking-tighter">ImmoMatchr</div>
        <div className="hidden md:flex gap-6 text-sm text-slate-400">
          <span className="hover:text-white cursor-pointer">Features</span>
          <span className="hover:text-white cursor-pointer">Pricing</span>
          <span className="hover:text-white cursor-pointer">About</span>
        </div>
        <button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Login
        </button>
      </nav>

      <main>
        {/* THIS IS THE INTEGRATION: Drop the HeroSection component here */}
        <HeroSection />

        {/* Example: Rest of your website content */}
        <section className="py-20 px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Warum Makler uns lieben</h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-400 text-center">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h3 className="text-white text-xl font-semibold mb-2">24/7 Erreichbarkeit</h3>
              <p>Kein Lead geht mehr verloren, auch am Wochenende.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h3 className="text-white text-xl font-semibold mb-2">onOffice Sync</h3>
              <p>Vollautomatische Eintragung in Ihr bestehendes CRM.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h3 className="text-white text-xl font-semibold mb-2">Mehr Umsatz</h3>
              <p>Fokussieren Sie sich auf Termine, nicht auf Lead-Qualifizierung.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workflow;