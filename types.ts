
export interface TrekStats {
  elevation: number;
  elevationGain: number;
  pace: string;
  totalTime: string;
}

export interface Landmark {
  id: string;
  name: string;
  type: 'water' | 'safety' | 'summit';
  top: string;
  left: string;
}

export interface AIAdvice {
  message: string;
  type: 'alert' | 'info' | 'weather';
}
