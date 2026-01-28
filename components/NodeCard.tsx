import React from 'react';
import { motion } from 'framer-motion';

interface NodeCardProps {
  icon: React.ReactNode;
  label: React.ReactNode;
  subLabel: string;
  position: { x: string; y: string };
  delay: number;
  align?: 'left' | 'right';
}

const NodeCard: React.FC<NodeCardProps> = ({ icon, label, subLabel, position, delay, align = 'left' }) => {
  const isRight = align === 'right';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      style={{ left: position.x, top: position.y }}
      className="absolute -translate-x-1/2 -translate-y-1/2 w-[220px] z-10"
    >
      <div className="relative bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex items-center gap-3 shadow-xl backdrop-blur-md group hover:border-slate-700 transition-colors">
        
        {/* Card Content */}
        <div className={`p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:scale-105 transition-transform duration-300`}>
          {icon}
        </div>
        
        <div className="flex flex-col min-w-0">
          <span className="text-white text-xs font-bold leading-tight truncate">{label}</span>
          <span className="text-slate-500 text-[10px] font-medium truncate mt-0.5">{subLabel}</span>
        </div>

        {/* Connection Dot */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-slate-900 z-20 ${
            isRight 
              ? '-left-1.5 bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]' 
              : '-right-1.5 bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]'
          }`}
        />
        
        {/* Active status indicator (optional glow) */}
        {isRight && (
           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </motion.div>
  );
};

export default NodeCard;