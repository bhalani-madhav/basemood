import { MoodType } from "./constants";

export interface MoodEntry {
  mood: MoodType;
  timestamp: number;
  txHash?: string;
}

const STORAGE_KEY = "basemood_entries";

export const saveMood = (mood: MoodType, txHash?: string): void => {
  if (typeof window === "undefined") return;
  
  const entry: MoodEntry = {
    mood,
    timestamp: Date.now(),
    txHash,
  };
  
  const existing = getMoods();
  existing.push(entry);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
};

export const getMoods = (): MoodEntry[] => {
  if (typeof window === "undefined") return [];
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

export const getTodaysMood = (): MoodEntry | null => {
  const moods = getMoods();
  const today = new Date().setHours(0, 0, 0, 0);
  
  return moods.find(entry => {
    const entryDate = new Date(entry.timestamp).setHours(0, 0, 0, 0);
    return entryDate === today;
  }) || null;
};
