
import React from 'react';

interface TopBarProps {
  trailName: string;
  isTracking: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ trailName, isTracking }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 pt-12 px-4 pb-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
      <div className="flex items-center justify-between">
        <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background-dark/40 backdrop-blur-md border border-white/10 pointer-events-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-white text-[20px]">arrow_back_ios_new</span>
        </button>
        
        <div className="flex flex-col items-center">
          <h2 className="text-white text-base font-bold leading-tight tracking-tight">{trailName}</h2>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`size-2 rounded-full ${isTracking ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            <span className="text-[10px] text-white/70 uppercase tracking-[0.15em] font-bold">
              {isTracking ? 'Live Tracking' : 'Paused'}
            </span>
          </div>
        </div>

        <button className="flex size-10 items-center justify-center rounded-full bg-background-dark/40 backdrop-blur-md border border-white/10 pointer-events-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-white text-[20px]">signal_cellular_alt</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
