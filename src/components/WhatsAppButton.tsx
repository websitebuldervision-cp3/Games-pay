import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Users, X, ExternalLink, MessageSquareText } from 'lucide-react';
import {
  CUSTOMER_CARE_PHONE,
  CUSTOMER_CARE_SMS_URL,
  WHATSAPP_CHANNEL_URL,
} from '../data/games';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <aside
      ref={containerRef}
      aria-label="Huduma kwa Wateja SMS"
      className="fixed bottom-12 right-3 sm:bottom-14 sm:right-5 z-50 flex flex-col items-end gap-2.5"
    >
      {/* 2-Option Popup Menu when Customer Care button is clicked */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Chagua huduma"
          className="w-[calc(100vw-24px)] max-w-[300px] rounded-2xl bg-[#0b1224] border border-emerald-500/40 shadow-2xl shadow-black/70 p-3 text-left animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider">
              Gusa hapa kuchagua
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Funga"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* Option 1: Join GAME PAY Channel */}
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#101a34] hover:bg-[#162447] border border-cyan-500/30 hover:border-cyan-400/60 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-[#00f0ff] mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white group-hover:text-[#00f0ff] leading-snug">
                  1: Kujiunga na chanel ya GAME PAY
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                  <span>Gusa hapa kujiunga</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>

            {/* Option 2: Customer Care via Normal SMS */}
            <a
              href={CUSTOMER_CARE_SMS_URL}
              onClick={() => setIsOpen(false)}
              className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#101a34] hover:bg-[#132924] border border-emerald-500/30 hover:border-emerald-400/60 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                <Headphones className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white group-hover:text-emerald-300 leading-snug">
                  2: Customer Care kwa msaada na maswali
                </div>
                <div className="text-[11px] text-emerald-400/90 font-mono mt-0.5 flex items-center gap-1">
                  <span>Tuma SMS: {CUSTOMER_CARE_PHONE}</span>
                  <MessageSquareText className="w-3 h-3" />
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button + CUSTOMER CARE Label */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#0b1220]/95 border border-emerald-500/40 text-emerald-400 font-extrabold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider hidden xs:block cursor-pointer hover:border-emerald-400 transition-colors"
        >
          CUSTOMER CARE
        </button>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Msaada wa Huduma kwa Wateja SMS"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/80 transition-all transform hover:scale-105 active:scale-95 border-2 border-white/30 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageSquareText className="w-7 h-7 text-white" />
          )}
        </button>
      </div>
    </aside>
  );
};
