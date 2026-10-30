import React, { useState } from 'react';
import { X, Gamepad2 } from 'lucide-react';
import { Game } from '../types/game';
import { formatTZS, formatUSD } from '../utils/date';
import { REGISTRATION_URL, REGISTRATION_FEE_TZS } from '../data/games';

interface GameDetailModalProps {
  game: Game | null;
  exchangeRate: number;
  onClose: () => void;
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  game,
  exchangeRate,
  onClose
}) => {
  const [imageError, setImageError] = useState(false);

  if (!game) return null;

  const rewardTZS = game.rewardUSD * exchangeRate;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Dialog with Surrounded Glow */}
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-b from-[#080e22] to-[#040714] border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.25)] text-slate-100 p-4 sm:p-5 text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Funga"
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-[#050a16]/90 text-slate-400 hover:text-white border border-slate-700 cursor-pointer shadow-md"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Game Cover (Square / Rectangular Poster) */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#060b18] mb-3 border border-cyan-500/30">
          {!imageError ? (
            <img
              src={game.image}
              alt={`${game.name} — Cheza na Kulipwa | GAMES PAY`}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <img
              src={`/games/${game.id}.jpg`}
              alt={game.name}
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
              className="w-full h-full object-cover object-center"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-2 left-2.5">
            <span className="text-[10px] font-bold text-[#00f0ff] bg-[#030712]/90 px-2 py-0.5 rounded-md border border-cyan-500/30 uppercase tracking-wider">
              {game.category}
            </span>
          </div>
        </div>

        {/* Game Title */}
        <h2 className="text-xl font-black text-white mb-2.5">
          {game.name}
        </h2>

        {/* Short & Direct Notice Box */}
        <div className="p-3.5 rounded-xl bg-[#091124] border border-cyan-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed mb-3.5 text-center">
          <p>
            Ili kucheza game la <strong className="text-white">{game.name}</strong> na kulipwa{' '}
            <strong className="text-[#00f0ff] font-bold">{formatUSD(game.rewardUSD)} ({formatTZS(rewardTZS)} TSH)</strong>, tengeneza profile yako kwa ajili ya gaming.
          </p>
          
          <div className="mt-2 pt-2 border-t border-slate-800 text-xs font-bold text-amber-300">
            Kutengeneza profile ni {formatTZS(REGISTRATION_FEE_TZS)} pekee
          </div>
        </div>

        {/* Requested Prominent Button */}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-[#ff007a] via-[#e6006c] to-[#7928ca] hover:from-[#ff1a8c] hover:to-[#9333ea] shadow-[0_0_25px_rgba(255,0,122,0.5)] transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span>↗ GUSA HAPA TENGENEZA PROFILE YAKO YA GAMING</span>
        </a>

      </div>

    </div>
  );
};
