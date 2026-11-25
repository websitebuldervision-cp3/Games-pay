import React from 'react';
import { Wallet } from 'lucide-react';

interface HeaderProps {
  onOpenWithdraw: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWithdraw }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#050814]/95 backdrop-blur-md border-b border-slate-800/80 px-3.5 sm:px-6 py-2.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Wordmark */}
        <a
          href="/"
          className="flex items-center gap-1 font-black text-xl sm:text-2xl tracking-tight whitespace-nowrap shrink-0"
        >
          <span className="text-white">TENO</span>
          <span className="text-[#00f0ff]">PLAY</span>
        </a>

        {/* Primary Action: Toa Pesa */}
        <button
          onClick={onOpenWithdraw}
          title="Gusa hapa kutoa pesa"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#e11d48] hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-md shadow-rose-950/40 transition-all cursor-pointer active:scale-95 whitespace-nowrap shrink-0 min-h-[40px]"
        >
          <Wallet className="w-4 h-4" />
          <span>Toa Pesa</span>
        </button>

      </div>
    </header>
  );
};
