import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Megaphone, 
  CheckCircle2, 
  Calendar, 
  Database, 
  MessageCircle, 
  Brain, 
  Users,
  Zap
} from 'lucide-react';

const Workflow = () => {
  // Animation config for the moving particles
  const particleTransition = { 
    duration: 2, 
    repeat: Infinity, 
    ease: "linear" as const, 
    repeatDelay: 0.5 
  };

  return (
    <div className="w-full bg-[#0B0F19] flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* HEADER SECTION - Reduced Padding (pt-0 instead of pt-12, mb-2 instead of mb-10) */}
      <div className="text-center mb-2 px-4 z-20 relative pt-0">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          Vom Lead zum Termin in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500 whitespace-nowrap">
            &lt; 60 Sekunden
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-slate-400 text-lg">
          <span>Automatische Qualifizierung & Buchung via</span>
          <div className="flex items-center gap-1 text-green-400 font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp AI</span>
          </div>
        </div>
      </div>

      {/* GRAPH CONTAINER - Reduced Bottom Padding (pb-8 instead of pb-24) */}
      <div className="relative w-full overflow-x-auto no-scrollbar flex justify-center pb-8">
        
        {/* THE CANVAS: 1200px x 600px */}
        <div className="min-w-[1200px] h-[600px] relative">
          
          {/* ==============================================
              LAYER 1: THE SVG LINES & PARTICLES
             ============================================== */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600">
            <defs>
              <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* --- LEFT SIDE (Purple) --- */}
            
            {/* Top Left -> Center */}
            <path d="M 320 110 C 450 110, 450 300, 520 300" fill="none" stroke="#8b5cf6" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 320 110 C 450 110, 450 300, 520 300" 
              fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={particleTransition}
            />

            {/* Middle Left -> Center */}
            <path d="M 320 300 C 380 300, 460 300, 520 300" fill="none" stroke="#8b5cf6" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 320 300 C 380 300, 460 300, 520 300" 
              fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ ...particleTransition, delay: 0.3 }}
            />

            {/* Bottom Left -> Center */}
            <path d="M 320 490 C 450 490, 450 300, 520 300" fill="none" stroke="#8b5cf6" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 320 490 C 450 490, 450 300, 520 300" 
              fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ ...particleTransition, delay: 0.6 }}
            />


            {/* --- RIGHT SIDE (Green) --- */}
            
            {/* Center -> Top Right */}
            <path d="M 680 300 C 750 300, 750 110, 880 110" fill="none" stroke="#34d399" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 680 300 C 750 300, 750 110, 880 110" 
              fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={particleTransition}
            />

            {/* Center -> Middle Right */}
            <path d="M 680 300 C 740 300, 820 300, 880 300" fill="none" stroke="#34d399" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 680 300 C 740 300, 820 300, 880 300" 
              fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ ...particleTransition, delay: 0.3 }}
            />

            {/* Center -> Bottom Right */}
            <path d="M 680 300 C 750 300, 750 490, 880 490" fill="none" stroke="#34d399" strokeWidth="2" className="opacity-20" />
            <motion.path 
              d="M 680 300 C 750 300, 750 490, 880 490" 
              fill="none" stroke="#34d399" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0.01, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{ ...particleTransition, delay: 0.6 }}
            />
          </svg>


          {/* ==============================================
              LAYER 2: THE CARDS (Absolute Positioning)
             ============================================== */}

          {/* --- LEFT COLUMN --- */}
          
          {/* Card 1: Portale */}
          <div className="absolute left-[20px] top-[50px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-orange-500/30 transition-all duration-300 shadow-lg group">
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-orange-500/10 border border-white/5 group-hover:border-orange-500/20 transition-colors">
                <Home className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-[15px]">Portale (Immoscout)</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium group-hover:text-orange-400/80">Sofort-Import</p>
              </div>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-violet-500 rounded-full z-20"></div>
            </div>
          </div>

          {/* Card 2: Meta */}
          <div className="absolute left-[20px] top-[240px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-pink-500/30 transition-all duration-300 shadow-lg group">
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-pink-500/10 border border-white/5 group-hover:border-pink-500/20 transition-colors">
                <Megaphone className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-[15px]">Meta / Instagram Ads</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium group-hover:text-pink-400/80">Social Leads</p>
              </div>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-violet-500 rounded-full z-20"></div>
            </div>
          </div>

          {/* Card 3: Bestandskunden */}
          <div className="absolute left-[20px] top-[430px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-violet-500/30 transition-all duration-300 shadow-lg group">
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-violet-500/10 border border-white/5 group-hover:border-violet-500/20 transition-colors">
                <Users className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-[15px]">Bestandskunden (CRM)</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium group-hover:text-violet-400/80">Reaktivierung schlafender Leads</p>
              </div>
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-violet-500 rounded-full z-20"></div>
            </div>
          </div>


          {/* --- CENTER NODE --- */}
          <div className="absolute left-[600px] top-[300px] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            
            {/* Top Badge (Green) */}
            <div className="absolute -top-[70px] bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.1)] whitespace-nowrap">
              <Zap className="w-3 h-3 fill-current" /> &lt; 60 SEK REAKTIONSZEIT
            </div>

            {/* Main Brain Circle */}
            <div className="relative w-44 h-44 flex items-center justify-center">
              <div className="absolute inset-0 bg-violet-600/20 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute inset-2 border border-violet-500/20 rounded-full"></div>
              <div className="absolute inset-0 border border-violet-500/10 rounded-full animate-spin-slow" style={{animationDuration: '10s'}}></div>
              
              <div className="absolute inset-3 bg-[#0f121d] rounded-full border border-violet-500/40 shadow-[0_0_50px_rgba(139,92,246,0.15)] flex flex-col items-center justify-center z-20">
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-8 h-8 text-violet-400" />
                  <MessageCircle className="w-7 h-7 text-green-400" />
                </div>
                <h2 className="text-white font-bold text-lg tracking-tight">Immomatchr</h2>
                <span className="text-[10px] bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 uppercase tracking-[0.2em] font-semibold mt-1">AI ENGINE</span>
              </div>
              
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-[#0B0F19] border-[3px] border-violet-500 rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 bg-[#0B0F19] border-[3px] border-emerald-500 rounded-full z-30 flex items-center justify-center">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Bottom Badge (Amber) */}
            <div className="absolute -bottom-[60px] bg-amber-950/30 border border-amber-500/20 text-amber-200 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-amber-400">✨</span> Menschlicher Tonfall
            </div>
          </div>


          {/* --- RIGHT COLUMN --- */}

          {/* Card 1: Qualifizierter Lead */}
          <div className="absolute left-[880px] top-[50px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-green-500/30 transition-all duration-300 shadow-lg group pl-7">
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-emerald-500 rounded-full z-20"></div>
              
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-green-500/10 border border-white/5 group-hover:border-green-500/20 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-[15px]">Qualifizierter Lead</h3>
                <p className="text-xs text-green-500/80 mt-1 font-bold">Hohe Kaufmotivation</p>
              </div>
            </div>
          </div>

          {/* Card 2: Termin */}
          <div className="absolute left-[880px] top-[240px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-fuchsia-500/30 transition-all duration-300 shadow-lg group pl-7">
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-emerald-500 rounded-full z-20"></div>
              
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-fuchsia-500/10 border border-white/5 group-hover:border-fuchsia-500/20 transition-colors">
                <Calendar className="w-6 h-6 text-fuchsia-400" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-[15px]">Termin gebucht</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium group-hover:text-fuchsia-400/80">Direkt im Kalender</p>
              </div>
            </div>
          </div>

          {/* Card 3: CRM Sync */}
          <div className="absolute left-[880px] top-[430px] w-[300px] h-[120px] z-10">
            <div className="w-full h-full bg-[#111625] border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-all duration-300 shadow-lg group pl-7">
              <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0B0F19] border-2 border-emerald-500 rounded-full z-20"></div>
              
              <div className="p-3.5 rounded-xl bg-[#1E2332] group-hover:bg-blue-500/10 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-blue-100 text-[15px]">CRM Sync (onOffice / FlowFact)</h3>
                <p className="text-xs text-blue-400 mt-1 font-bold">Synchronisierter Datensatz</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Workflow;