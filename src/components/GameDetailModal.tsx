import React, { useState } from 'react';
import { X, ExternalLink, Gamepad2, ShieldCheck } from 'lucide-react';
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
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-[#080e22] to-[#040714] border border-cyan-500/40 shadow-[0_0_35px_rgba(0,240,255,0.25)] text-slate-100 p-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Funga"
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-[#050a16]/90 text-slate-400 hover:text-white border border-slate-700 cursor-pointer shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Game Cover (Square / Rectangular Poster) */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#060b18] mb-3.5 border border-cyan-500/30">
          {!imageError ? (
            <img
              src={game.image}
              alt={game.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-cyan-950 to-slate-950 flex items-center justify-center">
              <Gamepad2 className="w-12 h-12 text-[#00f0ff]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent" />
          
          <div className="absolute bottom-2 left-2.5">
            <span className="text-[10px] font-bold text-[#00f0ff] bg-[#030712]/90 px-2.5 py-1 rounded-md border border-cyan-500/30 uppercase tracking-wider">
              {game.category}
            </span>
          </div>
        </div>

        {/* Title and Reward Value (Using 'reward' instead of 'zawadi') */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {game.name}
            </h2>
            <div className="text-[11px] text-cyan-400 mt-0.5 font-medium">
              Gemu Rasmi la GAMES PAY
            </div>
          </div>

          <div className="text-right p-2.5 rounded-xl bg-[#091228] border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <div className="text-[9px] uppercase font-bold text-slate-400">Reward ya Ushindi</div>
            <div className="text-lg font-black text-[#00f0ff] font-mono">
              {formatUSD(game.rewardUSD)}
            </div>
            <div className="text-xs font-bold text-purple-300 font-mono">
              TSh {formatTZS(rewardTZS)}
            </div>
          </div>
        </div>


        {/* Profile Activation Callout with Exact Fee and Clear Swahili */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-[#0c1630] to-[#060b18] border border-pink-500/40 mb-3 text-center shadow-[0_0_20px_rgba(255,0,122,0.15)]">
          <div className="text-xs font-bold text-amber-300 mb-1">
            Ada ya Kutengeneza Profile ya Gaming: TSh {formatTZS(REGISTRATION_FEE_TZS)}
          </div>
          <p className="text-xs text-slate-200 mb-3.5 leading-relaxed">
            Ili uanze kucheza na kupokea <strong>reward</strong> zako za fedha moja kwa moja kwenye namba yako ya simu (M-Pesa, Tigo Pesa, HaloPesa, Azam Pesa au Airtel Money), gusa kitufe hapa chini ufungue profile yako:
          </p>

          {/* Requested Prominent Button (NO 'PLAY GAME NOW' BUTTON!) */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm text-white bg-gradient-to-r from-[#ff007a] via-[#e6006c] to-[#7928ca] hover:from-[#ff1a8c] hover:to-[#9333ea] shadow-[0_0_25px_rgba(255,0,122,0.5)] transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider"
          >
            <span>↗ GUSA HAPA TENGENEZA PROFILE YA GAMING</span>
          </a>
        </div>

        {/* Security & Instant Payout Notice */}
        <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Reward zote hulipwa moja kwa moja kwenye simu yako punde unaposhinda.</span>
        </div>

      </div>

    </div>
  );
};
