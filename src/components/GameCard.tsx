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
}) => {
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  const rewardTZS = game.rewardUSD * exchangeRate;

  return (
    <div className="rounded-2xl bg-[#0d1428] border border-slate-800/90 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-200 group shadow-lg shadow-black/30">
      
      {/* Edge-to-edge Cover Image */}
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#080d1d]">
        {!imageError ? (
          <img
            src={game.image}
            alt={`${game.name} — Cheza na Kulipwa ${game.category} Game Tanzania | TENO PLAY`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : !fallbackError ? (
          <img
            src={game.image.replace('/images/', '/games/')}
            alt={game.name}
            loading="lazy"
            decoding="async"
            onError={() => setFallbackError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col items-center justify-center p-3 text-center">
            <Gamepad2 className="w-8 h-8 text-[#00f0ff] mb-1" />
            <span className="text-xs font-bold text-slate-300 truncate max-w-full">{game.name}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[10px] sm:text-[11px] font-medium text-slate-400">
            {game.category}
          </div>

          <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#00f0ff] transition-colors truncate mt-0.5">
            {game.name}
          </h3>

          <div className="mt-1.5 mb-2.5">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              REWARD PER GAME:
            </div>
            <div className="text-[11px] sm:text-sm font-extrabold text-[#00f0ff] font-mono tabular-nums tracking-tight mt-0.5">
              ${game.rewardUSD} <span className="text-slate-500">/</span> {formatTZS(rewardTZS)} TSH
            </div>
          </div>
        </div>

        <button
          onClick={() => onSelectGame(game)}
          className="w-full py-2 px-3 rounded-xl font-extrabold text-xs text-white bg-gradient-to-r from-[#ff1b6b] to-[#a826f7] hover:brightness-110 shadow-md shadow-fuchsia-950/40 transition-all transform active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-wider min-h-[40px]"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>PLAY GAME</span>
        </button>
      </div>

    </div>
  );
};
