import React from 'react';
import { LayoutDashboard, Brain, MessageCircle, Bell, Calendar, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-32 bg-[#02040a] relative overflow-hidden">
      {/* Global Background Effect for Section */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-brand-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 reveal-on-scroll">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_-5px_rgba(14,165,233,0.3)]">
            Powerful Features
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white tracking-tight leading-tight">
            Die smarte <span className="text-gradient">CRM Automatisierung</span> <br/> für Makler
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Das Immomatchr-System bietet alle Bausteine, die Sie für planbares Wachstum benötigen.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          
          {/* Feature Block 1: Integration & Dashboard */}
          <FeatureBlock 
            alignment="left"
            title="Nahtlose Integration & Übersicht"
            description="Verbinden Sie Immomatchr mit Ihrem bestehenden Ökosystem. Keine Dateninseln, sondern ein fließender Austausch."
            image="https://raw.githubusercontent.com/R4FF7dev/immomatchr/main/foto_2.jpeg" 
            points={[
              { icon: LayoutDashboard, title: "CRM- & Dashboard-Integration", text: "Volle Transparenz über Lead-Quelle, Gespräche und Pipeline. Anbindung an onOffice, FlowFact, PropStack." },
              { icon: Calendar, title: "Kalender-Sync", text: "Nahtlose Integration in Google/Outlook, um Doppelbuchungen zu vermeiden." }
            ]}
          />
          
          {/* Feature Block 2: AI Intelligence */}
          <FeatureBlock 
            alignment="right"
            title="KI-Intelligenz, die verkauft"
            description="Unsere KI versteht nicht nur Daten, sondern Kontext. Sie identifiziert Kaufbereitschaft, bevor der Kunde es selbst weiß."
            image="https://raw.githubusercontent.com/R4FF7dev/immomatchr/main/foto_1.jpeg"
            points={[
              { icon: Brain, title: "KI-gestütztes Matching", text: "Analysiert Verhalten und Timing für maximale Relevanz. Findet Matches, die manuell übersehen werden." },
              { icon: MessageCircle, title: "Personalisierte Ansprache", text: "Der KI-Agent kommuniziert im passenden, menschlich klingenden Ton. Kein Roboter-Deutsch." }
            ]}
          />

          {/* Feature Block 3: Speed & Security */}
          <FeatureBlock 
            alignment="left"
            title="Schnelligkeit & Sicherheit"
            description="Reagieren Sie in Echtzeit, ohne Datenschutzrisiken einzugehen. Geschwindigkeit ist der Schlüssel zum Abschluss."
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=800" // Updated: Cyber Security / Speed Abstract
            points={[
              { icon: Bell, title: "Smart Notifications", text: "Sie werden sofort informiert, sobald ein qualifizierter Termin steht. Alle Infos sind vorbereitet." },
              { icon: ShieldCheck, title: "100% DSGVO-konform", text: "Server in Deutschland. Maximale Rechtssicherheit durch höchste Datenschutz-Standards." }
            ]}
          />

        </div>
      </div>
    </section>
  );
};

interface FeaturePoint {
  icon: any;
  title: string;
  text: string;
}

const FeatureBlock: React.FC<{ 
  alignment: 'left' | 'right', 
  title: string, 
  description: string, 
  image: string,
  points: FeaturePoint[] 
}> = ({ alignment, title, description, image, points }) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 reveal-on-scroll ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
      
      {/* Visual Side */}
      <div className="w-full lg:w-1/2 relative group">
        {/* The "Bluish Graphic" - Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-full"></div>
        
        {/* Graphic Elements (Simulated Wavy Lines) */}
        <div className="absolute -inset-4 opacity-40">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="url(#blue-grad)" strokeWidth="0.5" className="animate-pulse-slow" />
              <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="url(#blue-grad)" strokeWidth="0.5" className="animate-pulse-slow" style={{animationDelay: '1s'}} />
              <defs>
                <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
           </svg>
        </div>

        {/* Main Image Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#080c14]">
           <div className="absolute inset-0 bg-brand-900/20 mix-blend-color z-10 pointer-events-none"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent z-10 opacity-60"></div>
           <img 
             src={image} 
             alt={title} 
             className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
           />
           
           {/* Overlay Graphic Details */}
           <div className="absolute bottom-6 left-6 right-6 z-20">
             <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></div>
                <span className="text-xs font-mono text-brand-200">SYSTEM_ACTIVE // PROCESSING_DATA</span>
             </div>
           </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2">
        <h3 className="font-display font-bold text-3xl text-white mb-4">{title}</h3>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light border-l-2 border-brand-500/30 pl-6">
          {description}
        </p>

        <div className="space-y-8">
          {points.map((point, idx) => (
            <div key={idx} className="flex gap-5 group/item">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover/item:bg-brand-500 group-hover/item:text-white group-hover/item:border-brand-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                  <point.icon size={22} />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg mb-2 group-hover/item:text-brand-200 transition-colors">{point.title}</h4>
                <p className="text-base text-slate-400 leading-relaxed font-light">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Features;