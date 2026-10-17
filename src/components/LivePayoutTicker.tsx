import React, { useState, useEffect } from 'react';
import { VERIFIED_TRANSACTIONS } from '../data/transactions';
import { formatTZS } from '../utils/date';

export const LivePayoutTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VERIFIED_TRANSACTIONS.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const tx = VERIFIED_TRANSACTIONS[currentIndex] || VERIFIED_TRANSACTIONS[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#030712]/95 border-t border-cyan-500/25 backdrop-blur-md px-3 py-2 text-xs text-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
        
        <div className="flex items-center gap-2 truncate">
          {/* Neon Badge */}
          <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LIVE PAYOUT</span>
          </span>

          {/* Customer payout message in English */}
          <div className="truncate text-xs text-slate-300">
            <strong className="text-white font-bold">{tx.name}</strong> ametoa{' '}
            <strong className="text-[#00f0ff] font-extrabold font-mono tracking-tight drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
              TZS {formatTZS(tx.amountTZS)}
            </strong>{' '}
            playing <span className="text-purple-300 font-semibold">{tx.gameName}</span> ({tx.network})
          </div>
        </div>

        <div className="hidden sm:block text-[10px] text-slate-500 font-mono shrink-0">
          Just now
        </div>

      </div>
    </div>
  );
};
