
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const getAIAdvice = async (trailName: string, elevation: number): Promise<string> => {
  if (!apiKey) return "Keep moving! Steep climb ahead.";
  
  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert hiking guide for the trail "${trailName}". 
                 The current elevation is ${elevation}m. 
                 Provide a very short, punchy trail alert (max 5 words) for a live tracking UI. 
                 Examples: "Steep climb in 200m", "Water source ahead", "Watch for loose rocks".`,
    });
    return response.text.trim() || "Stay on marked trail";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Optimal pace maintained";
  }
};
