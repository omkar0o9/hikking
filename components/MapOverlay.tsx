
import React from 'react';
import { Landmark } from '../types';

interface MapOverlayProps {
  landmarks: Landmark[];
}

const MapOverlay: React.FC<MapOverlayProps> = ({ landmarks }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsJDb5hGto-1LJfXO4a83NClpzXgGuBBdkuVHNzDCeoSIV1rLVG6N4hQgV1VuovOK-3OYa7K9tFuDfQWx6TS7gWx4VgFd8Iy0MaphSE0h5tPVxl8J2llZa5HWC_gcPpnQ7HGPGXdF_cUGEnpTVlPOmgk4yHcGE5nYWX63dSv1kw2_c5m4KsEv3HxxNcxSrjWanl07eLSKGpgfcYkrDZPtzrTA_7H91viExgFYCcWqpA4VDmueciFVIlZfadawWFKWKYKUwdl0Khqw")`,
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      >
        {/* Neon Trail Path SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-80" viewBox="0 0 400 800" preserveAspectRatio="none">
          <path 
            className="trail-path" 
            d="M 100 800 C 150 700, 250 650, 400 500 S 200 350, 350 200" 
            fill="none" 
            stroke="#39ff14" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
        </svg>

        {/* Current User Dot */}
        <div className="absolute top-[20%] left-[87.5%] z-20">
          <div className="gps-pulse size-5 rounded-full bg-primary border-2 border-white shadow-lg"></div>
        </div>

        {/* Map UI Elements: Controls */}
        <div className="absolute right-4 top-1/3 flex flex-col gap-3 z-30">
          <div className="flex flex-col glassmorphism rounded-2xl overflow-hidden shadow-xl border border-white/5">
            <button className="p-3.5 hover:bg-white/10 active:bg-white/20 transition-colors border-b border-white/5">
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
            <button className="p-3.5 hover:bg-white/10 active:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">remove</span>
            </button>
          </div>
          <button className="p-3.5 glassmorphism rounded-2xl shadow-xl active:scale-90 transition-transform border border-white/5">
            <span className="material-symbols-outlined text-primary text-[22px] fill-current">near_me</span>
          </button>
          <button className="p-3.5 glassmorphism rounded-2xl shadow-xl active:scale-90 transition-transform border border-white/5">
            <span className="material-symbols-outlined text-[22px]">layers</span>
          </button>
        </div>

        {/* Dynamic Landmarks */}
        {landmarks.map(mark => (
          <div 
            key={mark.id} 
            className="absolute z-10" 
            style={{ top: mark.top, left: mark.left }}
          >
            <div className="flex flex-col items-center gap-1.5 animate-bounce-slow">
              <div className={`glassmorphism p-2 rounded-full border shadow-lg ${mark.type === 'water' ? 'border-blue-400/50' : 'border-red-500/50'}`}>
                <span className={`material-symbols-outlined text-[18px] ${mark.type === 'water' ? 'text-blue-400' : 'text-red-500'}`}>
                  {mark.type === 'water' ? 'water_drop' : 'health_and_safety'}
                </span>
              </div>
              <span className="text-[10px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/5 shadow-md">
                {mark.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapOverlay;
