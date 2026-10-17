import React from 'react';
import { X, Wallet, AlertCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { REGISTRATION_URL, REGISTRATION_FEE_TZS } from '../data/games';
import { formatTZS } from '../utils/date';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#080e22] to-[#040714] border border-cyan-500/40 p-5 text-slate-100 shadow-[0_0_35px_rgba(0,240,255,0.25)] text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Funga"
          className="absolute top-3 right-3 p-1.5 rounded-full bg-[#050a16] text-slate-400 hover:text-white border border-slate-700 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Wallet Icon */}
        <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center mx-auto mb-3 text-[#00f0ff] shadow-lg shadow-purple-900/30">
          <Wallet className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-black text-white mb-1">
          Kutoa Pesa (Withdraw)
        </h3>
        
        <div className="inline-block px-3 py-1 rounded-full bg-[#080f21] border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold mb-3">
          Salio Lako: TZS 0
        </div>

        {/* Warning / Instruction in clear Swahili using 'reward' */}
        <div className="p-3 rounded-xl bg-[#091124] border border-amber-500/40 text-xs text-slate-200 mb-4 text-left space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Profile ya Gaming Inahitajika!</span>
          </div>
          <p className="leading-relaxed">
            Ili uweze kutoa pesa au kupokea <strong>reward</strong> zako moja kwa moja kupitia M-Pesa, Tigo Pesa, HaloPesa, Azam Pesa au Airtel Money, unahitaji kutengeneza profile yako ya gaming kwanza.
          </p>
          <div className="text-[11px] text-amber-300 font-semibold pt-1 border-t border-slate-800">
            Ada ya Usajili wa Profile: TSh {formatTZS(REGISTRATION_FEE_TZS)}
          </div>
        </div>

        {/* Main CTA */}
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs text-white bg-gradient-to-r from-[#ff007a] via-[#e6006c] to-[#7928ca] hover:from-[#ff1a8c] hover:to-[#9333ea] shadow-[0_0_20px_rgba(255,0,122,0.5)] transition-all transform active:scale-95 cursor-pointer uppercase tracking-wider"
        >
          <span>↗ GUSA HAPA TENGENEZA PROFILE YA GAMING</span>
        </a>

        <div className="text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Mfumo rasmi uliolindwa na uthibitisho wa SMS</span>
        </div>

      </div>
    </div>
  );
};
