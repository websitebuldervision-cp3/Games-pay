import React, { useState } from 'react';
import { Gamepad2, Play } from 'lucide-react';
import { Game } from '../types/game';
import { formatTZS } from '../utils/date';

interface GameCardProps {
  game: Game;
  exchangeRate: number;
  onSelectGame: (game: Game) => void;
  index: number;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  exchangeRate,
  onSelectGame,
  index = 0,
}) => {
  const [imageError, setImageError] = useState(false);
  const rewardTZS = game.rewardUSD * exchangeRate;

  return (
    <div className="rounded-2xl bg-gradient-to-b from-[#090f22] to-[#040814] border border-cyan-500/25 hover:border-[#00f0ff]/70 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.25)] p-2.5 sm:p-3 flex flex-col justify-between transition-all duration-300 group">
      
      {/* 1. Rectangular / Square Game Cover (Profile ya Mraba, NOT Circular, No flags, No top earner) */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#060b18] border border-cyan-500/20 group-hover:border-[#00f0ff]/50 transition-colors">
        {!imageError ? (
          <img
            src={game.image}
            alt={game.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <img
            src={`/games/${game.id}.jpg`}
            alt={game.name}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // Final fallback to clean styled placeholder
              e.currentTarget.style.display = 'none';
            }}
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Category Badge (Clean Tag at Bottom Left) */}
        <div className="absolute bottom-1.5 left-2">
          <span className="text-[9px] sm:text-[10px] font-bold text-[#00f0ff] uppercase tracking-wider bg-[#030712]/80 px-2 py-0.5 rounded-md backdrop-blur-sm border border-cyan-500/30">
            {game.category}
          </span>
        </div>
      </div>

      {/* 2. Game Information Body */}
      <div className="mt-2 flex-1 flex flex-col justify-between">
        
        {/* Game Title */}
        <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-[#00f0ff] transition-colors truncate">
          {game.name}
        </h3>

        {/* Payout Display (USD & TZS) */}
        <div className="my-1.5 py-1 px-1.5 rounded-lg bg-[#070e20] border border-cyan-500/15">
          <div className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">
            REWARD PER GAME:
          </div>
          <div className="text-xs sm:text-sm font-black text-[#00f0ff] font-mono tracking-tight flex items-baseline justify-between">
            <span>${game.rewardUSD}</span>
            <span className="text-[11px] sm:text-xs text-purple-300 font-bold">
              {formatTZS(rewardTZS)} TSH
            </span>
          </div>
        </div>

        {/* 3. Button: Exact text requested: PLAY GAME */}
        <button
          onClick={() => onSelectGame(game)}
          className="w-full py-2 sm:py-2.5 px-3 rounded-xl font-black text-xs text-white bg-gradient-to-r from-[#ff007a] via-[#e6006c] to-[#7928ca] hover:from-[#ff1a8c] hover:to-[#9333ea] shadow-[0_0_15px_rgba(255,0,122,0.4)] hover:shadow-[0_0_20px_rgba(255,0,122,0.6)] transition-all transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>PLAY GAME</span>
        </button>

      </div>
    </div>
  );
};
