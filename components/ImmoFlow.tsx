import React from 'react';
import { 
  Home, 
  Megaphone, 
  CheckCircle, 
  Calendar, 
  Database,
  Users
} from 'lucide-react';
import NodeCard from './NodeCard';
import CenterBrain from './CenterBrain';
import FlowConnections from './FlowConnections';

const ImmoFlow: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/9] max-h-[600px] bg-slate-900/30 rounded-3xl border border-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden">
      
      {/* The SVG Layer containing connecting lines and particles */}
      <FlowConnections />

      {/* Inputs (Left Column) */}
      <div className="absolute top-0 left-0 w-[25%] h-full pointer-events-none">
        <div className="relative w-full h-full">
          <NodeCard 
            icon={<Home className="w-5 h-5 text-orange-400" />} 
            label="Portale (Immoscout)" 
            subLabel="Sofort-Import"
            position={{ x: '50%', y: '20%' }} 
            delay={0.1}
          />
          <NodeCard 
            icon={<Megaphone className="w-5 h-5 text-pink-400" />} 
            label="Meta / Instagram Ads" 
            subLabel="Social Leads"
            position={{ x: '50%', y: '50%' }} 
            delay={0.2}
          />
          <NodeCard 
            icon={<Users className="w-5 h-5 text-sky-400" />} 
            label="Bestandskunden (CRM)" 
            subLabel="Reaktivierung"
            position={{ x: '50%', y: '80%' }} 
            delay={0.3}
          />
        </div>
      </div>

      {/* Center Brain (The Engine) */}
      <div className="absolute top-0 left-[25%] w-[50%] h-full pointer-events-none flex items-center justify-center">
        <CenterBrain />
      </div>

      {/* Outputs (Right Column) */}
      <div className="absolute top-0 right-0 w-[25%] h-full pointer-events-none">
        <div className="relative w-full h-full">
           <NodeCard 
            icon={<CheckCircle className="w-5 h-5 text-green-400" />} 
            label="Qualifizierter Lead" 
            subLabel="Hohe Kaufmotivation"
            position={{ x: '50%', y: '20%' }} 
            align="right"
            delay={0.4}
          />
          <NodeCard 
            icon={<Calendar className="w-5 h-5 text-violet-400" />} 
            label="Termin gebucht" 
            subLabel="Direkt im Kalender"
            position={{ x: '50%', y: '50%' }} 
            align="right"
            delay={0.5}
          />
          <NodeCard 
            icon={<Database className="w-5 h-5 text-cyan-400" />} 
            label="CRM Sync"
            subLabel="Synchronisierter Datensatz"
            position={{ x: '50%', y: '80%' }} 
            align="right"
            delay={0.6}
          />
        </div>
      </div>
      
    </div>
  );
};

export default ImmoFlow;