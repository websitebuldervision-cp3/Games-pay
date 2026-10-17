import React from 'react';
import { Wallet, Globe, SlidersHorizontal, Gamepad2, ArrowDownLeft } from 'lucide-react';

interface HeaderProps {
  onOpenAdmin: () => void;
  onOpenWithdraw: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAdmin, onOpenWithdraw }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/95 backdrop-blur-md border-b border-cyan-500/20 px-3 sm:px-6 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#00f0ff] via-purple-600 to-[#ff007a] p-[1.5px] shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <div className="w-full h-full bg-[#050917] rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-[#00f0ff]" />
            </div>
          </div>

          <div className="flex items-center font-black text-xl sm:text-2xl tracking-tighter">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">GAMES</span>
            <span className="text-[#00f0ff] ml-1.5 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">PAY</span>
          </div>
        </div>

        {/* Right Controls: Clickable Wallet / Balance triggering withdraw requirement */}
        <div className="flex items-center gap-2">
          {/* Clickable Wallet Balance */}
          <button
            onClick={onOpenWithdraw}
            title="Gusa hapa kutoa pesa"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#080f21] border border-emerald-500/50 text-emerald-400 text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:border-emerald-400 hover:bg-[#0c1834] transition-all cursor-pointer active:scale-95"
          >
            <Wallet className="w-3.5 h-3.5 text-emerald-400" />
            <div className="flex items-center gap-1 text-[11px] sm:text-xs">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Balance:</span>
              <span className="font-mono text-emerald-300 font-extrabold">TZS 0</span>
              <span className="text-[9px] bg-emerald-950/80 text-emerald-300 px-1 py-0.2 rounded border border-emerald-500/30 ml-0.5">
                Toa
              </span>
            </div>
          </button>

          {/* Language Selector */}
          <div className="hidden xs:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#080f21] border border-slate-700/80 text-[11px] font-semibold text-slate-300">
            <Globe className="w-3 h-3 text-[#00f0ff]" />
            <span>EN</span>
          </div>

          {/* Admin Settings Button */}
          <button
            onClick={onOpenAdmin}
            aria-label="Settings"
            className="p-1.5 sm:p-2 rounded-lg bg-[#080f21] border border-cyan-500/30 text-slate-300 hover:text-[#00f0ff] hover:border-[#00f0ff]/60 transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.1)]"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
