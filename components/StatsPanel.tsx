
import React from 'react';
import { TrekStats } from '../types';

interface StatsPanelProps {
  stats: TrekStats;
  isTracking: boolean;
  onToggle: () => void;
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats, isTracking, onToggle }) => {
  return (
    <div className="mt-auto relative z-40 w-full px-4 pb-12 flex flex-col gap-6">
      <div className="glassmorphism rounded-[32px] p-7 shadow-2xl border border-white/10">
        <div className="grid grid-cols-3 gap-6">
          {/* Elevation */}
          <div className="flex flex-col gap-1 items-start">
            <p className="text-white/50 text-[10px] uppercase font-bold tracking-[0.2em]">Elevation</p>
            <div className="flex items-baseline gap-1">
              <p className="text-white text-[26px] font-bold leading-none tracking-tight">
                {stats.elevation.toLocaleString()}
              </p>
              <p className="text-white/40 text-[11px] font-semibold">m</p>
            </div>
            <div className="flex items-center text-green-400 text-[11px] font-bold mt-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              <span className="ml-0.5">+{stats.elevationGain}m</span>
            </div>
          </div>

          {/* Pace */}
          <div className="flex flex-col gap-1 items-center border-x border-white/10">
            <p className="text-white/50 text-[10px] uppercase font-bold tracking-[0.2em]">Pace</p>
            <p className="text-white text-[26px] font-bold leading-none tracking-tight">{stats.pace}</p>
            <p className="text-white/40 text-[10px] font-bold uppercase mt-1.5 tracking-wide">/ KM</p>
          </div>

          {/* Time */}
          <div className="flex flex-col gap-1 items-end">
            <p className="text-white/50 text-[10px] uppercase font-bold tracking-[0.2em]">Total Time</p>
            <p className="text-white text-[26px] font-bold leading-none tracking-tight">{stats.totalTime}</p>
            <p className="text-white/40 text-[10px] font-bold uppercase mt-1.5 tracking-wide">HRS</p>
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <button 
          onClick={onToggle}
          className={`size-[84px] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(13,89,242,0.4)] transition-all duration-300 transform active:scale-90 border-[6px] border-[#101622]/90 backdrop-blur-xl group ${isTracking ? 'bg-primary' : 'bg-neon-green/90'}`}
        >
          <span className={`material-symbols-outlined text-white text-[36px] ${isTracking ? 'fill-current' : 'text-background-dark font-bold'}`}>
            {isTracking ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      {/* Bottom Secondary Actions */}
      <div className="flex justify-between items-center px-6 pt-2">
        <button className="group flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
          <div className="p-2.5 rounded-full bg-white/5 group-active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[24px]">photo_camera</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Capture</span>
        </button>
        
        <div className="w-20"></div> {/* Space for FAB */}
        
        <button className="group flex flex-col items-center gap-1.5 hover:scale-105 transition-transform">
          <div className="p-2.5 rounded-full bg-red-500/10 group-active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[26px] text-red-500 font-bold">sos</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-red-500">Emergency</span>
        </button>
      </div>
    </div>
  );
};

export default StatsPanel;
