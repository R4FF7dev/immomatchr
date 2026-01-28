import React from 'react';

// This component draws the SVG lines connecting the nodes.

const FlowConnections: React.FC = () => {
  // Coordinates based on strict 160x90 grid for 16:9 aspect ratio
  // Left Cards Center X ~ 20. Edge is approx 38.
  // Right Cards Center X ~ 140. Edge is approx 122.
  // Brain Center X = 80. Edge is approx 68 (left) and 92 (right).
  
  const LEFT_EDGE_START = 38;
  const CENTER_BRAIN_LEFT = 68;
  const CENTER_BRAIN_RIGHT = 92;
  const RIGHT_EDGE_END = 122;
  
  const ROW_TOP = 20; // 20%
  const ROW_MID = 50; // 50%
  const ROW_BOT = 80; // 80%

  // Helper to generate paths
  const createPath = (id: string, startX: number, startY: number, endX: number, endY: number) => {
    
    // Control points for smooth S-curve
    const cp1x = startX + (endX - startX) * 0.5;
    const cp1y = startY;
    const cp2x = startX + (endX - startX) * 0.5;
    const cp2y = endY;

    // If y is same, straight line logic but using bezier for consistency
    const d = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

    return (
      <React.Fragment key={id}>
        {/* Background Trace Line */}
        <path 
          d={d} 
          fill="none" 
          stroke="url(#gradientLine)" 
          strokeWidth="1.5" 
          strokeOpacity="0.3" // Reduced slightly for cleaner dark mode look
          strokeLinecap="round"
        />
        
        {/* The Animated Particle */}
        <circle r="1.5" fill="#a78bfa">
           <animateMotion dur={`${2.5 + Math.random()}s`} repeatCount="indefinite" path={d} rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
             <mpath href={`#${id}`} />
           </animateMotion>
        </circle>
        
        {/* Secondary Particle (offset) */}
        <circle r="1" fill="#34d399" opacity="0.8">
           <animateMotion dur={`${3 + Math.random()}s`} begin="0.5s" repeatCount="indefinite" path={d} rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
             <mpath href={`#${id}`} />
           </animateMotion>
        </circle>
      </React.Fragment>
    );
  };

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 160 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gradientLine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="160" y2="0">
          <stop offset="0%" stopColor="#475569" stopOpacity="0.05" />
          <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.5" /> 
          <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#475569" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Left to Center Connections */}
      {/* Starting exactly from card right edge to brain left edge */}
      {createPath("pathL1", LEFT_EDGE_START, ROW_TOP, CENTER_BRAIN_LEFT, 50)}
      {createPath("pathL2", LEFT_EDGE_START, ROW_MID, CENTER_BRAIN_LEFT, 50)}
      {createPath("pathL3", LEFT_EDGE_START, ROW_BOT, CENTER_BRAIN_LEFT, 50)}

      {/* Center to Right Connections */}
      {/* Starting from brain right edge to card left edge */}
      {createPath("pathR1", CENTER_BRAIN_RIGHT, 50, RIGHT_EDGE_END, ROW_TOP)}
      {createPath("pathR2", CENTER_BRAIN_RIGHT, 50, RIGHT_EDGE_END, ROW_MID)}
      {createPath("pathR3", CENTER_BRAIN_RIGHT, 50, RIGHT_EDGE_END, ROW_BOT)}

    </svg>
  );
};

export default FlowConnections;