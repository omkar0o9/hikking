
import React, { useState, useEffect, useCallback } from 'react';
import TopBar from './components/TopBar';
import MapOverlay from './components/MapOverlay';
import StatsPanel from './components/StatsPanel';
import { TrekStats, Landmark } from './types';
import { getAIAdvice } from './services/geminiService';

const LANDMARKS: Landmark[] = [
  { id: '1', name: 'Creek', type: 'water', top: '55%', left: '25%' },
  { id: '2', name: 'Ranger St.', type: 'safety', top: '25%', left: '68%' },
];

const App: React.FC = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [aiMessage, setAiMessage] = useState('Initializing guide...');
  const [stats, setStats] = useState<TrekStats>({
    elevation: 2450,
    elevationGain: 120,
    pace: '12:45',
    totalTime: '03:24'
  });

  // Mock data simulation for live feeling
  useEffect(() => {
    if (!isTracking) return;

    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        elevation: prev.elevation + Math.floor(Math.random() * 2),
        elevationGain: prev.elevationGain + 1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isTracking]);

  const updateAIAdvice = useCallback(async () => {
    const advice = await getAIAdvice('Alpine Ridge Loop', stats.elevation);
    setAiMessage(advice);
  }, [stats.elevation]);

  // Update AI advice on mount and occasionally
  useEffect(() => {
    updateAIAdvice();
    const interval = setInterval(updateAIAdvice, 30000); // Every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark select-none">
      {/* Dynamic Background Map */}
      <MapOverlay landmarks={LANDMARKS} />

      {/* Header UI */}
      <TopBar trailName="Alpine Ridge Loop" isTracking={isTracking} />

      {/* AI Advice Overlay */}
      <div className="absolute top-36 left-4 z-40">
        <button 
          onClick={updateAIAdvice}
          className="glassmorphism flex items-center gap-2.5 py-2.5 px-5 rounded-full border-primary/40 border animate-in slide-in-from-left duration-700 active:scale-95 transition-all shadow-xl"
        >
          <span className="material-symbols-outlined text-primary text-[20px] fill-current">psychology</span>
          <span className="text-[11px] font-bold tracking-tight text-white/90 truncate max-w-[180px]">
            {aiMessage}
          </span>
        </button>
      </div>

      {/* Bottom Control & Stats Panel */}
      <StatsPanel 
        stats={stats} 
        isTracking={isTracking} 
        onToggle={() => setIsTracking(!isTracking)} 
      />

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/20 rounded-full z-50"></div>
    </div>
  );
};

export default App;
