import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { REGISTRATION_URL, WHATSAPP_URL, WHATSAPP_CHANNEL_URL } from '../data/games';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02050e] text-slate-400 border-t border-cyan-500/20 py-8 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
        
        {/* Brand Name & Tagline */}
        <div className="flex items-center justify-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#00f0ff]" />
          <span className="text-lg font-black tracking-tight text-white">
            GAMES <span className="text-[#00f0ff]">PAY</span>
          </span>
          <span className="text-slate-600">·</span>
          <span className="text-xs font-black tracking-widest text-amber-400 uppercase">
            PLAY • ENJOY • EARN
          </span>
        </div>

        {/* Required Footer Branding */}
        <div className="text-base sm:text-lg font-black text-slate-100">
          Powered by <span className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">Cp3 👑</span>
        </div>

        {/* Links including WhatsApp Channel */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-400">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00f0ff] transition-colors"
          >
            Activate Profile (TSh 15,000)
          </a>
          <span>·</span>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            Customer Care WhatsApp
          </a>
          <span>·</span>
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            WhatsApp Channel
          </a>
        </div>

        <div className="text-[11px] text-slate-600 font-mono">
          © {new Date().getFullYear()} GAMES PAY. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
