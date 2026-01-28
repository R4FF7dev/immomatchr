import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      name: "Andreas Konrads",
      // Dein Link für Andy
      image: "https://i.postimg.cc/2S2j6pc8/Immomatchr-Andy.png",
    },
    {
      name: "Paul Wennink",
      // Dein Link für Paul
      image: "https://i.postimg.cc/zXyV4G01/Immomatchr_Paul.png",
    },
    {
      name: "Raffy Ukon",
      // Dein Link für Raffy
      image: "https://i.postimg.cc/RVWN2ZXZ/Immomatchr_Raffy.jpg",
    }
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 text-center reveal-on-scroll relative z-10">
        <div className="pill-badge mb-8">UNSER TEAM</div>
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-16 text-white tracking-tight">Das Team hinter <span className="text-gradient">Immomatchr</span></h2>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {members.map((member, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
               <div className="relative mb-8 w-48 h-48">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image Container */}
                  <div className="w-full h-full rounded-full overflow-hidden border border-white/10 group-hover:border-brand-500/50 transition-colors duration-500 relative z-10 bg-[#111]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
                      onError={(e) => {
                        // Fallback, falls mal ein Link ausfällt
                        const target = e.target as HTMLImageElement;
                        target.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=333&color=fff";
                      }}
                    />
                  </div>
               </div>
               
               <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">{member.name}</h3>
               <div className="h-0.5 w-8 bg-brand-900 group-hover:bg-brand-500 transition-colors rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Mission Text */}
        <div className="premium-card p-8 md:p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-50"></div>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto font-light">
            Andreas Konrads, Paul Wennink und Raffy Ukon vereinen <span className="text-white font-medium">Immobilien-Expertise</span>, <span className="text-white font-medium">Marketing-Psychologie</span> und <span className="text-white font-medium">KI-Entwicklung</span>.
            <br className="hidden md:block" /> <br className="hidden md:block" />
            <span className="text-brand-400">Ihre Mission: Zusätzliches Wachstum für Immobilienmakler durch smarte Automatisierung </span> – damit sie in einem technologiegetriebenen Markt einen Schritt voraus sind, ohne zusätzlichen Aufwand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
