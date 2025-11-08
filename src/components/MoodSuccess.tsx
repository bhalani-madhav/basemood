"use client";

import { MOODS, MoodType } from "~/lib/constants";

interface MoodSuccessProps {
  mood: MoodType;
  txHash?: string;
  onReset: () => void;
}

export default function MoodSuccess({ mood, txHash, onReset }: MoodSuccessProps) {
  const moodData = MOODS[mood];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="max-w-md w-full space-y-8">
        {/* Success Animation */}
        <div className="relative">
          <div 
            className="text-9xl animate-bounce"
            style={{ 
              filter: `drop-shadow(0 0 30px ${moodData.color})`,
            }}
          >
            {moodData.emoji}
          </div>
          <div 
            className="absolute inset-0 blur-3xl opacity-50 animate-pulse"
            style={{ backgroundColor: moodData.color }}
          />
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-glow" style={{ color: moodData.color }}>
            Mood Logged!
          </h2>
          <p className="text-xl text-gray-300">
            Your <span className="font-semibold" style={{ color: moodData.color }}>
              {moodData.label}
            </span> mood has been minted onchain
          </p>
        </div>

        {/* Transaction Hash */}
        {txHash && (
          <div className="p-4 rounded-lg bg-card border border-border">
            <p className="text-sm text-muted-foreground mb-2">Transaction Hash</p>
            <a
              href={`https://basescan.org/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-accent hover:underline break-all"
            >
              {txHash}
            </a>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onReset}
          className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:opacity-80 transition-all glow-cyan text-lg"
        >
          Log Another Mood
        </button>

        {/* Phase 1 Footer */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Phase 1 Complete ✅ — Streaks Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}
