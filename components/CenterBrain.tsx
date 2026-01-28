import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, MessageCircle, Zap } from 'lucide-react';

const CenterBrain: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="relative pointer-events-auto z-20 flex items-center justify-center"
    >
      {/* Top Floating Badge */}
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 left-1/2 bg-slate-900/90 border border-emerald-500/50 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] whitespace-nowrap z-30"
      >
        <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
        <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wide">{'<'} 60 Sek Reaktionszeit</span>
      </motion.div>

      {/* Outer Rotating Ring */}
      <motion.div 
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-violet-500/20 border-t-violet-500/60 border-dashed"
      />
      
      {/* Reverse Rotating Ring */}
      <motion.div 
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-36 h-36 rounded-full border border-emerald-500/10 border-b-emerald-400/40"
      />

      {/* Main Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-36 h-36 rounded-full bg-slate-900 border border-violet-500/30 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.35)] z-10 backdrop-blur-xl"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/20 to-emerald-500/20" />
        
        <div className="flex items-center gap-2 mb-2">
            <BrainCircuit className="w-8 h-8 text-violet-400 drop-shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
            <div className="relative">
              <MessageCircle className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
        </div>
        
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold text-white tracking-wider">Immomatchr</span>
          <span className="text-[10px] font-mono text-violet-300 tracking-widest mt-0.5">AI ENGINE</span>
        </div>
      </motion.div>

      {/* Bottom Badge */}
      <motion.div 
        initial={{ x: "-50%" }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-16 left-1/2 whitespace-nowrap"
      >
         <span className="text-[11px] font-medium text-slate-400 tracking-wide bg-slate-900/50 px-2 py-0.5 rounded border border-slate-700/50 flex items-center gap-1">
           <span className="text-yellow-400">✨</span> Menschlicher Tonfall
         </span>
      </motion.div>

      {/* Connection Nodes on the Circle (Visual only) */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] z-20" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)] z-20" />

    </motion.div>
  );
};

export default CenterBrain;